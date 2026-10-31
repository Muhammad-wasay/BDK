import { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Trophy,
  Phone,
  CreditCard,
  Search,
  ChevronDown,
  Menu,
  X,
  Info,
  Settings,
  Smartphone,
  Lock
} from 'lucide-react';
import RollingText from './RollingText';
import { TRANSLATIONS } from '../data/translations';
import soundEffects from '../utils/soundEffects';

export default function Navbar({
  currentScreen,
  setCurrentScreen,
  language = 'roman',
  onOpenSettings
}) {
  const [isSimulatorsOpen, setIsSimulatorsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSimulatorsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (screenId) => {
    soundEffects.playNav();
    setCurrentScreen(screenId);
    setIsSimulatorsOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSimulatorActive = ['phone', 'payment', 'scanner', 'practice-phone'].includes(currentScreen);

  const simulatorOptions = [
    {
      id: 'practice-phone',
      title: isUrdu ? "پریکٹس فون اسکرین" : "Practice Phone Simulator",
      desc: isUrdu ? "واٹس ایپ اور ایزی پیسہ کی مکمل عملی مشق" : "Interactive phone for WhatsApp & payments",
      icon: Smartphone,
      color: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]"
    },
    {
      id: 'phone',
      title: isUrdu ? "جعلی بینک کال سمیولیشن" : "Fake Bank Call Simulator",
      desc: isUrdu ? "او ٹی پی مانگنے والی بینک کال کا مشق" : "Simulate aggressive bank call demanding OTP",
      icon: Phone,
      color: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]"
    },
    {
      id: 'payment',
      title: isUrdu ? "ایزی پیسہ / جاز کیش سلپ فراڈ" : "Payment & Screenshot Scam",
      desc: isUrdu ? "جعلی ادائیگی کی رسیدیں پہچانیں" : "Spot doctored EasyPaisa / JazzCash payment proofs",
      icon: CreditCard,
      color: "bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]"
    },
    {
      id: 'scanner',
      title: isUrdu ? "میسج اور لنک اسکینر" : "Scam Message & Link Scanner",
      desc: isUrdu ? "کوئی بھی میسج پیسٹ کریں اور ریڈ فلیگز چیک کریں" : "Paste any message or URL for instant heuristic analysis",
      icon: Search,
      color: "bg-[#FFF1A8] text-[#1B2440] border-[#1B2440]"
    }
  ];

  return (
    <header className="w-full px-3 sm:px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFF4E0]/95 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto w-full flex items-center gap-2 sm:gap-3">
        
        {/* Main Navbar Bar */}
        <nav className="flex-1 bg-white border-[2.5px] border-[#1B2440] rounded-[22px] px-3 sm:px-4 py-2 flex items-center justify-between gap-3 shadow-[2px_2px_0px_#1B2440]">
          
          {/* 1. Official Logo */}
          <button
            onClick={() => handleNavClick('landing')}
            className="flex items-center text-left cursor-pointer group flex-shrink-0 min-h-[48px]"
            title="BinaDarKe Home"
          >
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>

          {/* 2. Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 flex-wrap justify-end">
            
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('landing')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'landing'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navHome || "ہوم"}</span> : <RollingText text={t.navHome || "Home"} />}
            </button>

            {/* 2. About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'about'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Info className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navAbout || "تعارف"}</span> : <RollingText text={t.navAbout || "About"} />}
            </button>

            {/* 3. Guided Practice */}
            <button
              onClick={() => handleNavClick('guided')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'guided'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navGuided || "رہنمائی مشق"}</span> : <RollingText text={t.navGuided || "Guided Practice"} />}
            </button>

            {/* 4. Solo Test */}
            <button
              onClick={() => handleNavClick('solo')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'solo'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Target className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navSolo || "ٹیسٹ"}</span> : <RollingText text={t.navSolo || "Solo Test"} />}
            </button>

            {/* 5. Simulators Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsSimulatorsOpen(!isSimulatorsOpen)}
                className={`group flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                  isSimulatorActive
                    ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                    : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
                }`}
                aria-expanded={isSimulatorsOpen}
              >
                <span>{t.navSimulators || "Simulators"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSimulatorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isSimulatorsOpen && (
                <div 
                  className={`absolute top-full mt-2 w-72 bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-2 z-50 animate-fadeIn shadow-[3px_3px_0px_#1B2440] ${
                    isUrdu ? 'left-0' : 'right-0'
                  }`}
                >
                  <div className="p-1 flex flex-col gap-1.5">
                    {simulatorOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isActive = currentScreen === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleNavClick(opt.id)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl text-left cursor-pointer transition-all min-h-[48px] ${
                            isActive ? 'bg-[#B8F2D0] border border-[#1B2440]' : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className={`p-2 rounded-lg border flex-shrink-0 mt-0.5 ${opt.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs sm:text-sm font-space font-extrabold text-[#1B2440]">
                              {opt.title}
                            </span>
                            <span className="block text-xs font-bold text-[#1B2440]/70 leading-tight">
                              {opt.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 6. Results */}
            <button
              onClick={() => handleNavClick('result')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'result'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Trophy className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navResult || "نتیجہ"}</span> : <RollingText text={t.navResult || "Results"} />}
            </button>

            {/* 7. Privacy & Safety Policy */}
            <button
              onClick={() => handleNavClick('privacy')}
              className={`group relative flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'privacy'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Lock className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>پرائیویسی</span> : <RollingText text="Privacy" />}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[48px] min-h-[48px] rounded-xl border-[2px] border-[#1B2440] bg-white cursor-pointer flex items-center justify-center"
              title="Menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* 3. SETTINGS BUTTON (Accessible >= 48px touch target) */}
        <button
          onClick={() => {
            soundEffects.playClick();
            if (onOpenSettings) onOpenSettings();
          }}
          className="min-w-[48px] min-h-[48px] rounded-[20px] bg-white hover:bg-[#B8F2D0] border-[2.5px] border-[#1B2440] flex items-center justify-center flex-shrink-0 cursor-pointer active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
          title="Settings (Language & Elder Mode)"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-[#1B2440] hover:rotate-45 transition-transform" />
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-3 animate-fadeIn shadow-[3px_3px_0px_#1B2440]">
          <div className="flex flex-col gap-1 text-sm font-space font-extrabold text-[#1B2440]">
            <button
              onClick={() => handleNavClick('landing')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isUrdu ? "ہوم" : "Home"}</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <Info className="w-4 h-4" />
              <span>{isUrdu ? "تعارف" : "About Us"}</span>
            </button>
            <button
              onClick={() => handleNavClick('guided')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>{isUrdu ? "رہنمائی مشق" : "Guided Practice"}</span>
            </button>
            <button
              onClick={() => handleNavClick('solo')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <Target className="w-4 h-4" />
              <span>{isUrdu ? "سولو ٹیسٹ" : "Solo Test"}</span>
            </button>
            <button
              onClick={() => handleNavClick('practice-phone')}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#B8F2D0] min-h-[48px]"
            >
              <Smartphone className="w-4 h-4" />
              <span>{isUrdu ? "پریکٹس فون سمیولیشن" : "Practice Phone"}</span>
            </button>
            <button
              onClick={() => handleNavClick('phone')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#BA1A1A]" />
              <span>{isUrdu ? "بینک کال سمیولیشن" : "Bank Call Simulator"}</span>
            </button>
            <button
              onClick={() => handleNavClick('payment')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <CreditCard className="w-4 h-4 text-[#0F5A3E]" />
              <span>{isUrdu ? "پیمنٹ فراڈ سمیولیشن" : "Payment Scam Simulator"}</span>
            </button>
            <button
              onClick={() => handleNavClick('scanner')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <Search className="w-4 h-4" />
              <span>{isUrdu ? "میسج اسکینر" : "Scam Scanner"}</span>
            </button>
            <button
              onClick={() => handleNavClick('result')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px]"
            >
              <Trophy className="w-4 h-4" />
              <span>{isUrdu ? "نتائج و سند" : "Results & Certificate"}</span>
            </button>
            <button
              onClick={() => handleNavClick('privacy')}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 min-h-[48px] text-[#0F5A3E]"
            >
              <Lock className="w-4 h-4" />
              <span>{isUrdu ? "پرائیویسی و ڈیٹا سیفٹی" : "Privacy & Safety Policy"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
