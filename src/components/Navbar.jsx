import React, { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Trophy,
  PhoneCall,
  UserCheck,
  Phone,
  CreditCard,
  Search,
  ChevronDown,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import RollingText from './RollingText';
import { TRANSLATIONS } from '../data/translations';
import soundEffects from '../utils/soundEffects';

export default function Navbar({
  currentScreen,
  setCurrentScreen,
  babaJiMode,
  setBabaJiMode,
  language = 'roman',
  setLanguage,
  onOpenHelpline
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
      title: isUrdu ? "جعلی فون کال سمیولیٹر" : "Fake Bank Call Simulator",
      desc: isUrdu ? "بینک مینیجر بن کر کال اور او ٹی پی فراڈ" : "Simulate aggressive bank manager call asking for OTP",
      icon: Phone,
      color: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]"
    },
    {
      id: 'payment',
      title: isUrdu ? "ادائیگی اور اسکرین شاٹ فراڈ" : "Payment & Screenshot Scam",
      desc: isUrdu ? "ایزی پیسہ / جاز کیش رسیدوں کا جال" : "Spot doctored EasyPaisa / JazzCash payment proofs",
      icon: CreditCard,
      color: "bg-[#FFF1A8] text-[#1B2440] border-[#1B2440]"
    },
    {
      id: 'scanner',
      title: isUrdu ? "مشکوک میسج اور لنک اسکینر" : "Scam Message & Link Scanner",
      desc: isUrdu ? "کوئی بھی واٹس ایپ میسج چیک کریں" : "Paste any message or URL for instant heuristic analysis",
      icon: Search,
      color: "bg-[#D4C5F9] text-[#1B2440] border-[#1B2440]"
    }
  ];

  return (
    <header 
      className={`w-full px-3 sm:px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFF4E0]/95 backdrop-blur-md transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Navbar Bar */}
        <nav className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-[22px] px-3 sm:px-5 py-2 flex items-center justify-between gap-3 shadow-[1.5px_1.5px_0px_#1B2440]">
          
          {/* 1. Brand Logo */}
          <button
            onClick={() => handleNavClick('landing')}
            className="flex items-center text-left cursor-pointer group flex-shrink-0"
            title="BinaDarKe Home"
          >
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* 2. Desktop Essential Nav Items (Only 4 core items - Zero Clutter!) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Home */}
            <button
              onClick={() => handleNavClick('landing')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'landing'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <RollingText text={t.navHome} />
            </button>

            {/* Guided Practice */}
            <button
              onClick={() => handleNavClick('guided')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'guided'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <RollingText text={t.navGuided} />
            </button>

            {/* Solo Test */}
            <button
              onClick={() => handleNavClick('solo')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'solo'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Target className="w-4 h-4 flex-shrink-0" />
              <RollingText text={t.navSolo} />
            </button>

            {/* Simulators Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsSimulatorsOpen(!isSimulatorsOpen)}
                className={`group relative flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                  isSimulatorActive
                    ? 'bg-[#D4C5F9] text-[#1B2440] border-[2px] border-[#1B2440]'
                    : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>{isUrdu ? "سمیولیٹرز" : "Simulators"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSimulatorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Simulators Dropdown Panel */}
              {isSimulatorsOpen && (
                <div className="absolute left-0 sm:left-auto top-full mt-2 w-72 bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-2xl p-2 shadow-[3px_3px_0px_#1B2440] z-50 flex flex-col gap-1 animate-fadeIn">
                  <div className="px-2.5 py-1 text-[11px] font-space font-black uppercase text-[#1B2440]/60 border-b border-[#1B2440]/15">
                    {isUrdu ? "عملی لیب ماڈیولز" : "Interactive Scam Labs"}
                  </div>
                  {simulatorOptions.map((sim) => {
                    const SimIcon = sim.icon;
                    const isActive = currentScreen === sim.id;
                    return (
                      <button
                        key={sim.id}
                        onClick={() => handleNavClick(sim.id)}
                        className={`flex items-start gap-2.5 p-2 rounded-xl text-left transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-[#FFF1A8] border-[#1B2440]'
                            : 'hover:bg-[#FFF4E0] border-transparent'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${sim.color}`}>
                          <SimIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-space font-extrabold text-[#1B2440]">
                            {sim.title}
                          </div>
                          <div className="text-[11px] text-[#1B2440]/75 line-clamp-1">
                            {sim.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Results */}
            <button
              onClick={() => handleNavClick('result')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'result'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Trophy className="w-4 h-4 flex-shrink-0" />
              <RollingText text={t.navResult} />
            </button>
          </div>

          {/* 3. Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Switcher */}
            {setLanguage && (
              <div className="flex items-center bg-[#FFF4E0] border-[1.5px] border-[#1B2440] p-0.5 rounded-xl text-[11px] font-extrabold">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setLanguage('roman');
                  }}
                  className={`px-1.5 sm:px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                    language === 'roman'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black shadow-[0.5px_0.5px_0px_#1B2440]'
                      : 'text-[#1B2440]/60 hover:text-[#1B2440]'
                  }`}
                  title="Roman Urdu"
                >
                  Roman
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setLanguage('urdu');
                  }}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-urdu-mode ${
                    language === 'urdu'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black shadow-[0.5px_0.5px_0px_#1B2440]'
                      : 'text-[#1B2440]/60 hover:text-[#1B2440]'
                  }`}
                  title="اردو"
                >
                  اردو
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setLanguage('en');
                  }}
                  className={`px-1.5 sm:px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black shadow-[0.5px_0.5px_0px_#1B2440]'
                      : 'text-[#1B2440]/60 hover:text-[#1B2440]'
                  }`}
                  title="English"
                >
                  ENG
                </button>
              </div>
            )}

            {/* Elder Mode Toggle */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setBabaJiMode(!babaJiMode);
              }}
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border-[1.5px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer select-none active:scale-95 ${
                babaJiMode
                  ? 'bg-[#B8F2D0] text-[#1B2440]'
                  : 'bg-[#D4C5F9] text-[#1B2440] hover:bg-[#c9b9f5]'
              }`}
              title="Buzurg / Elder Mode: Large Clear Text"
            >
              <UserCheck className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="whitespace-nowrap">
                {babaJiMode ? t.babaModeActive : t.babaMode}
              </span>
            </button>

            {/* Helpline Modal Trigger */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenHelpline();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] border-[1.5px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer select-none active:scale-95 flex-shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1B2440] flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">{t.helplineBtn}</span>
              <span className="sm:hidden">1991</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-xl border-[1.5px] border-[#1B2440] bg-white cursor-pointer"
              title="Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* 4. Mobile Expandable Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-3 flex flex-col gap-2 shadow-[2px_2px_0px_#1B2440] animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('landing')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'landing' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.navHome}</span>
              </button>
              <button
                onClick={() => handleNavClick('guided')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'guided' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.navGuided}</span>
              </button>
              <button
                onClick={() => handleNavClick('solo')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'solo' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>{t.navSolo}</span>
              </button>
              <button
                onClick={() => handleNavClick('result')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'result' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>{t.navResult}</span>
              </button>
            </div>

            {/* Mobile Simulators Section */}
            <div className="pt-2 border-t border-[#1B2440]/15">
              <div className="text-[10px] font-space font-black uppercase text-[#1B2440]/60 mb-1.5 px-1">
                {isUrdu ? "عملی سمیولیٹرز" : "Simulators"}
              </div>
              <div className="flex flex-col gap-1.5">
                {simulatorOptions.map((sim) => {
                  const SimIcon = sim.icon;
                  const isActive = currentScreen === sim.id;
                  return (
                    <button
                      key={sim.id}
                      onClick={() => handleNavClick(sim.id)}
                      className={`flex items-center gap-2 p-2 rounded-xl text-left border text-xs font-space font-bold ${
                        isActive ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                      }`}
                    >
                      <SimIcon className="w-4 h-4 flex-shrink-0" />
                      <span>{sim.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Buzurg Mode Toggle */}
            <div className="pt-2 border-t border-[#1B2440]/15 flex items-center justify-between">
              <span className="text-xs font-bold text-[#1B2440]">
                {t.babaMode}
              </span>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setBabaJiMode(!babaJiMode);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-space font-black border border-[#1B2440] ${
                  babaJiMode ? 'bg-[#B8F2D0]' : 'bg-[#D4C5F9]'
                }`}
              >
                {babaJiMode ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
