import { useState } from 'react';

/**
 * BrandLogos Component Collection
 * 
 * Clean transparent logos for authentic Pakistani banking and digital wallets.
 * Single source of truth in public/logos/.
 * Includes graceful onError fallback rendering brand text if image fails to load.
 */

export function EasyPaisaLogo({ className = "h-8 w-auto", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#00A859] tracking-tight">EasyPaisa</span>;
  }

  return (
    <img 
      src="/logos/easypaisa.png" 
      alt="EasyPaisa official logo" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function JazzCashLogo({ className = "h-8 w-auto", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#ED1C24] tracking-tight">JazzCash</span>;
  }

  return (
    <img 
      src="/logos/jazzcash.png" 
      alt="JazzCash official logo" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function WhatsAppLogo({ className = "h-8 w-8", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#25D366] tracking-tight">WhatsApp</span>;
  }

  return (
    <img 
      src="/logos/whatsapp.png" 
      alt="WhatsApp official logo" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function HBLLogo({ className = "h-8 w-auto", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#008269] tracking-tight">HBL</span>;
  }

  return (
    <img 
      src="/logos/hbl.png" 
      alt="Habib Bank Limited (HBL) official logo" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block rounded-md`} 
    />
  );
}

export function MeezanLogo({ className = "h-8 w-auto", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#006A4E] tracking-tight">Meezan Bank</span>;
  }

  return (
    <img 
      src="/logos/meezan.png" 
      alt="Meezan Bank official logo" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function StateBankLogo({ className = "h-8 w-auto", width, height }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="font-space font-extrabold text-xs text-[#005A36] tracking-tight">State Bank of Pakistan</span>;
  }

  return (
    <img 
      src="/logos/sbp.png" 
      alt="State Bank of Pakistan (SBP) official seal" 
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function FIALogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FIA Cyber Crime Wing Emblem">
      <path d="M16 2L5 6V15C5 22 9.8 28.5 16 30C22.2 28.5 27 22 27 15V6L16 2Z" fill="#BA1A1A" />
      <path d="M16 5L7 8.3V15C7 20.8 10.9 26.2 16 27.5C21.1 26.2 25 20.8 25 15V8.3L16 5Z" fill="#8C0000" />
      <path d="M16 9C13.2 9 11 11.2 11 14C11 16.8 13.2 19 16 19C18.8 19 21 16.8 21 14C21 11.2 18.8 9 16 9ZM16 11.5C17.4 11.5 18.5 12.6 18.5 14C18.5 15.4 17.4 16.5 16 16.5C14.6 16.5 13.5 15.4 13.5 14C13.5 12.6 14.6 11.5 16 11.5Z" fill="#FFF1A8" />
      <path d="M16 20C13 20 10.5 21.5 10 23.5C11.8 25.2 13.8 26.1 16 26.4C18.2 26.1 20.2 25.2 22 23.5C21.5 21.5 19 20 16 20Z" fill="#FFF1A8" />
    </svg>
  );
}
