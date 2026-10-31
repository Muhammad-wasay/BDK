import React, { useState, useEffect } from 'react';
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
      className={`min-h-screen flex flex-col font-nunito text-[#1B2440] bg-[#FFF4E0] transition-all selection:bg-[#FFF1A8] selection:text-[#1B2440] overflow-x-hidden w-full max-w-full ${
        babaJiMode ? 'elder-active text-lg' : 'text-base'
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* 1. TOP MARQUEE TICKER (Zero Emojis, Clean Bullet Dots) */}
      <AnnouncementBar language={language} />

      {/* 2. SLEEK NAVBAR (No Helpline on top, Dedicated Settings button on right) */}
      <Navbar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
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

      {/* 4. FOOTER WITH ROLLING TEXT FLIP ON LINKS */}
      <footer className="w-full bg-[#FFFDF9] border-t-[2.5px] border-[#1B2440] py-10 px-4 mt-16 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('landing');
              }}
              className="cursor-pointer"
            >
              <img 
                src="/official_logo.png" 
                alt="BinaDarKe" 
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>

          {/* Links with RollingText Kinetic Wave Effect */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-space font-extrabold text-[#1B2440]">
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('landing');
              }}
              className="group cursor-pointer py-1 px-1.5"
            >
              <RollingText text={t.navHome || "Home"} />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('guided');
              }}
              className="group cursor-pointer py-1 px-1.5"
            >
              <RollingText text={t.navGuided || "Guided Practice"} />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('solo');
              }}
              className="group cursor-pointer py-1 px-1.5"
            >
              <RollingText text={t.navSolo || "Solo Test"} />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playNav();
                setCurrentScreen('about');
              }}
              className="group cursor-pointer py-1 px-1.5"
            >
              <RollingText text="About BinaDarKe" />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsPrivacyOpen(true);
              }}
              className="group cursor-pointer py-1 px-1.5 text-emerald-800"
            >
              <RollingText text="Privacy Guarantee" />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsHelplineOpen(true);
              }}
              className="group cursor-pointer py-1 px-1.5 text-[#BA1A1A]"
            >
              <RollingText text="Helplines & FIA 1991" />
            </button>
          </div>

          {/* Educational Sandbox Badge */}
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
