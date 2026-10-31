import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Volume2, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Phone,
  CreditCard,
  Search
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import soundEffects from '../utils/soundEffects';
import { EasyPaisaLogo, JazzCashLogo, WhatsAppLogo, HBLLogo } from '../components/BrandLogos';

export default function LandingScreen({ 
  onStartPractice, 
  onOpenHelpline, 
  onGoToScreen,
  babaJiMode, 
  language = 'roman' 
}) {
  const [showAudioIntro, setShowAudioIntro] = useState(false);
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const introAudioMap = {
    roman: "As-salamu alaykum! BinaDarKe mein khush-aamdeed. Ye waldein aur buzurgon ke liye ek mehfooz jagah hai jahan aap bila kisi khauf ke fake WhatsApp messages aur bank scams pehchanna seekh sakte hain. Practice Shuru Karein button par click karke aazmayein!",
    urdu: "السلام علیکم! بغیر ڈر کے پلیٹ فارم پر خوش آمدید۔ یہ والدین اور بزرگوں کے لیے مکمل محفوظ ماحول ہے جہاں آپ بغیر کسی خوف کے ڈیجیٹل دھوکہ دہی اور فراڈ پہچاننا سیکھ سکتے ہیں۔ نیچے دیے گئے بٹن پر کلک کر کے مشق شروع کریں۔",
    en: "Welcome to BinaDarKe! A safe, fear-free training sandbox designed for elders and families to recognize everyday online scams and phishing threats without any financial risk. Click Start Practice to begin."
  };

  const introAudioText = introAudioMap[language] || introAudioMap.roman;

  const navigateTo = (screenId) => {
    soundEffects.playNav();
    if (onGoToScreen) {
      onGoToScreen(screenId);
    } else if (screenId === 'guided') {
      onStartPractice();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`w-full flex-1 flex flex-col ${babaJiMode ? 'elder-active' : ''} ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* 1. CLEAN HERO SECTION (Uncluttered & Airy) */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-12 md:py-16 w-full animate-fadeInUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1 text-xs font-space font-extrabold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#1B2440]" />
              <span>{t.heroTag}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-space font-extrabold text-[38px] sm:text-[48px] md:text-[56px] text-[#1B2440] tracking-tight leading-[1.1]">
              {t.heroTitle1}{' '}
              <span className="font-caveat text-5xl sm:text-6xl md:text-7xl text-[#FF6B6B] underline decoration-[#FFF1A8] decoration-wavy underline-offset-8 inline-block">
                {t.heroTitleAccent}
              </span>
              {t.heroTitle2}
            </h1>

            {/* Concise Subtitle */}
            <p className="text-base sm:text-lg text-[#1B2440]/80 leading-relaxed max-w-xl font-bold">
              {t.heroSubtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onStartPractice();
                }}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-3 px-8 h-13 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] font-space font-black text-base sm:text-lg border-[2.5px] border-[#1B2440] active:scale-98 transition-all group"
              >
                <span>{t.ctaStart}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setShowAudioIntro(!showAudioIntro);
                }}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-2 px-5 h-13 rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] font-space font-bold text-sm border-[2px] border-[#1B2440] active:scale-98 transition-all"
              >
                <Volume2 className="w-4 h-4 text-[#1B2440]" />
                <span>{showAudioIntro ? t.ctaAudioStop : t.ctaAudio}</span>
              </button>
            </div>

            {/* Audio Drawer */}
            {showAudioIntro && (
              <div className="w-full max-w-xl animate-fadeIn">
                <UrduVoiceoverBar text={introAudioText} label={t.ctaAudio} language={language} />
              </div>
            )}
          </div>

          {/* Right Phone Sandbox Preview (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Phone Container */}
              <div className="w-full bg-[#FFFDF9] rounded-[36px] border-[3px] border-[#1B2440] p-4 flex flex-col gap-3">
                {/* Header with WhatsApp Logo */}
                <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFF1A8] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B8F2D0] border border-[#1B2440]"></div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#FFF1A8] border border-[#1B2440] px-2.5 py-0.5 rounded-full">
                    <WhatsAppLogo className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-space font-extrabold text-[#1B2440]">
                      WhatsApp Trap
                    </span>
                  </div>
                </div>

                {/* Simulated Message Bubble */}
                <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF6B6B] bg-[#FFE8E5] border border-[#FF6B6B]/50 rounded-md px-2 py-0.5 w-fit">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.heroCardSender}</span>
                  </div>

                  <p className="font-space font-extrabold text-sm sm:text-base text-[#1B2440] leading-snug">
                    {t.heroCardMessage1 || "Mubarak! Aapka 50,000 Inaam Nikla Hai!"}
                  </p>

                  <p className="text-xs font-bold text-[#1B2440]/80 leading-relaxed">
                    {t.heroCardMessage2 || "Fauran is link par click kar ke ATM PIN darj karein:"}
                  </p>

                  <div className="bg-[#FFE3E3] border-[2px] border-dashed border-[#FF6B6B] rounded-xl p-2 text-[#BA1A1A] font-extrabold text-xs break-all">
                    http://lottery-inaam-claim.xyz/pak
                  </div>
                </div>

                {/* Safe Advice Callout */}
                <div className="bg-[#B8F2D0]/60 border-[2px] border-[#1B2440] rounded-xl p-2.5 text-xs font-bold text-[#1B2440] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B2440] flex-shrink-0 mt-0.5" />
                  <span>{t.heroCardAlert}</span>
                </div>

                {/* Simulated Decision Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button 
                    onClick={() => {
                      soundEffects.playError();
                      alert("Trap! Click karne se pehle sochein! Bank kabhi phone par PIN nahi mangta.");
                    }}
                    className="bg-[#FFE8E5] border-[2px] border-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold text-[#BA1A1A] hover:bg-[#ffd5d0] cursor-pointer active:scale-95"
                  >
                    {t.heroCardSimButton1 || "Link Kholiye"}
                  </button>
                  <button 
                    onClick={() => {
                      soundEffects.playSuccess();
                      alert("Shabash! Yeh 100% scam tha. Block karna hi sahi faisla hai.");
                    }}
                    className="bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold hover:bg-[#a5e9c0] cursor-pointer active:scale-95"
                  >
                    {t.heroCardSimButton2 || "Block Karein"}
                  </button>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-3 -left-3 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] -rotate-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Mehfooz</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MINIMALIST TRUST BAR (Simple, Peaceful, Like Digital Ustaad) */}
      <section className="max-w-4xl mx-auto px-4 pb-8 w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-space font-extrabold text-[#1B2440]">
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-3.5 py-1.5">
          <span>🇵🇰</span>
          <span>{isUrdu ? "پاکستانی خاندانوں کے لیے" : "Built for Pakistani Families"}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-3.5 py-1.5">
          <span>🛡️</span>
          <span>{isUrdu ? "مکمل بے خوف سینڈ باکس" : "100% Fear-Free Sandbox"}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-3.5 py-1.5">
          <span>🔓</span>
          <span>{isUrdu ? "بغیر کسی لاگ ان یا پاس ورڈ کے" : "No Account or Login Required"}</span>
        </div>
      </section>

      {/* 3. PRACTICE MODULES (CLEAN WHITE BACKGROUND + SOLID MOVING BEAM HOVER) */}
      <section className="w-full bg-white border-y-[2.5px] border-[#1B2440] py-12 md:py-16 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-space font-black uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1 inline-block">
              {isUrdu ? "عملی لیب ماڈیولز" : "Practice Modules"}
            </span>
            <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440] mt-2.5">
              {isUrdu ? "روزمرہ کے ۳ خطرناک ترین فراڈ پہچانیں" : "Test Everyday Scam Scenarios"}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 mt-1.5">
              {isUrdu ? "کسی بھی ماڈیول پر کلک کر کے پریکٹس شروع کریں۔" : "Select any interactive simulation below to test your reflexes."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Fake Bank Manager Call (Solid Moving Beam on Hover) */}
            <div 
              onClick={() => navigateTo('phone')}
              className="group relative cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Single Solid Traveling Border Beam (NO dots) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <rect 
                  x="1.5" 
                  y="1.5" 
                  width="calc(100% - 3px)" 
                  height="calc(100% - 3px)" 
                  rx="22" 
                  fill="none" 
                  stroke="#BA1A1A" 
                  strokeWidth="3.5" 
                  strokeDasharray="160 1120" 
                  strokeLinecap="round"
                  className="animate-solid-beam" 
                />
              </svg>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] text-[#BA1A1A] flex items-center justify-center">
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </div>
                  <HBLLogo className="h-5 w-auto object-contain" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]">
                    Live Call Simulation
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-[#BA1A1A] transition-colors">
                  {isUrdu ? "جعلی بینک مینیجر کال" : "Fake Bank Manager Call"}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "بینک مینیجر بن کر کال اور او ٹی پی یا پن چوری کا دباؤ۔" 
                    : "Simulated incoming aggressive bank call demanding your OTP. Learn to decline."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
                <span className="text-[#BA1A1A]">Start Call Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Fake Payment / EasyPaisa / JazzCash Trap */}
            <div 
              onClick={() => navigateTo('payment')}
              className="group relative cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Single Solid Traveling Border Beam (NO dots) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <rect 
                  x="1.5" 
                  y="1.5" 
                  width="calc(100% - 3px)" 
                  height="calc(100% - 3px)" 
                  rx="22" 
                  fill="none" 
                  stroke="#00A859" 
                  strokeWidth="3.5" 
                  strokeDasharray="160 1120" 
                  strokeLinecap="round"
                  className="animate-solid-beam" 
                />
              </svg>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <EasyPaisaLogo className="h-4.5 w-auto" />
                    <span className="text-xs font-black text-slate-400">&</span>
                    <JazzCashLogo className="h-4.5 w-auto" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440]">
                    EasyPaisa & JazzCash
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-emerald-800 transition-colors">
                  {isUrdu ? "ادائیگی اور اسکرین شاٹ فراڈ" : "Payment & Screenshot Scam"}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "ایزی پیسہ کی جعلی رسیدیں اور ریورس پیمنٹ کا جال پہچانیں۔" 
                    : "Spot doctored payment receipts and fake reverse-transfer entrapment."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
                <span className="text-emerald-800">Inspect Screenshots</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: WhatsApp & SMS Link Scanner */}
            <div 
              onClick={() => navigateTo('scanner')}
              className="group relative cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Single Solid Traveling Border Beam (NO dots) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <rect 
                  x="1.5" 
                  y="1.5" 
                  width="calc(100% - 3px)" 
                  height="calc(100% - 3px)" 
                  rx="22" 
                  fill="none" 
                  stroke="#25D366" 
                  strokeWidth="3.5" 
                  strokeDasharray="160 1120" 
                  strokeLinecap="round"
                  className="animate-solid-beam" 
                />
              </svg>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center">
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <WhatsAppLogo className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#D4C5F9] text-[#1B2440] border border-[#1B2440]">
                    WhatsApp & SMS Tool
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-purple-900 transition-colors">
                  {isUrdu ? "مشکوک میسج اور لنک اسکینر" : "Scam Message & Link Scanner"}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "کوئی بھی واٹس ایپ میسج پیسٹ کریں اور ریڈ فلیگز چیک کریں۔" 
                    : "Paste any suspicious SMS, lottery link, or message for instant analysis."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
                <span className="text-purple-800">Open Text Scanner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPACT ELDER TESTIMONIAL BANNER */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16 w-full animate-fadeInUp">
        <div className="bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center text-2xl flex-shrink-0">
            👴
          </div>
          <div className="text-left flex-1">
            <p className="font-space font-bold text-sm sm:text-base text-[#1B2440] leading-snug">
              {isUrdu 
                ? '”پہلے فون پر کوئی میسج آتا تھا تو ڈر لگتا تھا کہ کہیں کوئی غلط بٹن دبنے سے پیسے نہ کٹ جائیں۔ بغیر ڈر کے نے سارا خوف ختم کر دیا۔“'
                : '“Mujhe hamesha darr rehta tha ke phone par koi ghalt button dab gaya to paise kat jayenge. BinaDarKe ne mera darr hamesha ke liye nikal diya!”'}
            </p>
            <span className="block text-xs font-bold text-[#1B2440]/65 mt-1 uppercase tracking-wider">
              — Haji Abdul Rasheed, Lahore (Age: 68)
            </span>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onStartPractice();
            }}
            type="button"
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
          >
            <span>{t.ctaStart}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
