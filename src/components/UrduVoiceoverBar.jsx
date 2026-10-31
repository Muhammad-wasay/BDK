import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function UrduVoiceoverBar({ 
  text, 
  label = "Audio Guide", 
  language = "roman" 
}) {
  const isEn = language === 'en';
  const isUrdu = language === 'urdu';

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const utteranceRef = useRef(null);

  const words = text ? text.split(/\s+/) : [];

  // Match text to ElevenLabs recorded audio files in public/audio/
  // Works for both Roman Urdu and Urdu script!
  const getAudioFile = (t) => {
    if (!t) return null;
    const s = t.toLowerCase();
    
    // 1. Landing Welcome Intro (User's custom uploaded audio)
    if (
      s.includes('khush-aamdeed') || 
      s.includes('خوش آمدید') || 
      s.includes('welcome to binadarke') || 
      s.includes('assalamu alaykum') || 
      s.includes('assalam-o-alaikum') || 
      s.includes('السلام علیکم')
    ) {
      return '/audio/welcome_intro.mp3';
    }

    // 2. Guided Practice Intro
    if (
      s.includes('4 ahem nishan') || 
      s.includes('۴ اہم نشانات') || 
      s.includes('4 critical red flags') || 
      s.includes('ghor se dekhein') ||
      s.includes('غور سے دیکھیں')
    ) {
      return '/audio/guided_intro.mp3';
    }

    // 3. Guided Practice Red Flags 1 to 4
    if (s.includes('pehli nishani') || s.includes('پہلی نشانی') || s.includes('first red flag') || s.includes('ghair mamooli') || s.includes('غیر معمولی')) {
      return '/audio/redflag_1.mp3';
    }
    if (s.includes('doosri nishani') || s.includes('دوسری نشانی') || s.includes('second red flag') || s.includes('khufia pin') || s.includes('خفیہ پن') || s.includes('خفیہ پاس ورڈ')) {
      return '/audio/redflag_2.mp3';
    }
    if (s.includes('teesri nishani') || s.includes('تیسری نشانی') || s.includes('third red flag') || s.includes('jaldbazi') || s.includes('جلد بازی')) {
      return '/audio/redflag_3.mp3';
    }
    if (s.includes('chouthi nishani') || s.includes('چوتھی نشانی') || s.includes('fourth red flag') || s.includes('mashkook link') || s.includes('مشکوک لنک')) {
      return '/audio/redflag_4.mp3';
    }

    // 4. Solo Practice Scenarios 1 to 3
    if (s.includes('sawal number aik') || s.includes('سوال نمبر ایک') || s.includes('question 1') || s.includes('solo-1')) {
      return '/audio/solo_1.mp3';
    }
    if (s.includes('sawal number do') || s.includes('سوال نمبر دو') || s.includes('question 2') || s.includes('solo-2')) {
      return '/audio/solo_2.mp3';
    }
    if (s.includes('sawal number teen') || s.includes('سوال نمبر تین') || s.includes('question 3') || s.includes('solo-3')) {
      return '/audio/solo_3.mp3';
    }

    // 5. Bank Manager Call & Golden Rule
    if (s.includes('hbl') || s.includes('bank manager') || s.includes('بینک مینیجر')) {
      return '/audio/bank_call.mp3';
    }
    if (s.includes('yaad rakhain') || s.includes('یاد رکھیں') || s.includes('golden rule') || s.includes('سنہری اصول')) {
      return '/audio/golden_rule.mp3';
    }

    return null;
  };

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setActiveWordIndex(-1);
  };

  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  useEffect(() => {
    stopAllAudio();
  }, [text]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundEffects.playClick();
      stopAllAudio();
      return;
    }

    soundEffects.playClick();
    stopAllAudio();

    const audioSrc = getAudioFile(text);

    if (audioSrc) {
      // 1. PLAY ACTUAL ELEVENLABS MP3 RECORDING (Both Urdu & Roman Urdu)
      const audio = new Audio(audioSrc);
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        const duration = audio.duration || 6;
        const wordInterval = (duration * 1000) / Math.max(words.length, 1);
        let currentIndex = 0;

        intervalRef.current = setInterval(() => {
          if (currentIndex < words.length) {
            setActiveWordIndex(currentIndex);
            currentIndex++;
          } else {
            clearInterval(intervalRef.current);
          }
        }, wordInterval);
      };

      audio.onended = () => {
        stopAllAudio();
      };

      audio.onerror = () => {
        fallbackToBrowserSpeech();
      };

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        fallbackToBrowserSpeech();
      });
    } else {
      fallbackToBrowserSpeech();
    }
  };

  const fallbackToBrowserSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.pitch = 1.05;
    utterance.rate = 0.88;
    utterance.lang = isEn ? 'en-US' : (isUrdu ? 'ur-PK' : 'hi-IN');

    utterance.onend = () => {
      setIsPlaying(false);
      setActiveWordIndex(-1);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setActiveWordIndex(-1);
    };

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className={`w-full bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-4 sm:p-5 flex flex-col gap-3 transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#1B2440]/15">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl border-[2px] border-[#1B2440] flex items-center justify-center flex-shrink-0 transition-all ${
            isPlaying ? 'bg-[#FF6B6B] text-white' : 'bg-[#B8F2D0] text-[#1B2440]'
          }`}>
            {isPlaying ? (
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-white rounded-full animate-pulse"></span>
                <span className="w-1 h-5 bg-white rounded-full animate-bounce"></span>
                <span className="w-1 h-4 bg-white rounded-full animate-pulse"></span>
              </div>
            ) : (
              <Volume2 className="w-4 h-4 text-[#1B2440]" />
            )}
          </div>
          <div>
            <span className="font-space font-extrabold text-sm sm:text-base text-[#1B2440] leading-none block">
              {label}
            </span>
            <span className="text-[11px] font-bold text-[#1B2440]/60">
              {isPlaying ? (isEn ? "Playing voice..." : "آواز چل رہی ہے...") : (isEn ? "Click listen for spoken guidance" : "سننے کے لیے بٹن دبائیں")}
            </span>
          </div>
        </div>

        {/* Play/Stop Button */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-xl bg-[#B8F2D0] border border-[#1B2440] text-[11px] font-space font-extrabold text-[#1B2440]">
            {isEn ? "English Voice" : "اردو آواز (ElevenLabs)"}
          </span>

          <button
            onClick={handleTogglePlay}
            type="button"
            className={`px-3.5 py-1.5 rounded-xl border-[2px] border-[#1B2440] text-xs font-space font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
              isPlaying
                ? 'bg-[#FFE8E5] text-[#BA1A1A] hover:bg-[#ffd5d0]'
                : 'bg-[#B8F2D0] text-[#1B2440] hover:bg-[#a5e9c0]'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#BA1A1A]" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#1B2440]" />
                <span>{isEn ? "Listen" : "Suniyen"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Full Spoken Text with Live Word-by-Word Highlight */}
      <div className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed pt-1">
        {words.map((word, index) => {
          const isCurrent = isPlaying && activeWordIndex === index;
          return (
            <span
              key={index}
              className={`inline-block mr-1.5 transition-all duration-150 ${
                isCurrent 
                  ? 'bg-[#B8F2D0] text-[#1B2440] px-1 py-0.5 rounded-md font-black scale-105 border border-[#1B2440]' 
                  : 'text-[#1B2440]/85'
              }`}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
