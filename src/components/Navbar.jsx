import React, { useState, useRef, useEffect } from 'react';
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
  Settings
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

  const isSimulatorActive = ['phone', 'payment', 'scanner'].includes(currentScreen);

  const simulatorOptions = [
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
    <header className="w-full px-3 sm:px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFFBF5]/95 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto w-full flex items-center gap-2 sm:gap-3">
        
        {/* Main Navbar Bar (Crisp White, 2.5px Solid Border, Zero Shadow) */}
        <nav className="flex-1 bg-white border-[2.5px] border-[#1B2440] rounded-[22px] px-3 sm:px-4 py-2 flex items-center justify-between gap-3">
          
          {/* 1. Official Logo */}
          <button
            onClick={() => handleNavClick('landing')}
            className="flex items-center text-left cursor-pointer group flex-shrink-0"
            title="BinaDarKe Home"
          >
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>

          {/* 2. Desktop Nav Items (Centered & Balanced, No huge void) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 flex-wrap justify-end">
            
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('landing')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'landing'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navHome || "ہوم"}</span> : <RollingText text={t.navHome || "Home"} />}
            </button>

            {/* 2. About (Directly after Home as requested) */}
            <button
              onClick={() => handleNavClick('about')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
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
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
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
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
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
                className={`group flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                  isSimulatorActive
                    ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                    : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
                }`}
              >
                <span>{t.navSimulators || "Simulators"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSimulatorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isSimulatorsOpen && (
                <div 
                  className={`absolute top-full mt-2 w-72 bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-2 z-50 animate-fadeIn ${
                    isUrdu ? 'left-0' : 'right-0'
                  }`}
                >
                  <div className="p-1.5 flex flex-col gap-1.5">
                    {simulatorOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isActive = currentScreen === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleNavClick(opt.id)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl text-left cursor-pointer transition-all ${
                            isActive ? 'bg-[#B8F2D0] border border-[#1B2440]' : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg border flex-shrink-0 mt-0.5 ${opt.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="block text-xs font-space font-extrabold text-[#1B2440]">
                              {opt.title}
                            </span>
                            <span className="block text-[11px] font-bold text-[#1B2440]/60 leading-tight">
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
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'result'
                  ? 'bg-[#B8F2D0] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/80 hover:text-[#1B2440] hover:bg-slate-50 border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Trophy className="w-4 h-4 flex-shrink-0" />
              {isUrdu ? <span>{t.navResult || "نتیجہ"}</span> : <RollingText text={t.navResult || "Results"} />}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-xl border-[2px] border-[#1B2440] bg-white cursor-pointer"
              title="Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* 3. SETTINGS BUTTON (100% IN LINE WITH NAVBAR, OUTSIDE THE BAR) */}
        <button
          onClick={() => {
            soundEffects.playClick();
            if (onOpenSettings) onOpenSettings();
          }}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[20px] bg-white hover:bg-[#B8F2D0] border-[2.5px] border-[#1B2440] flex items-center justify-center flex-shrink-0 cursor-pointer active:scale-95 transition-all"
          title="Settings (Language & Elder Mode)"
        >
          <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B2440] hover:rotate-45 transition-transform" />
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-3 animate-fadeIn">
          <div className="flex flex-col gap-1 text-xs font-space font-extrabold text-[#1B2440]">
            <button
              onClick={() => handleNavClick('landing')}
              className={`flex items-center gap-2 p-2 rounded-xl text-left ${currentScreen === 'landing' ? 'bg-[#B8F2D0]' : 'hover:bg-slate-50'}`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.navHome || "Home"}</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center gap-2 p-2 rounded-xl text-left ${currentScreen === 'about' ? 'bg-[#B8F2D0]' : 'hover:bg-slate-50'}`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>{t.navAbout || "About"}</span>
            </button>
            <button
              onClick={() => handleNavClick('guided')}
              className={`flex items-center gap-2 p-2 rounded-xl text-left ${currentScreen === 'guided' ? 'bg-[#B8F2D0]' : 'hover:bg-slate-50'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.navGuided || "Guided Practice"}</span>
            </button>
            <button
              onClick={() => handleNavClick('solo')}
              className={`flex items-center gap-2 p-2 rounded-xl text-left ${currentScreen === 'solo' ? 'bg-[#B8F2D0]' : 'hover:bg-slate-50'}`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>{t.navSolo || "Solo Test"}</span>
            </button>
            <button
              onClick={() => handleNavClick('result')}
              className={`flex items-center gap-2 p-2 rounded-xl text-left ${currentScreen === 'result' ? 'bg-[#B8F2D0]' : 'hover:bg-slate-50'}`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{t.navResult || "Results"}</span>
            </button>

            <div className="pt-2 mt-1 border-t border-[#1B2440]/15">
              <span className="text-[10px] uppercase font-black text-[#1B2440]/60 px-2 block mb-1">
                {t.navSimulators || "Simulators"}
              </span>
              <button
                onClick={() => handleNavClick('phone')}
                className="w-full flex items-center gap-2 p-2 rounded-xl text-left hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-[#BA1A1A]" />
                <span>{isUrdu ? "جعلی بینک کال" : "Fake Bank Call"}</span>
              </button>
              <button
                onClick={() => handleNavClick('payment')}
                className="w-full flex items-center gap-2 p-2 rounded-xl text-left hover:bg-slate-50"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#1B2440]" />
                <span>{isUrdu ? "ادائیگی فراڈ" : "Payment Scam"}</span>
              </button>
              <button
                onClick={() => handleNavClick('scanner')}
                className="w-full flex items-center gap-2 p-2 rounded-xl text-left hover:bg-slate-50"
              >
                <Search className="w-3.5 h-3.5 text-[#1B2440]" />
                <span>{isUrdu ? "اسکام اسکینر" : "Scam Scanner"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
