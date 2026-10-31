import React from 'react';
import { 
  X, 
  PhoneCall, 
  Lock, 
  CheckCircle2, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { EasyPaisaLogo, JazzCashLogo, FIALogo, HBLLogo, MeezanLogo } from './BrandLogos';
import soundEffects from '../utils/soundEffects';

export default function HelplineModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';

  const verifiedHelplines = [
    {
      name: "FIA Cyber Crime Wing",
      urduName: "ایف آئی اے سائبر کرائم ونگ",
      desc: "Federal emergency reporting for cybercrime & digital extortion",
      urduDesc: "آن لائن فراڈ، بلیک میلنگ، اور رقم چوری کی فوری سرکاری رپورٹ",
      number: "1991",
      tel: "tel:1991",
      badge: "Sarkari Emergency (24/7)",
      badgeColor: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]",
      LogoComponent: FIALogo
    },
    {
      name: "EasyPaisa Fraud Support",
      urduName: "ایزی پیسہ فراڈ سپورٹ",
      desc: "Freeze wallet, reverse fraudulent transaction & block account",
      urduDesc: "والٹ فوری بلاک کریں اور غلط رقم کی منتقلی پر رابطہ کریں",
      number: "3737",
      tel: "tel:3737",
      badge: "EasyPaisa Helpline",
      badgeColor: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]",
      LogoComponent: EasyPaisaLogo
    },
    {
      name: "JazzCash Fraud Help",
      urduName: "جاز کیش فراڈ ہیلپ لائن",
      desc: "Direct support to freeze JazzCash wallet and report fraud numbers",
      urduDesc: "جاز کیش اکاؤنٹ بند کروائیں اور فراڈ نمبر رپورٹ کریں",
      number: "4444",
      tel: "tel:4444",
      badge: "JazzCash Helpline",
      badgeColor: "bg-[#FFE8E5] text-[#EE2A24] border-[#EE2A24]",
      LogoComponent: JazzCashLogo
    },
    {
      name: "HBL 24/7 National UAN",
      urduName: "ایچ بی ایل چوبیس گھنٹے ہیلپ لائن",
      desc: "Emergency debit card & net banking temporary freeze",
      urduDesc: "اے ٹی ایم کارڈ اور انٹرنیٹ بینکنگ کو فوری طور پر بلاک کروائیں",
      number: "021-111-111-425",
      tel: "tel:021111111425",
      badge: "HBL 24/7 Helpline",
      badgeColor: "bg-[#B8F2D0] text-[#00693E] border-[#00693E]",
      LogoComponent: HBLLogo
    },
    {
      name: "Meezan Bank 24/7 UAN",
      urduName: "میزان بینک چوبیس گھنٹے ہیلپ لائن",
      desc: "Report suspicious OTP requests or unauthorized withdrawals",
      urduDesc: "مشکوک او ٹی پی کالز اور بغیر اجازت رقم کٹنے کی اطلاع دیں",
      number: "021-111-331-336",
      tel: "tel:021111331336",
      badge: "Meezan Bank",
      badgeColor: "bg-[#D4C5F9] text-[#004380] border-[#004380]",
      LogoComponent: MeezanLogo
    },
    {
      name: "State Bank of Pakistan (SBP)",
      urduName: "اسٹیٹ بینک آف پاکستان شکایات",
      desc: "Banking Mohtasib regulatory banking fraud grievance portal",
      urduDesc: "بینک تعاون نہ کرے تو مرکزی بینک کو شکایت درج کروائیں",
      number: "1025",
      tel: "tel:1025",
      badge: "State Bank Regulatory",
      badgeColor: "bg-[#FFF1A8] text-[#1B2440] border-[#1B2440]",
      LogoComponent: FIALogo
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 relative flex flex-col gap-5"
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
        <div className="bg-[#FFF1A8] border-[2px] border-[#1B2440] rounded-2xl p-3.5 text-[#1B2440] flex items-center gap-2.5 text-xs sm:text-sm font-extrabold">
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
                className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-[#1B2440] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-space font-black uppercase px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <Logo className="h-5 w-auto object-contain" />
                  </div>
                  <h4 className="font-space font-extrabold text-base text-[#1B2440]">
                    {isUrdu ? item.urduName : item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#1B2440]/75 mt-1 leading-snug">
                    {isUrdu ? item.urduDesc : item.desc}
                  </p>
                </div>

                <a
                  href={item.tel}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#B8F2D0] hover:bg-[#a5e9c0] border-[1.5px] border-[#1B2440] font-space font-black text-xs text-[#1B2440] flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#1B2440]" />
                  <span>Call {item.number}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
