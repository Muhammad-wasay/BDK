import React from 'react';

/**
 * RollingText:
 * Kinetic wave text-flip animation on hover.
 * The clone has opacity-0 until hover to guarantee ZERO subpixel artifacts.
 */
export default function RollingText({ text, className = '' }) {
  if (!text) return null;

  const characters = text.split('');

  return (
    <span className={`inline-flex items-center overflow-hidden font-inherit select-none ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="relative inline-block overflow-hidden leading-tight"
        >
          {/* Primary character */}
          <span
            className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 16}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>

          {/* Duplicate rolling character: hidden with opacity-0 until hover */}
          <span
            className="absolute left-0 top-0 block font-black text-[#1B2440] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transitionDelay: `${index * 16}ms` }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}
