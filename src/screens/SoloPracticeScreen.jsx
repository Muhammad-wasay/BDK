import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Lock,
  X
} from 'lucide-react';
import { SOLO_SCENARIOS_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import soundEffects from '../utils/soundEffects';

export default function SoloPracticeScreen({ onCompleteSolo, onGoHome, babaJiMode, language = 'roman' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showHintModal, setShowHintModal] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const scenarios = SOLO_SCENARIOS_DATA[language] || SOLO_SCENARIOS_DATA.roman;
  const scenario = scenarios[currentIndex];
  const totalQuestions = scenarios.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const isUrdu = language === 'urdu';

  const handleChoice = (choice) => {
    if (isAnswered) return;

    setUserChoice(choice);
    setIsAnswered(true);

    const isCorrect = choice === scenario.correctChoice;

    if (isCorrect) {
      soundEffects.playSuccess();
    } else {
      soundEffects.playError();
    }

    const newAnswer = {
      scenarioId: scenario.id,
      category: scenario.category,
      sender: scenario.sender,
      userChoice: choice,
      isCorrect,
      correctChoice: scenario.correctChoice
    };

    setAnswers((prev) => [...prev, newAnswer]);
  };

  const handleNext = () => {
    soundEffects.playClick();
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserChoice(null);
      setIsAnswered(false);
      setShowHintModal(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const finalScore = answers.filter((a) => a.isCorrect).length;
      onCompleteSolo(answers, finalScore);
    }
  };

  const isCurrentCorrect = userChoice === scenario.correctChoice;

  return (
    <div
      className={`max-w-5xl mx-auto px-4 py-6 md:py-8 w-full flex-1 flex flex-col animate-fadeIn ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Bar: Back & Progress */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundEffects.playNav();
              onGoHome();
            }}
            className="w-10 h-10 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:scale-95"
            title="Back to Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-space font-extrabold uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-2.5 py-0.5">
                {t.soloTag}
              </span>
              <span className="text-xs text-[#1B2440]/70 font-bold">
                {t.soloProgressLabel} {currentIndex + 1} {t.soloProgressOf} {totalQuestions}
              </span>
            </div>
            <h1 className="font-space font-extrabold text-lg sm:text-xl text-[#1B2440] mt-0.5">
              {scenario.title}
            </h1>
          </div>
        </div>

        {/* Progress Pill Bar */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-full sm:w-36 h-3 bg-white border-[2px] border-[#1B2440] rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-[#B8F2D0] rounded-full transition-all duration-300 border-r border-[#1B2440]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Main Grid Layout (Phone Sandbox Preview on Left, Decision on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Simulated Phone Container (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[340px] bg-[#FFFDF9] border-[3px] border-[#1B2440] rounded-[36px] p-4 flex flex-col gap-3">
            {/* Phone Header */}
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border border-[#1B2440]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFF1A8] border border-[#1B2440]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8F2D0] border border-[#1B2440]"></div>
              </div>
              <span className="text-[11px] font-space font-black bg-[#FFF1A8] border-[1.5px] border-[#1B2440] px-2.5 py-0.5 rounded-full text-[#1B2440]">
                {scenario.channel}
              </span>
            </div>

            {/* Sender Badge */}
            <div className="flex items-center justify-between bg-white border-[1.5px] border-[#1B2440] rounded-xl p-2.5">
              <div>
                <span className="text-[10px] font-space font-bold uppercase text-[#1B2440]/60 block">
                  Sender / Rabta
                </span>
                <span className="text-xs font-black text-[#1B2440]">
                  {scenario.sender}
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFE8E5] text-[#BA1A1A] border border-[#BA1A1A]/40">
                Ghair-Tasdeeq Shuda
              </span>
            </div>

            {/* Message Bubble */}
            <div className="bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2.5">
              <p className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed whitespace-pre-line">
                {scenario.message}
              </p>

              {scenario.link && (
                <div className="bg-[#FFE3E3] border-[2px] border-dashed border-[#FF6B6B] rounded-xl p-2 text-[#BA1A1A] font-extrabold text-xs break-all">
                  🔗 {scenario.link}
                </div>
              )}
            </div>

            {/* Micro safe note */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1B2440]/70 justify-center pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Safe Sandbox Practice</span>
            </div>
          </div>
        </div>

        {/* Right Column: Audio Guide + Decision Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Ustaad Audio Guide with Live Word-by-Word Highlight */}
          <UrduVoiceoverBar
            text={scenario.audioPrompt || scenario.message}
            label={t.soloAudioGuideTitle}
            language={language}
          />

          {/* Decision Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Safe Button */}
            <button
              onClick={() => handleChoice('safe')}
              disabled={isAnswered}
              className={`p-4 rounded-2xl border-[2.5px] border-[#1B2440] flex items-center gap-3 transition-all cursor-pointer text-left ${
                isAnswered
                  ? userChoice === 'safe'
                    ? isCurrentCorrect
                      ? 'bg-[#B8F2D0] ring-2 ring-emerald-600'
                      : 'bg-[#FFE8E5] ring-2 ring-red-500'
                    : 'bg-white opacity-60'
                  : 'bg-white hover:bg-[#B8F2D0]/50 active:scale-98'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#B8F2D0] border-[1.5px] border-[#1B2440] flex items-center justify-center flex-shrink-0 text-emerald-800">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-space font-black text-sm text-[#1B2440] block">
                  {t.soloChoiceSafe}
                </span>
                <span className="text-xs font-semibold text-[#1B2440]/70">
                  {t.soloChoiceSafeSub}
                </span>
              </div>
            </button>

            {/* Scam Button */}
            <button
              onClick={() => handleChoice('scam')}
              disabled={isAnswered}
              className={`p-4 rounded-2xl border-[2.5px] border-[#1B2440] flex items-center gap-3 transition-all cursor-pointer text-left ${
                isAnswered
                  ? userChoice === 'scam'
                    ? isCurrentCorrect
                      ? 'bg-[#B8F2D0] ring-2 ring-emerald-600'
                      : 'bg-[#FFE8E5] ring-2 ring-red-500'
                    : 'bg-white opacity-60'
                  : 'bg-[#FF6B6B] hover:bg-[#ff5555] text-white active:scale-98'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center flex-shrink-0 text-[#BA1A1A]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-space font-black text-sm text-white block">
                  {t.soloChoiceScam}
                </span>
                <span className="text-xs font-semibold text-white/90">
                  {t.soloChoiceScamSub}
                </span>
              </div>
            </button>
          </div>

          {/* Show Clue Button (Pops up Modal Dialog as requested!) */}
          {!isAnswered && (
            <button
              onClick={() => {
                soundEffects.playClick();
                setShowHintModal(true);
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#FFFDF9] hover:bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-xl py-2.5 px-3 text-xs font-space font-extrabold text-[#1B2440] cursor-pointer transition-all active:scale-98"
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>{t.soloHintBtn || "💡 Show Clue / Madad Dekhein"}</span>
            </button>
          )}

          {/* Instant Feedback Panel */}
          {isAnswered && (
            <div className={`w-full border-[2.5px] border-[#1B2440] rounded-2xl p-4 animate-fadeIn transition-all ${
              isCurrentCorrect ? 'bg-[#B8F2D0]' : 'bg-[#FFD3B6]'
            }`}>
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className="mt-0.5">
                  {isCurrentCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-[#1B2440]" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-[#1B2440]" />
                  )}
                </div>
                <div>
                  <h3 className="font-space font-black text-sm text-[#1B2440]">
                    {isCurrentCorrect ? scenario.feedback.scamTitle : scenario.feedback.safeTitle}
                  </h3>
                  <p className="text-xs text-[#1B2440]/90 font-bold mt-1 leading-relaxed">
                    {isCurrentCorrect ? scenario.feedback.scamDesc : scenario.feedback.safeDesc}
                  </p>
                </div>
              </div>

              {/* Red flags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {scenario.feedback.redFlags.map((flag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-black bg-white border border-[#1B2440] px-2 py-0.5 rounded-full text-[#1B2440]"
                  >
                    🔍 {flag}
                  </span>
                ))}
              </div>

              {/* Next Question / Finish Button */}
              <button
                onClick={handleNext}
                type="button"
                className="w-full py-3 rounded-xl bg-[#1B2440] hover:bg-slate-800 text-white font-space font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <span>{currentIndex < totalQuestions - 1 ? t.soloNextBtn : t.soloFinishBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CLUE POPUP MODAL (As user requested: popup screen taake user asani se parh sake) */}
      {showHintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="w-full max-w-md bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-3xl p-6 relative flex flex-col gap-4"
            dir={isUrdu ? 'rtl' : 'ltr'}
          >
            {/* Clue Header */}
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1A8] border-[1.5px] border-[#1B2440] flex items-center justify-center text-lg">
                  💡
                </div>
                <div>
                  <h3 className="font-space font-extrabold text-base text-[#1B2440]">
                    {isUrdu ? "مددگار اشارہ (Expert Clue)" : "Expert Clue / Hidden Red-Flag"}
                  </h3>
                  <span className="text-[11px] font-bold text-[#1B2440]/60">
                    BinaDarKe Advisor Tip
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setShowHintModal(false);
                }}
                className="w-8 h-8 rounded-xl bg-white border-[1.5px] border-[#1B2440] flex items-center justify-center text-[#1B2440] hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Clue Content in Large, Clear Text */}
            <div className="bg-[#FFF1A8]/60 border-[2px] border-[#1B2440] rounded-2xl p-4 text-sm sm:text-base font-bold text-[#1B2440] leading-relaxed">
              {scenario.hint}
            </div>

            {/* Audio Guide inside Clue Popup */}
            <UrduVoiceoverBar
              text={scenario.hint}
              label={isUrdu ? "اشارہ سنیں" : "Listen to Clue"}
              language={language}
            />

            {/* Close Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setShowHintModal(false);
              }}
              className="w-full py-2.5 rounded-2xl bg-[#1B2440] text-white font-space font-extrabold text-sm border-[2px] border-[#1B2440] cursor-pointer hover:bg-slate-800 transition-all text-center"
            >
              {isUrdu ? "سمجھ گیا — جواب منتخب کریں" : "Got it — Choose Answer"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
