import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Sparkles
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import soundEffects from '../utils/soundEffects';

export default function ScamScannerScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [inputText, setInputText] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const scamKeywords = {
    roman: [
      'otp', 'atm pin', 'account block', 'lottery', 'prize', 'winner',
      'easy paisa', 'jazz cash', 'bit.ly', 'urgent', 'immediately',
      'suspicious activity', 'verify now', 'click here', 'bank manager',
      'inaam', 'jeeto', 'delivery tax', 'courier', 'parcel', '0300'
    ],
    urdu: [
      'او ٹی پی', 'اے ٹی ایم پن', 'اکاؤنٹ بلاک', 'لاٹری', 'انعام',
      'ایزی پیسہ', 'جاز کیش', 'فوری', 'جلدی', 'مشکوک سرگرمی',
      'تصدیق کریں', 'کلک کریں', 'بینک مینیجر', 'ڈلیوری ٹیکس',
      'پارسل', 'کیورر', 'ٹی سی ایس'
    ],
    en: [
      'otp', 'atm pin', 'account block', 'lottery', 'prize', 'winner',
      'easypaisa', 'jazzcash', 'bit.ly', 'urgent', 'immediately',
      'suspicious activity', 'verify now', 'click here', 'bank manager',
      'delivery tax', 'courier', 'parcel'
    ]
  };

  const handleScan = () => {
    if (!inputText.trim()) return;

    soundEffects.playClick();
    setIsScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      const keywords = scamKeywords[language] || scamKeywords.roman;
      const lowerText = inputText.toLowerCase();
      const foundKeywords = keywords.filter(kw => lowerText.includes(kw.toLowerCase()));

      const scamScore = Math.min(foundKeywords.length * 20, 95);

      let result = {
        score: scamScore,
        riskLevel: scamScore >= 60 ? 'high' : scamScore >= 30 ? 'medium' : 'low',
        foundKeywords: foundKeywords,
        recommendation: scamScore >= 60
          ? (isUrdu ? 'اس میسج میں فراڈ کے مضبوط نشانات ہیں۔ بچوں یا بینک سے مشورہ کریں۔' : 'This message has strong scam indicators. Consult your children or bank.')
          : (isUrdu ? 'یہ میسج نسبتاً محفوظ لگتا ہے، لیکن احتیاط برتیں۔' : 'This message appears relatively safe, but stay cautious.')
      };

      setScanResult(result);
      setIsScanning(false);

      if (scamScore >= 60) {
        soundEffects.playError();
      } else {
        soundEffects.playSuccess();
      }
    }, 1500);
  };

  const handleClear = () => {
    soundEffects.playClick();
    setInputText('');
    setScanResult(null);
  };

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
          <span className="text-[11px] font-space font-extrabold uppercase tracking-wider bg-[#D4C5F9] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-2.5 py-0.5">
            {isUrdu ? 'اسکام اسکینر' : 'Scam Scanner'}
          </span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Scanner Card */}
        <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#1B2440]" />
            <h2 className="font-space font-extrabold text-lg text-[#1B2440]">
              {isUrdu ? 'مشکوک میسج پیسٹ کریں' : 'Paste Suspicious Message'}
            </h2>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isUrdu ? 'یہاں SMS یا واٹس ایپ میسج پیسٹ کریں...' : 'Paste SMS or WhatsApp message here...'}
            className="w-full h-40 p-4 rounded-2xl border-[2px] border-[#1B2440] bg-[#FFF4E0] text-[#1B2440] font-bold text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1B2440]"
            dir={isUrdu ? 'rtl' : 'ltr'}
          />

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleScan}
              disabled={isScanning || !inputText.trim()}
              className="flex-1 py-3 rounded-xl bg-[#1B2440] hover:bg-slate-800 text-white font-space font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>{isUrdu ? 'اسکین ہو رہا ہے...' : 'Scanning...'}</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>{isUrdu ? 'اسکین کریں' : 'Scan Message'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] font-space font-black text-sm cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
            >
              {isUrdu ? 'صاف' : 'Clear'}
            </button>
          </div>
        </div>

        {/* Scan Result */}
        {scanResult && (
          <div className={`rounded-3xl p-6 border-[2.5px] border-[#1B2440] animate-fadeIn ${
            scanResult.riskLevel === 'high'
              ? 'bg-[#FFE8E5]'
              : scanResult.riskLevel === 'medium'
              ? 'bg-[#FFF1A8]'
              : 'bg-[#B8F2D0]'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {scanResult.riskLevel === 'high' ? (
                  <AlertTriangle className="w-6 h-6 text-[#BA1A1A]" />
                ) : scanResult.riskLevel === 'medium' ? (
                  <AlertTriangle className="w-6 h-6 text-[#FF8C00]" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-[#2B7A4B]" />
                )}
                <h3 className="font-space font-black text-lg text-[#1B2440]">
                  {isUrdu ? 'اسکین کا نتیجہ' : 'Scan Result'}
                </h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-black ${
                scanResult.riskLevel === 'high'
                  ? 'bg-[#BA1A1A] text-white'
                  : scanResult.riskLevel === 'medium'
                  ? 'bg-[#FF8C00] text-white'
                  : 'bg-[#2B7A4B] text-white'
              }`}>
                {scanResult.score}% {isUrdu ? 'خطرہ' : 'Risk'}
              </div>
            </div>

            {/* Risk Meter */}
            <div className="mb-4">
              <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden border border-[#1B2440]">
                <div
                  className={`h-full transition-all duration-500 ${
                    scanResult.riskLevel === 'high'
                      ? 'bg-[#BA1A1A]'
                      : scanResult.riskLevel === 'medium'
                      ? 'bg-[#FF8C00]'
                      : 'bg-[#2B7A4B]'
                  }`}
                  style={{ width: `${scanResult.score}%` }}
                ></div>
              </div>
            </div>

            {/* Found Keywords */}
            {scanResult.foundKeywords.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-black text-[#1B2440] uppercase mb-2">
                  {isUrdu ? 'پائے گئے نشانات:' : 'Found Indicators:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {scanResult.foundKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-lg bg-white border border-[#1B2440] text-xs font-bold text-[#1B2440]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendation */}
            <div className="bg-white/50 rounded-xl p-4 border border-[#1B2440]/30">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-[#1B2440] leading-relaxed">
                  {scanResult.recommendation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Safety Tips */}
        <div className="bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1B2440] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-space font-black text-xs text-[#1B2440] block uppercase mb-1">
                {isUrdu ? 'محفوظ رہنے کے طریقے' : 'Safety Tips'}
              </span>
              <ul className="text-xs text-[#1B2440] font-bold space-y-1 leading-relaxed">
                <li>• {isUrdu ? 'کبھی بھی او ٹی پی کسی کو نہیں بتائیں' : 'Never share OTP with anyone'}</li>
                <li>• {isUrdu ? 'کسی انجانے لنک پر کلک نہ کریں' : 'Don\'t click on unknown links'}</li>
                <li>• {isUrdu ? 'مشکوک میسج ہو تو بچوں سے پوچھیں' : 'Ask your children about suspicious messages'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
