import { useEffect, useState } from 'react';
import { Lightbulb, ArrowUp, ArrowDown } from 'lucide-react';

export default function SpotlightOverlay({ targetId, instructionText, hintText, isUrdu = false }) {
  const [targetRect, setTargetRect] = useState(null);

  useEffect(() => {
    if (!targetId) return;

    const updatePosition = () => {
      const el = document.getElementById(targetId);
      if (el) {
        setTargetRect({
          top: el.offsetTop,
          left: el.offsetLeft,
          width: el.offsetWidth,
          height: el.offsetHeight
        });
      }
    };

    updatePosition();
    const timer = setTimeout(updatePosition, 100);
    window.addEventListener('resize', updatePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [targetId]);

  if (!targetRect) return null;

  const isLowerHalf = targetRect.top > 300;

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Target Focus Ring */}
      <div
        className="absolute border-[3px] border-[#BA1A1A] bg-[#FFF1A8]/20 rounded-2xl animate-pulse shadow-[0_0_0_4px_rgba(186,26,26,0.3)] transition-all duration-300"
        style={{
          top: targetRect.top - 4,
          left: targetRect.left - 4,
          width: targetRect.width + 8,
          height: targetRect.height + 8
        }}
      />

      {/* Floating Ustaad Tooltip */}
      <div
        className="absolute left-4 right-4 bg-[#1B2440] text-white border-[2px] border-white/40 rounded-2xl p-3 flex flex-col gap-1 shadow-lg transition-all duration-300 pointer-events-auto"
        style={{
          top: isLowerHalf ? Math.max(10, targetRect.top - 95) : targetRect.top + targetRect.height + 12
        }}
      >
        <div className="flex items-center gap-1.5 text-xs font-space font-black text-[#B8F2D0]">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>{isUrdu ? "استاد کی رہنمائی" : "Ustaad Spotlight Tip"}</span>
          {isLowerHalf ? <ArrowDown className="w-3.5 h-3.5 ml-auto" /> : <ArrowUp className="w-3.5 h-3.5 ml-auto" />}
        </div>
        <p className="text-xs sm:text-sm font-bold leading-tight">
          {instructionText}
        </p>
        {hintText && (
          <span className="text-[11px] font-semibold text-[#FFF1A8]/90">
            {isUrdu ? "اشارہ:" : "Hint:"} {hintText}
          </span>
        )}
      </div>
    </div>
  );
}
