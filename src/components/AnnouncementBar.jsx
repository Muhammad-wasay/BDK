import React from 'react';
import { TRANSLATIONS } from '../data/translations';

export default function AnnouncementBar({ language = 'roman' }) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-[#FFF1A8] text-[#1B2440] border-b-[2.5px] border-[#1B2440] overflow-hidden py-1 px-2 z-50 text-xs font-space font-extrabold select-none max-w-full ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="w-full flex items-center overflow-hidden relative">
        {/* Full-width continuous micro-marquee without any blocking static badges or emojis */}
        <div className="animate-micro-marquee whitespace-nowrap text-xs text-[#1B2440] font-black tracking-wide flex items-center">
          {t.ticker.concat(t.ticker).concat(t.ticker).map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2.5 mx-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B2440] flex-shrink-0"></span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
