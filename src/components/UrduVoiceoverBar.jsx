import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, User, Radio } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function UrduVoiceoverBar({ 
  text, 
  label = "Audio Guide", 
  language = "roman" 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');
  const [availableVoices, setAvailableVoices] = useState([]);
  const utteranceRef = useRef(null);

  // Load and filter natural female voices
  useEffect(() => {
    const updateVoices = () => {
      if (!('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);

      // Find the best soothing female voice
      const bestFemaleVoice = findBestFemaleVoice(voices, language);
      if (bestFemaleVoice) {
        setSelectedVoiceName(bestFemaleVoice.name);
      }
    };

    updateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  // Stop speech when text changes or unmounts
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [text]);

  const findBestFemaleVoice = (voices, lang) => {
    if (!voices || voices.length === 0) return null;

    // 1. First priority: High quality Natural Hindi / Urdu Female voices
    const naturalHindiUrduFemale = voices.find(v => 
      (v.lang.includes('hi') || v.lang.includes('ur') || v.lang.includes('IN') || v.lang.includes('PK')) &&
      (v.name.includes('Swara') || v.name.includes('Heera') || v.name.includes('Kalpana') || v.name.includes('Google हिन्दी') || v.name.toLowerCase().includes('female'))
    );
    if (naturalHindiUrduFemale) return naturalHindiUrduFemale;

    // 2. Second priority: Any Hindi / Urdu voice
    const anyHindiUrdu = voices.find(v => v.lang.includes('hi') || v.lang.includes('ur'));
    if (anyHindiUrdu) return anyHindiUrdu;

    // 3. Third priority: Clear Natural English Female voices (friendly accent for Roman Urdu)
    const naturalEnglishFemale = voices.find(v => 
      v.name.includes('Zira') || 
      v.name.includes('Jenny') || 
      v.name.includes('Google UK English Female') ||
      v.name.includes('Google US English Female') ||
      v.name.toLowerCase().includes('female')
    );
    if (naturalEnglishFemale) return naturalEnglishFemale;

    // 4. Fallback to first voice
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
    } else {
      soundEffects.playClick();
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      const voices = window.speechSynthesis.getVoices();
      const bestVoice = findBestFemaleVoice(voices, language);

      if (bestVoice) {
        utterance.voice = bestVoice;
        setSelectedVoiceName(bestVoice.name);
      }

      // Voice tone tuning: Female pitch (1.1) and clear, soothing elder-friendly speed (0.86)
      utterance.pitch = 1.1;
      utterance.rate = 0.86;

      if (language === 'urdu') {
        utterance.lang = 'ur-PK';
      } else if (language === 'roman') {
        utterance.lang = 'hi-IN'; // Hindi voice reads Roman Urdu/Urdu phonetics with 95% natural clarity
      } else {
        utterance.lang = 'en-US';
      }

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-[#FFFDF9] border-[2px] border-[#1B2440] rounded-2xl p-3 sm:p-4 shadow-[2px_2px_0px_#1B2440] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-3">
        {/* Animated Soundwave Avatar */}
        <div className={`w-11 h-11 rounded-xl border-[2px] border-[#1B2440] flex items-center justify-center flex-shrink-0 transition-all ${
          isPlaying 
            ? 'bg-[#FF6B6B] text-white shadow-[1px_1px_0px_#1B2440]' 
            : 'bg-[#B8F2D0] text-[#1B2440]'
        }`}>
          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-3 bg-white rounded-full animate-pulse"></span>
              <span className="w-1 h-5 bg-white rounded-full animate-bounce"></span>
              <span className="w-1 h-4 bg-white rounded-full animate-pulse"></span>
            </div>
          ) : (
            <Volume2 className="w-5 h-5 text-[#1B2440]" />
          )}
        </div>

        {/* Text & Female Assistant Badge */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-space font-extrabold text-sm sm:text-base text-[#1B2440] leading-none">
              {label}
            </span>
            <span className="inline-flex items-center gap-1 bg-[#D4C5F9] text-[#1B2440] border border-[#1B2440] text-[10px] font-space font-black px-2 py-0.5 rounded-full">
              <Radio className="w-2.5 h-2.5 text-[#1B2440]" />
              <span>Female Voice Guide</span>
            </span>
          </div>
          <p className="text-xs font-bold text-[#1B2440]/75 mt-1 line-clamp-1 italic">
            "{text}"
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleTogglePlay}
        type="button"
        className={`px-4 py-2 rounded-xl border-[2px] border-[#1B2440] text-xs font-space font-black transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 shadow-[1.5px_1.5px_0px_#1B2440] active:translate-x-0.5 active:translate-y-0.5 ${
          isPlaying
            ? 'bg-[#FFE8E5] text-[#BA1A1A] hover:bg-[#ffd5d0]'
            : 'bg-[#FFF1A8] text-[#1B2440] hover:bg-[#ffe769]'
        }`}
      >
        {isPlaying ? (
          <>
            <VolumeX className="w-4 h-4 text-[#BA1A1A]" />
            <span>{isUrdu ? "آواز بند کریں" : "Aawaz Band Karein"}</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-[#1B2440]" />
            <span>{isUrdu ? "سنیں (Female Voice)" : "Suniyen (Female Voice)"}</span>
          </>
        )}
      </button>
    </div>
  );
}
