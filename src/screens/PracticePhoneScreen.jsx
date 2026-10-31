import { ArrowLeft, Smartphone, ShieldCheck } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function PracticePhoneScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`max-w-4xl mx-auto px-4 py-6 md:py-10 w-full flex-1 flex flex-col gap-6 animate-fadeIn ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/15">
        <button
          onClick={() => {
            soundEffects.playNav();
            onGoHome();
          }}
          className="inline-flex items-center gap-2 px-5 min-h-[48px] rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-extrabold text-sm text-[#1B2440] hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isUrdu ? "ہوم پر واپس" : "Back to Home"}</span>
        </button>

        <div className="inline-flex items-center gap-2 bg-[#B8F2D0] border-[1.5px] border-[#1B2440] px-3.5 py-1.5 rounded-full text-xs font-space font-black text-[#1B2440]">
          <Smartphone className="w-4 h-4" />
          <span>{isUrdu ? "عملی فون لیب" : "Practice Phone Lab"}</span>
        </div>
      </div>

      <div className="p-4 bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl text-center text-sm font-bold text-[#1B2440] flex items-center justify-center gap-2">
        <ShieldCheck className="w-5 h-5 text-[#0F5A3E]" />
        <span>PRACTICE ONLY: nothing is sent. No real funds or messages are transmitted.</span>
      </div>
    </div>
  );
}
