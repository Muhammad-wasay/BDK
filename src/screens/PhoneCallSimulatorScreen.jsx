import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  PhoneOff,
  Volume2,
  Play,
  Pause,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import soundEffects from '../utils/soundEffects';
import { HBLLogo } from '../components/BrandLogos';

export default function PhoneCallSimulatorScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [callState, setCallState] = useState('incoming'); // 'incoming' | 'connected' | 'ended'
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userDecision, setUserDecision] = useState(null);
  const callAudioRef = useRef(null);

  const t = TRANSLATIONS[language] || TRANSLATIONS.roman;
  const isUrdu = language === 'urdu';

  useEffect(() => {
    return () => {
      if (callAudioRef.current) {
        callAudioRef.current.pause();
        callAudioRef.current = null;
      }
    };
  }, []);

  const callScenarios = {
    roman: {
      caller: "HBL Bank Manager",
      number: "+92 300 1234567",
      status: "Incoming Call",
      transcript: [
        "Assalam-o-Alaikum! Main HBL Bank se bol raha hoon.",
        "Aapka account block hone wala hai, suspicious activity ki wajah se.",
        "Aap abhi OTP bata dein to account unblock kar denge.",
        "Jaldi bataiye warna account permanent block ho jayega!"
      ],
      isScam: true,
      feedback: {
        scamTitle: "Shabash! Correct Decision!",
        scamDesc: "Asli bank kabhi phone par OTP nahi maangta. Ye 100% fraud call tha.",
        safeTitle: "Zara Thehrein! Ye Dhoka Tha",
        safeDesc: "Bank manager kabhi phone par OTP ya sensitive information nahi maang sakta. Ye fake call tha."
      }
    },
    urdu: {
      caller: "ایچ بی ایل بینک مینیجر",
      number: "+92 300 1234567",
      status: "آنے والی کال",
      transcript: [
        "السلام علیکم! میں ایچ بی ایل بینک سے بول رہا ہوں۔",
        "آپ کا اکاؤنٹ بلاک ہونے والا ہے، مشکوک سرگرمی کی وجہ سے۔",
        "آپ ابھی او ٹی پی بتا دیں تو اکاؤنٹ ان بلاک کر دیں گے۔",
        "جلدی بتائیں ورنہ اکاؤنٹ مستقل بلاک ہو جائے گا!"
      ],
      isScam: true,
      feedback: {
        scamTitle: "شاباش! درست فیصلہ!",
        scamDesc: "اصلی بینک کبھی فون پر او ٹی پی نہیں مانگتا۔ یہ ۱۰۰٪ فراڈ کال تھی۔",
        safeTitle: "ذرا ٹھہریں! یہ دھوکہ تھا",
        safeDesc: "بینک مینیجر کبھی فون پر او ٹی پی یا حساس معلومات نہیں مانگ سکتا۔ یہ جعلی کال تھی۔"
      }
    },
    en: {
      caller: "HBL Bank Manager",
      number: "+92 300 1234567",
      status: "Incoming Call",
      transcript: [
        "Hello! This is HBL Bank calling.",
        "Your account is about to be blocked due to suspicious activity.",
        "Please provide your OTP immediately to unblock it.",
        "Hurry up or your account will be permanently blocked!"
      ],
      isScam: true,
      feedback: {
        scamTitle: "Well Done! Correct Decision!",
        scamDesc: "Real banks never ask for OTP over phone. This was 100% a scam call.",
        safeTitle: "Wait! This Was a Scam",
        safeDesc: "Bank managers are never authorized to ask for OTP or sensitive info over phone. This was fake."
      }
    }
  };

  const scenario = callScenarios[language] || callScenarios.roman;

  const handleAccept = () => {
    soundEffects.playClick();
    setCallState('connected');
    setIsPlaying(true);
    if (!callAudioRef.current) {
      callAudioRef.current = new Audio('/audio/bank_call.mp3');
      callAudioRef.current.onended = () => setIsPlaying(false);
    }
    callAudioRef.current.play().catch(() => {});
  };

  const handleReject = () => {
    soundEffects.playClick();
    if (callAudioRef.current) {
      callAudioRef.current.pause();
    }
    setUserDecision('reject');
    setShowFeedback(true);
    setCallState('ended');
    if (scenario.isScam) {
      soundEffects.playSuccess();
    } else {
      soundEffects.playError();
    }
  };

  const handleEndCall = () => {
    soundEffects.playClick();
    if (callAudioRef.current) {
      callAudioRef.current.pause();
    }
    setUserDecision('end');
    setShowFeedback(true);
    setCallState('ended');
  };

  const toggleAudio = () => {
    soundEffects.playClick();
    if (!callAudioRef.current) {
      callAudioRef.current = new Audio('/audio/bank_call.mp3');
      callAudioRef.current.onended = () => setIsPlaying(false);
    }
    if (isPlaying) {
      callAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      callAudioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onGoHome}
          className="w-10 h-10 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="text-center">
          <span className="text-[11px] font-space font-extrabold uppercase tracking-wider bg-[#B8F2D0] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-2.5 py-0.5">
            Level 2 • Phone Call Simulator
          </span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Phone Interface */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[360px] bg-[#1B2440] rounded-[40px] p-6">
          {/* Call Screen */}
          <div className="bg-gradient-to-b from-[#2D3A5E] to-[#1B2440] rounded-[32px] p-6 flex flex-col items-center gap-6 text-white">
            {/* Caller Info */}
            <div className="text-center">
              <div className="flex flex-col items-center gap-2 mb-4">
                <div className="w-20 h-20 rounded-full bg-[#B8F2D0] border-[3px] border-white/30 flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <HBLLogo className="h-6 w-auto bg-white px-2 py-0.5 rounded-lg" />
              </div>
              <h2 className="font-space font-extrabold text-xl mb-1">
                {scenario.caller}
              </h2>
              <p className="text-sm font-bold text-white/70 mb-2">
                {scenario.number}
              </p>
              {callState === 'incoming' && (
                <p className="text-xs font-bold animate-pulse text-[#FF6B6B]">
                  {scenario.status}...
                </p>
              )}
              {callState === 'connected' && (
                <p className="text-xs font-bold text-[#B8F2D0]">
                  {isUrdu ? 'جاری ہے' : 'Connected'} • 00:00
                </p>
              )}
            </div>

            {/* Call Actions */}
            {callState === 'incoming' && (
              <div className="flex items-center gap-8 mt-4">
                <button
                  onClick={handleReject}
                  className="w-16 h-16 rounded-full bg-[#FF6B6B] hover:bg-[#f25e5e] flex items-center justify-center cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  <PhoneOff className="w-7 h-7 text-white" />
                </button>
                <button
                  onClick={handleAccept}
                  className="w-16 h-16 rounded-full bg-[#B8F2D0] hover:bg-[#a6e6bf] flex items-center justify-center cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  <Phone className="w-7 h-7 text-[#1B2440]" />
                </button>
              </div>
            )}

            {/* Connected Call Content */}
            {callState === 'connected' && (
              <div className="w-full flex flex-col gap-4">
                {/* Audio Transcript */}
                <div className="bg-black/30 rounded-2xl p-4 max-h-48 overflow-y-auto space-y-2">
                  {scenario.transcript.map((line, idx) => (
                    <p key={idx} className="text-xs font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Audio Control */}
                <button
                  onClick={toggleAudio}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2 text-xs font-space font-extrabold cursor-pointer transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#B8F2D0]" />
                      <span>{isUrdu ? 'آواز روکیں' : 'Pause Audio'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#B8F2D0]" />
                      <span>{isUrdu ? 'آواز سنیں' : 'Play Audio'}</span>
                    </>
                  )}
                </button>

                {/* Call End Button */}
                <button
                  onClick={handleEndCall}
                  className="w-full py-3 rounded-xl bg-[#FF6B6B] hover:bg-[#f25e5e] flex items-center justify-center gap-2 text-sm font-space font-black cursor-pointer transition-all"
                >
                  <PhoneOff className="w-4 h-4" />
                  <span>{isUrdu ? 'کال کاٹیں' : 'End Call'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2440]/60 backdrop-blur-xs animate-fadeIn">
            <div className="w-full max-w-md bg-white border-[2.5px] border-[#1B2440] rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl border-[2px] border-[#1B2440] flex items-center justify-center ${
                  userDecision === 'reject' ? 'bg-[#B8F2D0] text-[#1B2440]' : 'bg-[#FFE8E5] text-[#BA1A1A]'
                }`}>
                  {userDecision === 'reject' ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <AlertTriangle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h3 className="font-space font-extrabold text-lg text-[#1B2440]">
                    {userDecision === 'reject' ? scenario.feedback.scamTitle : scenario.feedback.safeTitle}
                  </h3>
                  <span className="text-xs font-bold text-[#1B2440]/60">
                    Simulation Feedback
                  </span>
                </div>
              </div>

              <p className="text-sm font-bold text-[#1B2440]/80 leading-relaxed">
                {userDecision === 'reject' ? scenario.feedback.scamDesc : scenario.feedback.safeDesc}
              </p>

              <div className="bg-[#B8F2D0]/50 border-[2px] border-[#1B2440] rounded-xl p-3 text-xs font-bold text-[#1B2440]">
                {isUrdu 
                  ? "💡 سنہری اصول: اصلی بینک کبھی بھی فون کال پر او ٹی پی یا پن نہیں مانگتا۔" 
                  : "💡 Golden Rule: Real banks NEVER ask for your OTP or PIN over a phone call."}
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setCallState('incoming');
                    setShowFeedback(false);
                    setUserDecision(null);
                    setIsPlaying(false);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border-[2px] border-[#1B2440] text-xs font-space font-extrabold cursor-pointer transition-all"
                >
                  {isUrdu ? 'دوبارہ ٹیسٹ کریں' : 'Try Again'}
                </button>
                <button
                  onClick={onGoHome}
                  className="flex-1 py-2.5 rounded-xl bg-[#B8F2D0] hover:bg-[#a6e6bf] border-[2px] border-[#1B2440] text-xs font-space font-extrabold cursor-pointer transition-all"
                >
                  {isUrdu ? 'ہوم پر جائیں' : 'Back to Home'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
