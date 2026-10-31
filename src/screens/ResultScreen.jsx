import { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  RefreshCw, 
  Share2, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  HeartHandshake,
  Users,
  X,
  Coffee
} from 'lucide-react';
import { SOLO_SCENARIOS_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import soundEffects from '../utils/soundEffects';

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
  const [showKidView, setShowKidView] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const scenarios = SOLO_SCENARIOS_DATA[language] || SOLO_SCENARIOS_DATA.roman;
  const isUrdu = language === 'urdu';

  const finalScore = score !== undefined ? score : 14;
  const total = totalQuestions || scenarios.length;
  const percentage = Math.round((finalScore / total) * 100);

  const celebrationAudioMap = {
    roman: `Mubarak ho! Aapne ${total} mein se ${finalScore} messages bilkul sahi pehchane hain. Aapka confidence level ${percentage} feesad hai. Ab aap bila darr mobile istemal kar sakte hain!`,
    urdu: `مبارک ہو! آپ نے ${total} میں سے ${finalScore} پیغامات بالکل درست پہچانے ہیں۔ آپ کی کامیابی کی شرح ${percentage} فیصد ہے۔ اب آپ بغیر کسی خوف کے موبائل استعمال کر سکتے ہیں۔`,
    en: `Congratulations! You correctly identified ${finalScore} out of ${total} scam scenarios. Your digital confidence score is ${percentage}%. You are well equipped to stay safe online!`
  };

  const celebrationAudioText = celebrationAudioMap[language] || celebrationAudioMap.roman;

  const handleWhatsAppFamilyShare = () => {
    soundEffects.playClick();
    const text = isUrdu
      ? `السلام علیکم! میں نے بغیر ڈر کے (BinaDarKe) پلیٹ فارم پر مشق کی اور ${finalScore}/${total} اسکور حاصل کیا! اب مجھے ڈیجیٹل فراڈ کے حربوں کی پہچان ہو گئی ہے۔ آپ بھی چیک کریں: https://binadarke.web.app\n\n🎯 فیملی چیلنج: امی/ابو آپ بھی یہ ٹیسٹ کریں اور سند حاصل کریں!`
      : `Assalamu Alaikum! Maine BinaDarKe Anti-Scam Sandbox par practice ki aur ${finalScore}/${total} score hasil kiya! Ab mujhe fake lottery, bank OTP, aur fraud messages ki pehchan ho gayi hai. Check karein: https://binadarke.web.app\n\n🎯 Family Challenge: Ammi/Abba aap bhi ye test karein aur certificate hasil karein!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppChallenge = () => {
    soundEffects.playClick();
    const text = isUrdu
      ? `🎯 BinaDarKe Family Challenge!\n\nاسلام علیکم! میں نے بغیر ڈر کے پلیٹ فارم پر ڈیجیٹل فراڈ پہچاننا سیکھا۔ اب آپ بھی آزمائیں اور اپنا سرٹیفکیٹ حاصل کریں!\n\n📱 کھیلیں: https://binadarke.web.app\n\n🎁 مفت تعلیمی سینڈ باکس - کوئی خطرہ نہیں!`
      : `🎯 BinaDarKe Family Challenge!\n\nAssalamu Alaikum! Maine BinaDarKe par digital scams pehchanna seekha. Ab aap bhi try karein aur certificate hasil karein!\n\n📱 Practice here: https://binadarke.web.app\n\n🎁 Free educational practice - Zero financial risk!`;
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
      <div className="relative w-full bg-[#B8F2D0] border-[2.5px] border-[#1B2440] text-[#1B2440] rounded-3xl p-6 sm:p-8 mb-8 overflow-hidden shadow-sm">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-4 py-1 rounded-full text-xs sm:text-sm font-space font-black uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#1B2440]" />
            <span>{t.resultTag || "Practice Complete"}</span>
          </div>

          <h1 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {t.resultHeading}
          </h1>
          <p className="text-sm sm:text-base text-[#1B2440]/85 mt-2 font-bold">
            {t.resultSubheading}
          </p>
        </div>
      </div>

      {/* Score & Confidence Grid with Stitch Borders */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-stretch">
        {/* Score Card */}
        <div className="md:col-span-5 bg-[#FFF1A8] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col items-center justify-between text-center shadow-xs">
          <span className="text-xs sm:text-sm font-space font-black uppercase tracking-wider bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] px-3.5 py-1 rounded-full">
            {t.resultTotalScore}
          </span>

          <div className="my-5">
            <div className="bg-white border-[2.5px] border-[#1B2440] rounded-2xl px-8 py-3.5 inline-flex items-baseline gap-2 shadow-xs">
              <span className="font-space text-5xl sm:text-6xl font-black text-[#1B2440]">
                {finalScore}
              </span>
              <span className="text-3xl text-[#1B2440]/40 font-bold">/</span>
              <span className="font-space text-4xl font-bold text-[#1B2440]/60">
                {total}
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-sm font-extrabold text-[#1B2440]">
              {total} {t.soloOf || "of"} {finalScore} {t.resultScoreDesc || "correctly identified!"}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-[#B8F2D0] text-[#1B2440] border-[1.5px] border-[#1B2440] px-3 py-1 rounded-full text-xs font-black">
              <Lock className="w-3.5 h-3.5" />
              <span>{t.resultZeroRisk || "Practice Only: Zero Financial Risk"}</span>
            </div>
          </div>
        </div>

        {/* Confidence Meter Card */}
        <div className="md:col-span-7 bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm font-space font-extrabold text-[#1B2440] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0F5A3E]" />
                <span>{t.resultConfidenceTitle}</span>
              </span>
              <span className="bg-[#D4C5F9] text-[#1B2440] border-[1.5px] border-[#1B2440] px-3 py-1 rounded-full text-xs font-black">
                {percentage}% Safe Citizen
              </span>
            </div>

            <div className="w-full h-4 bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-full overflow-hidden mb-4 p-0.5">
              <div
                className="h-full bg-[#B8F2D0] rounded-full transition-all duration-700 border border-[#1B2440]"
                style={{ width: `${Math.max(percentage, 15)}%` }}
              ></div>
            </div>
          </div>

          {/* Elder Quote Bubble */}
          <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <HeartHandshake className="w-6 h-6 text-[#1B2440] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#1B2440] font-bold leading-relaxed">
              {t.resultAvatarQuote}
            </p>
          </div>
        </div>
      </div>

      {/* 4 Action Buttons Grid (Certificate, Kid View, Retry, Home) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {/* Certificate Button */}
        <button
          onClick={onOpenCertificate}
          type="button"
          className="p-4 rounded-2xl bg-[#D4C5F9] hover:bg-[#c9b7f5] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer min-h-[80px] active:scale-98 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-2.5">
            <Award className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
            {t.resultBtnCert}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {t.resultBtnCertSub}
          </span>
        </button>

        {/* Kid View Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            setShowKidView(true);
          }}
          type="button"
          className="p-4 rounded-2xl bg-[#B8F2D0] hover:bg-[#a5e9c1] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer min-h-[80px] active:scale-98 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-2.5">
            <Users className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
            {isUrdu ? "بچوں کو سمری دکھائیں (Kid View)" : "Show Family / Kid View"}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {isUrdu ? "خاندان کے لیے پریکٹس رپورٹ" : "Parent confidence summary for kids"}
          </span>
        </button>

        {/* Retry Button */}
        <button
          onClick={onRetry}
          type="button"
          className="p-4 rounded-2xl bg-[#FFD3B6] hover:bg-[#ffc6a1] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer min-h-[80px] active:scale-98 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-2.5">
            <RefreshCw className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
            {t.resultBtnRetry}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {t.resultBtnRetrySub}
          </span>
        </button>

        {/* Home Button */}
        <button
          onClick={onGoHome}
          type="button"
          className="p-4 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] border-[2.5px] border-[#1B2440] text-left transition-all cursor-pointer min-h-[80px] active:scale-98 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] text-[#1B2440] flex items-center justify-center mb-2.5">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="block font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
            {t.resultBtnHome}
          </span>
          <span className="block text-xs font-semibold text-[#1B2440]/70 mt-0.5">
            {isUrdu ? "مین ڈیش بورڈ پر واپسی" : "Return to main dashboard"}
          </span>
        </button>
      </div>

      {/* Detailed Breakdown List */}
      <section className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 mb-8 shadow-xs">
        <div className="flex items-center justify-between pb-4 mb-4 border-b-[2px] border-[#1B2440]/20">
          <h2 className="font-space font-extrabold text-base sm:text-lg text-[#1B2440]">
            {t.resultBreakdownTitle} ({total} Scenarios)
          </h2>
          <span className="text-xs font-space font-black text-[#1B2440] bg-[#B8F2D0] border border-[#1B2440] px-3 py-1 rounded-full">
            Completed
          </span>
        </div>

        <div className="space-y-3">
          {scenarios.map((item, index) => {
            const userAns = answers?.find((a) => a.scenarioId === item.id);
            const isCorrect = userAns ? userAns.isCorrect : true;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border-[2px] border-[#1B2440] transition-all ${
                  isCorrect ? 'bg-white' : 'bg-[#FFE8E5]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF1A8] border-[1.5px] border-[#1B2440] flex items-center justify-center font-bold text-xs text-[#1B2440] shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
                      {item.category} ({item.sender})
                    </p>
                    <p className="text-xs sm:text-sm text-[#1B2440]/75 font-semibold line-clamp-1">
                      {item.hint}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 text-[#1B2440] bg-[#B8F2D0] border border-[#1B2440] px-3 py-1.5 rounded-xl text-xs font-black min-h-[36px]">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5A3E]" />
                      <span>{isUrdu ? 'درست پہچانا' : 'Correct'}</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => setSelectedTip(item)}
                      className="inline-flex items-center gap-1.5 text-[#1B2440] bg-[#FFF1A8] hover:bg-[#ffe769] border border-[#1B2440] px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-colors min-h-[36px]"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-[#FFFDF9] border-[3px] border-[#1B2440] rounded-3xl p-6 relative">
            <button
              onClick={() => setSelectedTip(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFF1A8] border border-[#1B2440] flex items-center justify-center text-[#1B2440] font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-space font-black text-base text-[#1B2440]">
              {selectedTip.category}
            </h3>
            <div className="mt-3 bg-[#FFF4E0] border-[1.5px] border-[#1B2440] rounded-2xl p-4">
              <p className="text-xs sm:text-sm text-[#1B2440] leading-relaxed font-bold">
                {selectedTip.hint}
              </p>
            </div>
            {selectedTip.feedback?.whatToDoNext && (
              <div className="mt-3 bg-[#B8F2D0]/60 border border-[#1B2440] rounded-xl p-3">
                <span className="text-xs font-black text-[#1B2440] block mb-1">
                  {isUrdu ? "اگلا قدم:" : "What to do next:"}
                </span>
                <p className="text-xs font-bold text-[#1B2440]">
                  {selectedTip.feedback.whatToDoNext}
                </p>
              </div>
            )}
            <button
              onClick={() => setSelectedTip(null)}
              className="mt-5 w-full py-3 bg-[#1B2440] text-white rounded-xl font-space font-black text-sm min-h-[48px] cursor-pointer"
            >
              {isUrdu ? "بند کریں" : "Close"}
            </button>
          </div>
        </div>
      )}

      {/* KID VIEW MODAL (Zero-data parent reassurance summary) */}
      {showKidView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-[#FFFDF9] border-[3px] border-[#1B2440] rounded-3xl p-6 relative flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            dir={isUrdu ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#1B2440]" />
                </div>
                <div>
                  <h3 className="font-space font-extrabold text-base sm:text-lg text-[#1B2440]">
                    {isUrdu ? "والدین کی پریکٹس رپورٹ (Kid View)" : "Parent Confidence Report (Kid View)"}
                  </h3>
                  <span className="text-xs font-bold text-[#1B2440]/70">
                    {isUrdu ? "خاندان کے لیے زیرو ڈیٹا سمری" : "Zero-Data summary designed for adult children"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowKidView(false)}
                className="w-9 h-9 rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center text-[#1B2440] hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Score Pill Card */}
            <div className="bg-[#FFF1A8] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-space font-bold uppercase text-[#1B2440]/70 block">
                  {isUrdu ? "مکمل کیے گئے منظرنامے" : "Scenarios Completed"}
                </span>
                <span className="font-space font-black text-2xl text-[#1B2440]">
                  {finalScore} / {total} Correct ({percentage}%)
                </span>
              </div>
              <span className="text-xs font-black bg-white border border-[#1B2440] px-3 py-1 rounded-full text-[#1B2440]">
                {percentage >= 80 ? "Shield Ready 🛡️" : "Practicing 👍"}
              </span>
            </div>

            {/* What Was Practiced */}
            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4">
              <h4 className="font-space font-black text-sm text-[#1B2440] mb-2.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isUrdu ? "والدین نے کیا مشق کی؟" : "What Your Parent Practiced:"}</span>
              </h4>
              <ul className="text-xs sm:text-sm font-bold text-[#1B2440]/85 space-y-2 list-disc list-inside">
                <li>{isUrdu ? "بینک مینیجر بن کر آنے والی مشکوک کالوں کو پہچاننا" : "Identifying fake bank manager phone calls"}</li>
                <li>{isUrdu ? "بے نظیر اور لاٹری کے نقلی لنکس پر خفیہ پن نہ دینا" : "Resisting fake lottery and BISP links demanding secret PINs"}</li>
                <li>{isUrdu ? "بجلی کے بل کے ذاتی اکاؤنٹ پر منتقلی کے فراڈ سے بچنا" : "Recognizing fake utility shutoff threats demanding personal wallet transfers"}</li>
                <li>{isUrdu ? "اصلی بینک نوٹیفکیشن کو پہچان کر غیر ضروری خوف سے نکلنا" : "Distinguishing genuine bank debit alerts from scam messages"}</li>
              </ul>
            </div>

            {/* Chai Conversation Starters */}
            <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4">
              <h4 className="font-space font-black text-sm text-[#1B2440] mb-2 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-amber-700" />
                <span>{isUrdu ? "چائے پر بات کرنے کے ۳ پرسکون نکات:" : "3 Calm Conversation Starters Over Chai:"}</span>
              </h4>
              <p className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed">
                {isUrdu
                  ? "۱۔ تعریف کریں کہ انہوں نے تمام ۱۵ منظرنامے مکمل کیے۔\n۲۔ یاد دلائیں کہ بینک کی اصلی ہیلپ لائن ہمیشہ اے ٹی ایم کارڈ کے پیچھے لکھی ہوتی ہے۔\n۳۔ بتائیں کہ کسی بھی شک کی صورت میں وہ پہلے آپ سے مشورہ کریں، کوئی جلدی نہیں!"
                  : "1. Praise them warmly for completing the safety practice.\n2. Remind them that official bank helplines are always printed right on the back of their physical card.\n3. Reassure them: If in doubt, wait and discuss together. There is zero rush!"}
              </p>
            </div>

            {/* Zero Personal Data Disclaimer */}
            <p className="text-xs font-bold text-[#1B2440]/60 text-center">
              🔒 {isUrdu ? "یہ سمری مکمل طور پر ڈیوائس پر ہے، کوئی ذاتی معلومات جمع نہیں کی جاتی۔" : "Zero Personal Data: 100% client-side summary. Nothing is stored on any server."}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowKidView(false)}
              className="w-full py-3 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-sm sm:text-base border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center min-h-[48px]"
            >
              {isUrdu ? "ٹھیک ہے، شکریہ" : "Done / Close Summary"}
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Family Share Card with Stitch Borders */}
      <div className="w-full bg-[#B8F2D0] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-7 mb-4 shadow-xs">
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
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white border-[2px] border-[#1B2440] font-space font-black text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-98 min-h-[48px]"
          >
            <Share2 className="w-5 h-5" />
            <span>{t.resultWhatsAppBtn}</span>
          </button>
        </div>
      </div>

      {/* WhatsApp Family Challenge Link */}
      <div className="w-full bg-[#D4C5F9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
              {isUrdu ? 'خاندان کو چیلنج بھیجیں' : 'Send Family Challenge'}
            </h2>
            <p className="text-xs sm:text-sm text-[#1B2440]/85 mt-1 font-bold">
              {isUrdu
                ? 'اپنے بہن بھائیوں اور والدین کو بغیر ڈر کے ٹیسٹ کرنے کا کہیں'
                : 'Challenge your family members to test their scam awareness'}
            </p>
          </div>
          <button
            onClick={handleWhatsAppChallenge}
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white border-[2px] border-[#1B2440] font-space font-black text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-98 min-h-[48px]"
          >
            <Share2 className="w-5 h-5" />
            <span>{isUrdu ? 'چیلنج بھیجیں' : 'Send Challenge'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
