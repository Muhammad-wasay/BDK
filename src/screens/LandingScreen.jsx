import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Volume2,
  VolumeX,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  HeartHandshake,
  Smartphone,
  Headphones
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';

export default function LandingScreen({ onStartPractice, onOpenHelpline, babaJiMode, language = 'roman' }) {
  const [showAudioIntro, setShowAudioIntro] = useState(false);
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const introAudioMap = {
    roman: "As-salamu alaykum! BinaDarKe mein khush-aamdeed. Ye waldein aur buzurgon ke liye ek mehfooz jagah hai jahan aap bila kisi khauf ke fake WhatsApp messages aur bank scams pehchanna seekh sakte hain. Practice Shuru Karein button par click karke aazmayein!",
    urdu: "السلام علیکم! بغیر ڈر کے پلیٹ فارم پر خوش آمدید۔ یہ والدین اور بزرگوں کے لیے مکمل محفوظ ماحول ہے جہاں آپ بغیر کسی خوف کے ڈیجیٹل دھوکہ دہی اور فراڈ پہچاننا سیکھ سکتے ہیں۔ نیچے دیے گئے بٹن پر کلک کر کے مشق شروع کریں۔",
    en: "Welcome to BinaDarKe! A safe, fear-free training sandbox designed for elders and families to recognize everyday online scams and phishing threats without any financial risk. Click Start Practice to begin."
  };

  const introAudioText = introAudioMap[language] || introAudioMap.roman;

  return (
    <div
      className={`w-full flex-1 flex flex-col ${babaJiMode ? 'elder-active' : ''} ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-14 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Pill Badge with Stitch black outline */}
            <div className="inline-flex items-center gap-2 bg-[#B8F2D0] text-[#1B2440] border-[2.5px] border-[#1B2440] rounded-full px-4 py-1 shadow-[2px_2px_0px_#1B2440] text-xs font-space font-extrabold uppercase tracking-wide">
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
                onClick={onStartPractice}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-3 px-8 h-14 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] font-space font-black text-lg border-[2.5px] border-[#1B2440] shadow-[3px_3px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#1B2440] transition-all group"
              >
                <span>{t.ctaStart}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowAudioIntro(!showAudioIntro)}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-2.5 px-6 h-14 rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] font-space font-bold text-base border-[2.5px] border-[#1B2440] shadow-[2px_2px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5 transition-all"
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

              {/* Phone Container with Stitch 3px Outline */}
              <div className="w-full bg-[#FFFDF9] rounded-[36px] border-[3px] border-[#1B2440] shadow-[3px_3px_0px_#1B2440] p-4 flex flex-col gap-3">
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
                <div className="bg-[#FFF4E0] border-[2.5px] border-[#1B2440] rounded-2xl p-4 shadow-[1.5px_1.5px_0px_#1B2440] flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF6B6B] bg-[#FFE8E8] border-[1.5px] border-[#FF6B6B]/50 rounded-md px-2 py-0.5 w-fit">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.heroCardSender}</span>
                  </div>

                  <p className="font-space font-extrabold text-base text-[#1B2440] leading-snug">
                    {t.heroCardMessage1}
                  </p>

                  <p className="text-xs font-bold text-[#1B2440]/80 leading-relaxed">
                    {t.heroCardMessage2}
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
                  <div className="bg-[#FF6B6B]/20 border-[2px] border-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold text-[#1B2440]">
                    {t.heroCardSimButton1}
                  </div>
                  <div className="bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] rounded-xl py-2 px-2 text-center text-xs font-space font-extrabold shadow-[1.5px_1.5px_0px_#1B2440]">
                    {t.heroCardSimButton2}
                  </div>
                </div>
              </div>

              {/* Floating Badges with Stitch borders */}
              <div className="absolute -top-3 -left-4 bg-[#B8F2D0] border-[2px] border-[#1B2440] shadow-[2px_2px_0px_#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] -rotate-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Mehfooz</span>
              </div>

              <div className="absolute -bottom-3 -right-4 bg-[#FFF1A8] border-[2px] border-[#1B2440] shadow-[2px_2px_0px_#1B2440] rounded-xl px-3 py-1 flex items-center gap-1.5 text-xs font-space font-black text-[#1B2440] rotate-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Real Money Loss</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 BENTO REASONS SECTION with Stitch Outlines */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 w-full border-t-[2.5px] border-[#1B2440]/20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-space font-black uppercase tracking-wider bg-[#D4C5F9] text-[#1B2440] border-[2px] border-[#1B2440] rounded-full px-3.5 py-1 shadow-[1.5px_1.5px_0px_#1B2440]">
            {t.featuresTitle}
          </span>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B2440] mt-3">
            {t.featuresSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1B2440]">
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

          {/* Bento Card 2 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1B2440]">
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

          {/* Bento Card 3 */}
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFD3B6] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1B2440]">
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

      {/* Elder Story Banner */}
      <section className="max-w-4xl mx-auto px-4 pb-16 w-full">
        <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 shadow-[2px_2px_0px_#1B2440] flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center text-3xl flex-shrink-0 shadow-[1.5px_1.5px_0px_#1B2440]">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div className="text-left flex-1">
            <p className="font-space font-bold text-base sm:text-lg text-[#1B2440] leading-snug">
              {t.elderStory}
            </p>
            <span className="block text-xs font-bold text-[#1B2440]/70 mt-1 uppercase tracking-wider">
              — Haji Abdul Rasheed, Lahore (Age: 68)
            </span>
          </div>
          <button
            onClick={onStartPractice}
            type="button"
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>{t.ctaStart}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
