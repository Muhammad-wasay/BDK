import { useState, useEffect, useRef, useId } from 'react';
import { Volume2, VolumeX, AlertCircle, Gauge } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

export default function UrduVoiceoverBar({ 
  text, 
  label = "Audio Guide", 
  language = "roman",
  scenarioId = null
}) {
  const isEn = language === 'en';
  const isUrdu = language === 'urdu';
  const isRoman = language === 'roman';

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [speechRate, setSpeechRate] = useState(0.85); // 0.75 (slow) vs 0.95 (normal)
  const [voiceSupportWarning, setVoiceSupportWarning] = useState(null);
  const [availableVoices, setAvailableVoices] = useState([]);

  const utteranceRef = useRef(null);
  const audioRef = useRef(null);
  const barId = useId();

  // Load voices dynamically with onvoiceschanged
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        setAvailableVoices(voices);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Stop speech or audio when text or component changes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [text]);

  const words = text ? text.split(/\s+/) : [];

  const findBestVoice = (voices, targetLang) => {
    if (!voices || voices.length === 0) return null;

    if (targetLang === 'urdu' || targetLang === 'hi') {
      // 1. Prioritize native Urdu voices
      const urduVoice = voices.find(v => v.lang.startsWith('ur'));
      if (urduVoice) return urduVoice;

      // 2. High-quality South Asian female voices that pronounce Hindi/Urdu correctly
      const hindiFemale = voices.find(v => 
        v.lang.startsWith('hi') && 
        (v.name.includes('Swara') || v.name.includes('Heera') || v.name.includes('Kalpana') || v.name.includes('Google हिन्दी') || v.name.toLowerCase().includes('female'))
      );
      if (hindiFemale) return hindiFemale;

      // 3. Any Hindi voice
      const anyHindi = voices.find(v => v.lang.startsWith('hi'));
      if (anyHindi) return anyHindi;

      return null;
    }

    // English
    const englishFemale = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.includes('Zira') || v.name.includes('Jenny') || v.name.toLowerCase().includes('female') || v.name.includes('Google'))
    );
    if (englishFemale) return englishFemale;

    const anyEnglish = voices.find(v => v.lang.startsWith('en'));
    return anyEnglish || voices[0];
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundEffects.playClick();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setIsPlaying(false);
      setActiveWordIndex(-1);
      return;
    }

    soundEffects.playClick();
    setVoiceSupportWarning(null);

    // 1. Optional Recorded Audio Layer: Check if pre-recorded MP3 exists
    if (scenarioId) {
      const audioPath = `/audio/${scenarioId}_${language}.mp3`;
      const testAudio = new Audio(audioPath);
      testAudio.oncanplaythrough = () => {
        audioRef.current = testAudio;
        testAudio.playbackRate = speechRate;
        testAudio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          fallbackToSpeechSynthesis();
        });
      };
      testAudio.onended = () => {
        setIsPlaying(false);
        setActiveWordIndex(-1);
      };
      testAudio.onerror = () => {
        fallbackToSpeechSynthesis();
      };
      return;
    }

    fallbackToSpeechSynthesis();
  };

  const fallbackToSpeechSynthesis = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setVoiceSupportWarning(
        isUrdu 
          ? "آپ کے براؤزر میں آڈیو گائیڈ کی سہولت موجود نہیں۔ نیچے لکھا ہوا متن پڑھیں۔" 
          : "Web speech is not supported in this browser. Please read the provided text below."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const voices = availableVoices.length > 0 ? availableVoices : window.speechSynthesis.getVoices();
    const targetLangCode = isEn ? 'en' : 'urdu';
    const selectedVoice = findBestVoice(voices, targetLangCode);

    // If Roman Urdu and no Urdu/Hindi voice exists, don't butcher it with an English accent
    if (isRoman && !selectedVoice) {
      setVoiceSupportWarning(
        "Aapke device par Urdu/Hindi aawaz install nahi hai. English aawaz Roman Urdu ghalt parhti hai, is liye neeche likha hua aasan alfaz mein parhein."
      );
      return;
    }

    if (isUrdu && !selectedVoice) {
      setVoiceSupportWarning(
        "ڈیوائس پر اردو یا ہندی صوتی پیکیج نہیں ملا۔ براہ کرم نیچے دیا گیا متن آرام سے پڑھیں۔"
      );
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = isEn ? 'en-US' : 'ur-PK';
    }

    utterance.rate = speechRate;
    utterance.pitch = 1.05;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
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
  };

  const toggleRate = () => {
    soundEffects.playClick();
    const nextRate = speechRate === 0.85 ? 0.72 : speechRate === 0.72 ? 1.0 : 0.85;
    setSpeechRate(nextRate);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setActiveWordIndex(-1);
    }
  };

  const getRateLabel = () => {
    if (speechRate <= 0.75) return isUrdu ? "آہستہ" : "Slow (0.7x)";
    if (speechRate >= 0.95) return isUrdu ? "عام" : "Normal (1.0x)";
    return isUrdu ? "مناسب" : "Elder Pace (0.85x)";
  };

  return (
    <div 
      className={`w-full bg-white border-[2.5px] border-[#1B2440] rounded-2xl p-4 sm:p-5 flex flex-col gap-3 transition-all ${
        isUrdu ? 'font-urdu-mode' : ''
      }`}
      dir={isUrdu ? 'rtl' : 'ltr'}
      aria-labelledby={`voice-label-${barId}`}
    >
      {/* Top Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#1B2440]/15">
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl border-[2px] border-[#1B2440] flex items-center justify-center flex-shrink-0 transition-all ${
            isPlaying ? 'bg-[#FF6B6B] text-white' : 'bg-[#B8F2D0] text-[#1B2440]'
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
          <div>
            <span 
              id={`voice-label-${barId}`}
              className="font-space font-extrabold text-base text-[#1B2440] leading-none block"
            >
              {label}
            </span>
            <span className="text-xs font-bold text-[#1B2440]/70 mt-1 block">
              {isPlaying 
                ? (isEn ? "Speaking at elder pace..." : "بول رہے ہیں...") 
                : (isEn ? "Tap listen for clear voice guide" : "سننے کے لیے بٹن دبائیں")}
            </span>
          </div>
        </div>

        {/* Speed toggle & Play/Stop Button */}
        <div className="flex items-center gap-2">
          {/* Speed Button */}
          <button
            onClick={toggleRate}
            type="button"
            className="min-h-[48px] px-3.5 py-1.5 rounded-xl border-[1.5px] border-[#1B2440] text-xs font-space font-black bg-[#FFFBF5] text-[#1B2440] hover:bg-[#FFF1A8] flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
            title="Toggle speed"
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{getRateLabel()}</span>
          </button>

          {/* Play/Stop Button */}
          <button
            onClick={handleTogglePlay}
            type="button"
            className={`min-h-[48px] px-5 py-2 rounded-xl border-[2px] border-[#1B2440] text-sm font-space font-black transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              isPlaying
                ? 'bg-[#FFE8E5] text-[#BA1A1A] hover:bg-[#ffd5d0]'
                : 'bg-[#B8F2D0] text-[#1B2440] hover:bg-[#a5e9c0]'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-4 h-4 text-[#BA1A1A]" />
                <span>{isUrdu ? "آواز بند کریں" : "Stop Voice"}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#1B2440]" />
                <span>{isUrdu ? "آواز میں سنیں" : isEn ? "Listen to Audio" : "Aawaz Mein Suniye"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Warning if voice is not available */}
      {voiceSupportWarning && (
        <div className="p-3 bg-[#FFF1A8] border-[1.5px] border-[#1B2440] rounded-xl flex items-start gap-2 text-xs sm:text-sm font-bold text-[#1B2440] animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
          <span>{voiceSupportWarning}</span>
        </div>
      )}

      {/* Spoken Text with Word-by-Word Highlight */}
      <div className="text-sm sm:text-base font-bold text-[#1B2440] leading-relaxed pt-1">
        {words.map((word, index) => {
          const isCurrent = isPlaying && activeWordIndex === index;
          return (
            <span
              key={index}
              className={`inline-block mr-1.5 transition-all duration-150 ${
                isCurrent 
                  ? 'bg-[#B8F2D0] text-[#1B2440] px-1.5 py-0.5 rounded-md font-black scale-105 border border-[#1B2440]' 
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
