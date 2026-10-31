import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Trophy,
  Play,
  Lightbulb,
  Smartphone,
  Flame,
  Award
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessons';
import PhoneFrame from '../components/phone/PhoneFrame';
import PhoneHomeScreen from '../components/phone/PhoneHomeScreen';
import PhoneGalleryApp from '../components/phone/PhoneGalleryApp';
import PhoneWhatsAppApp from '../components/phone/PhoneWhatsAppApp';
import PhoneWalletApp from '../components/phone/PhoneWalletApp';
import PhoneShareSheet from '../components/phone/PhoneShareSheet';
import SpotlightOverlay from '../components/phone/SpotlightOverlay';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';
import soundEffects from '../utils/soundEffects';
import storage from '../utils/storage';

export default function PracticePhoneScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const isUrdu = language === 'urdu';

  // State Management
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [practiceMode, setPracticeMode] = useState('guided'); // 'guided' | 'independent'

  // Phone Screen Navigation State
  const [currentPhoneApp, setCurrentPhoneApp] = useState('home'); // 'home' | 'gallery' | 'whatsapp' | 'easypaisa'
  const [activeChatId, setActiveChatId] = useState(null);
  const [sentPhoto, setSentPhoto] = useState(null);
  const [voiceNoteSent, setVoiceNoteSent] = useState(false);
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);

  // Performance & Feedback Metrics
  const [hintsUsed, setHintsUsed] = useState(0);
  const [wrongTaps, setWrongTaps] = useState(0);
  const [stepNotice, setStepNotice] = useState(null); // { text, type: 'error' | 'success' }
  const [lessonResult, setLessonResult] = useState(null);
  const [showRealPhoneModal, setShowRealPhoneModal] = useState(false);

  // Reset confirmation state
  const [showConfirmResetAttempt, setShowConfirmResetAttempt] = useState(false);
  const [showConfirmEraseAll, setShowConfirmEraseAll] = useState(false);

  // Onboarding Modal (Max 3 short steps)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(() => {
    return !storage.safeGet('onboarding_completed', false);
  });
  const [onboardingStep, setOnboardingStep] = useState(1);

  // Progress Tracking: Map of lessonId -> { status: 'not_started' | 'done', hintsUsed, stars }
  const [progressMap, setProgressMap] = useState(() => {
    return storage.safeGet('phone_lesson_progress', {});
  });

  useEffect(() => {
    storage.safeSet('phone_lesson_progress', progressMap);
  }, [progressMap]);

  // Handle Starting a Lesson
  const startLesson = (lesson, mode = 'guided') => {
    soundEffects.playNav();
    setActiveLesson(lesson);
    setPracticeMode(mode);
    setCurrentStepIndex(0);
    setHintsUsed(0);
    setWrongTaps(0);
    setStepNotice(null);
    setLessonResult(null);
    setSentPhoto(null);
    setVoiceNoteSent(false);
    setIsShareSheetOpen(false);

    // Initial phone screen based on step 1 of lesson
    const firstStep = lesson.steps[0];
    if (firstStep.screen === 'chat_thread_scam') {
      setCurrentPhoneApp('whatsapp');
      setActiveChatId('scam_sender');
    } else {
      setCurrentPhoneApp('home');
      setActiveChatId(null);
    }
  };

  const handlePhoneHome = () => {
    soundEffects.playClick();
    setCurrentPhoneApp('home');
    setActiveChatId(null);
    setIsShareSheetOpen(false);
  };

  // Step Progress Validator
  const currentStep = activeLesson?.steps[currentStepIndex];

  const handleStepAction = (actionTargetId) => {
    if (!activeLesson || !currentStep) return;

    if (actionTargetId === currentStep.targetId) {
      soundEffects.playSuccess();
      setStepNotice({
        type: 'success',
        text: isUrdu ? "بہت خوب! درست قدم۔" : "Great job! Step completed."
      });

      // Advance to next step or complete lesson
      if (currentStepIndex < activeLesson.steps.length - 1) {
        const nextIdx = currentStepIndex + 1;
        setCurrentStepIndex(nextIdx);

        // Adjust screen if necessary
        const nextStep = activeLesson.steps[nextIdx];
        if (nextStep.screen === 'sharesheet') {
          setIsShareSheetOpen(true);
        } else if (nextStep.screen === 'chat_list') {
          setCurrentPhoneApp('whatsapp');
          setActiveChatId(null);
        } else if (nextStep.screen === 'chat_thread') {
          setCurrentPhoneApp('whatsapp');
          setActiveChatId('beti');
        } else if (nextStep.screen === 'wallet_transfer_confirm') {
          setCurrentPhoneApp('easypaisa');
        }
      } else {
        // Lesson Finished!
        finishLesson();
      }
    } else {
      // Wrong tap
      soundEffects.playError();
      setWrongTaps((prev) => prev + 1);
      const wrongMsg = currentStep.wrongTapMessage[language] || currentStep.wrongTapMessage.roman;
      setStepNotice({
        type: 'error',
        text: wrongMsg
      });
    }
  };

  const finishLesson = () => {
    soundEffects.playSuccess();
    const resultObj = {
      lessonId: activeLesson.id,
      mode: practiceMode,
      hintsUsed,
      wrongTaps,
      score: Math.max(100 - wrongTaps * 15 - hintsUsed * 10, 60),
      timestamp: new Date().toISOString()
    };

    setLessonResult(resultObj);

    setProgressMap((prev) => ({
      ...prev,
      [activeLesson.id]: {
        status: 'done',
        bestScore: Math.max(resultObj.score, prev[activeLesson.id]?.bestScore || 0),
        hintsUsed: Math.min(hintsUsed, prev[activeLesson.id]?.hintsUsed ?? hintsUsed)
      }
    }));
  };

  const handleResetAttempt = () => {
    soundEffects.playClick();
    if (activeLesson) {
      startLesson(activeLesson, practiceMode);
    }
    setShowConfirmResetAttempt(false);
  };

  const handleEraseAllProgress = () => {
    soundEffects.playClick();
    setProgressMap({});
    storage.safeRemove('phone_lesson_progress');
    setShowConfirmEraseAll(false);
    setActiveLesson(null);
    setLessonResult(null);
  };

  const nextRecommendedLesson = LESSONS_DATA.find((l) => progressMap[l.id]?.status !== 'done') || LESSONS_DATA[0];

  return (
    <div
      className={`max-w-5xl mx-auto px-4 py-6 md:py-10 w-full flex-1 flex flex-col gap-6 animate-fadeIn select-none ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* 1. Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-[2px] border-[#1B2440]/15">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playNav();
              if (activeLesson) {
                setActiveLesson(null);
              } else {
                onGoHome();
              }
            }}
            className="inline-flex items-center gap-2 px-5 min-h-[48px] rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-extrabold text-sm text-[#1B2440] hover:bg-slate-50 cursor-pointer active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{activeLesson ? (isUrdu ? "ڈیش بورڈ پر واپس" : "Back to Dashboard") : (isUrdu ? "ہوم پر واپس" : "Back to Home")}</span>
          </button>

          <span className="text-xs font-space font-black uppercase px-3.5 py-1.5 rounded-full bg-[#B8F2D0] text-[#1B2440] border-[1.5px] border-[#1B2440]">
            {isUrdu ? "عملی فون لیب • ڈیجیٹل استاد" : "Practice Phone Lab • Ustaad Engine"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRealPhoneModal(true)}
            className="min-h-[48px] px-3.5 py-1.5 rounded-xl border border-[#1B2440] bg-white text-xs font-space font-extrabold text-[#0F5A3E] hover:bg-[#B8F2D0] transition-all flex items-center gap-1.5 cursor-pointer shadow-[1px_1px_0px_#1B2440]"
          >
            <Smartphone className="w-4 h-4" />
            <span>{isUrdu ? "اصلی فون پر ٹرائی" : "Practice on Real Phone"}</span>
          </button>
        </div>
      </div>

      {/* 2. LEARNING DASHBOARD (Shown when no active lesson) */}
      {!activeLesson && !lessonResult && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Welcome & Next Recommended Lesson Banner */}
          <div className="bg-[#B8F2D0] border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[3px_3px_0px_#1B2440]">
            <div className="flex flex-col gap-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF1A8] border border-[#1B2440] text-xs font-space font-black w-fit">
                <Flame className="w-3.5 h-3.5 text-[#BA1A1A]" />
                <span>{isUrdu ? "اگلا تجویز کردہ سبق" : "Recommended Next Lesson"}</span>
              </div>
              <h2 className="font-space font-black text-2xl sm:text-3xl text-[#1B2440]">
                {nextRecommendedLesson.title[language] || nextRecommendedLesson.title.roman}
              </h2>
              <p className="text-sm font-bold text-[#1B2440]/80 max-w-xl">
                {nextRecommendedLesson.subtitle[language] || nextRecommendedLesson.subtitle.roman}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
              <button
                onClick={() => startLesson(nextRecommendedLesson, 'guided')}
                className="min-h-[48px] px-6 rounded-2xl bg-[#1B2440] text-white font-space font-black text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
              >
                <Sparkles className="w-4 h-4 text-[#FFF1A8]" />
                <span>{isUrdu ? "رہنمائی کے ساتھ شروع کریں" : "Start Guided Mode"}</span>
              </button>
              <button
                onClick={() => startLesson(nextRecommendedLesson, 'independent')}
                className="min-h-[48px] px-5 rounded-2xl bg-white border-[2px] border-[#1B2440] text-[#1B2440] font-space font-bold text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 active:scale-95 transition-all"
              >
                <Trophy className="w-4 h-4 text-[#BA1A1A]" />
                <span>{isUrdu ? "خود اکیلے آزمائیں" : "Solo Challenge"}</span>
              </button>
            </div>
          </div>

          {/* All Practice Modules Grid */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-space font-extrabold text-xl text-[#1B2440]">
                {isUrdu ? "تمام اسباق کی فہرست" : "All Practice Modules"}
              </h3>
              <span className="text-xs font-bold text-[#1B2440]/60">
                {Object.keys(progressMap).length} of {LESSONS_DATA.length} completed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LESSONS_DATA.map((lesson) => {
                const isCompleted = progressMap[lesson.id]?.status === 'done';
                const bestScore = progressMap[lesson.id]?.bestScore;

                return (
                  <div
                    key={lesson.id}
                    className={`bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col justify-between gap-4 transition-all shadow-[2px_2px_0px_#1B2440] hover:-translate-y-0.5 ${
                      isCompleted ? 'border-[#0F5A3E]' : ''
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FFF1A8] text-[#1B2440] border border-[#1B2440]">
                          Module {lesson.moduleNumber}
                        </span>

                        {isCompleted ? (
                          <div className="flex items-center gap-1 text-xs font-black text-[#0F5A3E] bg-[#B8F2D0] px-2.5 py-0.5 rounded-full border border-[#0F5A3E]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Done ({bestScore}%)</span>
                          </div>
                        ) : (
                          <span className="text-xs font-bold text-[#1B2440]/60">
                            ~{lesson.estimatedMinutes} mins
                          </span>
                        )}
                      </div>

                      <h4 className="font-space font-black text-lg text-[#1B2440]">
                        {lesson.title[language] || lesson.title.roman}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#1B2440]/75 leading-relaxed">
                        {lesson.subtitle[language] || lesson.subtitle.roman}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1B2440]/15">
                      <button
                        onClick={() => startLesson(lesson, 'guided')}
                        className="min-h-[48px] py-2.5 px-3 rounded-xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[1.5px] border-[#1B2440] font-space font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-[1px_1px_0px_#1B2440]"
                      >
                        <Play className="w-4 h-4" />
                        <span>{isUrdu ? "رہنمائی موڈ" : "Guided"}</span>
                      </button>

                      <button
                        onClick={() => startLesson(lesson, 'independent')}
                        className="min-h-[48px] py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-[#1B2440] border-[1.5px] border-[#1B2440] font-space font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                      >
                        <Trophy className="w-4 h-4 text-[#BA1A1A]" />
                        <span>{isUrdu ? "ٹیسٹ موڈ" : "Solo Test"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset All Progress Callout */}
          <div className="p-4 bg-white border-[2px] border-[#1B2440] rounded-2xl flex items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#1B2440]/70">
              {isUrdu ? "تمام پریکٹس پیش رفت کو صاف کرنا چاہتے ہیں؟" : "Want to reset all practice attempts on this device?"}
            </span>
            <button
              onClick={() => setShowConfirmEraseAll(true)}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl border border-[#BA1A1A] text-[#BA1A1A] font-bold hover:bg-[#FFE8E5] transition-all cursor-pointer"
            >
              {isUrdu ? "ریکارڈ مٹائیں" : "Erase Progress"}
            </button>
          </div>
        </div>
      )}

      {/* 3. ACTIVE LESSON ENGINE WITH INTERACTIVE PHONE */}
      {activeLesson && !lessonResult && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
          
          {/* Left Column: Lesson Instructions & Ustaad Feedback (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Step Progress Pill */}
            <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 shadow-[2px_2px_0px_#1B2440] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FFF1A8] border border-[#1B2440] text-[#1B2440]">
                  Step {currentStepIndex + 1} of {activeLesson.steps.length}
                </span>

                <span className={`text-xs font-space font-black uppercase px-2.5 py-0.5 rounded-full border ${
                  practiceMode === 'guided' 
                    ? 'bg-[#B8F2D0] text-[#0F5A3E] border-[#0F5A3E]' 
                    : 'bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]'
                }`}>
                  {practiceMode === 'guided' ? (isUrdu ? "رہنمائی موڈ" : "Guided Mode") : (isUrdu ? "سولو چیلنج" : "Solo Challenge")}
                </span>
              </div>

              <h2 className="font-space font-extrabold text-xl sm:text-2xl text-[#1B2440]">
                {currentStep.instruction[language] || currentStep.instruction.roman}
              </h2>

              {/* Audio Voiceover Bar for this specific step */}
              <div className="pt-1">
                <UrduVoiceoverBar
                  text={currentStep.audioText[language] || currentStep.audioText.roman}
                  label={isUrdu ? "استاد کی آواز سنیں" : "Listen to Ustaad"}
                  language={language}
                />
              </div>
            </div>

            {/* In-Lesson Feedback / Wrong Tap Warning */}
            {stepNotice && (
              <div className={`p-4 rounded-2xl border-[2px] border-[#1B2440] flex items-start gap-2.5 animate-fadeIn text-sm font-bold ${
                stepNotice.type === 'error'
                  ? 'bg-[#FFE8E5] text-[#BA1A1A]'
                  : 'bg-[#B8F2D0] text-[#0F5A3E]'
              }`}>
                {stepNotice.type === 'error' ? (
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <span>{stepNotice.text}</span>
              </div>
            )}

            {/* Hint Drawer */}
            <div className="bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-space font-extrabold text-[#1B2440] flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#BA1A1A]" />
                  <span>{isUrdu ? "مدد اور اشارہ" : "Need a Hint?"}</span>
                </span>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setHintsUsed((prev) => prev + 1);
                    setStepNotice({
                      type: 'success',
                      text: `${isUrdu ? "اشارہ:" : "Hint:"} ${currentStep.hint[language] || currentStep.hint.roman}`
                    });
                  }}
                  className="px-3 min-h-[40px] rounded-xl bg-white hover:bg-slate-100 border border-[#1B2440] text-xs font-space font-black text-[#1B2440] cursor-pointer"
                >
                  {isUrdu ? "اشارہ دکھائیں" : "Show Clue"}
                </button>
              </div>
              <p className="text-xs font-bold text-[#1B2440]/65">
                {isUrdu 
                  ? "فکر نہ کریں! اشارہ دیکھنے پر کوئی جرمانہ یا ڈانٹ نہیں ہے۔" 
                  : "Transparent learning: using hints carries zero shame. Learn at your own pace."}
              </p>
            </div>

            {/* Reset Attempt Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowConfirmResetAttempt(true)}
                className="min-h-[48px] px-4 rounded-2xl bg-white border border-[#1B2440] text-xs font-space font-extrabold text-[#1B2440] hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isUrdu ? "یہ کوشش دوبارہ شروع کریں" : "Reset This Attempt"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Phone Frame (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <PhoneFrame isUrdu={isUrdu} onPhoneHome={handlePhoneHome}>
              {/* Spotlight Overlay when in Guided Mode */}
              {practiceMode === 'guided' && currentStep && (
                <SpotlightOverlay
                  targetId={currentStep.targetId}
                  instructionText={currentStep.instruction[language] || currentStep.instruction.roman}
                  hintText={currentStep.hint[language] || currentStep.hint.roman}
                  isUrdu={isUrdu}
                />
              )}

              {/* View 1: Phone Home Screen */}
              {currentPhoneApp === 'home' && (
                <PhoneHomeScreen
                  isUrdu={isUrdu}
                  onOpenApp={(appId) => {
                    if (appId === 'gallery') {
                      setCurrentPhoneApp('gallery');
                      handleStepAction('phone-app-gallery');
                    } else if (appId === 'whatsapp') {
                      setCurrentPhoneApp('whatsapp');
                      handleStepAction('phone-app-whatsapp');
                    } else if (appId === 'easypaisa') {
                      setCurrentPhoneApp('easypaisa');
                      handleStepAction('phone-app-easypaisa');
                    } else {
                      handleStepAction(`phone-app-${appId}`);
                    }
                  }}
                />
              )}

              {/* View 2: Gallery App */}
              {currentPhoneApp === 'gallery' && (
                <PhoneGalleryApp
                  isUrdu={isUrdu}
                  onBackToHome={() => setCurrentPhoneApp('home')}
                  onOpenShareSheet={(photo) => {
                    setSentPhoto(photo);
                    setIsShareSheetOpen(true);
                    handleStepAction('btn-photo-share');
                  }}
                />
              )}

              {/* View 3: WhatsApp App */}
              {currentPhoneApp === 'whatsapp' && (
                <PhoneWhatsAppApp
                  activeChatId={activeChatId}
                  sentPhoto={sentPhoto}
                  voiceNoteSent={voiceNoteSent}
                  isUrdu={isUrdu}
                  onSelectChat={(chatId) => {
                    setActiveChatId(chatId);
                    handleStepAction(`chat-item-${chatId}`);
                  }}
                  onBackToChats={() => setActiveChatId(null)}
                  onRecordVoiceNote={() => {
                    setVoiceNoteSent(true);
                    handleStepAction('btn-mic-record');
                  }}
                  onBlockSender={() => {
                    handleStepAction('btn-block-scam-sender');
                  }}
                  onInspectLink={() => {
                    handleStepAction('inspect-fake-link-domain');
                  }}
                />
              )}

              {/* View 4: EasyPaisa Wallet App */}
              {currentPhoneApp === 'easypaisa' && (
                <PhoneWalletApp
                  isUrdu={isUrdu}
                  onBackToHome={() => setCurrentPhoneApp('home')}
                  onStepComplete={(stepTargetId) => {
                    handleStepAction(stepTargetId);
                  }}
                />
              )}

              {/* Bottom Share Sheet */}
              {isShareSheetOpen && (
                <PhoneShareSheet
                  isUrdu={isUrdu}
                  onCancel={() => setIsShareSheetOpen(false)}
                  onSelectContact={(contact) => {
                    setIsShareSheetOpen(false);
                    setCurrentPhoneApp('whatsapp');
                    setActiveChatId(contact.id);
                    handleStepAction(`share-contact-${contact.id}`);
                  }}
                />
              )}
            </PhoneFrame>
          </div>
        </div>
      )}

      {/* 4. PER-ATTEMPT RESULT SCREEN (Transparent, non-shaming feedback) */}
      {lessonResult && (
        <div className="bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center gap-6 shadow-[4px_4px_0px_#1B2440] animate-fadeIn max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center text-3xl">
            <Award className="w-9 h-9 text-[#0F5A3E]" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-space font-black uppercase px-3 py-1 rounded-full bg-[#FFF1A8] border border-[#1B2440] text-[#1B2440] w-fit mx-auto">
              {isUrdu ? "مشق مکمل ہوئی!" : "Attempt Completed!"}
            </span>
            <h2 className="font-space font-black text-2xl sm:text-3xl text-[#1B2440]">
              {isUrdu ? "شاباش! آپ نے یہ سبق کامیابی سے مکمل کر لیا!" : "Well Done! Task Completed Successfully!"}
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#1B2440]/80">
              {isUrdu
                ? `آپ نے یہ مرحلہ مکمل کیا۔ کسی بھی غلطی پر کوئی پیسہ نہیں کٹا۔`
                : `You finished this task fearlessly. Transparent feedback: ${lessonResult.hintsUsed} hint(s) used, ${lessonResult.wrongTaps} wrong tap(s).`}
            </p>
          </div>

          {/* Transparent Non-shaming Metrics */}
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="p-3 bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl flex flex-col items-center">
              <span className="text-xs font-bold text-[#1B2440]/60">Score:</span>
              <span className="font-space font-black text-xl text-[#0F5A3E]">{lessonResult.score}%</span>
            </div>
            <div className="p-3 bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl flex flex-col items-center">
              <span className="text-xs font-bold text-[#1B2440]/60">Hints Used:</span>
              <span className="font-space font-black text-xl text-[#1B2440]">{lessonResult.hintsUsed}</span>
            </div>
            <div className="p-3 bg-[#FFFBF5] border-[1.5px] border-[#1B2440] rounded-2xl flex flex-col items-center">
              <span className="text-xs font-bold text-[#1B2440]/60">Wrong Taps:</span>
              <span className="font-space font-black text-xl text-[#1B2440]">{lessonResult.wrongTaps}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center pt-2">
            <button
              onClick={() => {
                soundEffects.playNav();
                setActiveLesson(null);
                setLessonResult(null);
              }}
              className="w-full sm:w-auto px-6 min-h-[48px] rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <span>{isUrdu ? "اگلا سبق منتخب کریں" : "Return to Modules"}</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                if (activeLesson) {
                  startLesson(activeLesson, practiceMode);
                }
              }}
              className="w-full sm:w-auto px-6 min-h-[48px] rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] border-[2px] border-[#1B2440] font-space font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isUrdu ? "دوبارہ پریکٹس کریں" : "Practice Again"}</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. ONBOARDING MODAL (MAX 3 SHORT STEPS) */}
      {isOnboardingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="w-full max-w-md bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-[4px_4px_0px_#1B2440]"
            dir={isUrdu ? 'rtl' : 'ltr'}
          >
            {/* Onboarding Step Tracker */}
            <div className="flex items-center justify-between pb-2 border-b border-[#1B2440]/15">
              <span className="text-xs font-space font-black uppercase text-[#0F5A3E] bg-[#B8F2D0] px-3 py-0.5 rounded-full border border-[#0F5A3E]">
                Step {onboardingStep} of 3
              </span>
              <button
                onClick={() => {
                  storage.safeSet('onboarding_completed', true);
                  setIsOnboardingOpen(false);
                }}
                className="text-xs font-bold text-[#1B2440]/60 underline hover:text-[#1B2440]"
              >
                {isUrdu ? "چھوڑیں (Skip)" : "Skip"}
              </button>
            </div>

            {/* Step 1: Language */}
            {onboardingStep === 1 && (
              <div className="flex flex-col gap-3">
                <h3 className="font-space font-black text-xl text-[#1B2440]">
                  {isUrdu ? "اپنی پسندیدہ زبان منتخب کریں" : "Select Your Preferred Language"}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#1B2440]/75 leading-relaxed">
                  BinaDarKe is available in Roman Urdu, Urdu script, and English.
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <button
                    onClick={() => {
                      storage.safeSet('language', 'roman');
                      setOnboardingStep(2);
                    }}
                    className="min-h-[48px] py-2 px-2 rounded-xl border-[2px] border-[#1B2440] bg-[#FFF1A8] font-space font-black text-xs text-[#1B2440]"
                  >
                    Roman Urdu
                  </button>
                  <button
                    onClick={() => {
                      storage.safeSet('language', 'urdu');
                      setOnboardingStep(2);
                    }}
                    className="min-h-[48px] py-2 px-2 rounded-xl border-[2px] border-[#1B2440] bg-[#B8F2D0] font-space font-black text-xs text-[#1B2440]"
                  >
                    اردو
                  </button>
                  <button
                    onClick={() => {
                      storage.safeSet('language', 'en');
                      setOnboardingStep(2);
                    }}
                    className="min-h-[48px] py-2 px-2 rounded-xl border-[2px] border-[#1B2440] bg-white font-space font-black text-xs text-[#1B2440]"
                  >
                    English
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Elder / Buzurg Mode Toggle */}
            {onboardingStep === 2 && (
              <div className="flex flex-col gap-3">
                <h3 className="font-space font-black text-xl text-[#1B2440]">
                  {isUrdu ? "بزرگ موڈ (Buzurg Mode)" : "Elder-Friendly Display"}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#1B2440]/75 leading-relaxed">
                  {isUrdu 
                    ? "کیا آپ بڑے فونٹس (18px+) اور زیادہ واضح بٹن چاہتے ہیں؟" 
                    : "Would you like larger high-contrast fonts (18px+) and bigger buttons for effortless reading?"}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => {
                      storage.safeSet('babaMode', true);
                      setOnboardingStep(3);
                    }}
                    className="min-h-[48px] py-3 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] font-space font-black text-sm text-[#1B2440]"
                  >
                    {isUrdu ? "ہاں، بڑا فونٹ کریں" : "Yes, Enable"}
                  </button>
                  <button
                    onClick={() => {
                      storage.safeSet('babaMode', false);
                      setOnboardingStep(3);
                    }}
                    className="min-h-[48px] py-3 rounded-2xl bg-white border-[2px] border-[#1B2440] font-space font-bold text-sm text-[#1B2440]"
                  >
                    {isUrdu ? "نارمل سائز" : "Standard Size"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Mistakes Cost Zero Rupees & Privacy Summary */}
            {onboardingStep === 3 && (
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center text-2xl">
                  🛡️
                </div>
                <h3 className="font-space font-black text-xl text-[#1B2440]">
                  {isUrdu ? "ہمارا وعدہ: غلطی پر صفر روپے کٹیں گے" : "Our Promise: Mistakes Cost Zero Rupees"}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#1B2440]/80 leading-relaxed">
                  {isUrdu
                    ? "یہ ایک ۱۰۰٪ مفت اور محفوظ پریکٹس سینڈ باکس ہے۔ یہاں کلک کرنے سے کوئی اصل رقم یا ذاتی ڈیٹا نہیں جاتا۔"
                    : "This is a 100% free and client-side sandbox. Everything simulated is fictional. Feel free to make mistakes and learn fearlessly!"}
                </p>
                <button
                  onClick={() => {
                    soundEffects.playSuccess();
                    storage.safeSet('onboarding_completed', true);
                    setIsOnboardingOpen(false);
                  }}
                  className="w-full min-h-[48px] py-3 rounded-2xl bg-[#1B2440] text-white font-space font-black text-sm hover:bg-slate-800 transition-all cursor-pointer mt-2"
                >
                  {isUrdu ? "میں سمجھ گیا، مشق شروع کریں" : "I Understand • Start Practicing"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. REAL PHONE PRACTICE MODAL (CAPACITOR 7 EXTENSION) */}
      {showRealPhoneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="w-full max-w-md bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-[4px_4px_0px_#1B2440]"
            dir={isUrdu ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#0F5A3E]" />
              </div>
              <div>
                <h3 className="font-space font-black text-lg text-[#1B2440]">
                  {isUrdu ? "اصلی فون پر خود آزمائیں" : "Practice on Your Real Phone"}
                </h3>
                <span className="text-xs font-bold text-[#0F5A3E]">
                  Capacitor 7 Android Follow-Along
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#1B2440]/80 leading-relaxed">
              {isUrdu
                ? "جب آپ سینڈ باکس میں مشق کر لیں، تو اپنے فون پر واٹس ایپ کھول کر یہی عمل خود دہرائیں۔ بینادڑکے کبھی آپ کے چیٹس نہیں پڑھتا۔"
                : "Once you have practiced here, open WhatsApp or EasyPaisa on your real device to repeat the exercise. BinaDarKe operates with zero permissions and never reads your chats."}
            </p>

            <div className="bg-[#FFF4E0] border border-[#1B2440] rounded-2xl p-3 text-xs font-bold text-[#1B2440]/75">
              <span>Browser Notice: Android App Launcher is available when packaged as an Android APK via Capacitor 7. See <code>docs/CAPACITOR_ANDROID.md</code>.</span>
            </div>

            <button
              onClick={() => setShowRealPhoneModal(false)}
              className="w-full min-h-[48px] py-2.5 rounded-2xl bg-[#1B2440] text-white font-space font-black text-xs sm:text-sm cursor-pointer"
            >
              {isUrdu ? "سمجھ گیا" : "Understood"}
            </button>
          </div>
        </div>
      )}

      {/* 7. CONFIRM RESET ATTEMPT DIALOG */}
      {showConfirmResetAttempt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-sm bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 flex flex-col gap-4 shadow-lg text-center">
            <h4 className="font-space font-black text-lg text-[#1B2440]">
              {isUrdu ? "یہ کوشش دوبارہ شروع کریں؟" : "Reset This Attempt?"}
            </h4>
            <p className="text-xs font-bold text-[#1B2440]/75">
              {isUrdu 
                ? "اس سبق کے تمام مراحل دوبارہ شروع ہو جائیں گے۔ آپ کی پچھلی مکمل شدہ پیش رفت محفوظ رہے گی۔" 
                : "This will restart the current task from Step 1. Your overall completed progress is preserved."}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleResetAttempt}
                className="min-h-[48px] py-2 rounded-xl bg-[#BA1A1A] text-white font-space font-black text-xs cursor-pointer"
              >
                {isUrdu ? "ہاں، دوبارہ کریں" : "Yes, Reset"}
              </button>
              <button
                onClick={() => setShowConfirmResetAttempt(false)}
                className="min-h-[48px] py-2 rounded-xl bg-white border border-[#1B2440] text-xs font-bold cursor-pointer"
              >
                {isUrdu ? "منسوخ" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. CONFIRM ERASE ALL PROGRESS DIALOG */}
      {showConfirmEraseAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-sm bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 flex flex-col gap-4 shadow-lg text-center">
            <h4 className="font-space font-black text-lg text-[#BA1A1A]">
              {isUrdu ? "تمام پیش رفت مٹا دیں؟" : "Erase All Saved Progress?"}
            </h4>
            <p className="text-xs font-bold text-[#1B2440]/75">
              {isUrdu 
                ? "یہ عمل تمام ماڈیولز کے اسکور اور مکمل شدہ اسباق کا ریکارڈ اس براؤزر سے ہمیشہ کے لیے ختم کر دے گا۔" 
                : "This will permanently delete all lesson completion records and test scores from this device."}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleEraseAllProgress}
                className="min-h-[48px] py-2 rounded-xl bg-[#BA1A1A] text-white font-space font-black text-xs cursor-pointer"
              >
                {isUrdu ? "سب صاف کریں" : "Yes, Erase All"}
              </button>
              <button
                onClick={() => setShowConfirmEraseAll(false)}
                className="min-h-[48px] py-2 rounded-xl bg-white border border-[#1B2440] text-xs font-bold cursor-pointer"
              >
                {isUrdu ? "منسوخ" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
