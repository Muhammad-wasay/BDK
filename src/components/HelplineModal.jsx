import { 
  X, 
  PhoneCall, 
  ExternalLink, 
  Lock,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { EasyPaisaLogo, JazzCashLogo, HBLLogo, MeezanLogo, StateBankLogo } from './BrandLogos';
import soundEffects from '../utils/soundEffects';

function FIALogo({ className = "h-7 w-auto" }) {
  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FFE8E5] border border-[#BA1A1A] font-space font-black text-xs text-[#BA1A1A] ${className}`}>
      <span>FIA 1991</span>
    </div>
  );
}

export default function HelplineModal({ isOpen, onClose, language = 'roman' }) {
  if (!isOpen) return null;

  const isUrdu = language === 'urdu';
  const isEn = language === 'en';

  const officialHelplines = [
    {
      name: isUrdu 
        ? "ایف آئی اے این آر تھری سی سائبر کرائم" 
        : isEn 
          ? "FIA NR3C Cyber Crime Wing" 
          : "FIA NR3C Cyber Crime Wing",
      tagline: isUrdu 
        ? "آن لائن مالیاتی فراڈ اور غیر قانونی کالز کی سرکاری رپورٹنگ" 
        : isEn 
          ? "Federal agency for cyber financial fraud and impersonation" 
          : "Sarkari helpline baraye online fraud aur fake calls",
      number: "1991",
      tel: "tel:1991",
      badge: isUrdu ? "سرکاری ادارہ" : "Federal Emergency",
      badgeColor: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]",
      sourceUrl: "https://complaint.fia.gov.pk",
      sourceLabel: "complaint.fia.gov.pk",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: FIALogo
    },
    {
      name: isUrdu 
        ? "اسٹیٹ بینک آف پاکستان (شکایات سیل)" 
        : isEn 
          ? "State Bank of Pakistan (SBP) Consumer Portal" 
          : "State Bank of Pakistan (SBP) Consumer Portal",
      tagline: isUrdu 
        ? "بینک تعاون نہ کرے تو مرکزی بینک ریگولیٹر کو شکایت" 
        : isEn 
          ? "Central bank escalation for unresolved bank dispute cases" 
          : "Banking dispute ya fraud report na sunnay par central regulator",
      number: "111-727-273 / 1025",
      tel: "tel:111727273",
      badge: isUrdu ? "مرکزی ریگولیٹر" : "Central Regulator",
      badgeColor: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://www.sbp.org.pk",
      sourceLabel: "sbp.org.pk",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: StateBankLogo
    },
    {
      name: isUrdu 
        ? "پی ٹی اے اینٹی اسپام و سم بلاکنگ سیل" 
        : isEn 
          ? "PTA Anti-Spam Complaint Cell" 
          : "PTA Anti-Spam Complaint Cell",
      tagline: isUrdu 
        ? "دھوکہ دہی والے نمبرز اور جعلی لاٹری میسجز کی شکایت" 
        : isEn 
          ? "Report and blacklist fraudulent SIM cards and spam SMS" 
          : "Fraudulent SIMs aur fake lottery SMS ko block karwane ke liye",
      number: "SMS: 9000 / 0800-55055",
      tel: "tel:080055055",
      badge: isUrdu ? "ٹیلی کام ریگولیٹر" : "Telecom Authority",
      badgeColor: "bg-[#FFF1A8] text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://www.pta.gov.pk",
      sourceLabel: "pta.gov.pk",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: ({ className }) => (
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#1B2440] font-space font-black text-xs text-[#1B2440] ${className}`}>
          <Building2 className="w-3.5 h-3.5 text-[#0F5A3E]" />
          <span>PTA 9000</span>
        </div>
      )
    },
    {
      name: isUrdu ? "ایزی پیسہ کسٹمر ہیلپ لائن" : "EasyPaisa Customer Helpline",
      tagline: isUrdu 
        ? "اکاؤنٹ بلاک اور مشکوک ٹرانزیکشن رپورٹ" 
        : "Account freeze and disputed wallet transaction",
      number: "3737",
      tel: "tel:3737",
      badge: "Mobile Wallet",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://easypaisa.com.pk",
      sourceLabel: "easypaisa.com.pk",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: EasyPaisaLogo
    },
    {
      name: isUrdu ? "جاز کیش کسٹمر ہیلپ لائن" : "JazzCash Customer Helpline",
      tagline: isUrdu 
        ? "والٹ سیکیورٹی اور ٹرانزیکشن تنازعہ" 
        : "Wallet security and unauthorized transaction dispute",
      number: "4444",
      tel: "tel:4444",
      badge: "Mobile Wallet",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://jazzcash.com.pk",
      sourceLabel: "jazzcash.com.pk",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: JazzCashLogo
    },
    {
      name: isUrdu ? "حبیب بینک (HBL) فراڈ ہیلپ لائن" : "HBL Bank Fraud Helpline",
      tagline: isUrdu ? "بینک کارڈ اور نیٹ بینکنگ فریز" : "Debit card and digital banking freeze",
      number: "021-111-111-425",
      tel: "tel:021111111425",
      badge: "Commercial Bank",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://www.hbl.com",
      sourceLabel: "hbl.com",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: HBLLogo
    },
    {
      name: isUrdu ? "میزان بینک ہیلپ لائن" : "Meezan Bank Helpline",
      tagline: isUrdu ? "اسلامک بینکنگ سیکیورٹی اور کارڈ بلاک" : "Account protection and debit card block",
      number: "021-111-331-331",
      tel: "tel:021111331331",
      badge: "Islamic Bank",
      badgeColor: "bg-white text-[#1B2440] border-[#1B2440]",
      sourceUrl: "https://www.meezanbank.com",
      sourceLabel: "meezanbank.com",
      lastChecked: isUrdu ? "اکتوبر ۲۰۲۶" : "October 2026",
      LogoComponent: MeezanLogo
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
          className="absolute top-5 right-5 min-w-[48px] min-h-[48px] rounded-2xl bg-white border-[2px] border-[#1B2440] flex items-center justify-center text-[#1B2440] hover:bg-slate-100 cursor-pointer active:scale-95 transition-all"
          aria-label={isUrdu ? "بند کریں" : "Close modal"}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 pr-12">
          <div className="w-12 h-12 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] flex items-center justify-center text-[#BA1A1A] flex-shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-space font-extrabold text-2xl text-[#1B2440]">
              {isUrdu ? 'سرکاری پاکستانی ہیلپ لائنز' : isEn ? 'Official Pakistan Helplines' : 'Official Pakistan Helplines'}
            </h2>
            <p className="text-sm font-bold text-[#1B2440]/70 mt-0.5">
              {isUrdu 
                ? 'براہ کرم رابطہ کرنے سے پہلے متعلقہ سرکاری ویب سائٹ سے تصدیق کر لیں۔' 
                : 'Please confirm these contact channels on the official websites before calling.'}
            </p>
          </div>
        </div>

        {/* Golden Rule Banner */}
        <div className="bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-4 text-[#1B2440] flex items-center gap-3 text-sm font-extrabold">
          <Lock className="w-5 h-5 text-[#1B2440] flex-shrink-0" />
          <span>
            {isUrdu 
              ? 'اہم ترین سنہری اصول: اصلی بینک کبھی بھی فون پر آپ سے اے ٹی ایم پن یا او ٹی پی نہیں مانگتا!' 
              : 'Golden Rule: Real banks will never ask for your ATM PIN or SMS OTP over the phone!'}
          </span>
        </div>

        {/* Practice Notice */}
        <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-[#1B2440]/80 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0F5A3E] flex-shrink-0" />
          <span>
            {isUrdu
              ? 'پریکٹس مثال: بینادڑکے ایک تعلیمی پلیٹ فارم ہے اور ان اداروں سے باضابطہ طور پر منسلک نہیں ہے۔'
              : 'Educational directory. Practice example. BinaDarKe is not affiliated with or endorsed by these companies or institutions.'}
          </span>
        </div>

        {/* Helplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {officialHelplines.map((item, idx) => {
            const Logo = item.LogoComponent;
            return (
              <div 
                key={idx}
                className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-[#1B2440] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Logo className="h-6 w-auto" />
                    <span className={`text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-space font-extrabold text-base text-[#1B2440]">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/70 mt-1">
                    {item.tagline}
                  </p>
                  <div className="mt-2 text-xs font-bold text-[#1B2440]/60 flex flex-wrap items-center gap-2">
                    <span>
                      {isUrdu ? 'سرکاری ذریعہ:' : 'Official source:'}{' '}
                      <a 
                        href={item.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-[#0F5A3E]"
                      >
                        {item.sourceLabel}
                      </a>
                    </span>
                    <span>•</span>
                    <span>{isUrdu ? 'آخری تصدیق:' : 'Last checked:'} {item.lastChecked}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[#1B2440]/15 flex items-center justify-between">
                  <span className="font-space font-black text-sm text-[#1B2440] tracking-wider">
                    {item.number}
                  </span>
                  <a
                    href={item.tel}
                    onClick={() => soundEffects.playClick()}
                    className="inline-flex items-center gap-1.5 px-4 min-h-[48px] rounded-xl bg-white hover:bg-slate-50 border-[1.5px] border-[#1B2440] text-xs sm:text-sm font-space font-black text-[#1B2440] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>{isUrdu ? 'کال کریں' : 'Call'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-[#1B2440]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-bold text-[#1B2440]/70">
          <span>Official Public Directory • Pakistan</span>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="font-space font-extrabold text-[#1B2440] underline hover:text-black cursor-pointer min-h-[48px] flex items-center"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
