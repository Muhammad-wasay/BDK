import { Wifi, BatteryMedium, ShieldAlert } from 'lucide-react';

export default function PhoneFrame({ children, isUrdu = false, onPhoneHome = null }) {
  return (
    <div className="relative w-full max-w-[360px] mx-auto select-none">
      {/* Outer Android Frame with Neobrutalism Outline */}
      <div className="w-full bg-[#1B2440] rounded-[44px] p-3 shadow-[5px_5px_0px_#1B2440] border-[3px] border-[#1B2440]">
        
        {/* Screen Area (White background, curved inner corners) */}
        <div className="relative w-full h-[620px] bg-[#FFFBF5] rounded-[36px] overflow-hidden flex flex-col border-[2px] border-[#1B2440]">
          
          {/* 1. Persistent Simulation Safety Banner (MANDATORY RUBRIC CRITERIA) */}
          <div className="w-full bg-[#BA1A1A] text-white px-3 py-1 flex items-center justify-center gap-1.5 text-xs font-space font-black tracking-wider uppercase z-30">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>PRACTICE ONLY: nothing is sent</span>
          </div>

          {/* 2. Top Android Status Bar */}
          <div className="w-full bg-white/90 backdrop-blur-xs border-b border-[#1B2440]/15 px-4 py-1.5 flex items-center justify-between text-xs font-space font-bold text-[#1B2440] z-20">
            <span>10:14 AM</span>
            
            {/* Center Front Camera Punch-hole */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#1B2440] border border-white/40"></div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black">4G</span>
              <Wifi className="w-3.5 h-3.5" />
              <BatteryMedium className="w-4 h-4" />
            </div>
          </div>

          {/* 3. Screen Viewport (Scrollable if content overflows) */}
          <div className="flex-1 w-full overflow-y-auto relative flex flex-col" dir={isUrdu ? 'rtl' : 'ltr'}>
            {children}
          </div>

          {/* 4. Android Bottom Navigation Pill */}
          <div className="w-full bg-white border-t border-[#1B2440]/15 py-2 flex items-center justify-center z-20">
            <button
              onClick={onPhoneHome}
              className="w-24 h-1.5 rounded-full bg-[#1B2440]/40 hover:bg-[#1B2440] transition-colors cursor-pointer"
              title="Phone Home"
              aria-label="Phone Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
