---
name: Fearless Play Neobrutalism
colors:
  surface: '#faf8ff'
  surface-dim: '#d0d9fe'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#ebedff'
  surface-container-high: '#e3e7ff'
  surface-container-highest: '#dbe1ff'
  on-surface: '#111a36'
  on-surface-variant: '#404943'
  inverse-surface: '#262f4c'
  inverse-on-surface: '#eff0ff'
  outline: '#707972'
  outline-variant: '#c0c9c1'
  surface-tint: '#33694e'
  primary: '#33694e'
  on-primary: '#ffffff'
  primary-container: '#b8f2d0'
  on-primary-container: '#3b7055'
  inverse-primary: '#9ad3b2'
  secondary: '#635784'
  on-secondary: '#ffffff'
  secondary-container: '#d9cafe'
  on-secondary-container: '#5f537f'
  tertiary: '#785741'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffdfcb'
  on-tertiary-container: '#805f48'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b6efce'
  primary-fixed-dim: '#9ad3b2'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#185037'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebff2'
  on-secondary-fixed: '#1f143d'
  on-secondary-fixed-variant: '#4b406b'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#e8bea2'
  on-tertiary-fixed: '#2c1605'
  on-tertiary-fixed-variant: '#5e402b'
  background: '#faf8ff'
  on-background: '#111a36'
  surface-variant: '#dbe1ff'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  body-xl:
    fontFamily: Nunito Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.03em
  caption:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style
This design system pairs the punchy, high-contrast tactility of neobrutalism with radical accessibility, warmth, and reassurance. Built to dissolve anxiety and empower users—including senior and non-tech-native audiences—the interface replaces intimidating digital ambiguity with tangible physical metaphors: tape strips, tilted sticker badges, crisp paper-cut elevation, and generous tap targets.

The visual style blends deliberate neobrutalist structure (chunky 3px borders, hard drop-shadows, zero blur) with a friendly pastel palette and warm cream canvas. Every interactive element feels like a real, stampable, tactile object. It projects safety, absolute clarity, and uninhibited confidence.

## Colors
The palette balances reassuring, cheerful pastel fills against an assertive, high-contrast stroke infrastructure.

- **Canvas & Background:** Cream (`#FFF4E0`) serves as the base surface, overlaid with a subtle Dark Navy dot pattern (`#1B2440` at 12% opacity, 24px spacing).
- **Ink & Structure:** Dark Navy (`#1B2440`) is the universal anchor. It governs all outlines (3px solid), text content, hard shadows, and geometric boundaries. Pure black is never used.
- **Accents & Surfaces:** 
  - Mint (`#B8F2D0`): Primary positive interactive surface, cards, primary action state.
  - Lavender (`#D4C5F9`): Secondary features, auxiliary cards, informational callouts.
  - Peach (`#FFD3B6`): Tertiary highlights, warm reminders, tactile badge fills.
  - Butter Yellow (`#FFF1A8`): Notice blocks, warning ribbons, highlighter notes, tape fills.
- **System States:**
  - Alert Coral (`#FF6B6B`): Exclusively reserved for threat indicators, scam warnings, destructive actions, and hard errors.
  - Safe Green (`#22C55E`): Verified states, shields, success banners, and safety guarantees.

## Typography
To ensure utmost legibility for elder demographics while preserving an energetic edge, font sizes do not drop below 16px. Body copy prioritizes generous apertures and heavy weights from `Nunito Sans` (minimum 18px on running text) to guarantee crisp contrast and effortless scanning.

Headlines employ `Space Grotesk` with tight tracking and confident, punchy line breaks. Accent callouts and handwritten keywords utilize handwritten scripts for sticker annotations, margin notes, and reassurance stamps—rotated between -3° and +3° for hand-placed charm.

## Layout & Spacing
The layout follows a fluid 12-column structure on desktop (max width 1240px) collapsing to 6 columns on tablet and 4 columns on mobile devices. Because hard offset shadows require physical clearance, layouts use generous internal margins and gutter clearances to prevent overlapping stroke collisions.

Outer frames and containers incorporate spacious padding to support large touch areas (minimum 56px touch target height for primary interactive components). Vertical rhythms strictly honor a 8px baseline scale.

## Elevation & Depth
Elevation is achieved mechanically via hard translation and solid fill offsets rather than soft diffuse shadows:

- **Baseline Components:** Solid 3px border (`#1B2440`) with a rigid `6px 6px 0px #1B2440` drop shadow.
- **Hover & Active States:** Interactive elements drop down on interaction. Hover shifts to `8px 8px 0px #1B2440` (translating -2px, -2px). Pressed/active states depress the element directly onto the surface: `0px 0px 0px #1B2440` (translating +6px, +6px), mimicking a physical rubber stamp.
- **Floating Badges & Stickers:** Small accent elements receive a slight rotational tilt (`rotate(-2deg)` to `rotate(3deg)`) paired with `4px 4px 0px #1B2440` offsets.

## Shapes
Cards, main action buttons, input fields, and status modals strictly use a unified 20px radius. This softens the heavy 3px dark borders, transforming rigid brutalism into friendly, approachable toy-like tactile surfaces.

Stickers, tags, and pill chips use pill profiles (fully rounded corners). Tape strip decorations feature sharp or cut-notched horizontal edges to emulate physical torn washi tape.

## Components

### Buttons
- **Primary:** Mint (`#B8F2D0`) or Butter Yellow (`#FFF1A8`) background, 3px solid `#1B2440`, 20px radius, min-height 56px. Label in Space Grotesk Bold. Shadow: `6px 6px 0px #1B2440`.
- **Destructive / Danger:** Coral (`#FF6B6B`) background with pure white or dark navy text, strictly reserved for danger states.
- **Behavior:** Press state collapses shadow to `0px 0px 0px` with `translate(6px, 6px)`.

### Cards & Panels
- Background: Pure white (`#FFFFFF`) or pastel surfaces (Lavender `#D4C5F9`, Butter Yellow `#FFF1A8`) against the cream dot canvas.
- Perimeter: 3px solid `#1B2440` with 20px radius and `6px 6px 0px #1B2440` shadow.
- Padding: 24px to 32px to ensure open, breathable layouts.

### Inputs & Form Fields
- Background: `#FFFFFF`, 3px solid `#1B2440`, 20px border radius, 56px height.
- Text: 18px Nunito Sans SemiBold for extreme elder legibility.
- Focus: Highlighted Butter Yellow (`#FFF1A8`) shadow expansion (`4px 4px 0px #1B2440`) and high-contrast navy outline.

### Checkboxes & Radios
- Size: 32px by 32px (oversized for motor ease).
- Border: 3px solid `#1B2440`. Radius: 8px for checkboxes, circular for radios.
- Checked State: Mint (`#B8F2D0`) fill with a bold 3px navy check icon.

### Stickers & Tape Elements
- Washi tape strips: Butter Yellow (`#FFF1A8`) or Mint (`#B8F2D0`) translucent blocks overlaid across card headers with -1.5° rotation.
- Reassurance Badges: High-contrast green (`#22C55E`) "100% SAFE" or "VERIFIED" circular badge with serrated or rounded starburst contour, 3px navy border, and hard shadow.