import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HelplineModal from './components/HelplineModal';
import CertificateModal from './components/CertificateModal';

import LandingScreen from './screens/LandingScreen';
import GuidedPracticeScreen from './screens/GuidedPracticeScreen';
import SoloPracticeScreen from './screens/SoloPracticeScreen';
import ResultScreen from './screens/ResultScreen';
import PhoneCallSimulatorScreen from './screens/PhoneCallSimulatorScreen';
import PaymentScamScreen from './screens/PaymentScamScreen';
import ScamScannerScreen from './screens/ScamScannerScreen';

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
      className={`min-h-screen flex flex-col font-nunito text-[#1B2440] bg-[#FFF4E0] transition-all selection:bg-[#FFF1A8] selection:text-[#1B2440] ${
        babaJiMode ? 'elder-active text-lg' : 'text-base'
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* 1. TOP MARQUEE TICKER (No blocking sandbox badge) */}
      <AnnouncementBar language={language} />

      {/* 2. MAIN NAVBAR (Clean flat 2.5px borders, rolling text on nav links, clean action buttons) */}
      <Navbar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        babaJiMode={babaJiMode}
        setBabaJiMode={setBabaJiMode}
        language={language}
        setLanguage={setLanguage}
        onOpenHelpline={() => setIsHelplineOpen(true)}
      />

      {/* 3. ACTIVE SCREEN CONTENT */}
      <main className="w-full flex-1 flex flex-col">
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
      </main>

      {/* 4. CLEAN, BEAUTIFUL SINGLE FOOTER (NO overlapping floating bar) */}
      <footer className="w-full bg-[#FFFDF9] border-t-[2.5px] border-[#1B2440] py-10 px-4 mt-16 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3">
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Nav Links & Emergency Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs font-space font-extrabold text-[#1B2440]">
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('landing');
              }}
              className="hover:underline cursor-pointer"
            >
              {t.navHome}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('guided');
              }}
              className="hover:underline cursor-pointer"
            >
              {t.navGuided}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('solo');
              }}
              className="hover:underline cursor-pointer"
            >
              {t.navSolo}
            </button>
            <span>•</span>
            <a
              href="tel:1991"
              className="inline-flex items-center gap-1 bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]/40 px-2.5 py-0.5 rounded-full font-black hover:bg-[#ffd5d0] transition-colors"
            >
              <span>🚨 FIA Helpline: 1991</span>
            </a>
            <span>•</span>
            {/* Language Switcher */}
            <div className="inline-flex items-center gap-1.5 bg-[#FFF4E0] border border-[#1B2440] px-2 py-0.5 rounded-lg text-[11px]">
              <button 
                onClick={() => {
                  soundEffects.playClick();
                  setLanguage('roman');
                }}
                className={`cursor-pointer ${language === 'roman' ? 'font-black underline text-[#1B2440]' : 'text-[#1B2440]/60'}`}
              >
                Roman
              </button>
              <span>/</span>
              <button 
                onClick={() => {
                  soundEffects.playClick();
                  setLanguage('urdu');
                }}
                className={`cursor-pointer font-urdu-mode ${language === 'urdu' ? 'font-black underline text-[#1B2440]' : 'text-[#1B2440]/60'}`}
              >
                اردو
              </button>
              <span>/</span>
              <button 
                onClick={() => {
                  soundEffects.playClick();
                  setLanguage('en');
                }}
                className={`cursor-pointer ${language === 'en' ? 'font-black underline text-[#1B2440]' : 'text-[#1B2440]/60'}`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Safe Note Badge */}
          <div className="text-center md:text-right">
            <span className="inline-block text-[11px] font-space font-black bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-3 py-0.5 rounded-full">
              100% Free & Educational Sandbox
            </span>
            <p className="text-[10px] text-[#1B2440]/65 font-bold mt-1">
              Zero Real Risk • Non-Profit Public Service
            </p>
          </div>
        </div>
      </footer>

      {/* 5. HELPLINE MODAL */}
      <HelplineModal
        isOpen={isHelplineOpen}
        onClose={() => setIsHelplineOpen(false)}
        language={language}
      />

      {/* 6. CERTIFICATE MODAL */}
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
