/**
 * Fictional Original Vector Illustrations for Phone Gallery
 * 100% original, client-side, zero copyright/privacy risk.
 */

export function FictionalPhotoSVG({ type, className = "w-full h-full" }) {
  switch (type) {
    case 'tea':
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#FFF1A8" />
          {/* Table */}
          <rect y="90" width="160" height="30" fill="#D4C5F9" stroke="#1B2440" strokeWidth="2" />
          {/* Plate */}
          <ellipse cx="110" cy="95" rx="35" ry="12" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          {/* Samosa */}
          <polygon points="110,80 95,100 125,100" fill="#FFD3B6" stroke="#1B2440" strokeWidth="2" />
          {/* Saucer */}
          <ellipse cx="55" cy="98" rx="28" ry="10" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          {/* Cup */}
          <path d="M40 75 Q40 95 55 95 Q70 95 70 75 Z" fill="#B8F2D0" stroke="#1B2440" strokeWidth="2" />
          {/* Cup handle */}
          <path d="M70 78 Q80 78 80 86 Q80 92 68 92" fill="none" stroke="#1B2440" strokeWidth="2" />
          {/* Tea */}
          <ellipse cx="55" cy="76" rx="14" ry="4" fill="#BA1A1A" />
          {/* Steam */}
          <path d="M50 68 Q52 62 48 56 Q44 50 48 44" fill="none" stroke="#1B2440" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 68 Q62 60 58 54 Q54 48 58 40" fill="none" stroke="#1B2440" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'eid':
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#B8F2D0" />
          {/* Crescent Moon */}
          <path d="M120 25 A22 22 0 1 1 105 60 A18 18 0 1 0 120 25 Z" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          {/* Star */}
          <polygon points="98,35 101,42 108,43 103,48 104,55 98,51 92,55 93,48 88,43 95,42" fill="#FFF1A8" stroke="#1B2440" strokeWidth="1.5" />
          {/* Lantern (Fanoos) */}
          <polygon points="45,30 35,50 55,50" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          <rect x="38" y="50" width="14" height="24" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          <polygon points="35,74 55,74 45,86" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          <line x1="45" y1="20" x2="45" y2="30" stroke="#1B2440" strokeWidth="2" />
          {/* Greeting Text Badge */}
          <rect x="25" y="94" width="110" height="20" rx="10" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          <text x="80" y="108" textAnchor="middle" fontSize="10" fontWeight="900" fill="#1B2440" fontFamily="sans-serif">Eid Mubarak ✨</text>
        </svg>
      );

    case 'garden':
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#D4C5F9" />
          {/* Ground */}
          <rect y="85" width="160" height="35" fill="#B8F2D0" stroke="#1B2440" strokeWidth="2" />
          {/* Sun */}
          <circle cx="130" cy="30" r="16" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          {/* Flower 1 */}
          <line x1="45" y1="90" x2="45" y2="60" stroke="#0F5A3E" strokeWidth="3" />
          <circle cx="45" cy="55" r="10" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          <circle cx="45" cy="55" r="4" fill="#FFF1A8" stroke="#1B2440" strokeWidth="1.5" />
          {/* Flower 2 (Sunflower) */}
          <line x1="85" y1="90" x2="85" y2="45" stroke="#0F5A3E" strokeWidth="3" />
          <circle cx="85" cy="40" r="14" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          <circle cx="85" cy="40" r="6" fill="#1B2440" />
          {/* Flower 3 */}
          <line x1="120" y1="90" x2="120" y2="65" stroke="#0F5A3E" strokeWidth="3" />
          <circle cx="120" cy="60" r="9" fill="#FFD3B6" stroke="#1B2440" strokeWidth="2" />
          <circle cx="120" cy="60" r="3" fill="#BA1A1A" />
        </svg>
      );

    case 'mangoes':
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#FFD3B6" />
          {/* Wooden Crate / Basket */}
          <rect x="25" y="65" width="110" height="45" rx="6" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          <line x1="25" y1="80" x2="135" y2="80" stroke="#1B2440" strokeWidth="2" />
          <line x1="25" y1="95" x2="135" y2="95" stroke="#1B2440" strokeWidth="2" />
          {/* Mangoes */}
          <ellipse cx="50" cy="60" rx="18" ry="14" fill="#FFB703" stroke="#1B2440" strokeWidth="2" transform="rotate(-15 50 60)" />
          <ellipse cx="80" cy="55" rx="19" ry="15" fill="#FB8500" stroke="#1B2440" strokeWidth="2" />
          <ellipse cx="110" cy="60" rx="18" ry="14" fill="#FFB703" stroke="#1B2440" strokeWidth="2" transform="rotate(20 110 60)" />
          {/* Leaves */}
          <path d="M50 46 Q55 35 65 38 Q60 48 50 46 Z" fill="#0F5A3E" stroke="#1B2440" strokeWidth="1.5" />
          <path d="M80 40 Q85 30 95 34 Q90 44 80 40 Z" fill="#0F5A3E" stroke="#1B2440" strokeWidth="1.5" />
        </svg>
      );

    case 'mosque':
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#FFF4E0" />
          {/* Main Mosque Dome */}
          <path d="M50 80 Q80 30 110 80 Z" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          {/* Base */}
          <rect x="35" y="80" width="90" height="30" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          {/* Arch door */}
          <path d="M70 110 V95 Q80 88 90 95 V110 Z" fill="#1B2440" />
          {/* Minaret Left */}
          <rect x="20" y="45" width="12" height="65" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          <polygon points="20,45 26,30 32,45" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          {/* Minaret Right */}
          <rect x="128" y="45" width="12" height="65" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          <polygon points="128,45 134,30 140,45" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
        </svg>
      );

    case 'drawing':
    default:
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" fill="#FFFFFF" stroke="#1B2440" strokeWidth="2" />
          {/* Child Drawing: House */}
          <polygon points="40,55 20,70 60,70" fill="#FF6B6B" stroke="#1B2440" strokeWidth="2" />
          <rect x="25" y="70" width="30" height="30" fill="#FFF1A8" stroke="#1B2440" strokeWidth="2" />
          <rect x="35" y="85" width="10" height="15" fill="#1B2440" />
          {/* Stick Figures (Grandfather & Child) */}
          <circle cx="85" cy="65" r="7" fill="none" stroke="#1B2440" strokeWidth="2" />
          <line x1="85" y1="72" x2="85" y2="92" stroke="#1B2440" strokeWidth="2" />
          <line x1="75" y1="80" x2="95" y2="80" stroke="#1B2440" strokeWidth="2" />
          <line x1="85" y1="92" x2="78" y2="108" stroke="#1B2440" strokeWidth="2" />
          <line x1="85" y1="92" x2="92" y2="108" stroke="#1B2440" strokeWidth="2" />

          {/* Child */}
          <circle cx="112" cy="76" r="5" fill="none" stroke="#BA1A1A" strokeWidth="2" />
          <line x1="112" y1="81" x2="112" y2="96" stroke="#BA1A1A" strokeWidth="2" />
          <line x1="105" y1="87" x2="119" y2="87" stroke="#BA1A1A" strokeWidth="2" />
          <line x1="112" y1="96" x2="107" y2="108" stroke="#BA1A1A" strokeWidth="2" />
          <line x1="112" y1="96" x2="117" y2="108" stroke="#BA1A1A" strokeWidth="2" />

          {/* Sun */}
          <circle cx="135" cy="25" r="10" fill="#FFD3B6" stroke="#1B2440" strokeWidth="2" />
          <line x1="135" y1="10" x2="135" y2="5" stroke="#1B2440" strokeWidth="2" />
          <line x1="135" y1="40" x2="135" y2="45" stroke="#1B2440" strokeWidth="2" />
          <line x1="120" y1="25" x2="115" y2="25" stroke="#1B2440" strokeWidth="2" />
          <line x1="150" y1="25" x2="155" y2="25" stroke="#1B2440" strokeWidth="2" />
        </svg>
      );
  }
}
