import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { GUIDED_SCENARIOS_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';

export default function GuidedPracticeScreen({ onNextStep, onGoHome, babaJiMode, language = 'roman' }) {
  const [activeFlag, setActiveFlag] = useState(null);
  const [showSimulatedWarning, setShowSimulatedWarning] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const scenario = GUIDED_SCENARIOS_DATA[language] || GUIDED_SCENARIOS_DATA.roman;
  const isUrdu = language === 'urdu';

  const handleSpotClick = (flagId) => {
    setActiveFlag(flagId);
    setShowSimulatedWarning(false);
  };

  const handleSimulatedLinkClick = () => {
    setShowSimulatedWarning(true);
    setActiveFlag('link');
  };

  const currentAudioText = activeFlag
    ? scenario.redFlags.find((f) => f.id === activeFlag)?.audioText || ''
    : isUrdu
      ? "غور سے دیکھیں! اس واٹس ایپ پیغام میں ۴ اہم نشانات دیے گئے ہیں۔ اسکرین پر موجود نمایاں الفاظ پر کلک کر کے جانیے کہ فراڈ کہاں چھپا ہے۔"
      : "Ghor se dekhein! Is fake WhatsApp message par 4 ahem nishan diye gaye hain. Screen par diye gaye alfaz par click karein aur janiye ke fraud kaise pehchana jaye.";

  return (
    <div 
      className={`max-w-6xl mx-auto px-4 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onGoHome}
            className="w-10 h-10 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
            title="Back to Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-space font-extrabold uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-2.5 py-0.5">
                {t.guidedTag}
              </span>
              <span className="text-xs text-[#1B2440]/70 font-bold">Step 1 of 2</span>
            </div>
            <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440] mt-0.5">
              {t.guidedTitle}
            </h1>
          </div>
        </div>

        <button
          onClick={onNextStep}
          className="px-5 py-2.5 rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-xs flex items-center gap-2 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>{t.guidedNextBtn}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Voiceover Bar */}
      <div className="mb-6">
        <UrduVoiceoverBar text={currentAudioText} label="Ustaad Audio Guide" language={language} />
      </div>

      {/* Main 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Simulated Phone (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[360px] bg-[#FFFDF9] rounded-[36px] border-[3px] border-[#1B2440] p-4 flex flex-col gap-3">
            {/* Phone Top Status */}
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFF1A8] border border-[#1B2440]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8F2D0] border border-[#1B2440]"></div>
              </div>
              <span className="text-[11px] font-space font-extrabold bg-[#FFF1A8] border-[1.5px] border-[#1B2440] text-[#1B2440] rounded-full px-2.5 py-0.5">
                WhatsApp Simulator
              </span>
            </div>

            {/* Sender Info */}
            <div className="flex items-center gap-2 px-1">
              <div className="w-9 h-9 rounded-full bg-[#FFD3B6] border-[2px] border-[#1B2440] flex items-center justify-center font-bold text-xs text-[#1B2440]">
                👤
              </div>
              <div className="flex flex-col">
                <span className="font-space font-extrabold text-xs text-[#1B2440] leading-none">
                  {scenario.sender}
                </span>
                <span className="text-[10px] font-bold text-[#FF6B6B] mt-0.5">
                  {scenario.senderStatus}
                </span>
              </div>
            </div>

            {/* Chat Bubble with Interactive Hotspots */}
            <div className="bg-[#FFF4E0] border-[2.5px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2.5 text-[#1B2440]">
              <p className="text-sm font-extrabold leading-relaxed">
                {scenario.rawMessage.greeting}{' '}
                <button
                  type="button"
                  onClick={() => handleSpotClick('lalach')}
                  className={`cursor-pointer inline-block px-2 py-0.5 rounded-lg font-black border-[2px] transition-all ${
                    activeFlag === 'lalach'
                      ? 'bg-[#FFF1A8] border-[#1B2440] ring-2 ring-[#FF6B6B] scale-105'
                      : 'bg-[#FFF1A8] border-dashed border-[#1B2440] hover:scale-105'
                  }`}
                >
                  👉 {scenario.rawMessage.highlightAmount}
                </button>{' '}
                {scenario.rawMessage.bodyText}
              </p>

              <p className="text-sm font-extrabold leading-relaxed">
                <button
                  type="button"
                  onClick={() => handleSpotClick('pin')}
                  className={`cursor-pointer inline-block px-2 py-0.5 rounded-lg font-black border-[2px] transition-all mr-1 ${
                    activeFlag === 'pin'
                      ? 'bg-[#FFE8E5] border-[#BA1A1A] text-[#BA1A1A] ring-2 ring-[#BA1A1A] scale-105'
                      : 'bg-[#FFE8E5] border-dashed border-[#BA1A1A] text-[#BA1A1A] hover:scale-105'
                  }`}
                >
                  🛑 {scenario.rawMessage.highlightPin}
                </button>
                <button
                  type="button"
                  onClick={() => handleSpotClick('jaldi')}
                  className={`cursor-pointer inline-block px-2 py-0.5 rounded-lg font-black border-[2px] transition-all ${
                    activeFlag === 'jaldi'
                      ? 'bg-[#D4C5F9] border-[#1B2440] ring-2 ring-[#1B2440] scale-105'
                      : 'bg-[#D4C5F9] border-dashed border-[#1B2440] hover:scale-105'
                  }`}
                >
                  ⏳ {scenario.rawMessage.highlightUrgency}
                </button>
              </p>

              {/* Suspicious Link Sandbox */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleSimulatedLinkClick}
                  className={`w-full text-left p-2.5 rounded-xl border-[2px] transition-all cursor-pointer ${
                    activeFlag === 'link'
                      ? 'bg-[#FFE3E3] border-[#FF6B6B] ring-2 ring-[#FF6B6B]'
                      : 'bg-[#FFE3E3] border-dashed border-[#FF6B6B] hover:bg-[#ffdcdc]'
                  }`}
                >
                  <span className="font-space font-extrabold text-xs text-[#FF6B6B] block underline break-all">
                    {scenario.rawMessage.fakeLink}
                  </span>
                  <span className="block text-[11px] text-[#1B2440] font-black mt-1">
                    {scenario.rawMessage.linkText}
                  </span>
                </button>
              </div>

              <div className="flex justify-end text-[10px] text-[#1B2440]/60 font-bold pt-0.5">
                <span>{scenario.simInfo}</span>
              </div>
            </div>

            {/* Simulated Danger Popup Banner */}
            {showSimulatedWarning && (
              <div className="bg-[#FFE8E5] border-[2.5px] border-[#BA1A1A] p-3 rounded-xl animate-fadeIn">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-space font-extrabold text-xs text-[#BA1A1A] block">
                      {isUrdu ? 'رک جائیے! (محفوظ سینڈ باکس الرٹ)' : 'Ruk Jayiye! (Safe Sandbox Alert)'}
                    </span>
                    <p className="text-xs text-[#1B2440] font-bold leading-snug mt-0.5">
                      {isUrdu 
                        ? 'اصلی زندگی میں اس لنک پر کلک کرنے سے آپ کا موبائل ڈیٹا یا پاس ورڈ چوری ہو سکتا تھا!'
                        : 'Asli zindagi mein is link par click karne se mobile hack ya password chori ho sakta tha! Lekin yahan aap 100% mehfooz hain.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="text-xs text-[#1B2440]/70 font-bold mt-3 text-center">
            {t.guidedSubtitle}
          </p>
        </div>

        {/* Right Column: Breakdown Cards (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440] px-3 py-1 rounded-full text-xs font-space font-black mb-2">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{t.guidedAdviceTitle}</span>
              </div>
              <h2 className="font-space font-extrabold text-xl sm:text-2xl text-[#1B2440]">
                {scenario.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 mt-1 font-bold">
                {t.guidedAdviceSubtitle}
              </p>
            </div>

            {/* 4 Cards */}
            <div className="space-y-3">
              {scenario.redFlags.map((flag) => {
                const isSelected = activeFlag === flag.id;
                return (
                  <div
                    key={flag.id}
                    onClick={() => setActiveFlag(flag.id)}
                    className={`p-4 rounded-2xl border-[2.5px] border-[#1B2440] transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF1A8] ring-2 ring-[#1B2440] scale-[1.01]'
                        : 'bg-white hover:bg-[#FFF4E0]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#1B2440] text-white flex items-center justify-center font-space font-black text-xs flex-shrink-0">
                        {flag.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-1">
                          <span className="font-space font-extrabold text-sm text-[#1B2440]">
                            {flag.title}
                          </span>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FFF4E0] text-[#1B2440] border-[1.5px] border-[#1B2440]">
                            {flag.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1B2440]/85 mt-1 leading-relaxed font-semibold">
                          {flag.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reassurance Rule Box */}
            <div className="bg-[#B8F2D0] border-[2px] border-[#1B2440] p-4 rounded-2xl flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#1B2440] flex-shrink-0" />
              <div>
                <span className="font-space font-black text-xs text-[#1B2440] block uppercase">
                  {t.guidedRuleTitle}
                </span>
                <p className="text-xs sm:text-sm text-[#1B2440] font-bold mt-0.5">
                  {t.guidedRuleDesc}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onNextStep}
            type="button"
            className="w-full bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] border-[2.5px] border-[#1B2440] py-4 px-6 rounded-2xl active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer font-space font-black text-sm"
          >
            <span>{t.guidedNextBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
