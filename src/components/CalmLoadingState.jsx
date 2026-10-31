import { ShieldCheck } from 'lucide-react';

export default function CalmLoadingState({ language = 'roman' }) {
  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  return (
    <div 
      className="w-full flex-1 min-h-[360px] flex items-center justify-center p-6 animate-fadeIn"
      dir={isUrdu ? 'rtl' : 'ltr'}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-4 text-center max-w-sm shadow-[3px_3px_0px_#1B2440]">
        <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center animate-pulse">
          <ShieldCheck className="w-6 h-6 text-[#0F5A3E]" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-space font-extrabold text-lg text-[#1B2440]">
            {isUrdu 
              ? "صفحہ لوڈ ہو رہا ہے..." 
              : isEn 
                ? "Loading Module..." 
                : "Module Load Ho Raha Hai..."}
          </h3>
          <p className="text-sm font-bold text-[#1B2440]/70">
            {isUrdu 
              ? "براہ کرم چند لمحے انتظار فرمائیں۔" 
              : isEn 
                ? "Please wait a moment." 
                : "Barah-e-karam thora intezar karein."}
          </p>
        </div>
      </div>
    </div>
  );
}
