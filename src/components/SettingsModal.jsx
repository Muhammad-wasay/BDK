import { useState } from 'react';
import { X, Globe, UserCheck, Settings, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import storage from '../utils/storage';

export default function SettingsModal({
  isOpen,
  onClose,
  language,
  setLanguage,
  babaJiMode,
  setBabaJiMode,
  onResetAllData
}) {
  const [confirmErase, setConfirmErase] = useState(false);
  const [erasedSuccess, setErasedSuccess] = useState(false);

  if (!isOpen) return null;

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  const handleEraseData = () => {
    soundEffects.playClick();
    storage.clearAllProgress();
    if (onResetAllData) {
      onResetAllData();
    }
    setErasedSuccess(true);
    setTimeout(() => {
      setErasedSuccess(false);
      setConfirmErase(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 relative flex flex-col gap-5 shadow-[4px_4px_0px_#1B2440]"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/15">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#B8F2D0] border-[1.5px] border-[#1B2440] flex items-center justify-center">
              <Settings className="w-5 h-5 text-[#1B2440]" />
            </div>
            <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
              {isUrdu ? "ترتیبات (Settings)" : "Settings"}
            </h3>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="min-w-[48px] min-h-[48px] rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center hover:bg-slate-100 cursor-pointer"
            aria-label={isUrdu ? "بند کریں" : "Close"}
          >
            <X className="w-5 h-5 text-[#1B2440]" />
          </button>
        </div>

        {/* 1. Language Setting */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-space font-extrabold uppercase tracking-wider text-[#1B2440]/70 flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            <span>{isUrdu ? "زبان منتخب کریں" : "Platform Language"}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                soundEffects.playClick();
                setLanguage('roman');
              }}
              className={`min-h-[48px] py-2 px-2 rounded-xl border-[2px] text-xs sm:text-sm font-space font-black transition-all cursor-pointer ${
                language === 'roman'
                  ? 'bg-[#B8F2D0] border-[#1B2440] text-[#1B2440]'
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
              className={`min-h-[48px] py-2 px-2 rounded-xl border-[2px] text-xs sm:text-sm font-space font-black transition-all cursor-pointer font-urdu-mode ${
                language === 'urdu'
                  ? 'bg-[#B8F2D0] border-[#1B2440] text-[#1B2440]'
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
              className={`min-h-[48px] py-2 px-2 rounded-xl border-[2px] text-xs sm:text-sm font-space font-black transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#B8F2D0] border-[#1B2440] text-[#1B2440]'
                  : 'bg-white border-[#1B2440]/30 text-[#1B2440]/70 hover:border-[#1B2440]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 2. Buzurg / Elder Mode Toggle */}
        <div className="flex flex-col gap-2 pt-3 border-t border-[#1B2440]/15">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#1B2440]" />
              <div>
                <span className="text-sm font-space font-extrabold text-[#1B2440] block">
                  {isUrdu ? "بزرگ موڈ (بڑے الفاظ)" : "Buzurg / Elder Mode"}
                </span>
                <span className="text-xs font-bold text-[#1B2440]/70">
                  {isUrdu ? "پڑھنے میں آسان، بڑے فونٹس اور واضح بٹن" : "Larger 18px+ text and high-contrast buttons"}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                soundEffects.playClick();
                setBabaJiMode(!babaJiMode);
              }}
              className={`w-16 h-9 rounded-full border-[2px] border-[#1B2440] p-0.5 transition-colors cursor-pointer relative ${
                babaJiMode ? 'bg-[#B8F2D0]' : 'bg-slate-200'
              }`}
              aria-label="Toggle Elder Mode"
            >
              <div 
                className={`w-7 h-7 rounded-full bg-white border border-[#1B2440] transition-transform ${
                  babaJiMode ? (isUrdu ? '-translate-x-7' : 'translate-x-7') : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* 3. Privacy & One-Tap Erase All Data */}
        <div className="flex flex-col gap-2 pt-3 border-t border-[#1B2440]/15">
          <div className="flex items-center gap-2 mb-1">
            <Trash2 className="w-4 h-4 text-[#BA1A1A]" />
            <span className="text-xs font-space font-extrabold uppercase tracking-wider text-[#BA1A1A]">
              {isUrdu ? "ڈیٹا اور پیش رفت صاف کریں" : "Data & Progress Reset"}
            </span>
          </div>

          {!confirmErase && !erasedSuccess && (
            <button
              onClick={() => {
                soundEffects.playClick();
                setConfirmErase(true);
              }}
              className="w-full min-h-[48px] py-2 px-4 rounded-xl border-[1.5px] border-[#BA1A1A] bg-[#FFE8E5] text-[#BA1A1A] font-space font-extrabold text-xs sm:text-sm hover:bg-[#ffd5d0] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>{isUrdu ? "میرا تمام محفوظ ریکارڈ مٹا دیں" : "Erase All My Saved Progress"}</span>
            </button>
          )}

          {confirmErase && !erasedSuccess && (
            <div className="p-3 bg-[#FFE8E5] border-[2px] border-[#BA1A1A] rounded-2xl flex flex-col gap-2.5 animate-fadeIn">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-[#BA1A1A] leading-relaxed">
                  {isUrdu 
                    ? "کیا آپ واقعی اپنا تمام کوئز اسکور اور مشق کا ریکارڈ مٹانا چاہتے ہیں؟ یہ عمل واپس نہیں ہو سکتا۔" 
                    : isEn 
                      ? "Are you sure? This will permanently delete your test scores and practice attempts from this device." 
                      : "Kya aap waqai apna saara score aur practice record mitana chahte hain?"}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleEraseData}
                  className="min-h-[48px] py-2 rounded-xl bg-[#BA1A1A] text-white font-space font-black text-xs hover:bg-red-800 transition-all cursor-pointer"
                >
                  {isUrdu ? "ہاں، سب مٹا دیں" : "Yes, Erase All"}
                </button>
                <button
                  onClick={() => setConfirmErase(false)}
                  className="min-h-[48px] py-2 rounded-xl bg-white border border-[#1B2440] text-[#1B2440] font-space font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer"
                >
                  {isUrdu ? "منسوخ کریں" : "Cancel"}
                </button>
              </div>
            </div>
          )}

          {erasedSuccess && (
            <div className="p-3 bg-[#B8F2D0] border-[2px] border-[#0F5A3E] rounded-xl flex items-center gap-2 text-xs font-bold text-[#0F5A3E] animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isUrdu ? "تمام ڈیٹا صاف کر دیا گیا۔" : "All local data has been erased successfully."}</span>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="w-full min-h-[48px] py-3 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-sm border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center mt-1"
        >
          {isUrdu ? "محفوظ کریں اور بند کریں" : "Save & Close"}
        </button>
      </div>
    </div>
  );
}
