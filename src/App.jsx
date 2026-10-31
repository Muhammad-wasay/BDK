import React, { useState, useEffect } from 'react';
import { Settings, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HelplineModal from './components/HelplineModal';
import CertificateModal from './components/CertificateModal';
import SettingsModal from './components/SettingsModal';
import PrivacyModal from './components/PrivacyModal';
import RollingText from './components/RollingText';

import LandingScreen from './screens/LandingScreen';
import GuidedPracticeScreen from './screens/GuidedPracticeScreen';
import SoloPracticeScreen from './screens/SoloPracticeScreen';
import ResultScreen from './screens/ResultScreen';
import PhoneCallSimulatorScreen from './screens/PhoneCallSimulatorScreen';
import PaymentScamScreen from './screens/PaymentScamScreen';
import ScamScannerScreen from './screens/ScamScannerScreen';
import AboutScreen from './screens/AboutScreen';

import { SOLO_SCENARIOS_DATA } from './data/scenarios';
import { TRANSLATIONS } from './data/translations';
import soundEffects from './utils/soundEffects';

function App() {
  // Load state from localStorage on mount
  const [currentScreen, setCurrentScreen] = useState(() => {
    const saved = localStorage.getItem('binadarke_screen');
    return saved || 'landing';
  });
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('binadarke_language');
    return saved || 'roman';
  });
  const [babaJiMode, setBabaJiMode] = useState(() => {
    const saved = localStorage.getItem('binadarke_babaMode');
    return saved === 'true';
  });

  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Solo Practice scores & answers
  const [soloScore, setSoloScore] = useState(() => {
    const saved = localStorage.getItem('binadarke_score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [soloAnswers, setSoloAnswers] = useState(() => {
    const saved = localStorage.getItem('binadarke_answers');
    return saved ? JSON.parse(saved) : [];
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('binadarke_screen', currentScreen);
  }, [currentScreen]);

  useEffect(() => {
    localStorage.setItem('binadarke_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('binadarke_babaMode', babaJiMode);
  }, [babaJiMode]);

  useEffect(() => {
    localStorage.setItem('binadarke_score', soloScore.toString());
  }, [soloScore]);

  useEffect(() => {
    localStorage.setItem('binadarke_answers', JSON.stringify(soloAnswers));
  }, [soloAnswers]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';
  const totalQuestions = (SOLO_SCENARIOS_DATA[language] || SOLO_SCENARIOS_DATA.roman).length;

  const handleStartPractice = () => {
    soundEffects.playNav();
    setCurrentScreen('guided');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToSolo = () => {
    soundEffects.playNav();
    setCurrentScreen('solo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteSolo = (answers, score) => {
    setSoloAnswers(answers);
    setSoloScore(score);
    soundEffects.playSuccess();
    setCurrentScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    soundEffects.playClick();
    setSoloAnswers([]);
    setSoloScore(0);
    setCurrentScreen('solo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    soundEffects.playNav();
    setCurrentScreen('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-nunito text-[#1B2440] bg-[#FFF4E0] transition-all selection:bg-[#B8F2D0] selection:text-[#1B2440] overflow-x-hidden w-full max-w-full ${
        babaJiMode ? 'elder-active text-lg' : 'text-base'
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >


      {/* 1. TOP MARQUEE TICKER (Matching Brand Emerald Green Theme) */}
      <AnnouncementBar language={language} />

      {/* 2. SLEEK NAVBAR (No clunky settings inside navbar) */}
      <Navbar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        language={language}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* 3. ACTIVE SCREEN CONTENT */}
      <main className="w-full flex-1 flex flex-col overflow-x-hidden">
        {currentScreen === 'landing' && (
          <LandingScreen
            onStartPractice={handleStartPractice}
            onOpenHelpline={() => setIsHelplineOpen(true)}
            onGoToScreen={(screenId) => {
              soundEffects.playNav();
              setCurrentScreen(screenId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'guided' && (
          <GuidedPracticeScreen
            onNextStep={handleGoToSolo}
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'solo' && (
          <SoloPracticeScreen
            onCompleteSolo={handleCompleteSolo}
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'result' && (
          <ResultScreen
            score={soloScore}
            totalQuestions={totalQuestions}
            answers={soloAnswers}
            onRetry={handleRetry}
            onGoHome={handleGoHome}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'phone' && (
          <PhoneCallSimulatorScreen
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'payment' && (
          <PaymentScamScreen
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'scanner' && (
          <ScamScannerScreen
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onGoHome={handleGoHome}
            babaJiMode={babaJiMode}
            language={language}
          />
        )}
      </main>

      {/* 4. PROFESSIONAL FOOTER (GROUPED LINKS SHIFTED TOWARDS RIGHT) */}
      <footer className="w-full bg-[#FFFDF9] border-t-[2.5px] border-[#1B2440] py-12 px-4 mt-16 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Left Column: Brand & Mission */}
          <div className="max-w-sm flex flex-col gap-3">
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('landing');
              }}
              className="cursor-pointer text-left w-fit"
            >
              <img 
                src="/official_logo.png" 
                alt="BinaDarKe" 
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </button>
            <p className="text-xs sm:text-sm font-bold text-[#1B2440]/75 leading-relaxed">
              Pakistan's first fear-free anti-scam training sandbox designed for elders and families to practice digital safety without financial risk.
            </p>
            <div className="pt-1">
              <span className="inline-block text-[11px] font-space font-black bg-[#B8F2D0] border border-[#1B2440] px-3 py-0.5 rounded-full text-[#1B2440]">
                100% Free & Educational Public Service
              </span>
            </div>
          </div>

          {/* Right Area: Clean 2 Groups (Zero Clutter, Zero Live Labs) */}
          <div className="grid grid-cols-2 gap-10 text-xs font-space font-extrabold text-[#1B2440]">
            
            {/* Group 1: Navigation */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] uppercase tracking-wider text-[#1B2440]/60 font-black">
                {isUrdu ? "نیویگیشن" : "Navigation"}
              </span>
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('landing');
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "ہوم" : "Home"} />
              </button>
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('about');
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "ہمارا تعارف" : "About Us"} />
              </button>
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('guided');
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "رہنمائی مشق" : "Guided Practice"} />
              </button>
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('solo');
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "ٹیسٹ" : "Solo Test"} />
              </button>
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('result');
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "نتیجہ" : "Results"} />
              </button>
            </div>

            {/* Group 2: Emergency & Help */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] uppercase tracking-wider text-[#1B2440]/60 font-black">
                {isUrdu ? "حفاظت و مدد" : "Help & Safety"}
              </span>
              <a
                href="tel:1991"
                className="group cursor-pointer text-left w-fit text-[#BA1A1A] font-black"
              >
                <RollingText text="Call FIA (1991)" />
              </a>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setIsHelplineOpen(true);
                }}
                className="group cursor-pointer text-left w-fit"
              >
                <RollingText text={isUrdu ? "بینک ہیلپ لائنز" : "Bank Helplines"} />
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setIsPrivacyOpen(true);
                }}
                className="group cursor-pointer text-left w-fit text-[#0F5A3E]"
              >
                <RollingText text={isUrdu ? "پرائیویسی گارنٹی" : "Privacy Guarantee"} />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Micro Line */}
        <div className="max-w-6xl mx-auto mt-10 pt-4 border-t border-[#1B2440]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-[#1B2440]/60">
          <span>© 2026 BinaDarKe • Pakistan Fear-Free Anti-Scam Training Sandbox</span>
          <span>Zero Real Risk • Non-Profit Public Initiative</span>
        </div>
      </footer>

      {/* 5. HELPLINE SUPPORT MODAL */}
      <HelplineModal
        isOpen={isHelplineOpen}
        onClose={() => setIsHelplineOpen(false)}
        language={language}
      />

      {/* 6. SETTINGS MODAL (Triggered from Top Right Gear Icon) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={language}
        setLanguage={setLanguage}
        babaJiMode={babaJiMode}
        setBabaJiMode={setBabaJiMode}
      />

      {/* 7. PRIVACY GUARANTEE MODAL */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        language={language}
      />

      {/* 8. CERTIFICATE MODAL */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        score={soloScore}
        totalQuestions={totalQuestions}
        language={language}
      />
    </div>
  );
}

export default App;
