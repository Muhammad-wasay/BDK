import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Lock, 
  ShieldCheck
} from 'lucide-react';
import { SOLO_SCENARIOS_DATA } from '../data/scenarios';
import { TRANSLATIONS } from '../data/translations';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';

export default function SoloPracticeScreen({ onCompleteSolo, onGoHome, babaJiMode, language = 'roman' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showHint, setShowHint] = useState(false);
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
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserChoice(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      const finalAnswers = [...answers];
      const finalScore = finalAnswers.filter((a) => a.isCorrect).length;
      onCompleteSolo(finalAnswers, finalScore);
    }
  };

  const isCurrentCorrect = userChoice === scenario.correctChoice;

  return (
    <div 
      className={`max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={onGoHome}
            className="w-10 h-10 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] shadow-[1.5px_1.5px_0px_#1B2440] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
            title="Back to Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-space font-extrabold uppercase tracking-wider bg-[#FFF1A8] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-2.5 py-0.5 shadow-[1px_1px_0px_#1B2440]">
                {t.soloTag}
              </span>
              <span className="text-xs text-[#1B2440]/70 font-bold">Interactive Test</span>
            </div>
            <h1 className="font-space font-extrabold text-2xl text-[#1B2440] mt-0.5">
              {t.soloTitle} {currentIndex + 1} {t.soloOf} {totalQuestions}
            </h1>
          </div>
        </div>

        {/* Progress Bar with Stitch border */}
        <div className="flex items-center gap-3 bg-white border-[2px] border-[#1B2440] rounded-2xl px-4 py-2 shadow-[1.5px_1.5px_0px_#1B2440]">
          <span className="font-space font-extrabold text-xs text-[#1B2440]">
            {t.soloProgress}: {progressPercent}%
          </span>
          <div className="w-24 sm:w-28 h-2.5 bg-[#FFF4E0] border border-[#1B2440] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#B8F2D0] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Voiceover reading current question */}
      <div className="mb-6">
        <UrduVoiceoverBar text={scenario.audioText} label={t.soloQuestionRead} language={language} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Phone message (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center w-full">
          <div className="w-full bg-[#FFFDF9] rounded-[32px] border-[2.5px] border-[#1B2440] shadow-[3px_3px_0px_#1B2440] p-5 flex flex-col gap-3">
            {/* Top Phone Info */}
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-[#1B2440]/20">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#FFF1A8] border-[1.5px] border-[#1B2440] flex items-center justify-center font-bold text-xs text-[#1B2440]">
                  {scenario.type === 'whatsapp' ? '💬' : '📩'}
                </div>
                <div className="flex flex-col">
                  <span className="font-space font-extrabold text-sm text-[#1B2440] leading-tight">
                    {scenario.sender}
                  </span>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded border ${
                    scenario.isScam
                      ? 'bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]/40'
                      : 'bg-[#B8F2D0] text-[#1B2440] border-[#1B2440]/40'
                  }`}>
                    {scenario.senderStatus}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#1B2440]/60">
                {scenario.simInfo}
              </span>
            </div>

            {/* Message Bubble Canvas with Stitch border */}
            <div className="bg-[#FFF4E0] border-[2.5px] border-[#1B2440] rounded-2xl p-5 shadow-[1.5px_1.5px_0px_#1B2440] text-[#1B2440]">
              <p className="text-base sm:text-lg font-extrabold leading-relaxed">
                {scenario.message}
              </p>
            </div>

            <div className="text-center py-1">
              <span className="text-xs text-[#1B2440]/60 font-bold">
                {scenario.senderNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Decisions & Feedback (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3.5 w-full">
          <div className="bg-[#FFFDF9] border-[2.5px] border-[#1B2440] rounded-2xl p-4 shadow-[1.5px_1.5px_0px_#1B2440]">
            <span className="font-space font-extrabold text-base text-[#1B2440] block mb-0.5">
              {t.soloDecisionTitle}
            </span>
            <p className="text-xs text-[#1B2440]/75 font-bold">
              {t.soloDecisionSubtitle}
            </p>
          </div>

          {/* Decision Button 1: Safe */}
          <button
            onClick={() => handleChoice('safe')}
            disabled={isAnswered}
            type="button"
            className={`w-full p-4 rounded-2xl border-[2.5px] border-[#1B2440] text-left flex items-center gap-3.5 transition-all cursor-pointer ${
              isAnswered && userChoice === 'safe'
                ? isCurrentCorrect
                  ? 'bg-[#B8F2D0] ring-2 ring-[#1B2440] shadow-[2px_2px_0px_#1B2440]'
                  : 'bg-[#FFE8E5] ring-2 ring-[#BA1A1A] shadow-[2px_2px_0px_#1B2440]'
                : 'bg-[#B8F2D0] shadow-[2px_2px_0px_#1B2440] hover:bg-[#a6e6bf]'
            } ${isAnswered ? 'opacity-90' : 'active:translate-x-0.5 active:translate-y-0.5'}`}
          >
            <div className="w-10 h-10 rounded-xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center flex-shrink-0 shadow-[1px_1px_0px_#1B2440]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-extrabold text-base text-[#1B2440] leading-tight">
                {t.soloChoiceSafe}
              </span>
              <span className="text-xs text-[#1B2440]/80 font-bold mt-0.5">
                {t.soloChoiceSafeSub}
              </span>
            </div>
          </button>

          {/* Decision Button 2: Scam */}
          <button
            onClick={() => handleChoice('scam')}
            disabled={isAnswered}
            type="button"
            className={`w-full p-4 rounded-2xl border-[2.5px] border-[#1B2440] text-left flex items-center gap-3.5 transition-all cursor-pointer ${
              isAnswered && userChoice === 'scam'
                ? isCurrentCorrect
                  ? 'bg-[#B8F2D0] ring-2 ring-[#1B2440] shadow-[2px_2px_0px_#1B2440]'
                  : 'bg-[#FFE8E5] ring-2 ring-[#BA1A1A] shadow-[2px_2px_0px_#1B2440]'
                : 'bg-[#FF6B6B] text-white shadow-[2px_2px_0px_#1B2440] hover:bg-[#f25e5e]'
            } ${isAnswered ? 'opacity-90' : 'active:translate-x-0.5 active:translate-y-0.5'}`}
          >
            <div className="w-10 h-10 rounded-xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] flex items-center justify-center flex-shrink-0 shadow-[1px_1px_0px_#1B2440]">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-extrabold text-base text-white leading-tight">
                {t.soloChoiceScam}
              </span>
              <span className="text-xs text-white/90 font-bold mt-0.5">
                {t.soloChoiceScamSub}
              </span>
            </div>
          </button>

          {/* Hint Toggle */}
          {!isAnswered && (
            <div>
              <button
                onClick={() => setShowHint(!showHint)}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[#FFFDF9] hover:bg-[#FFF4E0] border-[2px] border-[#1B2440] rounded-xl py-2.5 px-3 text-xs font-space font-extrabold text-[#1B2440] shadow-[1.5px_1.5px_0px_#1B2440] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>{showHint ? t.soloHintHide : t.soloHintBtn}</span>
              </button>

              {showHint && (
                <div className="mt-2 bg-[#FFF1A8] border-[2px] border-[#1B2440] rounded-2xl p-3.5 text-[#1B2440] shadow-[1.5px_1.5px_0px_#1B2440] animate-fadeIn text-xs leading-relaxed font-bold">
                  {scenario.hint}
                </div>
              )}
            </div>
          )}

          {/* Instant Feedback Panel with Stitch Outline */}
          {isAnswered && (
            <div className={`w-full border-[2.5px] border-[#1B2440] rounded-2xl p-4 shadow-[2px_2px_0px_#1B2440] animate-fadeIn transition-all ${
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

              {/* Next Button */}
              <button
                onClick={handleNext}
                type="button"
                className="w-full py-3 bg-[#1B2440] hover:bg-slate-800 text-white rounded-xl text-xs font-black font-space flex items-center justify-center gap-2 cursor-pointer shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <span>{currentIndex < totalQuestions - 1 ? t.soloNextBtn : t.soloFinishBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Safety Reassurance */}
      <div className="w-full bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-3 flex items-center justify-center text-center gap-2 mt-8 text-xs text-[#1B2440] font-bold shadow-[1.5px_1.5px_0px_#1B2440]">
        <ShieldCheck className="w-4 h-4 text-[#1B2440] flex-shrink-0" />
        <span>{t.soloSafeReassurance}</span>
      </div>
    </div>
  );
}
