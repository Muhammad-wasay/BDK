import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Radio, Check } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function UrduVoiceoverBar({ 
  text, 
  label = "Audio Guide", 
  language = "roman" 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceLang, setVoiceLang] = useState('urdu'); // 'urdu' | 'english'
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const utteranceRef = useRef(null);

  const words = text ? text.split(' ') : [];

  // Stop speech when text changes or component unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setActiveWordIndex(-1);
    }
  }, [text]);

  const findBestVoice = (voices, langChoice) => {
    if (!voices || voices.length === 0) return null;

    if (langChoice === 'urdu') {
      // 1. Natural Hindi/Urdu Female voice
      const hindiUrduFemale = voices.find(v => 
        (v.lang.includes('hi') || v.lang.includes('ur') || v.lang.includes('IN') || v.lang.includes('PK')) &&
        (v.name.includes('Swara') || v.name.includes('Heera') || v.name.includes('Kalpana') || v.name.includes('Google हिन्दी') || v.name.toLowerCase().includes('female'))
      );
      if (hindiUrduFemale) return hindiUrduFemale;

      const anyUrduHindi = voices.find(v => v.lang.includes('hi') || v.lang.includes('ur'));
      if (anyUrduHindi) return anyUrduHindi;
    }

    // English Female voice
    const englishFemale = voices.find(v => 
      v.name.includes('Zira') || 
      v.name.includes('Jenny') || 
      v.name.includes('Google UK English Female') ||
      v.name.includes('Google US English Female') ||
      (v.lang.includes('en') && v.name.toLowerCase().includes('female'))
    );
    if (englishFemale) return englishFemale;

    return voices[0];
  };

  const handleTogglePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert("Aapke browser mein audio guide support nahi hai.");
      return;
    }

    if (isPlaying) {
      soundEffects.playClick();
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setActiveWordIndex(-1);
    } else {
      soundEffects.playClick();
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = findBestVoice(voices, voiceLang);

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Voice tuning: Female pitch (1.08) and calm, elder-friendly pace (0.85)
      utterance.pitch = 1.08;
      utterance.rate = 0.85;

      if (voiceLang === 'urdu') {
        utterance.lang = language === 'urdu' ? 'ur-PK' : 'hi-IN';
      } else {
        utterance.lang = 'en-US';
      }

      // Word boundary event for live karaoke highlight
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          // Estimate word index based on character index
          const charIndex = event.charIndex;
          let runningChars = 0;
          for (let i = 0; i < words.length; i++) {
            runningChars += words[i].length + 1;
            if (runningChars > charIndex) {
              setActiveWordIndex(i);
              break;
            }
          }
        }
      };

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
    }
  };

  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-4 sm:p-5 flex flex-col gap-3 transition-all ${
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
              {isPlaying ? "Speaking now..." : "Click listen for spoken guidance"}
            </span>
          </div>
        </div>

        {/* Voice Language Selector & Play/Stop Button */}
        <div className="flex items-center gap-2">
          {/* Urdu / English Voice Toggle */}
          <div className="flex items-center bg-[#FFF4E0] border-[1.5px] border-[#1B2440] p-0.5 rounded-xl text-[11px] font-space font-bold">
            <button
              onClick={() => {
                soundEffects.playClick();
                if (isPlaying) window.speechSynthesis.cancel();
                setIsPlaying(false);
                setVoiceLang('urdu');
              }}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                voiceLang === 'urdu' 
                  ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black' 
                  : 'text-[#1B2440]/60 hover:text-[#1B2440]'
              }`}
            >
              Urdu Female
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                if (isPlaying) window.speechSynthesis.cancel();
                setIsPlaying(false);
                setVoiceLang('english');
              }}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                voiceLang === 'english' 
                  ? 'bg-white text-[#1B2440] border border-[#1B2440] font-black' 
                  : 'text-[#1B2440]/60 hover:text-[#1B2440]'
              }`}
            >
              English Female
            </button>
          </div>

          {/* Play/Stop Button */}
          <button
            onClick={handleTogglePlay}
            type="button"
            className={`px-3.5 py-1.5 rounded-xl border-[2px] border-[#1B2440] text-xs font-space font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
              isPlaying
                ? 'bg-[#FFE8E5] text-[#BA1A1A] hover:bg-[#ffd5d0]'
                : 'bg-[#FFF1A8] text-[#1B2440] hover:bg-[#ffe769]'
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
                <span>Listen</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Full Spoken Text with Live Word-by-Word Highlight (NO Truncation!) */}
      <div className="text-xs sm:text-sm font-bold text-[#1B2440] leading-relaxed pt-1">
        {words.map((word, index) => {
          const isCurrent = isPlaying && activeWordIndex === index;
          return (
            <span
              key={index}
              className={`inline-block mr-1.5 transition-all duration-150 ${
                isCurrent 
                  ? 'bg-[#FFF1A8] text-[#1B2440] px-1 py-0.5 rounded-md font-black scale-105 border border-[#1B2440]' 
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
