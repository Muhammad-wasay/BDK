import React, { useState } from 'react';
import { Award, Printer, Share2, X, Check, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, score, totalQuestions, language = 'roman' }) {
  const [userName, setUserName] = useState('Abba Jan');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const percentage = Math.round((score / totalQuestions) * 100);
  const isUrdu = language === 'urdu';

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = `🎉 Assalamu Alaikum! Maine BinaDarKe Anti-Scam Sandbox par ${score}/${totalQuestions} (${percentage}%) score hasil kiya hai aur 'Safe Citizen Certificate' hasil kiya hai! Check karein: https://binadarke.pk`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    const text = `🎉 Maine BinaDarKe Anti-Scam Sandbox par ${score}/${totalQuestions} score kiya!`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-card p-6 sm:p-7 relative ${
          isUrdu ? 'font-urdu-mode' : ''
        }`}
        dir={isUrdu ? 'rtl' : 'ltr'}
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-3 py-1">
            {isUrdu ? 'سرکاری اعزازی سند' : 'Safe Citizen Certificate'}
          </span>
          <h2 className="font-space font-bold text-2xl text-[#151E33] mt-2">
            {isUrdu ? 'محفوظ شہری کی اعزازی سند' : 'Safe Citizen Recognition'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isUrdu ? 'اپنا نام درج کریں اور سند محفوظ یا پرنٹ کریں' : 'Personalize the recipient name to print or share your achievement'}
          </p>
        </div>

        {/* Recipient name input */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {isUrdu ? 'سند پر نام:' : 'Recipient Name:'}
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm font-bold text-[#151E33] focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            placeholder={isUrdu ? 'نام درج کریں' : 'Enter name'}
          />
        </div>

        {/* Certificate Card Design */}
        <div 
          id="certificate-print-area"
          className="relative bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 border border-slate-300 rounded-2xl p-6 text-center my-4 shadow-sm"
        >
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5" />
            </div>
          </div>

          <p className="font-space font-bold text-[11px] uppercase tracking-widest text-slate-500">
            BinaDarKe Anti-Scam Training Platform
          </p>
          <h3 className="font-space font-bold text-xl sm:text-2xl text-[#151E33] mt-1">
            CERTIFICATE OF DIGITAL RESILIENCE
          </h3>

          <div className="my-4 py-3 border-y border-dashed border-slate-200">
            <p className="text-xs text-slate-500 font-medium">This is proudly awarded to:</p>
            <h4 className="font-space font-bold text-2xl text-emerald-800 mt-1">
              {userName || 'Safe Citizen'}
            </h4>
            <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              For demonstrating exemplary awareness in identifying phishing links, OTP theft schemes, and financial cyber threats fearlessly.
            </p>
          </div>

          <div className="flex items-center justify-around gap-2 text-left text-xs">
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">Score:</span>
              <span className="font-space font-bold text-sm text-[#151E33]">
                {score} / {totalQuestions} ({percentage}%)
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">Date:</span>
              <span className="font-space font-bold text-sm text-[#151E33]">
                {today}
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <button
            onClick={handleShareWhatsApp}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-space font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <Share2 className="w-4 h-4" />
            <span>Share to WhatsApp</span>
          </button>
          <button
            onClick={handlePrint}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#151E33] font-space font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="w-full mt-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 text-center block cursor-pointer"
        >
          {isCopied ? '✓ Copied to clipboard' : 'Copy verification text'}
        </button>
      </div>
    </div>
  );
}
