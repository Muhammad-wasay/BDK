import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Sparkles } from 'lucide-react';

export default function UrduVoiceoverBar({ text, label = "Audio Guide", language = "roman" }) {
  const [isPlaying, setIsPlaying] = useState(false);

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
    }
  }, [text]);

  const handleTogglePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert("Aapke browser mein audio playback support nahi hai.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      
      const voices = window.speechSynthesis.getVoices();
      if (language === 'urdu' || language === 'roman') {
        const urduVoice = voices.find(v => v.lang.includes('ur') || v.lang.includes('hi') || v.lang.includes('PK') || v.lang.includes('IN'));
        if (urduVoice) utterance.voice = urduVoice;
        utterance.lang = 'ur-PK';
        utterance.rate = 0.88;
      } else {
        const enVoice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-US'));
        if (enVoice) utterance.voice = enVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.92;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const isUrdu = language === 'urdu';

  return (
    <div 
      className={`w-full bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-soft flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all hover:border-slate-300 ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all ${
          isPlaying 
            ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' 
            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}>
          {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-space font-bold text-sm sm:text-base text-[#151E33] leading-none">
              {label}
            </span>
            {isPlaying && (
              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                <span>Playing...</span>
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 line-clamp-1">
            "{text}"
          </p>
        </div>
      </div>

      <button
        onClick={handleTogglePlay}
        type="button"
        className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 shadow-xs active:scale-95 ${
          isPlaying
            ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
            : 'bg-[#151E33] text-white border-[#151E33] hover:bg-slate-800'
        }`}
      >
        {isPlaying ? (
          <>
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>Stop Audio</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Listen Audio</span>
          </>
        )}
      </button>
    </div>
  );
}
