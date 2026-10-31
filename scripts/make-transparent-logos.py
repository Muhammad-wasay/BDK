"""
Make Transparent Logos for BinaDarKe
Converts all brand logos in public/logos/ into clean, transparent RGBA PNGs.
- Preserves internal white shapes (letters, phone icons, crescent)
- Removes only edge-connected backgrounds (white / light-grey)
- Feathers edges and removes halos on cream, white, and dark navy backgrounds
- Crops transparent bounds with 8px padding
- Preserves colored badges (HBL green square)
- Exports max 512px true RGBA PNGs
"""

import os
from collections import deque
from PIL import Image, ImageFilter
import numpy as np

PUBLIC_LOGOS = "public/logos"
OUTPUT_DIR = "public/logos"
MAX_SIZE = 512
PADDING = 8


def is_light_background_pixel(pixel, threshold=195, tolerance=24):
    """Checks if a pixel is neutral light-grey or white."""
    r, g, b = int(pixel[0]), int(pixel[1]), int(pixel[2])
    if r >= threshold and g >= threshold and b >= threshold:
        # Check that it's neutral (not strongly saturated)
        return (
            abs(r - g) <= tolerance
            and abs(g - b) <= tolerance
            and abs(r - b) <= tolerance
        )
    return False


def flood_fill_edge_background(arr_rgb, is_bg_fn):
    """
    Flood fills from the 4 image borders to find all connected background pixels.
    Leaves any disconnected interior light pixels (e.g. white icons/letters) untouched.
    """
    h, w, _ = arr_rgb.shape
    visited = np.zeros((h, w), dtype=bool)
    bg_mask = np.zeros((h, w), dtype=bool)
    queue = deque()

    # Seed top and bottom borders
    for x in range(w):
        for y in [0, h - 1]:
            if is_bg_fn(arr_rgb[y, x]):
                queue.append((y, x))
                visited[y, x] = True

    # Seed left and right borders
    for y in range(h):
        for x in [0, w - 1]:
            if not visited[y, x] and is_bg_fn(arr_rgb[y, x]):
                queue.append((y, x))
                visited[y, x] = True

    # 4-connected flood fill
    while queue:
        cy, cx = queue.popleft()
        bg_mask[cy, cx] = True
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                visited[ny, nx] = True
                if is_bg_fn(arr_rgb[ny, nx]):
                    queue.append((ny, nx))

    return bg_mask


def process_transparent_logo(image_path, is_badge=False):
    """Processes a single logo into a clean transparent PNG."""
    filename = os.path.basename(image_path)
    print(f"Processing {filename}...")

    with Image.open(image_path) as raw_img:
        real_format = raw_img.format
        img = raw_img.convert("RGBA")

    print(f"  Real format: {real_format}, size: {img.size}, mode: {img.mode}")

    # Colored badges with no plain background (e.g. HBL green square) are kept intact
    if is_badge:
        print(f"  {filename} is a colored badge - keeping contents intact.")
        # Resize if larger than MAX_SIZE
        if max(img.size) > MAX_SIZE:
            img.thumbnail((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)
        out_path = os.path.join(OUTPUT_DIR, filename)
        img.save(out_path, format="PNG")
        print(f"  Saved badge to {out_path} ({img.size})")
        return

    # Extract RGB array
    arr_rgba = np.array(img, dtype=np.float32)
    arr_rgb = arr_rgba[..., :3].astype(np.uint8)
    h, w, _ = arr_rgb.shape

    # Find border connected background
    # SBP has white corners with green circle touching edges
    # EasyPaisa has light grey (#EDEDED) corners and top black loop touching edge
    # WhatsApp and JazzCash have light grey borders
    # Meezan has pure white borders
    threshold = 190
    tolerance = 25
    if "easypaisa" in filename:
        threshold = 205
        tolerance = 25
    elif "sbp" in filename:
        threshold = 220
        tolerance = 20
    elif "meezan" in filename:
        threshold = 230
        tolerance = 20

    is_bg_fn = lambda p: is_light_background_pixel(p, threshold=threshold, tolerance=tolerance)
    bg_mask = flood_fill_edge_background(arr_rgb, is_bg_fn)

    # Initial binary alpha mask (255 for foreground, 0 for background)
    alpha = np.where(bg_mask, 0, 255).astype(np.uint8)

    # Convert alpha mask to PIL Image for gentle edge anti-aliasing / feathering
    alpha_img = Image.fromarray(alpha, mode="L")
    # Apply subtle 1px blur to smooth pixelated edges
    smoothed_alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(radius=0.75))
    alpha_smooth = np.array(smoothed_alpha_img, dtype=np.float32) / 255.0

    # Ensure background pixels that are definitely far from edges remain 0
    alpha_smooth[alpha == 0] = np.minimum(alpha_smooth[alpha == 0], 0.25)
    # Clip very low alpha to zero to prevent hazy background haze
    alpha_smooth[alpha_smooth < 0.10] = 0.0
    alpha_final = (alpha_smooth * 255.0).astype(np.uint8)

    # Apply un-premultiply / halo reduction on semi-transparent edge pixels:
    # If the edge pixel had white/grey mixed into it, recover foreground color
    rgb_float = arr_rgba[..., :3]
    edge_pixels = (alpha_final > 0) & (alpha_final < 245)
    if np.any(edge_pixels):
        a_norm = alpha_final[edge_pixels, None] / 255.0
        # Estimate bg color as white/light grey (245, 245, 245)
        bg_est = np.array([245.0, 245.0, 245.0])
        # De-blend: (C - (1-a)*Bg) / a
        recovered_rgb = (rgb_float[edge_pixels] - (1.0 - a_norm) * bg_est) / np.maximum(a_norm, 0.2)
        rgb_float[edge_pixels] = np.clip(recovered_rgb, 0.0, 255.0)

    # Construct final RGBA image
    result_arr = np.dstack([rgb_float.astype(np.uint8), alpha_final])
    result_img = Image.fromarray(result_arr, mode="RGBA")

    # Trim empty transparent borders
    bbox = result_img.getbbox()
    if bbox:
        # Add small padding
        bx0 = max(0, bbox[0] - PADDING)
        by0 = max(0, bbox[1] - PADDING)
        bx1 = min(w, bbox[2] + PADDING)
        by1 = min(h, bbox[3] + PADDING)
        cropped_img = result_img.crop((bx0, by0, bx1, by1))
    else:
        cropped_img = result_img

    # Scale down if longest side > MAX_SIZE
    if max(cropped_img.size) > MAX_SIZE:
        cropped_img.thumbnail((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)

    # Save as true RGBA PNG
    out_path = os.path.join(OUTPUT_DIR, filename)
    cropped_img.save(out_path, format="PNG")
    print(f"  Successfully saved transparent logo to {out_path} ({cropped_img.size})")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    logos = {
        "easypaisa.png": False,
        "jazzcash.png": False,
        "meezan.png": False,
        "sbp.png": False,
        "whatsapp.png": False,
        "hbl.png": True,  # Colored badge
    }

    for logo_name, is_badge in logos.items():
        src_path = os.path.join(PUBLIC_LOGOS, logo_name)
        if os.path.exists(src_path):
            process_transparent_logo(src_path, is_badge=is_badge)
        else:
            print(f"Warning: {src_path} not found!")


if __name__ == "__main__":
    main()
