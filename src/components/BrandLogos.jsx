import React from 'react';

// Actual Real Brand Logos uploaded by user in public/logos/

export function EasyPaisaLogo({ className = "h-6 w-auto" }) {
  return (
    <img 
      src="/logos/easypaisa.png" 
      alt="EasyPaisa" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function JazzCashLogo({ className = "h-6 w-auto" }) {
  return (
    <img 
      src="/logos/jazzcash.png" 
      alt="JazzCash" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function WhatsAppLogo({ className = "w-6 h-6" }) {
  return (
    <img 
      src="/logos/whatsapp.png" 
      alt="WhatsApp" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function HBLLogo({ className = "h-6 w-auto" }) {
  return (
    <img 
      src="/logos/hbl.png" 
      alt="HBL" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function MeezanLogo({ className = "h-6 w-auto" }) {
  return (
    <img 
      src="/logos/meezan.png" 
      alt="Meezan Bank" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function StateBankLogo({ className = "h-6 w-auto" }) {
  return (
    <img 
      src="/logos/sbp.png" 
      alt="State Bank of Pakistan" 
      className={`${className} object-contain inline-block`} 
    />
  );
}

export function FIALogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L5 6V15C5 22 9.8 28.5 16 30C22.2 28.5 27 22 27 15V6L16 2Z" fill="#BA1A1A" />
      <path d="M16 5L7 8.3V15C7 20.8 10.9 26.2 16 27.5C21.1 26.2 25 20.8 25 15V8.3L16 5Z" fill="#8C0000" />
      <path d="M16 9C13.2 9 11 11.2 11 14C11 16.8 13.2 19 16 19C18.8 19 21 16.8 21 14C21 11.2 18.8 9 16 9ZM16 11.5C17.4 11.5 18.5 12.6 18.5 14C18.5 15.4 17.4 16.5 16 16.5C14.6 16.5 13.5 15.4 13.5 14C13.5 12.6 14.6 11.5 16 11.5Z" fill="#FFF1A8" />
      <path d="M16 20C13 20 10.5 21.5 10 23.5C11.8 25.2 13.8 26.1 16 26.4C18.2 26.1 20.2 25.2 22 23.5C21.5 21.5 19 20 16 20Z" fill="#FFF1A8" />
    </svg>
  );
}
