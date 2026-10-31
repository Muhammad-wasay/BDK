import React from 'react';
import { X, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function PrivacyModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 relative flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-[2px] border-[#1B2440]/20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#B8F2D0] border-[1.5px] border-[#1B2440] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#1B2440]" />
            </div>
            <div>
              <h3 className="font-space font-extrabold text-lg text-[#1B2440]">
                {isUrdu ? "ڈیٹا پرائیویسی اور گارنٹی" : "Data Privacy & Security Guarantee"}
              </h3>
              <span className="text-[11px] font-bold text-[#1B2440]/70">
                100% Client-Side Sandbox • Zero Data Collection
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-4 h-4 text-[#1B2440]" />
          </button>
        </div>

        {/* Core Principles */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#B8F2D0]/40 border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-sm text-[#1B2440]">
                {isUrdu ? "صفر رجسٹریشن — کوئی لاگ ان نہیں" : "Zero Registration Required"}
              </h4>
              <p className="text-xs font-semibold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu 
                  ? "آپ سے کبھی کوئی نام، فون نمبر، یا پاس ورڈ نہیں مانگا جائے گا۔" 
                  : "We never ask for your email, phone number, or password. Use it anonymously."}
              </p>
            </div>
          </div>

          <div className="bg-[#FFF1A8]/50 border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-sm text-[#1B2440]">
                {isUrdu ? "براؤزر میں محفوظ سمیولیشن" : "100% In-Browser Simulation"}
              </h4>
              <p className="text-xs font-semibold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu
                  ? "تمام پریکٹس صرف آپ کے اپنے موبائل یا لیپ ٹاپ پر چلتی ہے، کسی بیرونی سرور پر نہیں جاتی۔"
                  : "All tests, scam scans, and phone calls run entirely inside your browser. No personal data leaves your device."}
              </p>
            </div>
          </div>

          <div className="bg-[#FFE8E5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-space font-black text-sm text-[#1B2440]">
                {isUrdu ? "حقیقی بینک سے کوئی تعلق نہیں" : "Zero Real Financial Link"}
              </h4>
              <p className="text-xs font-semibold text-[#1B2440]/80 mt-1 leading-relaxed">
                {isUrdu
                  ? "یہ صرف ایک تعلیمی سینڈ باکس ہے۔ یہاں غلط بٹن دبانے پر بھی ایک روپے کا نقصان نہیں ہو سکتا۔"
                  : "This is purely an educational training simulator. Even if you make a wrong choice, zero real money can be lost."}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="w-full py-2.5 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-sm border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center"
        >
          {isUrdu ? "سمجھ گیا" : "Understood"}
        </button>
      </div>
    </div>
  );
}
