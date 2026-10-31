import { useState } from 'react';
import {
  ArrowLeft,
  Lock,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Info,
  Smartphone
} from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import storage from '../utils/storage';

export default function PrivacyScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [showEraseConfirm, setShowEraseConfirm] = useState(false);
  const [erasedNotice, setErasedNotice] = useState(false);

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  const handleEraseAll = () => {
    soundEffects.playClick();
    storage.clearAllProgress();
    setShowEraseConfirm(false);
    setErasedNotice(true);
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 w-full flex-1 flex flex-col animate-fadeIn ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            soundEffects.playNav();
            onGoHome();
          }}
          className="w-12 h-12 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:scale-95"
          title="Back to Home"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-center">
          <span className="text-xs sm:text-sm font-space font-extrabold uppercase tracking-wider bg-[#B8F2D0] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-3.5 py-1">
            {isUrdu ? "شفافیت اور پرائیویسی" : isEn ? "Privacy & Safety Policy" : "Privacy & Safety Guarantee"}
          </span>
        </div>
        <div className="w-12"></div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6 text-[#1B2440]" />
          </div>
          <div>
            <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
              {isUrdu
                ? "آپ کا ڈیٹا آپ کا ہے — بغیر ڈر کے کی گارنٹی"
                : isEn
                ? "Your Data Stays on Your Device"
                : "Aapka Data Aapka Hai: BinaDarKe Guarantee"}
            </h1>
            <p className="text-sm sm:text-base text-[#1B2440]/80 font-bold mt-2 leading-relaxed">
              {isUrdu
                ? "بغیر ڈر کے سو فیصد کلائنٹ سائیڈ تعلیمی پلیٹ فارم ہے۔ کوئی بھی ڈیٹا کسی بیرونی سرور پر نہیں بھیجا جاتا۔"
                : isEn
                ? "BinaDarKe is a 100% client-side educational practice space. No personal information ever leaves your device."
                : "BinaDarKe 100% client-side practice platform hai. Koi bhi zaati maloomat kisi server par nahi bheji jaati."}
            </p>
          </div>
        </div>
      </div>

      {/* 5 Core Trust Pillars */}
      <div className="space-y-4 mb-8">
        {/* Pillar 1: Data Stays Local */}
        <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#0F5A3E] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-space font-black text-base sm:text-lg text-[#1B2440]">
                {isUrdu ? "۱۔ آپ کی ڈیوائس پر کیا محفوظ ہوتا ہے؟" : isEn ? "1. What stays on your device?" : "1. Aapki device par kya save hota hai?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold mt-1.5 leading-relaxed">
                {isUrdu
                  ? "صرف آپ کی ذاتی ترجیحات: منتخب کردہ زبان، بزرگ موڈ کا انتخاب، اور پریکٹس کا اسکور۔ یہ تمام چیزیں آپ کے براؤزر کے localStorage میں محفوظ رہتی ہیں تاکہ صفحہ ریفریش کرنے پر زبان تبدیل نہ ہو۔"
                  : isEn
                  ? "Only your display preferences: selected language, Buzurg mode toggle, and practice progress scores. These are stored strictly in your browser's localStorage."
                  : "Sirf aapki pasand: chuni hui zubaan, Buzurg mode, aur practice score. Ye sab aapke browser ke localStorage mein rehta hai."}
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2: Zero Telemetry */}
        <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#0F5A3E] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-space font-black text-base sm:text-lg text-[#1B2440]">
                {isUrdu ? "۲۔ کیا کبھی جمع یا فروخت نہیں کیا جاتا؟" : isEn ? "2. What is NEVER collected or transmitted?" : "2. Kya cheez KABHI jama ya transmit nahi hoti?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold mt-1.5 leading-relaxed">
                {isUrdu
                  ? "کوئی ای میل، فون نمبر، شناختی کارڈ، پن، او ٹی پی، یا بینک تفصیلات نہیں۔ کوئی ٹریکنگ پکسل، کوکیز، اینالیٹکس یا اشتہارات نہیں ہیں۔ ہمارے پاس کوئی ریموٹ ڈیٹا بیس نہیں ہے۔"
                  : isEn
                  ? "Zero telemetry, zero cookies, zero tracking pixels, zero analytics, and zero remote database. We never ask for or record any real CNIC, phone number, card number, or OTP."
                  : "Koi email, phone number, CNIC, card, ya OTP nahi. Koi analytics, tracking cookies, ya remote database nahi hai."}
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 3: Simulated Nature */}
        <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <Smartphone className="w-6 h-6 text-[#0F5A3E] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-space font-black text-base sm:text-lg text-[#1B2440]">
                {isUrdu ? "۳۔ پریکٹس ماحول کی حقیقت کیا ہے؟" : isEn ? "3. What is simulated?" : "3. Simulation ka kya matlab hai?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold mt-1.5 leading-relaxed">
                {isUrdu
                  ? "فون اسکرین، پیغامات، کالر، رقم منتقلی، اور لنکس سو فیصد فرضی اور نقلی ہیں۔ یہاں نہ کوئی حقیقی پیسہ کٹ سکتا ہے اور نہ ہی حقیقی کال مل سکتی ہے۔ یہ محفوظ پریکٹس گراؤنڈ ہے۔"
                  : isEn
                  ? "The simulated phone, messages, bank calls, and payment wallets are completely fictional. No real transactions occur, no real calls are placed, and zero real money can ever be lost."
                  : "Phone screen, incoming calls, messages, aur wallet transfer 100% farzi hain. Koi asli paisa nahi kat sakta aur na asli call milti hai."}
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 4: One-Tap Erase */}
        <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <Trash2 className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-space font-black text-base sm:text-lg text-[#1B2440]">
                {isUrdu ? "۴۔ ایک کلک پر تمام ڈیٹا مٹانے کی سہولت" : isEn ? "4. One-Tap Complete Reset" : "4. Ek Click Par Tamam Data Khatam"}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold mt-1.5 leading-relaxed mb-3">
                {isUrdu
                  ? "اگر آپ چاہتے ہیں کہ آپ کی تمام ترجیحات اور مشق کے اسکورز مکمل طور پر ختم ہو جائیں تو نیچے دیے گئے بٹن سے براؤزر کا تمام ڈیٹا فوراً صاف کریں۔"
                  : isEn
                  ? "You have absolute control. Tap the button below to purge all locally stored preferences, scores, and lesson states in one click."
                  : "Aap jab chahein apne browser ka tamam data aur scores ek tap mein mita saktay hain."}
              </p>
              <button
                onClick={() => setShowEraseConfirm(true)}
                className="px-5 py-3 rounded-xl bg-[#BA1A1A] hover:bg-red-700 text-white font-space font-black text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all active:scale-98 min-h-[48px]"
              >
                <Trash2 className="w-4 h-4" />
                <span>{isUrdu ? "تمام محفوظ ڈیٹا مٹائیں" : isEn ? "Erase All Saved Data" : "Tamam Saved Data Mitayein"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pillar 5: Legal & Educational Disclaimer */}
        <div className="bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1B2440] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-space font-black text-base sm:text-lg text-[#1B2440]">
                {isUrdu ? "۵۔ قانونی اور تعلیمی وضاحتی نوٹس" : isEn ? "5. Independence & Brand Disclaimers" : "5. Azad Taleemi Platform"}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold mt-1.5 leading-relaxed">
                {isUrdu
                  ? "بغیر ڈر کے Build4Better ہیکاتھون (این ای ڈی یونیورسٹی) کے لیے بنایا گیا ایک آزاد تعلیمی پروجیکٹ ہے۔ یہ جیز کیش، ایزی پیسہ، اسٹیٹ بینک آف پاکستان، ایف آئی اے، پی ٹی اے، یا کسی تجارتی ادارے کی ملکیت یا سرپرستی میں نہیں ہے۔"
                  : isEn
                  ? "BinaDarKe is an independent educational practice prototype built for the Build4Better hackathon (NED University). It is not affiliated with, sponsored by, or endorsed by JazzCash, EasyPaisa, State Bank of Pakistan, FIA, PTA, HBL, Meezan Bank, or any corporate entity."
                  : "BinaDarKe Build4Better hackathon (NED University) ke liye banaya gaya azaad taleemi project hai. Ye kisi bank ya telecom company se affiliated nahi hai."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog for Erasing Data */}
      {showEraseConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 sm:p-7 shadow-lg">
            <div className="flex items-center gap-3 mb-3 text-[#BA1A1A]">
              <AlertTriangle className="w-7 h-7" />
              <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
                {isUrdu ? "کیا آپ واقعی تمام ڈیٹا مٹانا چاہتے ہیں؟" : isEn ? "Erase all saved progress?" : "Kya aap waqai tamam data mitana chahte hain?"}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#1B2440]/80 font-bold leading-relaxed mb-6">
              {isUrdu
                ? "اس سے آپ کے ٹیسٹ اسکورز، مشق کے پوائنٹس اور ترجیحات ختم ہو جائیں گی۔ کوئی اصلی نقصان نہیں ہوگا مگر پریکٹس دوبارہ شروع کرنی پڑے گی۔"
                : isEn
                ? "This will delete all saved scores, practice attempts, and preferences from this browser. No real account is affected."
                : "Is se aapke scores aur practice progress reset ho jayenge."}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowEraseConfirm(false)}
                className="py-3 px-4 rounded-xl bg-white border-[2px] border-[#1B2440] hover:bg-slate-100 text-[#1B2440] font-space font-black text-xs sm:text-sm cursor-pointer min-h-[48px]"
              >
                {isUrdu ? "منسوخ کریں" : isEn ? "Cancel" : "Cancel"}
              </button>
              <button
                onClick={handleEraseAll}
                className="py-3 px-4 rounded-xl bg-[#BA1A1A] hover:bg-red-700 text-white font-space font-black text-xs sm:text-sm cursor-pointer min-h-[48px]"
              >
                {isUrdu ? "ہاں، مٹا دیں" : isEn ? "Yes, Erase All" : "Haan, Mita Dein"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Erased Confirmation Toast */}
      {erasedNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-4 shadow-lg flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#0F5A3E]" />
          <span className="font-space font-black text-xs sm:text-sm text-[#1B2440]">
            {isUrdu ? "تمام ڈیٹا کامیابی سے مٹا دیا گیا!" : isEn ? "All local data erased successfully!" : "Tamam data saaf ho gaya!"}
          </span>
        </div>
      )}
    </div>
  );
}
