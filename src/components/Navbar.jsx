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
  Sparkles,
  Menu,
  X,
  Info
} from 'lucide-react';
import RollingText from './RollingText';
import soundEffects from '../utils/soundEffects';

export default function Navbar({
  currentScreen,
  setCurrentScreen
}) {
  const [isSimulatorsOpen, setIsSimulatorsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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
      title: "Fake Bank Call Simulator",
      desc: "Simulate aggressive bank manager call asking for OTP",
      icon: Phone,
      color: "bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]"
    },
    {
      id: 'payment',
      title: "Payment & Screenshot Scam",
      desc: "Spot doctored EasyPaisa / JazzCash payment proofs",
      icon: CreditCard,
      color: "bg-[#FFF1A8] text-[#1B2440] border-[#1B2440]"
    },
    {
      id: 'scanner',
      title: "Scam Message & Link Scanner",
      desc: "Paste any message or URL for instant heuristic analysis",
      icon: Search,
      color: "bg-[#D4C5F9] text-[#1B2440] border-[#1B2440]"
    }
  ];

  return (
    <header className="w-full px-3 sm:px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFF4E0]/95 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Navbar Bar (Pure Flat 2.5px Border, Zero Shadow) */}
        <nav className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-[22px] px-3 sm:px-5 py-2 flex items-center justify-between gap-3">
          
          {/* 1. Official Logo */}
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

          {/* 2. Desktop Nav Items (Direct in Navbar) */}
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
              <RollingText text="Home" />
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
              <RollingText text="Guided Practice" />
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
              <RollingText text="Solo Test" />
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
                <span>Simulators</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSimulatorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Simulators Dropdown Panel */}
              {isSimulatorsOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-2xl p-2 z-50 flex flex-col gap-1 animate-fadeIn">
                  <div className="px-2.5 py-1 text-[11px] font-space font-black uppercase text-[#1B2440]/60 border-b border-[#1B2440]/15">
                    Interactive Scam Labs
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

            {/* Results (Formerly Nateeja) */}
            <button
              onClick={() => handleNavClick('result')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'result'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Trophy className="w-4 h-4 flex-shrink-0" />
              <RollingText text="Results" />
            </button>

            {/* About Page */}
            <button
              onClick={() => handleNavClick('about')}
              className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-space font-extrabold transition-all cursor-pointer ${
                currentScreen === 'about'
                  ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                  : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
              }`}
            >
              <Info className="w-4 h-4 flex-shrink-0" />
              <RollingText text="About" />
            </button>
          </div>

          {/* 3. Mobile Hamburger Toggle */}
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

        {/* 4. Mobile Expandable Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-3 flex flex-col gap-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('landing')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'landing' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavClick('guided')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'guided' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Guided Practice</span>
              </button>
              <button
                onClick={() => handleNavClick('solo')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'solo' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Solo Test</span>
              </button>
              <button
                onClick={() => handleNavClick('result')}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'result' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Results</span>
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`col-span-2 flex items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-space font-extrabold border ${
                  currentScreen === 'about' ? 'bg-[#FFF1A8] border-[#1B2440]' : 'bg-white border-slate-200'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>About BinaDarKe</span>
              </button>
            </div>

            {/* Mobile Simulators Section */}
            <div className="pt-2 border-t border-[#1B2440]/15">
              <div className="text-[10px] font-space font-black uppercase text-[#1B2440]/60 mb-1.5 px-1">
                Interactive Simulators
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
          </div>
        )}
      </div>
    </header>
  );
}
