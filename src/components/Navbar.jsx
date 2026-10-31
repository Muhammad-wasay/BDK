import React from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Target, 
  Trophy, 
  PhoneCall, 
  UserCheck
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({
  currentScreen,
  setCurrentScreen,
  babaJiMode,
  setBabaJiMode,
  language,
  setLanguage,
  onOpenHelpline
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const navItems = [
    { id: 'landing', label: t.navHome, icon: ShieldCheck },
    { id: 'guided', label: t.navGuided, icon: BookOpen },
    { id: 'solo', label: t.navSolo, icon: Target },
    { id: 'result', label: t.navResult, icon: Trophy }
  ];

  return (
    <header 
      className={`w-full px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFF4E0]/95 backdrop-blur-md transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        <nav className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-[22px] shadow-[2px_2px_0px_#1B2440] px-4 md:px-5 py-2.5 flex items-center justify-between gap-4">
          
          {/* Logo - Full prominence without duplicate text! */}
          <button
            onClick={() => setCurrentScreen('landing')}
            className="flex items-center text-left cursor-pointer group flex-shrink-0"
            title="BinaDarKe Home"
          >
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav Animated Tabs */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#FFF4E0] p-1 rounded-xl border-[2px] border-[#1B2440]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-space font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440] shadow-[1.5px_1.5px_0px_#1B2440]'
                      : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white/60 border-[2px] border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Clean Language Selector */}
            <div className="flex items-center bg-[#FFF4E0] border-[2px] border-[#1B2440] p-0.5 rounded-xl text-xs font-extrabold">
              <button
                onClick={() => setLanguage('roman')}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'roman'
                    ? 'bg-white text-[#1B2440] border-[1.5px] border-[#1B2440] shadow-[1px_1px_0px_#1B2440]'
                    : 'text-[#1B2440]/70 hover:text-[#1B2440]'
                }`}
                title="Roman Urdu"
              >
                Roman
              </button>
              <button
                onClick={() => setLanguage('urdu')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-urdu-mode ${
                  language === 'urdu'
                    ? 'bg-white text-[#1B2440] border-[1.5px] border-[#1B2440] shadow-[1px_1px_0px_#1B2440]'
                    : 'text-[#1B2440]/70 hover:text-[#1B2440]'
                }`}
                title="اردو"
              >
                اردو
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-[#1B2440] border-[1.5px] border-[#1B2440] shadow-[1px_1px_0px_#1B2440]'
                    : 'text-[#1B2440]/70 hover:text-[#1B2440]'
                }`}
                title="English"
              >
                ENG
              </button>
            </div>

            {/* Elder Mode Toggle */}
            <button
              onClick={() => setBabaJiMode(!babaJiMode)}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-[2px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5 ${
                babaJiMode
                  ? 'bg-[#B8F2D0] text-[#1B2440]'
                  : 'bg-[#D4C5F9] text-[#1B2440] hover:bg-[#c9b9f5]'
              }`}
              title="Buzurg / Elder Mode: Large Clear Text"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">
                {babaJiMode ? t.babaModeActive : t.babaMode}
              </span>
            </button>

            {/* Helpline Modal Trigger */}
            <button
              onClick={onOpenHelpline}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] border-[2px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1B2440]" />
              <span className="hidden md:inline">{t.helplineBtn}</span>
              <span className="md:hidden">Helpline</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden items-center justify-around gap-1 mt-2 bg-white border-[2px] border-[#1B2440] rounded-xl p-1 shadow-[1.5px_1.5px_0px_#1B2440] text-xs font-extrabold text-[#1B2440]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#FFF1A8] border border-[#1B2440] font-black'
                    : 'text-[#1B2440]/75 hover:text-[#1B2440]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
