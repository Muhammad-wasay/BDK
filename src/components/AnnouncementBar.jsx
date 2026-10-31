import React from 'react';
import { ShieldCheck, AlertTriangle, Lock, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function AnnouncementBar({ language = 'roman' }) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-[#FFF1A8] text-[#1B2440] border-b-[2.5px] border-[#1B2440] overflow-hidden py-1 px-3 z-50 text-xs font-extrabold select-none ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left static badge */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#B8F2D0] border-[2px] border-[#1B2440] px-2.5 py-0.5 rounded-full text-[11px] flex-shrink-0 shadow-[1px_1px_0px_#1B2440]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1B2440]" />
          <span>{t.safeBadge}</span>
        </div>

        {/* Moving Micro Marquee Line */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-micro-marquee whitespace-nowrap text-[11px] sm:text-xs text-[#1B2440] font-black tracking-wide flex items-center">
            {t.ticker.concat(t.ticker).map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 mx-5">
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Safe Pill */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] bg-white border-[2px] border-[#1B2440] px-2 py-0.5 rounded-full flex-shrink-0 shadow-[1px_1px_0px_#1B2440]">
          <Lock className="w-3 h-3 text-[#1B2440]" />
          <span>Zero Real Risk</span>
        </div>
      </div>
    </div>
  );
}
