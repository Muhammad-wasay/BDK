import { X, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function PrivacyModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 relative flex flex-col gap-5 max-h-[90vh] overflow-y-auto shadow-[4px_4px_0px_#1B2440]"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/15">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#B8F2D0] border-[1.5px] border-[#1B2440] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#1B2440]" />
            </div>
            <div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
                {isUrdu ? "ڈیٹا پرائیویسی اور گارنٹی" : isEn ? "Privacy & Safety Guarantee" : "Data Privacy Guarantee"}
              </h3>
              <span className="text-xs font-bold text-[#1B2440]/70">
                100% Client-Side Sandbox • Zero Data Collection
              </span>
            </div>
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

        {/* Core Principles */}
        <div className="flex flex-col gap-3.5">
          <div className="bg-[#B8F2D0]/30 border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-base text-[#1B2440]">
                {isUrdu ? "صفر رجسٹریشن — کوئی لاگ ان نہیں" : "Zero Registration Required"}
              </h4>
              <p className="text-sm font-bold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu 
                  ? "ہم آپ سے کبھی کوئی ای میل، فون نمبر، یا پاس ورڈ نہیں مانگتے۔ مکمل طور پر گمنام رہ کر مشق کریں۔" 
                  : "We never ask for your email, phone number, or password. Use it completely anonymously."}
              </p>
            </div>
          </div>

          <div className="bg-[#B8F2D0]/20 border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-base text-[#1B2440]">
                {isUrdu ? "کوئی ٹریکنگ یا ڈیٹا فروخت نہیں" : "No Tracking or Selling"}
              </h4>
              <p className="text-sm font-bold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu 
                  ? "آپ کی پریکٹس کا ریکارڈ صرف آپ کے براؤزر میں رہتا ہے۔ کوئی تجزیاتی ٹریکر یا تیسری پارٹی اسکرپٹ نہیں۔" 
                  : "All simulated decisions occur locally in your browser. No trackers, ads, or third-party analytics."}
              </p>
            </div>
          </div>

          <div className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-base text-[#1B2440]">
                {isUrdu ? "حقیقی بینکنگ سے مکمل طور پر الگ" : "Zero Real Banking Connectivity"}
              </h4>
              <p className="text-sm font-bold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu 
                  ? "یہ صرف ایک تعلیمی سینڈ باکس ہے۔ یہاں کلک کرنے سے کسی اصلی بینک یا اکاؤنٹ کا کوئی تعلق نہیں۔" 
                  : "Pure educational sandbox. No real bank accounts, cards, or mobile wallets are ever touched."}
              </p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="w-full min-h-[48px] py-3 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-base border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center"
        >
          {isUrdu ? "سمجھ گیا" : "Understood"}
        </button>
      </div>
    </div>
  );
}
