import { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Volume2, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Users,
  Phone,
  CreditCard,
  Search
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { BRAND } from '../data/brand';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import Testimonials from '../components/Testimonials';
import soundEffects from '../utils/soundEffects';
import { EasyPaisaLogo, JazzCashLogo, WhatsAppLogo, HBLLogo } from '../components/BrandLogos';

export default function LandingScreen({ 
  onStartPractice, 
  onGoToScreen,
  babaJiMode, 
  language = 'roman' 
}) {
  const [showAudioIntro, setShowAudioIntro] = useState(false);
  const [simFeedback, setSimFeedback] = useState(null); // { text, isScam }
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const introAudioMap = {
    roman: `As-salamu alaykum! ${BRAND.roman} mein khush-aamdeed. Ye waldein aur buzurgon ke liye ek mehfooz jagah hai jahan aap bila kisi khauf ke fake WhatsApp messages aur bank scams pehchanna seekh sakte hain. Practice Shuru Karein button par click karke aazmayein!`,
    urdu: `السلام علیکم! ${BRAND.urdu} پلیٹ فارم پر خوش آمدید۔ یہ والدین اور بزرگوں کے لیے مکمل محفوظ ماحول ہے جہاں آپ بغیر کسی خوف کے ڈیجیٹل دھوکہ دہی اور فراڈ پہچاننا سیکھ سکتے ہیں۔ نیچے دیے گئے بٹن پر کلک کر کے مشق شروع کریں۔`,
    en: `Welcome to ${BRAND.en}! A free practice space for families and elders to recognize everyday online scams and phishing threats without any financial risk. Click Start Practice to begin.`
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
      {/* 1. CLEAN HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-10 md:py-14 w-full animate-fadeInUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            {/* Clean Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1 text-xs font-space font-extrabold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#1B2440]" />
              <span>{t.heroTag}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-space font-extrabold text-[36px] sm:text-[46px] md:text-[54px] text-[#1B2440] tracking-tight leading-[1.15]">
              {t.heroTitle1}{' '}
              <span className="font-caveat text-5xl sm:text-6xl md:text-7xl text-[#BA1A1A] underline decoration-[#B8F2D0] decoration-wavy underline-offset-8 inline-block">
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
                className="cursor-pointer flex items-center justify-center gap-3 px-8 min-h-[48px] rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] font-space font-black text-base sm:text-lg border-[2.5px] border-[#1B2440] active:scale-98 transition-all group"
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
                className="cursor-pointer flex items-center justify-center gap-2 px-5 min-h-[48px] rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] font-space font-bold text-sm sm:text-base border-[2px] border-[#1B2440] active:scale-98 transition-all"
              >
                <Volume2 className="w-5 h-5 text-[#1B2440]" />
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
            <div className="relative w-full max-w-[340px]">
              
              {/* Phone Container */}
              <div className="w-full bg-white rounded-[36px] border-[3px] border-[#1B2440] p-4 flex flex-col gap-3 shadow-[3px_3px_0px_#1B2440]">
                {/* Header with WhatsApp Logo */}
                <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/15">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B8F2D0] border border-[#1B2440]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1B2440] border border-[#1B2440]"></div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#B8F2D0] border border-[#1B2440] px-3 py-1 rounded-full">
                    <WhatsAppLogo className="w-4 h-4" />
                    <span className="text-xs font-space font-extrabold text-[#1B2440]">
                      WhatsApp Trap
                    </span>
                  </div>
                </div>

                {/* Simulated Message Bubble */}
                <div className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#BA1A1A] bg-[#FFE8E5] border border-[#BA1A1A]/30 rounded-md px-2 py-0.5 w-fit">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.heroCardSender}</span>
                  </div>

                  <p className="font-space font-extrabold text-sm sm:text-base text-[#1B2440] leading-snug">
                    {t.heroCardMessage1 || "Mubarak! Aapka 50,000 Inaam Nikla Hai!"}
                  </p>

                  <p className="text-xs sm:text-sm font-bold text-[#1B2440]/80 leading-relaxed">
                    {t.heroCardMessage2 || "Fauran is link par click kar ke ATM PIN darj karein:"}
                  </p>

                  <div className="bg-[#FFE3E3] border-[2px] border-dashed border-[#FF6B6B] rounded-xl p-2 text-[#BA1A1A] font-extrabold text-xs break-all">
                    http://lottery-inaam-claim.xyz/pak
                  </div>
                </div>

                {/* Safe Advice Callout */}
                <div className="bg-[#B8F2D0]/60 border-[2px] border-[#1B2440] rounded-xl p-3 text-xs sm:text-sm font-bold text-[#1B2440] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B2440] flex-shrink-0 mt-0.5" />
                  <span>{t.heroCardAlert}</span>
                </div>

                {/* Simulated Feedback Banner (in-place instead of browser alert) */}
                {simFeedback && (
                  <div className={`p-3 rounded-xl border-[2px] border-[#1B2440] text-xs sm:text-sm font-bold animate-fadeIn ${
                    simFeedback.isScam 
                      ? 'bg-[#B8F2D0] text-[#0F5A3E]' 
                      : 'bg-[#FFE8E5] text-[#BA1A1A]'
                  }`}>
                    {simFeedback.text}
                  </div>
                )}

                {/* Simulated Decision Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button 
                    onClick={() => {
                      soundEffects.playError();
                      setSimFeedback({
                        isScam: false,
                        text: isUrdu 
                          ? "خبردار! یہ ایک ٹریپ ہے۔ بینک کبھی بھی فون یا میسج پر پن یا او ٹی پی نہیں مانگتا۔" 
                          : "Trap! Real banks will never demand an ATM PIN or OTP over SMS or WhatsApp."
                      });
                    }}
                    className="min-h-[48px] bg-[#FFE8E5] border-[2px] border-[#1B2440] rounded-xl py-2 px-2 text-center text-xs sm:text-sm font-space font-extrabold text-[#BA1A1A] hover:bg-[#ffd5d0] cursor-pointer active:scale-95"
                  >
                    {t.heroCardSimButton1 || "Link Kholiye"}
                  </button>
                  <button 
                    onClick={() => {
                      soundEffects.playSuccess();
                      setSimFeedback({
                        isScam: true,
                        text: isUrdu 
                          ? "شاباش! یہ ۱۰۰٪ فراڈ تھا۔ ایسے پیغامات کو فوراً بلاک کر دینا ہی درست فیصلہ ہے۔" 
                          : "Well done! Blocking unknown lottery claims immediately is the correct safe response."
                      });
                    }}
                    className="min-h-[48px] bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] rounded-xl py-2 px-2 text-center text-xs sm:text-sm font-space font-extrabold hover:bg-[#a5e9c0] cursor-pointer active:scale-95"
                  >
                    {t.heroCardSimButton2 || "Block Karein"}
                  </button>
                </div>

                <p className="text-center text-xs font-bold text-[#1B2440]/60 pt-1">
                  {isUrdu 
                    ? "پریکٹس مثال: کچھ بھی اصل نہیں بھیجا جاتا۔" 
                    : "Practice only: nothing real is sent."}
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] -rotate-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Practice Space</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MINIMALIST TRUST BAR */}
      <section className="max-w-4xl mx-auto px-4 pb-8 w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-space font-extrabold text-[#1B2440]">
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-4 py-2">
          <Users className="w-4 h-4 text-[#0F5A3E]" />
          <span>{isUrdu ? "پاکستانی خاندانوں کے لیے" : "Built for Pakistani Families"}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-4 py-2">
          <ShieldCheck className="w-4 h-4 text-[#0F5A3E]" />
          <span>{isUrdu ? "پریکٹس سینڈ باکس — صفر مالی خطرہ" : "Practice Only: Zero Financial Risk"}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#1B2440] rounded-full px-4 py-2">
          <Lock className="w-4 h-4 text-[#0F5A3E]" />
          <span>{isUrdu ? "بغیر کسی لاگ ان یا پاس ورڈ کے" : "No Account or Login Required"}</span>
        </div>
      </section>

      {/* 3. PRACTICE MODULES */}
      <section className="w-full bg-[#FFF4E0] border-y-[2px] border-[#1B2440]/15 py-12 md:py-16 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-space font-black uppercase tracking-wider bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1 inline-block">
              {isUrdu ? "عملی لیب ماڈیولز" : "Practice Modules"}
            </span>
            <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440] mt-2.5">
              {isUrdu ? "روزمرہ کے ۳ خطرناک ترین فراڈ پہچانیں" : "Test Everyday Scam Scenarios"}
            </h2>
            <p className="text-sm font-semibold text-[#1B2440]/75 mt-1.5">
              {isUrdu ? "کسی بھی ماڈیول پر کلک کر کے پریکٹس شروع کریں۔" : "Select any interactive simulation below to test your reflexes."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Fake Bank Manager Call */}
            <div 
              onClick={() => navigateTo('phone')}
              className="group cursor-pointer bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] text-[#BA1A1A] flex items-center justify-center">
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </div>
                  <HBLLogo className="h-7 sm:h-8 w-auto object-contain" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]">
                    Live Call Simulation
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-[#BA1A1A] transition-colors">
                  {isUrdu ? "جعلی بینک مینیجر کال" : "Fake Bank Manager Call"}
                </h3>
                <p className="text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "بینک مینیجر بن کر کال اور او ٹی پی یا پن چوری کا دباؤ۔" 
                    : "Simulated incoming aggressive bank call demanding your OTP. Learn to decline."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs sm:text-sm font-space font-black text-[#1B2440]">
                <span className="text-[#BA1A1A]">Start Call Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Fake Payment / EasyPaisa / JazzCash Trap */}
            <div 
              onClick={() => navigateTo('payment')}
              className="group cursor-pointer bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <EasyPaisaLogo className="h-7 sm:h-8 w-auto" />
                    <span className="text-xs font-black text-slate-400">&</span>
                    <JazzCashLogo className="h-7 sm:h-8 w-auto" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#B8F2D0] text-[#1B2440] border border-[#1B2440]">
                    EasyPaisa & JazzCash
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-[#0F5A3E] transition-colors">
                  {isUrdu ? "ادائیگی اور اسکرین شاٹ فراڈ" : "Payment & Screenshot Scam"}
                </h3>
                <p className="text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "ایزی پیسہ کی جعلی رسیدیں اور ریورس پیمنٹ کا جال پہچانیں۔" 
                    : "Spot doctored payment receipts and fake reverse-transfer entrapment."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs sm:text-sm font-space font-black text-[#1B2440]">
                <span className="text-[#0F5A3E]">Inspect Screenshots</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: WhatsApp & SMS Link Scanner */}
            <div 
              onClick={() => navigateTo('scanner')}
              className="group cursor-pointer bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center">
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <WhatsAppLogo className="w-8 h-8 object-contain" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#B8F2D0] text-[#1B2440] border border-[#1B2440]">
                    WhatsApp & SMS Tool
                  </span>
                </div>

                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] group-hover:text-[#0F5A3E] transition-colors">
                  {isUrdu ? "مشکوک میسج اور لنک اسکینر" : "Scam Message & Link Scanner"}
                </h3>
                <p className="text-sm font-semibold text-[#1B2440]/80 mt-1.5 leading-relaxed">
                  {isUrdu 
                    ? "کوئی بھی واٹس ایپ میسج پیسٹ کریں اور ریڈ فلیگز چیک کریں۔" 
                    : "Paste any suspicious SMS, lottery link, or message for instant analysis."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-[1.5px] border-[#1B2440]/15 flex items-center justify-between text-xs sm:text-sm font-space font-black text-[#1B2440]">
                <span className="text-[#0F5A3E]">Open Text Scanner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Trademark Disclaimer */}
          <div className="mt-6 text-center text-xs font-bold text-[#1B2440]/65">
            {isUrdu 
              ? "پریکٹس کی مثال۔ یہ پلیٹ فارم ان کمپنیوں (EasyPaisa, JazzCash, HBL, WhatsApp) سے باضابطہ طور پر منسلک یا تصدیق شدہ نہیں ہے۔"
              : "Practice example. BinaDarKe is an independent educational tool, not affiliated with or endorsed by EasyPaisa, JazzCash, HBL, or WhatsApp."}
          </div>
        </div>
      </section>

      {/* 4. TARGET USER UNDERSTANDING & COMMUNITY TESTIMONIALS */}
      <Testimonials language={language} babaJiMode={babaJiMode} variant="landing" />

      {/* Floating Quick Action CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 pb-12 w-full flex justify-center">
        <button
          onClick={() => {
            soundEffects.playClick();
            onStartPractice();
          }}
          type="button"
          className="w-full sm:w-auto px-8 min-h-[52px] rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2.5px] border-[#1B2440] font-space font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer shadow-[3px_3px_0px_#1B2440] active:scale-98 transition-all"
        >
          <span>{t.ctaStart}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
