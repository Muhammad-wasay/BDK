import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HelplineModal from './components/HelplineModal';
import CertificateModal from './components/CertificateModal';

import LandingScreen from './screens/LandingScreen';
import GuidedPracticeScreen from './screens/GuidedPracticeScreen';
import SoloPracticeScreen from './screens/SoloPracticeScreen';
import ResultScreen from './screens/ResultScreen';

import { SOLO_SCENARIOS_DATA } from './data/scenarios';
import { TRANSLATIONS } from './data/translations';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [language, setLanguage] = useState('roman'); // 'roman' | 'urdu' | 'en'
  const [babaJiMode, setBabaJiMode] = useState(false);
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Solo Practice scores & answers
  const [soloScore, setSoloScore] = useState(4);
  const [soloAnswers, setSoloAnswers] = useState([]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';
  const totalQuestions = (SOLO_SCENARIOS_DATA[language] || SOLO_SCENARIOS_DATA.roman).length;

  const handleStartPractice = () => {
    setCurrentScreen('guided');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToSolo = () => {
    setCurrentScreen('solo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteSolo = (answers, score) => {
    setSoloAnswers(answers);
    setSoloScore(score);
    setCurrentScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    setSoloAnswers([]);
    setSoloScore(0);
    setCurrentScreen('solo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
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
      {/* 1. TOP MOVING MICRO-LINE TICKER AT TOP OF NAVBAR */}
      <AnnouncementBar language={language} />

      {/* 2. SLEEK FLOATING NAVBAR WITH STITCH BORDERS */}
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
      </main>

      {/* 4. FOOTER WITH STITCH BORDERS */}
      <footer className="w-full bg-[#FFFDF9] border-t-[2.5px] border-[#1B2440] py-8 px-4 mt-12 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/official_logo.png" 
              alt="BinaDarKe" 
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-space font-extrabold text-[#1B2440]">
            <button
              onClick={() => setCurrentScreen('landing')}
              className="hover:underline cursor-pointer"
            >
              {t.navHome}
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentScreen('guided')}
              className="hover:underline cursor-pointer"
            >
              {t.navGuided}
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentScreen('solo')}
              className="hover:underline cursor-pointer"
            >
              {t.navSolo}
            </button>
            <span>•</span>
            <button
              onClick={() => setIsHelplineOpen(true)}
              className="text-[#FF6B6B] hover:underline cursor-pointer"
            >
              FIA Helpline (1991)
            </button>
          </div>

          <div className="text-center md:text-right">
            <span className="inline-block text-[11px] font-space font-black bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_#1B2440]">
              100% Free & Educational Sandbox
            </span>
            <p className="text-[10px] text-[#1B2440]/60 font-bold mt-1">
              Zero real financial risk • Strictly non-profit
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
