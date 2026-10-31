import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  ArrowLeft, 
  CheckCircle2,
  Lock,
  Volume2
} from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function AboutScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`relative max-w-4xl mx-auto px-4 py-8 md:py-12 w-full flex-1 flex flex-col gap-8 animate-fadeIn ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Subtle Transparent Watermark Logo in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <img 
          src="/logos/favicon-logo.png" 
          alt="" 
          className="w-[450px] h-[450px] object-contain opacity-[0.035] -rotate-12" 
        />
      </div>

      {/* Header & Back (Z-10) */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/15">
        <button
          onClick={() => {
            soundEffects.playNav();
            onGoHome();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-extrabold text-xs text-[#1B2440] hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isUrdu ? "ہوم پر واپس" : "Back to Home"}</span>
        </button>

        <span className="text-xs font-space font-black uppercase px-3.5 py-1 rounded-full bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]">
          {isUrdu ? "ہمارا مشن" : "About Our Mission"}
        </span>
      </div>

      {/* Hero Branding Section (Z-10, Pure White Card) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-10">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl text-center">
          <img 
            src="/official_logo.png" 
            alt="BinaDarKe Official Logo" 
            className="h-16 w-auto object-contain mb-3"
          />
          <span className="inline-block text-[11px] font-space font-black bg-[#B8F2D0] border border-[#1B2440] px-3 py-0.5 rounded-full text-[#1B2440]">
            Pakistan's 1st Sandbox
          </span>
          <p className="text-[11px] font-bold text-[#1B2440]/75 mt-2">
            Non-Profit Digital Literacy Initiative
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border border-[#1B2440] px-3 py-0.5 rounded-full text-xs font-space font-black w-fit">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isUrdu ? "ہمارا وژن" : "Our Vision"}</span>
          </div>
          <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
            {isUrdu ? "بغیر ڈر کے کیوں بنایا گیا؟" : "Why BinaDarKe Was Built"}
          </h1>
          <p className="font-nunito font-bold text-sm sm:text-base text-[#1B2440]/85 leading-relaxed">
            {isUrdu
              ? "پاکستان میں ڈیجیٹل بینکنگ، ایزی پیسہ، اور واٹس ایپ عام ہونے کے بعد ہمارے والدین اور بزرگ سب سے آسان شکار بن رہے ہیں۔ اکثر بچے ڈانٹنے کے ڈر سے بزرگ غلطی بتاتے ہی نہیں اور لاکھوں لٹوا بیٹھتے ہیں۔"
              : "With rapid adoption of digital banking and mobile wallets across Pakistan, our elders and parents have become prime targets for ruthless phishing and social engineering. Often out of fear of being scolded by younger family members, they suffer in silence."}
          </p>
          <p className="font-nunito font-semibold text-xs sm:text-sm text-[#1B2440]/80 leading-relaxed">
            {isUrdu
              ? "بغیر ڈر کے کا مقصد اس خوف اور جھجھک کو ہمیشہ کے لیے ختم کرنا ہے۔ یہاں کوئی بھی بزرگ بنا کسی مالی نقصان کے حقیقی دنیا کے فراڈ پہچاننے کی ٹریننگ حاصل کر سکتا ہے۔"
              : "BinaDarKe removes that fear forever. In this 100% risk-free sandbox, anyone can practice spot-checking fake lottery traps, deceptive bank calls, and forged payment slips without losing a single rupee."}
          </p>
        </div>
      </div>

      {/* 3 Core Pillars (Clean White Cards, Mint Badges) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#1B2440]">
            01
          </div>
          <h3 className="font-space font-extrabold text-base text-[#1B2440]">
            {isUrdu ? "مکمل بے خوف ماحول" : "Zero Fear Practice"}
          </h3>
          <p className="text-xs font-semibold text-[#1B2440]/75 leading-relaxed">
            {isUrdu
              ? "غلطی کرنے پر بھی کوئی نقصان نہیں۔ جب تک چاہیں پریکٹس کریں۔"
              : "Mistakes carry zero financial penalty. Safe space designed specifically for elders."}
          </p>
        </div>

        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#1B2440]">
            02
          </div>
          <h3 className="font-space font-extrabold text-base text-[#1B2440]">
            {isUrdu ? "آڈیو اسسٹنٹ رہنمائی" : "Voice Assistant Guide"}
          </h3>
          <p className="text-xs font-semibold text-[#1B2440]/75 leading-relaxed">
            {isUrdu
              ? "پڑھنے میں دشواری ہو تو آرام سے سنیں اور ہر مرحلہ سمجھیں۔"
              : "Clear spoken audio explanations for those who find reading on screens difficult."}
          </p>
        </div>

        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#1B2440]">
            03
          </div>
          <h3 className="font-space font-extrabold text-base text-[#1B2440]">
            {isUrdu ? "سادہ اور آسان سمیولیشنز" : "Realistic Scenarios"}
          </h3>
          <p className="text-xs font-semibold text-[#1B2440]/75 leading-relaxed">
            {isUrdu
              ? "ایزی پیسہ، جاز کیش، واٹس ایپ لاٹری، اور فیک بینک کالز کی ٹریننگ۔"
              : "Trained on real-life tactics like fake EasyPaisa slips, OTP requests, and bank calls."}
          </p>
        </div>
      </div>

      {/* Haji Abdul Quote in About (Clean White Container) */}
      <div className="relative z-10 bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FFFBF5] border border-[#1B2440] flex items-center justify-center text-2xl flex-shrink-0">
          👴
        </div>
        <div>
          <p className="font-space font-bold text-sm sm:text-base text-[#1B2440] italic leading-relaxed">
            "Mujhe hamesha darr rehta tha ke phone par koi ghalt button dab gaya to paise kat jayenge. BinaDarKe ne mera darr hamesha ke liye nikal diya!"
          </p>
          <span className="block text-xs font-black text-[#1B2440]/70 mt-1 uppercase tracking-wider">
            — Haji Abdul Rasheed, Lahore (Age: 68) • BinaDarKe Beta Learner
          </span>
        </div>
      </div>
    </div>
  );
}
