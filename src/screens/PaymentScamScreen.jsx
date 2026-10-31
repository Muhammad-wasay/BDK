import { useState } from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import { EasyPaisaLogo } from '../components/BrandLogos';

export default function PaymentScamScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [userChoice, setUserChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const isUrdu = language === 'urdu';

  const paymentScenarios = {
    roman: {
      title: "EasyPaisa Payment Slip Jaali",
      sender: "EasyPaisa Official",
      amount: "Rs. 25,000",
      recipient: "Hassan Ali - 0300-1234567",
      status: "Payment Successful",
      isScam: true,
      redFlags: [
        "Naali QR Code domain (.xyz)",
        "Ghair-tasdeeq shuda recipient",
        "Fake transaction ID format",
        "Asli EasyPaisa logo nahi"
      ],
      feedback: {
        scamTitle: "Zabardast! Jaali Slip Pakar Li!",
        scamDesc: "Ye screenshot bilkul jaali hai. Asli EasyPaisa slips mein official domain aur verified recipient details hotay hain.",
        safeTitle: "Zara Thehrein! Ye Jaali Hai",
        safeDesc: "Fake payment slips mein ghalat domains aur unverified numbers hotay hain. Kabhi bhi trust na karein."
      }
    },
    urdu: {
      title: "ایزی پیسہ کا جعلی سلپ",
      sender: "ایزی پیسہ آفیشل",
      amount: "۲۵،۰۰۰ روپے",
      recipient: "حسن علی - ۰۳۰۰-۱۲۳۴۵۶۷",
      status: "ادائیگی کامیاب",
      isScam: true,
      redFlags: [
        "ناقل ڈومین (.xyz)",
        "غیر تصدیق شدہ وصول کنندہ",
        "جعلی ٹرانزیکشن آئی ڈی",
        "اصلی لوگو موجود نہیں"
      ],
      feedback: {
        scamTitle: "شاندار! جعلی سلپ پکڑ لی!",
        scamDesc: "یہ اسکرین شاٹ بالکل جعلی ہے۔ اصل ایزی پیسہ سلپس میں سرکاری ڈومین اور تصدیق شدہ تفصیلات ہوتی ہیں۔",
        safeTitle: "ذرا ٹھہریں! یہ جعلی ہے",
        safeDesc: "جعلی ادائیگی سلپس میں غلط ڈومینز اور غیر تصدیق شدہ نمبر ہوتے ہیں۔ کبھی بھروسہ نہ کریں۔"
      }
    },
    en: {
      title: "Fake EasyPaisa Payment Slip",
      sender: "EasyPaisa Official",
      amount: "PKR 25,000",
      recipient: "Hassan Ali - 0300-1234567",
      status: "Payment Successful",
      isScam: true,
      redFlags: [
        "Fake QR Code domain (.xyz)",
        "Unverified recipient",
        "Fake transaction ID format",
        "Missing official EasyPaisa logo"
      ],
      feedback: {
        scamTitle: "Excellent! Fake Slip Detected!",
        scamDesc: "This screenshot is completely fake. Real EasyPaisa slips have official domains and verified recipient details.",
        safeTitle: "Wait! This is Fake",
        safeDesc: "Fake payment slips contain wrong domains and unverified numbers. Never trust them blindly."
      }
    }
  };

  const scenario = paymentScenarios[language] || paymentScenarios.roman;

  const handleChoice = (choice) => {
    soundEffects.playClick();
    setUserChoice(choice);
    setShowFeedback(true);

    if ((choice === 'scam' && scenario.isScam) || (choice === 'safe' && !scenario.isScam)) {
      soundEffects.playSuccess();
    } else {
      soundEffects.playError();
    }
  };

  const isCorrect = (userChoice === 'scam' && scenario.isScam) || (userChoice === 'safe' && !scenario.isScam);

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onGoHome}
          className="w-10 h-10 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="text-center">
          <span className="text-xs font-space font-extrabold uppercase tracking-wider bg-[#FFD3B6] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-3 py-1">
            Level 3 • Payment Scam Detection
          </span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Payment Slip Simulator */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[380px] bg-white rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#00A651] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EasyPaisaLogo className="h-7 w-auto bg-white/95 p-1 rounded-lg" />
              <span className="font-space font-black text-white">{scenario.sender}</span>
            </div>
            <span className="text-xs font-bold text-white/80">
              {isUrdu ? 'سلپ' : 'RECEIPT'}
            </span>
          </div>

          {/* Payment Details */}
          <div className="p-6 space-y-4">
            <div className="text-center pb-4 border-b-2 border-dashed border-[#1B2440]/20">
              <p className="text-xs font-bold text-[#1B2440]/60 mb-1">
                {isUrdu ? 'رقم' : 'AMOUNT'}
              </p>
              <p className="font-space font-black text-3xl text-[#00A651]">
                {scenario.amount}
              </p>
              <p className="text-xs font-bold text-[#B8F2D0] bg-[#00A651]/10 px-2 py-1 rounded-full inline-block mt-2">
                {scenario.status}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#1B2440]/60">
                  {isUrdu ? 'وصول کنندہ' : 'RECIPIENT'}
                </span>
                <span className="text-sm font-extrabold text-[#1B2440]">
                  {scenario.recipient}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#1B2440]/60">
                  {isUrdu ? 'ٹرانزیکشن آئی ڈی' : 'TXN ID'}
                </span>
                <span className="text-sm font-extrabold text-[#1B2440] font-mono">
                  EPX-784392
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#1B2440]/60">
                  {isUrdu ? 'تاریخ' : 'DATE'}
                </span>
                <span className="text-sm font-extrabold text-[#1B2440]">
                  31-Oct-2026
                </span>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="pt-4 border-t-2 border-dashed border-[#1B2440]/20">
              <div className="bg-[#1B2440] rounded-xl p-4 flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-[#1B2440]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-white/60 mb-1">
                    {isUrdu ? 'کیو آر کوڈ' : 'QR CODE'}
                  </p>
                  <p className="text-xs font-black text-[#FF6B6B] break-all">
                    epaisa.xyz/verify/784392
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-[#FFE8E5] p-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#BA1A1A]" />
            <p className="text-xs font-bold text-[#BA1A1A]">
              {isUrdu
                ? 'یہ صرف ایک نمونہ ہے - کوئی اصل رقم نہیں'
                : 'This is a simulation - No real money involved'}
            </p>
          </div>
        </div>
      </div>

      {/* Decision Buttons */}
      {!showFeedback && (
        <div className="mt-6 space-y-3">
          <button
            onClick={() => handleChoice('safe')}
            className="w-full p-4 rounded-2xl bg-[#B8F2D0] border-[2.5px] border-[#1B2440] text-left flex items-center gap-3 cursor-pointer transition-all hover:bg-[#a6e6bf] active:translate-x-0.5 active:translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-extrabold text-base text-[#1B2440] leading-tight">
                {isUrdu ? 'اصل ہے (Safe)' : 'It\'s Real (Safe)'}
              </span>
              <span className="text-xs text-[#1B2440]/80 font-bold mt-0.5">
                {isUrdu ? 'اصلی ادائیگی کا ثبوت لگتا ہے' : 'Appears to be legitimate payment proof'}
              </span>
            </div>
          </button>

          <button
            onClick={() => handleChoice('scam')}
            className="w-full p-4 rounded-2xl bg-[#FF6B6B] border-[2.5px] border-[#1B2440] text-left flex items-center gap-3 cursor-pointer transition-all hover:bg-[#f25e5e] active:translate-x-0.5 active:translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-extrabold text-base text-white leading-tight">
                {isUrdu ? 'جعلی ہے (Scam)' : 'It\'s Fake (Scam)'}
              </span>
              <span className="text-xs text-white/90 font-bold mt-0.5">
                {isUrdu ? 'جعلی سلپ یا دھوکہ دہی ہے' : 'Fake screenshot or fraud attempt'}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Feedback Panel */}
      {showFeedback && (
        <div className={`mt-6 p-4 rounded-2xl border-[2.5px] border-[#1B2440] animate-fadeIn ${
          isCorrect ? 'bg-[#B8F2D0]' : 'bg-[#FFD3B6]'
        }`}>
          <div className="flex items-start gap-3 mb-3">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
            )}
            <div>
              <h3 className="font-space font-black text-sm text-[#1B2440] mb-1">
                {isCorrect ? scenario.feedback.scamTitle : scenario.feedback.safeTitle}
              </h3>
              <p className="text-xs text-[#1B2440]/90 font-bold leading-relaxed">
                {isCorrect ? scenario.feedback.scamDesc : scenario.feedback.safeDesc}
              </p>
            </div>
          </div>

          {/* Red Flags */}
          <div className="space-y-2 mb-4">
            <p className="text-xs font-black text-[#1B2440] uppercase">
              {isUrdu ? 'خطرے کے نشانات:' : 'Red Flags:'}
            </p>
            {scenario.redFlags.map((flag, index) => (
              <div key={index} className="flex items-center gap-2 text-xs font-bold text-[#1B2440]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]"></span>
                <span>{flag}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onGoHome}
            className="w-full py-3 bg-[#1B2440] hover:bg-slate-800 text-white rounded-xl text-xs font-black font-space flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'ہوم پر واپس جائیں' : 'Return to Home'}</span>
          </button>
        </div>
      )}

      {/* Safety Tip */}
      <div className="mt-6 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-space font-black text-xs text-[#1B2440] block uppercase">
            {isUrdu ? 'محفوظ رہیں' : 'Stay Safe'}
          </span>
          <p className="text-xs text-[#1B2440] font-bold mt-0.5 leading-relaxed">
            {isUrdu
              ? 'اصلی ادائیگی کے ثبوت میں ہمیشہ سرکاری ڈومین (.com.pk) اور تصدیق شدہ تفصیلات ہوتی ہیں۔'
              : 'Real payment proofs always have official domains (.com.pk) and verified details.'}
          </p>
        </div>
      </div>
    </div>
  );
}
