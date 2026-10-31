import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  RefreshCw, 
  Share2, 
  ArrowRight, 
  Lock, 
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { SOLO_SCENARIOS_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';

export default function ResultScreen({
  score,
  totalQuestions,
  answers,
  onRetry,
  onGoHome,
  onOpenCertificate,
  babaJiMode,
  language = 'roman'
}) {
  const [selectedTip, setSelectedTip] = useState(null);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const scenarios = SOLO_SCENARIOS_DATA[language] || SOLO_SCENARIOS_DATA.roman;
  const isUrdu = language === 'urdu';

  const finalScore = score !== undefined ? score : 4;
  const total = totalQuestions || scenarios.length;
  const percentage = Math.round((finalScore / total) * 100);

  const celebrationAudioMap = {
    roman: `Mubarak ho! Aapne ${total} mein se ${finalScore} messages bilkul sahi pehchane hain. Aapka confidence level ${percentage} feesad hai. Ab aap bila darr mobile istemal kar sakte hain!`,
    urdu: `مبارک ہو! آپ نے ${total} میں سے ${finalScore} پیغامات بالکل درست پہچانے ہیں۔ آپ کی کامیابی کی شرح ${percentage} فیصد ہے۔ اب آپ بغیر کسی خوف کے موبائل استعمال کر سکتے ہیں۔`,
    en: `Congratulations! You correctly identified ${finalScore} out of ${total} scam scenarios. Your digital confidence score is ${percentage}%. You are well equipped to stay safe online!`
  };

  const celebrationAudioText = celebrationAudioMap[language] || celebrationAudioMap.roman;

  const handleWhatsAppFamilyShare = () => {
    const text = isUrdu
      ? `السلام علیکم! میں نے بغیر ڈر کے (BinaDarKe) پلیٹ فارم پر مشق کی اور ${finalScore}/${total} اسکور حاصل کیا! اب مجھے ڈیجیٹل فراڈ کے حربوں کی پہچان ہو گئی ہے۔ آپ بھی چیک کریں: https://binadarke.pk

🎯 چیلنج: امی/اببا آپ بھی یہ ٹیسٹ کریں اور سند حاصل کریں!`
      : `Assalamu Alaikum! Maine BinaDarKe Anti-Scam Sandbox par practice ki aur ${finalScore}/${total} score hasil kiya! Ab mujhe fake lottery, bank OTP, aur fraud messages ki pehchan ho gayi hai. Check karein: https://binadarke.pk

🎯 Challenge: Ammi/Abba aap bhi ye test karein aur certificate hasil karein!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppChallenge = () => {
    const text = isUrdu
      ? `🎯 BinaDarKe Family Challenge!

اسلام علیکم! میں نے بغیر ڈر کے پلیٹ فارم پر ڈیجیٹل فراڈ پہچاننا سیکھا۔ اب آپ بھی سیکھیں اور اپنے میں اعتماد پیدا کریں!

📱 یہاں کھیلیں: https://binadarke.pk

🎁 مفت تعلیمی سینڈ باکس - کوئی نقصان نہیں!`
      : `🎯 BinaDarKe Family Challenge!

Assalamu Alaikum! Maine BinaDarKe par digital scams pehchanna seekha. Ab aap bhi seekhein aur apne mein imaan paida karein!

📱 Play here: https://binadarke.pk

🎁 Free educational sandbox - No risk involved!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className={`max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Audio guide */}
      <div className="mb-6">
        <UrduVoiceoverBar text={celebrationAudioText} label={isUrdu ? "نتیجہ سنیں" : "Listen to Result"} language={language} />
      </div>

      {/* Hero Celebration Card with Stitch Borders */}
      <div className="relative w-full bg-[#B8F2D0] border-[2.5px] border-[#1B2440] text-[#1B2440] rounded-3xl p-6 sm:p-8 shadow-[2.5px_2.5px_0px_#1B2440] mb-8 overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-3.5 py-1 rounded-full text-xs font-space font-black uppercase tracking-wider mb-3 shadow-[1px_1px_0px_#1B2440]">
            <Award className="w-4 h-4 text-[#1B2440]" />
            <span>{t.resultTag}</span>
          </div>

          <h1 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {t.resultHeading}
          </h1>
          <p className="text-sm sm:text-base text-[#1B2440]/80 mt-2 font-bold">
            {t.resultSubheading}
          </p>
        </div>
      </div>

      {/* Score & Confidence Grid with Stitch Borders */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-stretch">
        {/* Score Card */}
        <div className="md:col-span-5 bg-[#FFF1A8] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] flex flex-col items-center justify-between text-center">
          <span className="text-xs font-space font-black uppercase tracking-wider bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] px-3 py-1 rounded-full shadow-[1px_1px_0px_#1B2440]">
            {t.resultTotalScore}
          </span>

          <div className="my-5">
            <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl px-8 py-3 inline-flex items-baseline gap-2 shadow-[1.5px_1.5px_0px_#1B2440]">
              <span className="font-space text-5xl font-black text-[#1B2440]">
                {finalScore}
              </span>
              <span className="text-3xl text-[#1B2440]/40 font-bold">/</span>
              <span className="font-space text-4xl font-bold text-[#1B2440]/60">
                {total}
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-xs sm:text-sm font-extrabold text-[#1B2440]">
              {total} {t.soloOf} {finalScore} {t.resultScoreDesc}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-[#B8F2D0] text-[#1B2440] border-[1.5px] border-[#1B2440] px-3 py-1 rounded-full text-xs font-black shadow-[1px_1px_0px_#1B2440]">
              <Lock className="w-3.5 h-3.5" />
              <span>{t.resultZeroRisk}</span>
            </div>
          </div>
        </div>

        {/* Confidence Meter Card */}
        <div className="md:col-span-7 bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs sm:text-sm font-space font-extrabold text-[#1B2440] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1B2440]" />
                <span>{t.resultConfidenceTitle}</span>
              </span>
              <span className="bg-[#D4C5F9] text-[#1B2440] border-[1.5px] border-[#1B2440] px-2.5 py-0.5 rounded-full text-xs font-black shadow-[1px_1px_0px_#1B2440]">
                {percentage}% Safe Guardian
              </span>
            </div>

            <div className="w-full h-4 bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-full overflow-hidden mb-4 p-0.5">
              <div
                className="h-full bg-[#B8F2D0] rounded-full transition-all duration-700 border border-[#1B2440]"
                style={{ width: `${Math.max(percentage, 20)}%` }}
              ></div>
            </div>
          </div>

          {/* Elder Quote Bubble */}
          <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3 shadow-[1.5px_1.5px_0px_#1B2440]">
            <HeartHandshake className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#1B2440] font-bold leading-relaxed">
              {t.resultAvatarQuote}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown List */}
      <section className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 shadow-[2px_2px_0px_#1B2440] mb-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b-[2px] border-[#1B2440]/20">
          <h2 className="font-space font-extrabold text-base sm:text-lg text-[#1B2440]">
            {t.resultBreakdownTitle} ({total} Scenarios)
          </h2>
          <span className="text-xs font-space font-black text-[#1B2440] bg-[#B8F2D0] border border-[#1B2440] px-2.5 py-0.5 rounded-full">
            Completed
          </span>
        </div>

        <div className="space-y-2.5">
          {scenarios.map((item, index) => {
            const userAns = answers?.find((a) => a.scenarioId === item.id);
            const isCorrect = userAns ? userAns.isCorrect : true;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl border-[2px] border-[#1B2440] transition-all ${
                  isCorrect
                    ? 'bg-white shadow-[1px_1px_0px_#1B2440]'
                    : 'bg-[#FFE8E5] shadow-[1.5px_1.5px_0px_#1B2440]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF1A8] border-[1.5px] border-[#1B2440] flex items-center justify-center font-bold text-xs text-[#1B2440] shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-space font-extrabold text-sm text-[#1B2440]">
                      {item.category} ({item.sender})
                    </p>
                    <p className="text-xs text-[#1B2440]/70 font-semibold">
                      {item.hint.substring(0, 80)}...
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-[#1B2440] bg-[#B8F2D0] border border-[#1B2440] px-2.5 py-1 rounded-xl text-xs font-black shadow-[1px_1px_0px_#1B2440]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'درست پہچانا' : 'Correct'}</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => setSelectedTip(item)}
                      className="inline-flex items-center gap-1 text-[#1B2440] bg-[#FFF1A8] hover:bg-[#ffe769] border border-[#1B2440] px-2.5 py-1 rounded-xl text-xs font-black cursor-pointer transition-colors shadow-[1px_1px_0px_#1B2440]"
                    >
                      <span>{isUrdu ? 'سبق دیکھیں' : 'Review Clue'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Review Modal if clicked */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#FFFDF9] border-[3px] border-[#1B2440] rounded-3xl p-6 relative shadow-[3px_3px_0px_#1B2440]">
            <button
              onClick={() => setSelectedTip(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#FFF1A8] border border-[#1B2440] flex items-center justify-center text-[#1B2440] font-bold"
            >
              ✕
            </button>
            <h3 className="font-space font-black text-base text-[#1B2440]">
              {selectedTip.category}
            </h3>
            <p className="text-xs sm:text-sm text-[#1B2440] mt-2 leading-relaxed font-bold">
              {selectedTip.hint}
            </p>
            <button
              onClick={() => setSelectedTip(null)}
              className="mt-4 w-full py-2.5 bg-[#1B2440] text-white rounded-xl font-space font-black text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 3 Action Buttons with Stitch Colors & Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={onOpenCertificate}
          type="button"
          className="p-4 rounded-2xl bg-[#D4C5F9] hover:bg-[#c9b7f5] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer shadow-[2px_2px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-3 shadow-[1px_1px_0px_#1B2440]">
            <Award className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm text-[#1B2440]">
            {t.resultBtnCert}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {t.resultBtnCertSub}
          </span>
        </button>

        <button
          onClick={onRetry}
          type="button"
          className="p-4 rounded-2xl bg-[#FFD3B6] hover:bg-[#ffc6a1] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer shadow-[2px_2px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-3 shadow-[1px_1px_0px_#1B2440]">
            <RefreshCw className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm text-[#1B2440]">
            {t.resultBtnRetry}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {t.resultBtnRetrySub}
          </span>
        </button>

        <button
          onClick={onGoHome}
          type="button"
          className="p-4 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer shadow-[2px_2px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-3 shadow-[1px_1px_0px_#1B2440]">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm text-[#1B2440]">
            {t.resultBtnHome}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            Return to main dashboard
          </span>
        </button>
      </div>

      {/* WhatsApp Family Share Card with Stitch Borders */}
      <div className="w-full bg-[#B8F2D0] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-7 shadow-[2px_2px_0px_#1B2440]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
              {t.resultFamilyCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#1B2440]/85 mt-1 font-bold">
              {t.resultFamilyCardDesc}
            </p>
          </div>
          <button
            onClick={handleWhatsAppFamilyShare}
            className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white border-[2px] border-[#1B2440] font-space font-black text-xs flex items-center gap-2 cursor-pointer transition-all shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.resultWhatsAppBtn}</span>
          </button>
        </div>
      </div>

      {/* WhatsApp Family Challenge Link */}
      <div className="w-full bg-[#D4C5F9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-7 shadow-[2px_2px_0px_#1B2440]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
              {isUrdu ? 'خاندان کو چیلنج بھیجیں' : 'Send Family Challenge'}
            </h2>
            <p className="text-xs sm:text-sm text-[#1B2440]/85 mt-1 font-bold">
              {isUrdu
                ? 'اپنے والدین یا بزرگوں کو اسکام پہچاننے کا چیلنج بھیجیں'
                : 'Challenge your parents or elders to learn scam detection'}
            </p>
          </div>
          <button
            onClick={handleWhatsAppChallenge}
            className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white border-[2px] border-[#1B2440] font-space font-black text-xs flex items-center gap-2 cursor-pointer transition-all shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Share2 className="w-4 h-4" />
            <span>{isUrdu ? 'چیلنج بھیجیں' : 'Send Challenge'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
