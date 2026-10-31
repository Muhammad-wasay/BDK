import React from 'react';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Trophy,
  PhoneCall,
  UserCheck,
  Phone,
  CreditCard,
  Search
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
  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  const navItems = [
    { id: 'landing', label: t.navHome, icon: ShieldCheck },
    { id: 'guided', label: t.navGuided, icon: BookOpen },
    { id: 'solo', label: t.navSolo, icon: Target },
    { id: 'phone', label: t.navPhone || 'Fake Call', icon: Phone },
    { id: 'payment', label: t.navPayment || 'Payment Trap', icon: CreditCard },
    { id: 'scanner', label: t.navScanner || 'SMS Scanner', icon: Search },
    { id: 'result', label: t.navResult, icon: Trophy },
  ];

  const handleNavClick = (screenId) => {
    soundEffects.playNav();
    setCurrentScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`w-full px-3 sm:px-4 pt-3 pb-2 sticky top-0 z-40 bg-[#FFF4E0]/95 backdrop-blur-md transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Single Navbar Bar (Flat crisp 2.5px border, NO rear cardboard shadow, NO inner nested box) */}
        <nav className="w-full bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-[24px] px-3 sm:px-5 py-2 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo - Standalone official logo without redundant title text */}
          <button
            onClick={() => handleNavClick('landing')}
            className="flex items-center text-left cursor-pointer group flex-shrink-0"
            title="BinaDarKe Home"
          >
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav Items with RollingText Hover Animation (Direct in navbar, NO nested box!) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-xl text-xs xl:text-sm font-space font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FFF1A8] text-[#1B2440] border-[2px] border-[#1B2440]'
                      : 'text-[#1B2440]/75 hover:text-[#1B2440] hover:bg-white border-[2px] border-transparent hover:border-[#1B2440]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:scale-110 flex-shrink-0 ${
                    isActive ? 'text-[#1B2440]' : 'text-[#1B2440]/70'
                  }`} />
                  
                  {/* Clean Rolling Text Animation */}
                  <RollingText text={item.label} />

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] flex-shrink-0"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Controls: Language Pill + Elder Mode + Helpline */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Language Switcher */}
            {setLanguage && (
              <div className="flex items-center bg-[#FFF4E0] border-[2px] border-[#1B2440] p-0.5 rounded-xl text-[11px] font-extrabold">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setLanguage('roman');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'roman'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black'
                      : 'text-[#1B2440]/70 hover:text-[#1B2440]'
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
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer font-urdu-mode ${
                    language === 'urdu'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black'
                      : 'text-[#1B2440]/70 hover:text-[#1B2440]'
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
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black'
                      : 'text-[#1B2440]/70 hover:text-[#1B2440]'
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
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-[2px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer select-none active:scale-95 ${
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
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] border-[2px] border-[#1B2440] text-xs font-space font-extrabold transition-all cursor-pointer select-none active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1B2440] flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">{t.helplineBtn}</span>
              <span className="sm:hidden">Madad</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation bar (Scrollable pills) */}
        <div className="flex lg:hidden items-center gap-1.5 mt-2 overflow-x-auto pb-1 text-xs font-space font-extrabold text-[#1B2440] no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border-[1.5px] border-[#1B2440] whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#FFF1A8] font-black'
                    : 'bg-white text-[#1B2440]/75 hover:text-[#1B2440]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
