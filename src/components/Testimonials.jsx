import { Smartphone, AlertTriangle, Volume2, Heart, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

/**
 * Testimonials Component
 * 
 * Strict Zero-Fabrication Rule:
 * Renders ONLY verified entries where consent === true (max 3).
 * If no consented testimonials exist, falls back gracefully to the transparently
 * labelled persona card: "Meet Abba Ji (persona, not a real person)".
 */
export default function Testimonials({ language = 'roman', babaJiMode = false, variant = 'landing' }) {
  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  // Filter only items with verified explicit consent (up to 3)
  const consentedList = (TESTIMONIALS_DATA || [])
    .filter((item) => item.consent === true)
    .slice(0, 3);

  // If we have real consented feedback, render testimonial cards
  if (consentedList.length > 0) {
    return (
      <section 
        className="max-w-4xl mx-auto px-4 py-8 md:py-12 w-full animate-fadeInUp"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-[3px_3px_0px_#1B2440]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-[2px] border-[#1B2440]/15">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#1B2440]" />
              </span>
              <div>
                <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
                  {isUrdu ? 'صارفین کی حقیقی رائے' : isEn ? 'Community Feedback' : 'Learners ki Asli Raye'}
                </h3>
                <span className="text-xs font-bold text-[#1B2440]/65 uppercase tracking-wider block">
                  {isUrdu ? 'حقیقی تجربات' : 'Real Learner Observations'}
                </span>
              </div>
            </div>

            <span className="text-xs font-space font-black bg-[#B8F2D0] text-[#0F5A3E] border border-[#0F5A3E] px-3 py-1 rounded-full">
              {isUrdu ? 'اجازت کے ساتھ شیئر کردہ' : 'Shared with Permission'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {consentedList.map((item) => {
              const quoteText = item.quote[language] || item.quote.roman || item.quote.en;
              return (
                <div 
                  key={item.id}
                  className="bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl p-4 flex flex-col justify-between gap-3 shadow-xs"
                >
                  <p className={`font-bold text-[#1B2440] leading-relaxed ${
                    babaJiMode ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
                  }`}>
                    “{quoteText}”
                  </p>
                  <div className="border-t border-[#1B2440]/10 pt-2 flex items-center justify-between text-xs font-space font-bold text-[#1B2440]/75">
                    <span>{item.attribution}</span>
                    <span className="text-emerald-700 font-extrabold">✓ Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs font-semibold text-[#1B2440]/65 text-center mt-1">
            {isUrdu 
              ? 'تمام تبصرے مکمل رضامندی کے ساتھ شائع کیے گئے ہیں۔' 
              : 'All quotes published with explicit consent. Read our ethics protocol in docs/INTERVIEW_NOTES.md.'}
          </p>
        </div>
      </section>
    );
  }

  // Graceful Fallback: Labelled Persona Card ("Meet Abba Ji (persona, not a real person)")
  return (
    <section 
      className={`max-w-4xl mx-auto px-4 w-full animate-fadeInUp ${
        variant === 'about' ? 'py-4' : 'py-10 md:py-14'
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-[3px_3px_0px_#1B2440]">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-[2px] border-[#1B2440]/15">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl" role="img" aria-label="Elder persona">👴</span>
            <div>
              <h3 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440]">
                {isUrdu 
                  ? "ابا جی سے ملیں (فرضی کردار، حقیقی شخص نہیں)" 
                  : "Meet Abba Ji (Persona, not a real person)"}
              </h3>
              <span className="text-xs font-bold text-[#1B2440]/65 uppercase tracking-wider block">
                {isUrdu ? "ہمارے ڈیزائن کا مرکزی ہدف" : "Target User Profile for BinaDarKe"}
              </span>
            </div>
          </div>

          <span className="text-xs font-space font-black bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440] px-3 py-1 rounded-full">
            {isUrdu ? "فرضی کردار" : "Persona Card"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* Device & Apps */}
          <div className="bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-1.5">
            <span className="font-space font-black uppercase text-[#1B2440]/70 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-[#0F5A3E]" />
              {isUrdu ? "موبائل اور ایپس:" : "Device & Apps Used:"}
            </span>
            <p className={`font-bold text-[#1B2440] ${babaJiMode ? 'text-base sm:text-lg' : ''}`}>
              {isUrdu 
                ? "بجٹ اینڈرائیڈ (بڑے فونٹس، اسکرین گلاس ٹوٹا ہوا) • واٹس ایپ وائس نوٹس، ایزی پیسہ بل، یوٹیوب۔" 
                : "Budget Android (Infinix/Redmi with large font) • WhatsApp voice notes, EasyPaisa bills, YouTube."}
            </p>
          </div>

          {/* Deepest Fear */}
          <div className="bg-[#FFE8E5] border-[1.5px] border-[#BA1A1A] rounded-2xl p-4 flex flex-col gap-1.5">
            <span className="font-space font-black uppercase text-[#BA1A1A] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              {isUrdu ? "اصلی خوف:" : "Deepest Fear:"}
            </span>
            <p className={`font-bold text-[#1B2440] ${babaJiMode ? 'text-base sm:text-lg' : ''}`}>
              {isUrdu 
                ? "”ڈر لگتا ہے کہیں غلط بٹن دبنے سے پنشن نہ کٹ جائے یا بچے نہ ڈانٹیں۔“" 
                : "“I worry that pressing a wrong button will drain my pension or make my kids upset with me.”"}
            </p>
          </div>

          {/* Language Habit */}
          <div className="bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-1.5">
            <span className="font-space font-black uppercase text-[#1B2440]/70 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-[#0F5A3E]" />
              {isUrdu ? "زبان کی عادت:" : "Language Habit:"}
            </span>
            <p className={`font-bold text-[#1B2440] ${babaJiMode ? 'text-base sm:text-lg' : ''}`}>
              {isUrdu 
                ? "اردو بولتے ہیں؛ باریک انگریزی بینک اصطلاحات مشکل لگتی ہیں، صوتی رہنمائی ترجیح ہے۔" 
                : "Prefers Urdu audio; struggles with dense English banking jargon (OTP, phishing, dispute)."}
            </p>
          </div>

          {/* The Goal */}
          <div className="bg-[#B8F2D0]/40 border-[1.5px] border-[#0F5A3E] rounded-2xl p-4 flex flex-col gap-1.5">
            <span className="font-space font-black uppercase text-[#0F5A3E] flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              {isUrdu ? "مقصد:" : "The Goal:"}
            </span>
            <p className={`font-bold text-[#1B2440] ${babaJiMode ? 'text-base sm:text-lg' : ''}`}>
              {isUrdu 
                ? "بغیر کسی خوف، ہچکچاہٹ، یا مالی نقصان کے موبائل کا پراعتماد استعمال سیکھنا۔" 
                : "Navigate digital banking and messages with peace of mind and zero financial risk."}
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1B2440]/10">
          <p className="text-xs font-semibold text-[#1B2440]/70">
            {isUrdu 
              ? "نوٹ: یہ فرضی کردار پاکستانی بزرگوں کی حقیقی مشکلات کے تجزیے کی بنیاد پر تیار کیا گیا ہے۔" 
              : "Note: This composite persona is designed to address real digital friction faced by Pakistani elders."}
          </p>
          <span className="text-xs font-bold text-[#0F5A3E] inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            {isUrdu ? "ٹیمپلیٹ: docs/INTERVIEW_NOTES.md" : "Template: docs/INTERVIEW_NOTES.md"}
          </span>
        </div>
      </div>
    </section>
  );
}
