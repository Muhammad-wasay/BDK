import { useState, useEffect, lazy, Suspense } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HelplineModal from './components/HelplineModal';
import CertificateModal from './components/CertificateModal';
import SettingsModal from './components/SettingsModal';
import PrivacyModal from './components/PrivacyModal';
import RollingText from './components/RollingText';
import ErrorBoundary from './components/ErrorBoundary';
import CalmLoadingState from './components/CalmLoadingState';

import { SOLO_SCENARIOS_DATA } from './data/scenarios';
import soundEffects from './utils/soundEffects';
import storage from './utils/storage';

// Lazy load screens for fast initial bundle and calm navigation
const LandingScreen = lazy(() => import('./screens/LandingScreen'));
const GuidedPracticeScreen = lazy(() => import('./screens/GuidedPracticeScreen'));
const SoloPracticeScreen = lazy(() => import('./screens/SoloPracticeScreen'));
const ResultScreen = lazy(() => import('./screens/ResultScreen'));
const PhoneCallSimulatorScreen = lazy(() => import('./screens/PhoneCallSimulatorScreen'));
const PaymentScamScreen = lazy(() => import('./screens/PaymentScamScreen'));
const ScamScannerScreen = lazy(() => import('./screens/ScamScannerScreen'));
const AboutScreen = lazy(() => import('./screens/AboutScreen'));
const PracticePhoneScreen = lazy(() => import('./screens/PracticePhoneScreen'));

function App() {
  // Always start at landing page (do not persist current screen)
  const [currentScreen, setCurrentScreen] = useState('landing');

  // Load preferences safely via safeGet
  const [language, setLanguage] = useState(() => {
    return storage.safeGet('language', 'roman');
  });

  const [babaJiMode, setBabaJiMode] = useState(() => {
    const saved = storage.safeGet('babaMode', false);
    return saved === true || saved === 'true';
  });

  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Solo Practice scores & answers
  const [soloScore, setSoloScore] = useState(() => {
    const saved = storage.safeGet('score', 0);
    return typeof saved === 'number' ? saved : 0;
  });

  const [soloAnswers, setSoloAnswers] = useState(() => {
    const saved = storage.safeGet('answers', []);
    return Array.isArray(saved) ? saved : [];
  });

  // Persist preferences safely
  useEffect(() => {
    storage.safeSet('language', language);
  }, [language]);

  useEffect(() => {
    storage.safeSet('babaMode', babaJiMode);
  }, [babaJiMode]);

  useEffect(() => {
    storage.safeSet('score', soloScore);
  }, [soloScore]);

  useEffect(() => {
    storage.safeSet('answers', soloAnswers);
  }, [soloAnswers]);

  // Dynamically update document title, lang, and text direction
  useEffect(() => {
    if (language === 'urdu') {
      document.documentElement.lang = 'ur-PK';
      document.documentElement.dir = 'rtl';
    } else if (language === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.lang = 'ur-Latn';
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

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

  const handleResetAllData = () => {
    setSoloScore(0);
    setSoloAnswers([]);
    setBabaJiMode(false);
  };

  return (
    <ErrorBoundary language={language}>
      <div
        className={`min-h-screen flex flex-col font-nunito text-[#1B2440] bg-[#FFF4E0] transition-all selection:bg-[#B8F2D0] selection:text-[#1B2440] overflow-x-hidden w-full max-w-full ${
          babaJiMode ? 'elder-active text-lg' : 'text-base'
        } ${isUrdu ? 'font-urdu-mode' : ''}`}
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* 1. TOP MARQUEE TICKER */}
        <AnnouncementBar language={language} />

        {/* 2. SLEEK NAVBAR */}
        <Navbar
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
          language={language}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* 3. ACTIVE SCREEN CONTENT WITH SUSPENSE */}
        <main className="w-full flex-1 flex flex-col overflow-x-hidden">
          <Suspense fallback={<CalmLoadingState language={language} />}>
            {currentScreen === 'landing' && (
              <LandingScreen
                onStartPractice={handleStartPractice}
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

            {currentScreen === 'practice-phone' && (
              <PracticePhoneScreen
                onGoHome={handleGoHome}
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
          </Suspense>
        </main>

        {/* 4. ACCESSIBLE FOOTER */}
        <footer className="w-full bg-[#FFFDF9] border-t-[2.5px] border-[#1B2440] py-12 px-4 mt-16 relative z-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
            
            {/* Left Column: Brand & Mission */}
            <div className="max-w-sm flex flex-col gap-3">
              <button
                onClick={() => {
                  soundEffects.playNav();
                  setCurrentScreen('landing');
                }}
                className="cursor-pointer text-left w-fit min-h-[48px] flex items-center"
              >
                <img 
                  src="/official_logo.png" 
                  alt="BinaDarKe" 
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </button>
              <p className="text-sm font-bold text-[#1B2440]/75 leading-relaxed">
                A free practice space for families and elders to practice digital safety without financial risk.
              </p>
              <div className="pt-1">
                <span className="inline-block text-xs font-space font-black bg-[#B8F2D0] border border-[#1B2440] px-3 py-1 rounded-full text-[#1B2440]">
                  Free & Educational Practice Tool
                </span>
              </div>
            </div>

            {/* Right Area: Navigation & Emergency Help */}
            <div className="grid grid-cols-2 gap-10 text-xs sm:text-sm font-space font-extrabold text-[#1B2440]">
              
              {/* Group 1: Navigation */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs uppercase tracking-wider text-[#1B2440]/60 font-black">
                  {isUrdu ? "نیویگیشن" : "Navigation"}
                </span>
                <button
                  onClick={() => {
                    soundEffects.playNav();
                    setCurrentScreen('landing');
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center"
                >
                  <RollingText text={isUrdu ? "ہوم" : "Home"} />
                </button>
                <button
                  onClick={() => {
                    soundEffects.playNav();
                    setCurrentScreen('about');
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center"
                >
                  <RollingText text={isUrdu ? "ہمارا تعارف" : "About Us"} />
                </button>
                <button
                  onClick={() => {
                    soundEffects.playNav();
                    setCurrentScreen('guided');
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center"
                >
                  <RollingText text={isUrdu ? "رہنمائی مشق" : "Guided Practice"} />
                </button>
                <button
                  onClick={() => {
                    soundEffects.playNav();
                    setCurrentScreen('solo');
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center"
                >
                  <RollingText text={isUrdu ? "ٹیسٹ" : "Solo Test"} />
                </button>
                <button
                  onClick={() => {
                    soundEffects.playNav();
                    setCurrentScreen('practice-phone');
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center text-[#0F5A3E]"
                >
                  <RollingText text={isUrdu ? "پریکٹس فون" : "Practice Phone"} />
                </button>
              </div>

              {/* Group 2: Emergency & Help */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs uppercase tracking-wider text-[#1B2440]/60 font-black">
                  {isUrdu ? "حفاظت و مدد" : "Help & Safety"}
                </span>
                <a
                  href="tel:1991"
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center text-[#BA1A1A] font-black"
                >
                  <RollingText text="Call FIA (1991)" />
                </a>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setIsHelplineOpen(true);
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center"
                >
                  <RollingText text={isUrdu ? "سرکاری ہیلپ لائنز" : "Official Helplines"} />
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setIsPrivacyOpen(true);
                  }}
                  className="group cursor-pointer text-left w-fit min-h-[40px] flex items-center text-[#0F5A3E]"
                >
                  <RollingText text={isUrdu ? "پرائیویسی گارنٹی" : "Privacy Guarantee"} />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Micro Line */}
          <div className="max-w-6xl mx-auto mt-10 pt-4 border-t border-[#1B2440]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-[#1B2440]/60">
            <span>© 2026 BinaDarKe • Free Anti-Scam Practice Space for Families</span>
            <span>Practice only: nothing real is sent • Free educational tool</span>
          </div>
        </footer>

        {/* 5. HELPLINE SUPPORT MODAL */}
        <HelplineModal
          isOpen={isHelplineOpen}
          onClose={() => setIsHelplineOpen(false)}
          language={language}
        />

        {/* 6. SETTINGS MODAL */}
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          language={language}
          setLanguage={setLanguage}
          babaJiMode={babaJiMode}
          setBabaJiMode={setBabaJiMode}
          onResetAllData={handleResetAllData}
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
    </ErrorBoundary>
  );
}

export default App;
