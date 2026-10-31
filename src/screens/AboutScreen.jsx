import { 
  HeartHandshake, 
  ArrowLeft,
  Smartphone,
  AlertTriangle,
  Volume2,
  ShieldCheck
} from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import { BRAND } from '../data/brand';

export default function AboutScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

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
          src="/favicon-logo.png" 
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
          className="inline-flex items-center gap-2 px-5 min-h-[48px] rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-extrabold text-sm text-[#1B2440] hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isUrdu ? "ہوم پر واپس" : "Back to Home"}</span>
        </button>

        <span className="text-xs font-space font-black uppercase px-3.5 py-1.5 rounded-full bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]">
          {isUrdu ? "ہمارا مشن" : "About Our Mission"}
        </span>
      </div>

      {/* Hero Branding Section (Z-10, Pure White Card) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-10 shadow-[3px_3px_0px_#1B2440]">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl text-center">
          <img 
            src="/official_logo.png" 
            alt="BinaDarKe Official Logo" 
            className="h-16 w-auto object-contain mb-3"
          />
          <span className="inline-block text-xs font-space font-black bg-[#B8F2D0] border border-[#1B2440] px-3 py-1 rounded-full text-[#1B2440]">
            {isUrdu ? "خاندانوں کے لیے مفت مشق" : "A Free Practice Space for Families"}
          </span>
          <p className="text-xs font-bold text-[#1B2440]/75 mt-2">
            {isUrdu ? "آزاد تعلیمی ڈیجیٹل آگاہی ٹول" : "Independent Educational Tool"}
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border border-[#1B2440] px-3 py-1 rounded-full text-xs font-space font-black w-fit">
            <HeartHandshake className="w-4 h-4" />
            <span>{isUrdu ? "ہمارا وژن" : "Our Vision"}</span>
          </div>
          <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
            {isUrdu ? `${BRAND.urdu} کیوں بنایا گیا؟` : `Why ${BRAND.en} Was Built`}
          </h1>
          <p className="font-nunito font-bold text-sm sm:text-base text-[#1B2440]/85 leading-relaxed">
            {isUrdu
              ? "پاکستان میں ڈیجیٹل بینکنگ، ایزی پیسہ، اور واٹس ایپ عام ہونے کے بعد ہمارے والدین اور بزرگ سب سے آسان شکار بن رہے ہیں۔ اکثر بچے ڈانٹنے کے ڈر سے بزرگ غلطی بتاتے ہی نہیں اور نقصان اٹھاتے ہیں۔"
              : "With rapid adoption of digital banking and mobile wallets across Pakistan, our elders and parents have become prime targets for phishing and social engineering. Often out of fear of being scolded by younger family members, they hesitate to ask for help."}
          </p>
          <p className="font-nunito font-semibold text-xs sm:text-sm text-[#1B2440]/80 leading-relaxed">
            {isUrdu
              ? `${BRAND.urdu} کا مقصد اس خوف اور جھجھک کو ختم کرنا ہے۔ یہاں کوئی بھی بزرگ بنا کسی مالی نقصان کے حقیقی دنیا کے فراڈ پہچاننے کی ٹریننگ حاصل کر سکتا ہے۔`
              : `${BRAND.en} provides a calm, safe training ground. In this client-side sandbox, anyone can practice spot-checking fake lottery traps, deceptive bank calls, and forged payment slips without losing a single rupee.`}
          </p>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#1B2440]">
            01
          </div>
          <h3 className="font-space font-extrabold text-base text-[#1B2440]">
            {isUrdu ? "مکمل بے خوف ماحول" : "Zero Fear Practice"}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
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
          <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
            {isUrdu
              ? "پڑھنے میں دشواری ہو تو آرام سے سنیں اور ہر مرحلہ سمجھیں۔"
              : "Spoken audio explanations at a calm pace for those who find screen reading difficult."}
          </p>
        </div>

        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#1B2440]">
            03
          </div>
          <h3 className="font-space font-extrabold text-base text-[#1B2440]">
            {isUrdu ? "سادہ اور آسان سمیولیشنز" : "Realistic Scenarios"}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
            {isUrdu
              ? "ایزی پیسہ، جاز کیش، واٹس ایپ لاٹری، اور فیک بینک کالز کی ٹریننگ۔"
              : "Trained on real-life tactics like fake payment slips, OTP requests, and impersonation calls."}
          </p>
        </div>
      </div>

      {/* Target Persona Card: Meet Abba Ji (persona, not a real person) */}
      {/* 
        TODO FOR THE TEAM:
        Field observations template is available at docs/INTERVIEW_NOTES.md.
        Conduct 3 short observations with parents/elders in your community with consent.
      */}
      <div className="relative z-10 bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-7 flex flex-col gap-4 shadow-[2px_2px_0px_#1B2440]">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1B2440]/15">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👴</span>
            <div>
              <h3 className="font-space font-extrabold text-lg text-[#1B2440]">
                {isUrdu 
                  ? "ابا جی سے ملیں (فرضی کردار، حقیقی شخص نہیں)" 
                  : isEn 
                    ? "Meet Abba Ji (Persona, not a real person)" 
                    : "Meet Abba Ji (Persona, not a real person)"}
              </h3>
              <span className="text-xs font-bold text-[#1B2440]/65 uppercase tracking-wider block">
                {isUrdu ? "ہم نے یہ پلیٹ فارم کس کے لیے بنایا؟" : "Who We Built This Platform For"}
              </span>
            </div>
          </div>
          <span className="text-xs font-space font-black px-3 py-1 rounded-full bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440]">
            {isUrdu ? "فرضی کردار" : "Persona Profile"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="bg-[#FFFBF5] border border-[#1B2440] rounded-xl p-3">
            <span className="font-bold text-[#1B2440]/70 flex items-center gap-1.5 mb-1">
              <Smartphone className="w-3.5 h-3.5 text-[#0F5A3E]" />
              {isUrdu ? "ڈیوائس اور ایپس:" : "Device & Apps:"}
            </span>
            <p className="font-bold text-[#1B2440]">
              {isUrdu 
                ? "بجٹ اسمارٹ فون، واٹس ایپ وائس میسجز، ایزی پیسہ یوٹیلٹی بل، یوٹیوب۔" 
                : "Budget Android, WhatsApp voice messages, EasyPaisa bills, YouTube."}
            </p>
          </div>

          <div className="bg-[#FFE8E5] border border-[#BA1A1A] rounded-xl p-3">
            <span className="font-bold text-[#BA1A1A] flex items-center gap-1.5 mb-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              {isUrdu ? "بڑا خوف:" : "Deepest Fear:"}
            </span>
            <p className="font-bold text-[#1B2440]">
              {isUrdu 
                ? "غلطی سے کوئی بٹن دبنے سے پنشن ضائع ہونے کا ڈر اور بچوں سے جھجھک۔" 
                : "Fear of losing pension through accidental taps and hesitation to admit confusion."}
            </p>
          </div>

          <div className="bg-[#FFFBF5] border border-[#1B2440] rounded-xl p-3">
            <span className="font-bold text-[#1B2440]/70 flex items-center gap-1.5 mb-1">
              <Volume2 className="w-3.5 h-3.5 text-[#0F5A3E]" />
              {isUrdu ? "زبان کی ترجیح:" : "Language Preference:"}
            </span>
            <p className="font-bold text-[#1B2440]">
              {isUrdu 
                ? "سادہ اردو بول چال، آڈیو گائیڈ کو ترجیح دیتے ہیں۔" 
                : "Spoken Urdu/Roman Urdu, clear audio narration, no technical jargon."}
            </p>
          </div>

          <div className="bg-[#B8F2D0]/40 border border-[#0F5A3E] rounded-xl p-3">
            <span className="font-bold text-[#0F5A3E] flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {isUrdu ? "مقصد:" : "The Goal:"}
            </span>
            <p className="font-bold text-[#1B2440]">
              {isUrdu 
                ? "موبائل کا محفوظ اور باوقار استعمال، بنا کسی کے آگے ہاتھ پھیلائے۔" 
                : "Independent and dignified mobile usage with zero fear of scams."}
            </p>
          </div>
        </div>

        <p className="text-xs font-bold text-[#1B2440]/60 border-t border-[#1B2440]/15 pt-2">
          {isUrdu 
            ? "حقیقی فیلڈ نوٹس کا ٹیمپلیٹ docs/INTERVIEW_NOTES.md میں موجود ہے۔" 
            : "See docs/INTERVIEW_NOTES.md for field interview templates and ethics protocol."}
        </p>
      </div>
    </div>
  );
}
