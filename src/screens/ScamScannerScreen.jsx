import { useState } from 'react';
import {
  ArrowLeft,
  Search,
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  Info,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { analyzeMessage } from '../utils/scamScannerHeuristics';
import soundEffects from '../utils/soundEffects';

export default function ScamScannerScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  const handleScan = () => {
    if (!inputText.trim()) return;

    soundEffects.playClick();
    const result = analyzeMessage(inputText);
    setAnalysis(result);

    if (result.redFlagCount > 0) {
      soundEffects.playError();
    } else {
      soundEffects.playSuccess();
    }
  };

  const handleClear = () => {
    soundEffects.playClick();
    setInputText('');
    setAnalysis(null);
  };

  const sampleMessages = [
    {
      label: isUrdu ? "احساس / بے نظیر انعام" : isEn ? "Ehsaas Prize Lure" : "Ehsaas Inaam Scam",
      text: "Mubarak ho! Aapka Ehsaas Scheme mein Rs. 50,000 inaam nikla hai. Abhi foran is link par click kar ke ATM PIN darj karein warna cancel ho jayega: http://bit.ly/ehsaas-claim-2026 Rabta: 03001234567"
    },
    {
      label: isUrdu ? "بینک اکاؤنٹ بلاک" : isEn ? "Bank Account Block" : "Bank Block Threat",
      text: "HBL Alert: Aapka account suspicious activity ki wajah se freeze ho raha hai. Fauran OTP code 8492 batayein warna permanent block ho jayega. Call manager: 03219876543"
    },
    {
      label: isUrdu ? "بجلی کا بل الرٹ (عام پیغام)" : isEn ? "Electricity Bill (Normal)" : "Utility Notice (Normal)",
      text: "K-Electric Notice: Dear Consumer, your electricity bill for Account # 04000123456 is due on 15 Nov. Please pay through authorized bank branches or official banking apps. Thank you."
    }
  ];

  return (
    <div
      className={`max-w-4xl mx-auto px-4 py-6 md:py-10 w-full flex-1 flex flex-col gap-6 animate-fadeIn ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-[2px] border-[#1B2440]/15">
        <button
          onClick={() => {
            soundEffects.playNav();
            onGoHome();
          }}
          className="inline-flex items-center gap-2 px-5 min-h-[48px] rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-extrabold text-sm text-[#1B2440] hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isUrdu ? "ہوم پر واپس" : "Back to Home"}</span>
        </button>

        <span className="text-xs font-space font-black uppercase px-3.5 py-1.5 rounded-full bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]">
          {isUrdu ? "قواعد پر مبنی میسج اسکینر" : "Rule-Based Message Checker"}
        </span>
      </div>

      {/* Mandatory Honest Rule-Based Badge & Privacy Notice */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-3.5 flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1B2440]">
          <Info className="w-5 h-5 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
          <span>
            {isUrdu
              ? "اہم نوٹ: یہ قواعد پر مبنی جانچ کار ہے (Rule-based checker)۔ یہ حفاظت کی ضمانت نہیں دے سکتا۔"
              : "Rule-based checker. It searches known scam patterns and cannot guarantee safety."}
          </span>
        </div>

        <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-3.5 flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1B2440]">
          <Lock className="w-5 h-5 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
          <span>
            {isUrdu
              ? "آپ کا پیسٹ کیا گیا متن صرف اسی ڈیوائس پر رہتا ہے، کسی سرور پر نہیں جاتا۔"
              : "Your text stays strictly on this device. Nothing is sent to any server or external API."}
          </span>
        </div>
      </div>

      {/* Main Scanner Card */}
      <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-[3px_3px_0px_#1B2440]">
        <div>
          <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
            {isUrdu ? "مشکوک میسج یہاں پیسٹ کریں" : "Paste Suspicious Message Here"}
          </h1>
          <p className="text-sm font-bold text-[#1B2440]/75 mt-1">
            {isUrdu 
              ? "واٹس ایپ، ایس ایم ایس، یا فیس بک کا کوئی بھی پیغام یہاں ڈال کر جانچیں کہ آیا اس میں معلوم دھوکہ دہی کے نشانات ہیں۔" 
              : "Analyze any SMS, WhatsApp forward, or payment message for known red flags like OTP demands, urgent threats, and fake links."}
          </p>
        </div>

        {/* Text Area */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            isUrdu
              ? "میسج یہاں پیسٹ کریں (مثال: مبارک ہو! آپ کا انعام نکلا ہے، او ٹی پی بتائیں)..."
              : "Paste message here (e.g., Mubarak ho! Aapka inaam nikla hai, ATM PIN darj karein)..."
          }
          className="w-full h-36 p-4 rounded-2xl border-[2px] border-[#1B2440] bg-[#FFFBF5] text-[#1B2440] font-bold text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#1B2440]"
          dir={isUrdu ? 'rtl' : 'ltr'}
          aria-label={isUrdu ? "مشکوک میسج ان پٹ" : "Suspicious message input"}
        />

        {/* Quick Sample Buttons */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-space font-bold uppercase tracking-wider text-[#1B2440]/70">
            {isUrdu ? "یا نمونہ میسج سے ٹیسٹ کریں:" : "Or test with a sample message:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleMessages.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setInputText(sample.text);
                  setAnalysis(null);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#FFFBF5] hover:bg-[#FFF1A8] border-[1.5px] border-[#1B2440] text-xs sm:text-sm font-space font-extrabold text-[#1B2440] cursor-pointer transition-all active:scale-95"
              >
                {sample.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleScan}
            disabled={!inputText.trim()}
            className="flex-1 min-h-[48px] px-6 rounded-2xl bg-[#1B2440] hover:bg-slate-800 text-white font-space font-black text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5" />
            <span>{isUrdu ? "میسج کی جانچ کریں" : "Analyze Message"}</span>
          </button>

          <button
            onClick={handleClear}
            className="px-6 min-h-[48px] rounded-2xl bg-white hover:bg-slate-100 border-[2px] border-[#1B2440] text-[#1B2440] font-space font-extrabold text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isUrdu ? "تمام مٹائیں" : "Clear Text"}</span>
          </button>
        </div>
      </div>

      {/* Results Section */}
      {analysis && (
        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-[3px_3px_0px_#1B2440] animate-fadeIn">
          {analysis.redFlagCount > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 p-4 bg-[#FFE8E5] border-[2px] border-[#BA1A1A] rounded-2xl text-[#BA1A1A]">
                <ShieldAlert className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-space font-black text-lg sm:text-xl">
                    {isUrdu 
                      ? `${analysis.redFlagCount} خطرناک نشانات ملے ہیں!` 
                      : `${analysis.redFlagCount} Red Flags Detected!`}
                  </h2>
                  <p className="text-sm font-bold text-[#1B2440] mt-1 leading-relaxed">
                    {isUrdu
                      ? "اس پیغام میں جعل سازی اور دھوکہ دہی کے واضح ہتھکنڈے موجود ہیں۔ کسی بھی لنک پر کلک نہ کریں اور کوئی معلومات نہ دیں۔"
                      : "This message matches patterns commonly used in financial fraud. Do not click links or send credentials."}
                  </p>
                </div>
              </div>

              {/* Breakdown of Triggered Rules */}
              <div className="flex flex-col gap-3">
                <h3 className="font-space font-extrabold text-base text-[#1B2440]">
                  {isUrdu ? "میسج میں پائے گئے ریڈ فلیگز کی وضاحت:" : "Detailed Rule Breakdown:"}
                </h3>

                {analysis.flagsFound.map((flag) => {
                  const title = flag.title[language] || flag.title.roman;
                  const desc = flag.description[language] || flag.description.roman;

                  return (
                    <div 
                      key={flag.id}
                      className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-[#BA1A1A]" />
                          <h4 className="font-space font-extrabold text-base text-[#1B2440]">
                            {title}
                          </h4>
                        </div>
                        <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]">
                          {flag.severity}
                        </span>
                      </div>

                      <p className="text-sm font-bold text-[#1B2440]/80 leading-relaxed">
                        {desc}
                      </p>

                      {flag.triggers.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-xs font-bold text-[#1B2440]/60">
                            {isUrdu ? "پکڑے گئے الفاظ:" : "Triggered words:"}
                          </span>
                          {flag.triggers.map((t, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]/40 text-xs font-black"
                            >
                              "{t}"
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* What to do next */}
              <div className="bg-[#B8F2D0]/40 border-[2px] border-[#0F5A3E] rounded-2xl p-4 flex flex-col gap-2 text-[#1B2440]">
                <h4 className="font-space font-black text-base text-[#0F5A3E]">
                  {isUrdu ? "اب آپ کو کیا کرنا چاہیے؟" : "What Should You Do Now?"}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm font-bold leading-relaxed">
                  <li>
                    {isUrdu 
                      ? "اس نمبر کو فوراً واٹس ایپ یا موبائل پر بلاک کر دیں۔" 
                      : "Block this sender immediately on WhatsApp or SMS."}
                  </li>
                  <li>
                    {isUrdu 
                      ? "اگر کسی نے بینک کے نام سے کال کی ہے، تو فون کاٹ کر بینک کی ہیلپ لائن پر خود کال کریں۔" 
                      : "If someone called pretending to be a bank, hang up and call the official bank hotline."}
                  </li>
                  <li>
                    {isUrdu 
                      ? "کوئی مالی نقصان ہوا ہو تو فوراً ایف آئی اے سائبر کرائم 1991 پر کال کریں۔" 
                      : "If unauthorized transactions occurred, dial FIA Cyber Crime at 1991."}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* Low Score / Zero flags found -> MUST NEVER say safe */
            <div className="p-5 bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl flex flex-col gap-3 text-[#1B2440]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-space font-black text-lg text-[#1B2440]">
                    {isUrdu 
                      ? "کوئی معلوم خطرہ نہیں ملا" 
                      : isEn 
                        ? "No Known Red Flags Found" 
                        : "Koi Maloom Khatra Nahi Mila"}
                  </h3>
                  <p className="text-sm font-bold text-[#1B2440]/80 mt-1 leading-relaxed">
                    {isUrdu
                      ? "یہ حفاظت کی ضمانت نہیں ہے۔ نئے فراڈ نت نئے طریقے اپناتے ہیں۔ کبھی بھی اپنا او ٹی پی یا پن کسی سے شیئر نہ کریں۔ شک کی صورت میں بچوں سے پوچھیں یا 1991 پر کال کریں۔"
                      : "No known red flags found. This is not a guarantee. Never share OTP or PIN. When unsure, ask family or call 1991."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
