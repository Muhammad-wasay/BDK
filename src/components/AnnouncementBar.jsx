import { TRANSLATIONS } from '../data/translations';

export default function AnnouncementBar({ language = 'roman' }) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-[#B8F2D0] text-[#1B2440] border-b-[2px] border-[#1B2440] overflow-hidden py-1.5 px-2 z-40 text-xs font-space font-extrabold select-none max-w-full ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="w-full flex items-center overflow-hidden relative">
        {/* Full-width continuous micro-marquee matching light mint brand theme */}
        <div className="animate-micro-marquee whitespace-nowrap text-xs text-[#1B2440] font-black tracking-wide flex items-center">
          {t.ticker.concat(t.ticker).concat(t.ticker).map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2.5 mx-6">
              <span className="w-2 h-2 rounded-full bg-[#0F5A3E] flex-shrink-0"></span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
