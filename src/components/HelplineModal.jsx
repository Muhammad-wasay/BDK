import React from 'react';
import { 
  X, 
  PhoneCall, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  Clock, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';
import { PAKISTAN_HELPLINES_DATA, ELDER_GOLDEN_RULES_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';

export default function HelplineModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const helplines = PAKISTAN_HELPLINES_DATA[language] || PAKISTAN_HELPLINES_DATA.roman;
  const rules = ELDER_GOLDEN_RULES_DATA[language] || ELDER_GOLDEN_RULES_DATA.roman;
  const isUrdu = language === 'urdu';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-card p-6 sm:p-7 relative ${
          isUrdu ? 'font-urdu-mode' : ''
        }`}
        dir={isUrdu ? 'rtl' : 'ltr'}
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-space font-bold text-2xl text-[#151E33]">
              {isUrdu ? 'سرکاری ہیلپ لائنز اور ہنگامی رہنمائی' : 'Official Helplines & Scam Support'}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              {isUrdu 
                ? 'کسی بھی مشکوک کال یا ڈیجیٹل دھوکہ دہی کی فوری سرکاری اطلاع کے لیے'
                : 'Verified national hotlines to report cyber fraud, scam calls, and phishing'}
            </p>
          </div>
        </div>

        {/* Golden Rule Banner */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 mb-6 text-amber-900 flex items-center gap-2.5 text-xs sm:text-sm font-bold">
          <Lock className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>
            {isUrdu 
              ? 'اہم ترین احتیاط: بینک کبھی بھی فون کال یا میسج پر آپ سے پاس ورڈ یا او ٹی پی نہیں مانگتا!'
              : 'Golden Rule: Legitimate banks will never ask for your ATM PIN or SMS OTP over the phone!'}
          </span>
        </div>

        {/* Helplines List */}
        <div className="space-y-3 mb-6">
          <h3 className="font-space font-bold text-xs uppercase tracking-wider text-slate-500">
            {isUrdu ? 'مصدقہ رابطہ نمبرز:' : 'Verified Hotlines (Pakistan):'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {helplines.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between hover:bg-slate-50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-space font-bold text-[10px] uppercase px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-space font-bold text-sm text-[#151E33] leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    {item.desc}
                  </p>
                </div>
                <a
                  href={item.tel}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 font-space font-bold text-xs text-center text-slate-900 flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call: {item.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Golden Rules */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-5">
          <h3 className="font-space font-bold text-sm text-[#151E33] mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? 'بزرگوں کے لیے ۴ بنیادی اصول:' : '4 Essential Rules for Elders:'}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {rules.map((rule) => (
              <div key={rule.id} className="bg-white p-3 rounded-xl border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">{rule.title}</strong>
                  <span className="text-slate-600 leading-relaxed block mt-0.5">{rule.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Close */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-[#151E33] hover:bg-slate-800 text-white font-space font-bold text-xs transition-all cursor-pointer shadow-xs"
          >
            {isUrdu ? 'شکریہ، سمجھ آ گیا' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
}
