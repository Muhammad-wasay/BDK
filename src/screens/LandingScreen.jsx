import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Volume2, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  HeartHandshake, 
  Smartphone, 
  Headphones,
  PhoneCall,
  ExternalLink,
  ShieldAlert,
  CreditCard,
  Search,
  Phone
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import soundEffects from '../utils/soundEffects';

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
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-14 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Pill Badge - Crisp 2.5px border, NO rear shadow */}
            <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border-[2.5px] border-[#1B2440] rounded-full px-4 py-1 text-xs font-space font-extrabold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#1B2440]" />
              <span>{t.heroTag}</span>
            </div>

            {/* Giant Headline */}
            <h1 className="font-space font-extrabold text-[40px] sm:text-[52px] md:text-[60px] text-[#1B2440] tracking-tight leading-[1.1]">
              {t.heroTitle1}{' '}
              <span className="font-caveat text-5xl sm:text-6xl md:text-7xl text-[#FF6B6B] underline decoration-[#FFF1A8] decoration-wavy underline-offset-8 inline-block">
                {t.heroTitleAccent}
              </span>
              {t.heroTitle2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#1B2440]/85 leading-relaxed max-w-xl font-bold">
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onStartPractice();
                }}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-3 px-8 h-14 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] font-space font-black text-lg border-[2.5px] border-[#1B2440] active:scale-98 transition-all group"
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
                className="cursor-pointer flex items-center justify-center gap-2.5 px-6 h-14 rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] font-space font-bold text-base border-[2.5px] border-[#1B2440] active:scale-98 transition-all"
              >
                <Volume2 className="w-5 h-5 text-[#1B2440]" />
                <span>{showAudioIntro ? t.ctaAudioStop : t.ctaAudio}</span>
              </button>
            </div>

            {/* Audio Explanation Drawer */}
            {showAudioIntro && (
              <div className="w-full max-w-xl animate-fadeIn">
                <UrduVoiceoverBar text={introAudioText} label={t.ctaAudio} language={language} />
              </div>
            )}

            {/* Reassurance Footer Note */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B2440]/75 pt-1">
              <Lock className="w-4 h-4 text-[#1B2440]" />
              <span>{t.heroSafeNote}</span>
            </div>
          </div>

          {/* Right Hero Phone Sandbox Preview (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] transform hover:scale-[1.01] transition-transform duration-300">
              
              {/* Phone Container: Clean 3px border, NO rear cardboard shadow */}
              <div className="w-full bg-[#FFFDF9] rounded-[36px] border-[3px] border-[#1B2440] p-4 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFF1A8] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B8F2D0] border border-[#1B2440]"></div>
                  </div>
                  <span className="text-[11px] font-space font-extrabold text-[#1B2440] bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-2.5 py-0.5 rounded-full">
                    {t.heroCardTitle}
                  </span>
                </div>

                {/* Simulated Message Bubble */}
                <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF6B6B] bg-[#FFE8E8] border-[1.5px] border-[#FF6B6B]/50 rounded-md px-2 py-0.5 w-fit">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.heroCardSender}</span>
                  </div>

                  <p className="font-space font-extrabold text-base text-[#1B2440] leading-snug">
                    {t.heroCardMessage1 || "Mubarak! Aapka 50,000 Inaam Nikla Hai!"}
                  </p>

                  <p className="text-xs font-bold text-[#1B2440]/80 leading-relaxed">
                    {t.heroCardMessage2 || "Fauran is link par click kar ke ATM PIN darj karein:"}
                  </p>

                  <div className="bg-[#FFE3E3] border-[2px] border-dashed border-[#FF6B6B] rounded-xl p-2 text-[#FF6B6B] font-extrabold text-xs break-all flex items-center gap-1.5">
                    <span className="underline">http://lottery-inaam-claim.xyz/pak</span>
                  </div>
                </div>

                {/* Safe Advice Callout */}
                <div className="bg-[#B8F2D0]/60 border-[2px] border-[#1B2440] rounded-xl p-3 text-xs font-bold text-[#1B2440] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B2440] flex-shrink-0 mt-0.5" />
                  <span>{t.heroCardAlert}</span>
                </div>

                {/* Simulated Decision Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button 
                    onClick={() => {
                      soundEffects.playError();
                      alert("Trap! Click karne se pehle sochein!");
                    }}
                    className="bg-[#FF6B6B]/20 border-[2px] border-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold text-[#1B2440] hover:bg-[#FF6B6B]/30 cursor-pointer"
                  >
                    {t.heroCardSimButton1 || "Link Kholiye"}
                  </button>
                  <button 
                    onClick={() => {
                      soundEffects.playSuccess();
                      alert("Shabash! Yeh 100% scam tha.");
                    }}
                    className="bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold hover:bg-[#a5e9c0] cursor-pointer"
                  >
                    {t.heroCardSimButton2 || "Block Karein"}
                  </button>
                </div>
              </div>

              {/* Floating Badges with Stitch borders */}
              <div className="absolute -top-3 -left-4 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] -rotate-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Mehfooz</span>
              </div>

              <div className="absolute -bottom-3 -right-4 bg-[#FFF1A8] border-[2px] border-[#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] rotate-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Real Money Loss</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE SIMULATORS & PRACTICE MODULES (FRIEND'S FEATURES INTEGRATION) */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 w-full border-t-[2.5px] border-[#1B2440]/20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-space font-black uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1">
            {isUrdu ? "عملی تربیتی ماڈیولز" : "Interactive Practice Modules"}
          </span>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B2440] mt-3">
            {isUrdu ? "روزمرہ کے خطرناک دھوکے خود آزما کر دیکھیں" : "Real-World Scams You Can Safely Test Yourself"}
          </h2>
          <p className="text-sm font-semibold text-[#1B2440]/75 mt-2">
            {isUrdu 
              ? "کسی بھی ماڈیول پر کلک کر کے ابھی ٹریننگ حاصل کریں — غلطی پر بھی کوئی نقصان نہیں ہوگا!" 
              : "Click any training simulator below to practice handling actual scam tactics risk-free."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: Fake Bank Call Simulator */}
          <div 
            onClick={() => navigateTo('phone')}
            className="group cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] text-[#BA1A1A] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]/40">
                  Live Interactive Call
                </span>
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440] group-hover:text-[#BA1A1A] transition-colors">
                {isUrdu ? "جعلی بینک مینیجر کال" : "Fake Bank Manager Call"}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {isUrdu 
                  ? "سمجھیں کہ فراڈیے کس طرح غصے اور جلدی میں آپ سے او ٹی پی یا پن مانگتے ہیں، اور فون پر کال کیسے کاٹنی ہے۔" 
                  : "Experience a simulated aggressive call from a fake bank manager demanding your OTP. Learn how to decline calmly."}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-[2px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
              <span className="text-[#BA1A1A]">Incoming Call Simulator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 2: Fake Payment / JazzCash Trap */}
          <div 
            onClick={() => navigateTo('payment')}
            className="group cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440]/40">
                  EasyPaisa & JazzCash
                </span>
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440] group-hover:text-amber-800 transition-colors">
                {isUrdu ? "جعلی ادائیگی اور اسکرین شاٹ فراڈ" : "Payment & Screenshot Scam"}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {isUrdu 
                  ? "پہچانیں کہ دھوکے باز ایڈیٹ شدہ رسیدیں اور جعلی ایس ایم ایس بھیج کر پیسے واپس مانگنے کا ڈرامہ کیسے کرتے ہیں۔" 
                  : "Spot doctored payment receipts, falsified wallet balance SMS messages, and reverse-payment entrapment."}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-[2px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
              <span className="text-amber-800">Screenshot Trap Test</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 3: Suspicious Message / Link Scanner */}
          <div 
            onClick={() => navigateTo('scanner')}
            className="group cursor-pointer bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4">
                <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full bg-[#D4C5F9] text-[#1B2440] border border-[#1B2440]/40">
                  Instant Heuristic Tool
                </span>
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440] group-hover:text-purple-900 transition-colors">
                {isUrdu ? "مشکوک میسج اور لنک اسکینر" : "Scam Message & Link Scanner"}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {isUrdu 
                  ? "کوئی بھی واٹس ایپ میسج یا ایس ایم ایس یہاں پیسٹ کریں — فوری طور پر خطرناک الفاظ اور جعلی لنکس کی نشاندہی ہوگی۔" 
                  : "Paste any suspicious SMS, lottery link, or WhatsApp message to instantly inspect red-flag urgency triggers."}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-[2px] border-[#1B2440]/15 flex items-center justify-between text-xs font-space font-black text-[#1B2440]">
              <span className="text-purple-800">Live Red-Flag Scanner</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 w-full border-t-[2.5px] border-[#1B2440]/20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-space font-black uppercase tracking-wider bg-[#D4C5F9] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1">
            {t.featuresTitle}
          </span>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B2440] mt-3">
            {t.featuresSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
                {t.feat1Title}
              </h3>
              <p className="text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {t.feat1Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t-[2px] border-[#1B2440]/20 flex items-center gap-2 text-xs font-space font-black text-[#1B2440]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Fear-Free Sandbox</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
                {t.feat2Title}
              </h3>
              <p className="text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {t.feat2Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t-[2px] border-[#1B2440]/20 flex items-center gap-2 text-xs font-space font-black text-[#1B2440]">
              <Volume2 className="w-4 h-4 text-amber-600" />
              <span>Audio Assistance</span>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFD3B6] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
                {t.feat3Title}
              </h3>
              <p className="text-sm font-semibold text-[#1B2440]/80 mt-2 leading-relaxed">
                {t.feat3Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t-[2px] border-[#1B2440]/20 flex items-center gap-2 text-xs font-space font-black text-[#1B2440]">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Real Life Scenarios</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIA CYBER CRIME EMERGENCY SUPPORT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 w-full border-t-[2.5px] border-[#1B2440]/20">
        <div className="bg-[#FFE8E5] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b-[2px] border-[#1B2440]/20">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#BA1A1A] text-white px-3 py-1 rounded-full text-xs font-space font-extrabold mb-2">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{t.fiaBadge}</span>
              </div>
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B2440]">
                {t.fiaTitle}
              </h2>
              <p className="font-nunito font-bold text-sm sm:text-base text-[#1B2440]/80 mt-1 max-w-2xl leading-relaxed">
                {t.fiaDesc}
              </p>
            </div>

            {/* Quick Action Dial Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="tel:1991"
                className="inline-flex items-center justify-center gap-2 bg-[#BA1A1A] hover:bg-[#a01616] text-white border-[2px] border-[#1B2440] font-space font-black text-sm px-5 py-3 rounded-2xl cursor-pointer active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.fiaCallBtn}</span>
              </a>

              <button
                onClick={onOpenHelpline}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1B2440] border-[2px] border-[#1B2440] font-space font-bold text-sm px-4 py-3 rounded-2xl cursor-pointer active:scale-95 transition-all"
              >
                <span>Bank Helplines</span>
              </button>
            </div>
          </div>

          {/* 3 Step Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFE8E5] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#BA1A1A]">
                1
              </div>
              <h4 className="font-space font-extrabold text-base text-[#1B2440]">
                {t.fiaStep1Title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
                {t.fiaStep1Desc}
              </p>
            </div>

            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFE8E5] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#BA1A1A]">
                2
              </div>
              <h4 className="font-space font-extrabold text-base text-[#1B2440]">
                {t.fiaStep2Title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
                {t.fiaStep2Desc}
              </p>
            </div>

            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFE8E5] border border-[#1B2440] flex items-center justify-center font-space font-black text-xs text-[#BA1A1A]">
                3
              </div>
              <h4 className="font-space font-extrabold text-base text-[#1B2440]">
                {t.fiaStep3Title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
                {t.fiaStep3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT PLATFORM SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 w-full border-t-[2.5px] border-[#1B2440]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="bg-[#FFF1A8] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white border-[2px] border-[#1B2440] flex items-center justify-center text-2xl">
                🇵🇰
              </div>
              <h3 className="font-space font-extrabold text-2xl text-[#1B2440]">
                BinaDarKe Mission
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#1B2440]/85 mt-2 leading-relaxed">
                "Digital dunya mein humare waldein ko darr kar nahi, balke fakhar aur hoslay ke sath rehna chahiye."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440] px-3.5 py-1 rounded-full text-xs font-space font-black w-fit">
              <HeartHandshake className="w-4 h-4" />
              <span>{t.aboutTag}</span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[#1B2440]">
              {t.aboutTitle}
            </h2>
            <p className="font-nunito font-bold text-base sm:text-lg text-[#1B2440]/85 leading-relaxed">
              {t.aboutP1}
            </p>
            <p className="font-nunito font-semibold text-sm sm:text-base text-[#1B2440]/80 leading-relaxed">
              {t.aboutP2}
            </p>
          </div>
        </div>
      </section>

      {/* 6. DATA PRIVACY GUARANTEE SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16 w-full border-t-[2.5px] border-[#1B2440]/20 pt-12">
        <div className="bg-[#B8F2D0] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-2 bg-white text-[#1B2440] border-[2px] border-[#1B2440] px-3 py-1 rounded-full text-xs font-space font-extrabold w-fit mb-3">
            <Lock className="w-3.5 h-3.5 text-[#1B2440]" />
            <span>{t.privacyTag}</span>
          </div>

          <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
            {t.privacyTitle}
          </h2>
          <p className="font-nunito font-bold text-sm sm:text-base text-[#1B2440]/85 mt-1 max-w-2xl leading-relaxed">
            {t.privacyP1}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1B2440]">
                {t.privacyPoint1}
              </p>
            </div>

            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1B2440]">
                {t.privacyPoint2}
              </p>
            </div>

            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1B2440]">
                {t.privacyPoint3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ELDER STORY BANNER */}
      <section className="max-w-4xl mx-auto px-4 pb-16 w-full">
        <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center text-3xl flex-shrink-0">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div className="text-left flex-1">
            <p className="font-space font-bold text-base sm:text-lg text-[#1B2440] leading-snug">
              {isUrdu 
                ? '”پہلے فون پر کوئی میسج آتا تھا تو ڈر لگتا تھا کہ کہیں کوئی غلط بٹن دبنے سے پیسے نہ کٹ جائیں۔ بغیر ڈر کے نے سارا خوف ختم کر دیا۔“'
                : '“Mujhe hamesha darr rehta tha ke phone par koi ghalt button dab gaya to paise kat jayenge. BinaDarKe ne mera darr hamesha ke liye nikal diya!”'}
            </p>
            <span className="block text-xs font-bold text-[#1B2440]/70 mt-1 uppercase tracking-wider">
              — Haji Abdul Rasheed, Lahore (Age: 68)
            </span>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onStartPractice();
            }}
            type="button"
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
          >
            <span>{t.ctaStart}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
