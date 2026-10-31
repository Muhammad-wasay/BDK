import React from 'react';
import { X, Globe, UserCheck, Volume2, Check } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function SettingsModal({
  isOpen,
  onClose,
  language,
  setLanguage,
  babaJiMode,
  setBabaJiMode
}) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-sm bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 relative flex flex-col gap-5"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1A8] border-[1.5px] border-[#1B2440] flex items-center justify-center">
              ⚙️
            </div>
            <h3 className="font-space font-extrabold text-lg text-[#1B2440]">
              {isUrdu ? "ترتیبات (Settings)" : "Settings"}
            </h3>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-4 h-4 text-[#1B2440]" />
          </button>
        </div>

        {/* 1. Language Setting */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-space font-extrabold uppercase tracking-wider text-[#1B2440]/70 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <span>{isUrdu ? "زبان منتخب کریں" : "Platform Language"}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                soundEffects.playClick();
                setLanguage('roman');
              }}
              className={`py-2 px-2 rounded-xl border-[2px] text-xs font-space font-black transition-all cursor-pointer ${
                language === 'roman'
                  ? 'bg-[#FFF1A8] border-[#1B2440] text-[#1B2440]'
                  : 'bg-white border-[#1B2440]/30 text-[#1B2440]/70 hover:border-[#1B2440]'
              }`}
            >
              Roman Urdu
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setLanguage('urdu');
              }}
              className={`py-2 px-2 rounded-xl border-[2px] text-xs font-space font-black transition-all cursor-pointer font-urdu-mode ${
                language === 'urdu'
                  ? 'bg-[#FFF1A8] border-[#1B2440] text-[#1B2440]'
                  : 'bg-white border-[#1B2440]/30 text-[#1B2440]/70 hover:border-[#1B2440]'
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setLanguage('en');
              }}
              className={`py-2 px-2 rounded-xl border-[2px] text-xs font-space font-black transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#FFF1A8] border-[#1B2440] text-[#1B2440]'
                  : 'bg-white border-[#1B2440]/30 text-[#1B2440]/70 hover:border-[#1B2440]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 2. Buzurg / Elder Mode Toggle */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#1B2440]/15">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#1B2440]" />
              <div>
                <span className="text-xs font-space font-extrabold text-[#1B2440] block">
                  {isUrdu ? "بزرگ موڈ (بڑے الفاظ)" : "Buzurg / Elder Mode"}
                </span>
                <span className="text-[11px] text-[#1B2440]/70">
                  {isUrdu ? "پڑھنے میں آسان اور بڑے فونٹس" : "Larger high-contrast fonts for elders"}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                soundEffects.playClick();
                setBabaJiMode(!babaJiMode);
              }}
              className={`w-14 h-8 rounded-full border-[2px] border-[#1B2440] p-0.5 transition-colors cursor-pointer relative ${
                babaJiMode ? 'bg-[#B8F2D0]' : 'bg-slate-200'
              }`}
            >
              <div 
                className={`w-6 h-6 rounded-full bg-white border border-[#1B2440] transition-transform ${
                  babaJiMode ? (isUrdu ? '-translate-x-6' : 'translate-x-6') : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="w-full py-2.5 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-sm border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center mt-2"
        >
          {isUrdu ? "محفوظ کریں" : "Save & Close"}
        </button>
      </div>
    </div>
  );
}
