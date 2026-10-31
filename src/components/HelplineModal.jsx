import React from 'react';
import { 
  X, 
  PhoneCall, 
  ExternalLink, 
  Lock, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { EasyPaisaLogo, JazzCashLogo, HBLLogo, MeezanLogo, StateBankLogo } from './BrandLogos';
import soundEffects from '../utils/soundEffects';

function FIALogo({ className = "h-6 w-auto" }) {
  return (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-[#FFE8E5] border border-[#BA1A1A] font-space font-black text-xs text-[#BA1A1A] ${className}`}>
      <span>FIA 1991</span>
    </div>
  );
}

export default function HelplineModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';

  const verifiedHelplines = [
    {
      name: isUrdu ? "ایف آئی اے سائبر کرائم ہیلپ لائن" : "FIA Cyber Crime Helpline",
      tagline: isUrdu ? "ہنگامی فراڈ رپورٹنگ • چوبیس گھنٹے دستیاب" : "Emergency Fraud Reporting • 24/7 Available",
      number: "1991",
      tel: "tel:1991",
      badge: "National Emergency",
      badgeColor: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]",
      LogoComponent: FIALogo
    },
    {
      name: isUrdu ? "ایزی پیسہ کسٹمر ہیلپ لائن" : "EasyPaisa Official Helpline",
      tagline: isUrdu ? "فوری اکاؤنٹ بلاک اور فنڈز ریورسل" : "Instant Account Freeze & Dispute",
      number: "3737",
      tel: "tel:3737",
      badge: "Wallet Security",
      badgeColor: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]",
      LogoComponent: EasyPaisaLogo
    },
    {
      name: isUrdu ? "جاز کیش کسٹمر ہیلپ لائن" : "JazzCash Official Helpline",
      tagline: isUrdu ? "والٹ سیکیورٹی اور ٹرانزیکشن رپورٹ" : "Wallet Freeze & Dispute Reporting",
      number: "4444",
      tel: "tel:4444",
      badge: "Wallet Security",
      badgeColor: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]",
      LogoComponent: JazzCashLogo
    },
    {
      name: isUrdu ? "حبیب بینک (HBL) ہیلپ لائن" : "HBL Bank Fraud Helpline",
      tagline: isUrdu ? "بینک کارڈ اور اے ٹی ایم سیکیورٹی" : "Debit Card & Netbanking Freeze",
      number: "021-111-111-425",
      tel: "tel:021111111425",
      badge: "Commercial Banking",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      LogoComponent: HBLLogo
    },
    {
      name: isUrdu ? "میزان بینک ہیلپ لائن" : "Meezan Bank Helpline",
      tagline: isUrdu ? "اسلامک بینکنگ سیکیورٹی اور کارڈ بلاک" : "Account Protection & Card Block",
      number: "021-111-331-331",
      tel: "tel:021111331331",
      badge: "Islamic Banking",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      LogoComponent: MeezanLogo
    },
    {
      name: isUrdu ? "اسٹیٹ بینک آف پاکستان (SBP)" : "State Bank Consumer Protection",
      tagline: isUrdu ? "مرکزی بینک شکایات سیل" : "Central Bank Escalation Cell",
      number: "1025",
      tel: "tel:1025",
      badge: "State Bank Regulatory",
      badgeColor: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]",
      LogoComponent: StateBankLogo
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 relative flex flex-col gap-5"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-2xl bg-white border-[2px] border-[#1B2440] flex items-center justify-center text-[#1B2440] hover:bg-slate-100 cursor-pointer active:scale-95 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 pr-10">
          <div className="w-12 h-12 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] flex items-center justify-center text-[#BA1A1A] flex-shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-space font-extrabold text-2xl text-[#1B2440]">
              {isUrdu ? 'مصدقہ سرکاری ہیلپ لائنز' : 'Verified Pakistan Anti-Fraud Helplines'}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#1B2440]/70">
              {isUrdu 
                ? 'فوری رابطہ کریں اور اپنے اکاؤنٹس محفوظ کروائیں — تمام نمبرز مصدقہ ہیں'
                : 'Direct tap-to-call hotlines to freeze accounts and report cyber scams'}
            </p>
          </div>
        </div>

        {/* Golden Rule Banner */}
        <div className="bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-3.5 text-[#1B2440] flex items-center gap-2.5 text-xs sm:text-sm font-extrabold">
          <Lock className="w-4 h-4 text-[#1B2440] flex-shrink-0" />
          <span>
            {isUrdu 
              ? 'اہم ترین سنہری اصول: اصلی بینک کبھی بھی فون پر آپ سے اے ٹی ایم پن یا او ٹی پی نہیں مانگتا!'
              : 'Golden Rule: Real banks will never ask for your ATM PIN or SMS OTP over the phone!'}
          </span>
        </div>

        {/* Helplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {verifiedHelplines.map((item, idx) => {
            const Logo = item.LogoComponent;
            return (
              <div 
                key={idx}
                className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-[#1B2440] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Logo className="h-6 w-auto" />
                    <span className={`text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-space font-extrabold text-sm sm:text-base text-[#1B2440]">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1B2440]/70 mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1B2440]/15 flex items-center justify-between">
                  <span className="font-space font-black text-sm text-[#1B2440] tracking-wider">
                    {item.number}
                  </span>
                  <a
                    href={item.tel}
                    onClick={() => soundEffects.playClick()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border-[1.5px] border-[#1B2440] text-xs font-space font-black text-[#1B2440] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>{isUrdu ? 'کال کریں' : 'Call'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-[#1B2440]/15 flex items-center justify-between text-xs font-bold text-[#1B2440]/60">
          <span>Official Public Service Data • Government of Pakistan</span>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="font-space font-extrabold text-[#1B2440] underline hover:text-black cursor-pointer"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
