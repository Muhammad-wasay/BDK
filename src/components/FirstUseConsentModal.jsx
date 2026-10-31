import { useState } from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import storage from '../utils/storage';

export default function FirstUseConsentModal({ language = 'roman' }) {
  const [isOpen, setIsOpen] = useState(() => {
    const acknowledged = storage.safeGet('bdk_consent_acknowledged', false);
    return !acknowledged;
  });

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  const handleAcknowledge = () => {
    soundEffects.playSuccess();
    storage.safeSet('bdk_consent_acknowledged', true);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/70 backdrop-blur-xs animate-fadeIn">
      <div
        className="w-full max-w-lg bg-[#FFFDF9] border-[3px] border-[#1B2440] rounded-[32px] p-6 sm:p-8 shadow-xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-start gap-3.5 pb-3 border-b-[2px] border-[#1B2440]/20">
          <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#0F5A3E]" />
          </div>
          <div>
            <span className="text-xs font-space font-black uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440] px-2.5 py-0.5 rounded-full inline-block mb-1">
              {isUrdu ? "تعارف اور پرائیویسی اقرار" : isEn ? "Educational Consent" : "Taleemi Asool & Consent"}
            </span>
            <h2 className="font-space font-extrabold text-xl sm:text-2xl text-[#1B2440]">
              {isUrdu
                ? "بغیر ڈر کے میں خوش آمدید"
                : isEn
                ? "Welcome to BinaDarKe"
                : "BinaDarKe Mein Khush-Aamdeed"}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#1B2440]/75 mt-0.5">
              {isUrdu
                ? "والدین اور بزرگوں کے لیے ڈیجیٹل سیفٹی کی مفت مشق"
                : isEn
                ? "A free practice space for families and elders"
                : "Khandan aur buzurgon ke liye muft practice space"}
            </p>
          </div>
        </div>

        {/* 4 Essential Reassurances */}
        <div className="flex flex-col gap-3">
          <div className="bg-white border-[1.5px] border-[#1B2440] rounded-2xl p-3.5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0F5A3E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed">
              <strong>{isUrdu ? "کوئی حقیقی ڈیٹا نہیں:" : isEn ? "Practice Only:" : "Sirf Practice:"}</strong>{" "}
              {isUrdu
                ? "یہاں تمام پیغامات، کالز، اور رقم کی منتقلی سو فیصد فرضی ہیں۔ کوئی حقیقی رقم یا کال ملوث نہیں ہے۔"
                : isEn
                ? "All phone calls, SMS alerts, and money transfers are simulated. Zero real transactions occur."
                : "Tamam calls, SMS, aur wallet transfer farzi hain. Koi asli paisa nahi kat sakta."}
            </p>
          </div>

          <div className="bg-white border-[1.5px] border-[#1B2440] rounded-2xl p-3.5 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#0F5A3E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed">
              <strong>{isUrdu ? "سو فیصد پرائیویٹ:" : isEn ? "Zero Tracking:" : "Zero Telemetry:"}</strong>{" "}
              {isUrdu
                ? "کوئی لاگ ان نہیں، کوئی اینالیٹکس یا اشتہارات نہیں۔ تمام ریکارڈ آپ کی ڈیوائس پر ہی رہتا ہے۔"
                : isEn
                ? "100% client-side. No user tracking, no cookies, no forms, and no remote database."
                : "Koi login nahi, koi cookies nahi. Saari practice aapke browser ke andar rehti hai."}
            </p>
          </div>

          <div className="bg-white border-[1.5px] border-[#1B2440] rounded-2xl p-3.5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0F5A3E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed">
              <strong>{isUrdu ? "غلطی پر صفر نقصان:" : isEn ? "Zero Real Risk:" : "Ghalti Par Zero Nuqsan:"}</strong>{" "}
              {isUrdu
                ? "غلط بٹن دبانے سے نہ کوئی رقم کٹے گی نہ ہی اکاؤنٹ بند ہوگا۔ بے جھجھک سیکھیں۔"
                : isEn
                ? "Mistakes cost zero rupees. Feel free to explore, test, and learn fearlessly."
                : "Ghalti karne par bhi koi rupya nahi katega. Khul kar seekhein."}
            </p>
          </div>

          <div className="bg-[#FFF4E0] border-[1.5px] border-[#1B2440] rounded-2xl p-3 flex items-start gap-2.5">
            <span className="text-xs font-bold text-[#1B2440]/80 leading-relaxed">
              ⚖️ {isUrdu
                ? "بغیر ڈر کے Build4Better ہیکاتھون (این ای ڈی یونیورسٹی) کا تعلیمی پروجیکٹ ہے۔ کسی تجارتی بینک یا ادارے سے الحاق نہیں ہے۔"
                : isEn
                ? "BinaDarKe is an independent educational tool for the Build4Better hackathon (NED University). Not affiliated with any commercial entity."
                : "BinaDarKe Build4Better hackathon ka azaad taleemi tool hai."}
            </span>
          </div>
        </div>

        {/* Consent Acknowledge Button */}
        <button
          onClick={handleAcknowledge}
          className="w-full py-4 rounded-2xl bg-[#1B2440] hover:bg-slate-800 text-white font-space font-extrabold text-sm sm:text-base border-[2px] border-[#1B2440] cursor-pointer transition-all active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
        >
          <span>{isUrdu ? "سمجھ گیا — مشق شروع کریں" : isEn ? "I Understand — Start Practice" : "Samajh Gaya — Shuru Karein"}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
