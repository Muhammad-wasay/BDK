import { Image, Phone, MessageSquare, Settings } from 'lucide-react';
import { EasyPaisaLogo, WhatsAppLogo } from '../BrandLogos';
import soundEffects from '../../utils/soundEffects';

export default function PhoneHomeScreen({ onOpenApp, isUrdu = false }) {
  const handleAppTap = (appId) => {
    soundEffects.playClick();
    onOpenApp(appId);
  };

  return (
    <div className="w-full flex-1 p-4 flex flex-col justify-between select-none">
      {/* Top Clock & Weather Widget */}
      <div className="flex flex-col items-center justify-center pt-4 pb-2">
        <h2 className="font-space font-black text-4xl text-[#1B2440] tracking-tight">
          10:14
        </h2>
        <p className="text-xs font-bold text-[#1B2440]/70 mt-0.5">
          {isUrdu ? "ہفتہ • ۲۸ ڈگری سینٹی گریڈ" : "Saturday • 28°C Lahore"}
        </p>

        {/* Fictional Safe Search Widget */}
        <div className="w-full mt-4 bg-white border-[1.5px] border-[#1B2440] rounded-2xl px-3 py-2 flex items-center justify-between text-xs text-[#1B2440]/60 shadow-[2px_2px_0px_#1B2440]">
          <span>{isUrdu ? "محفوظ تلاش..." : "Search safely..."}</span>
          <span className="font-space font-black text-[#0F5A3E]">BDK</span>
        </div>
      </div>

      {/* Main Apps Grid (Large >= 64px accessible icons) */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-4 px-2 my-auto">
        
        {/* 1. Gallery App */}
        <button
          id="phone-app-gallery"
          onClick={() => handleAppTap('gallery')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FFF1A8] border-[2px] border-[#1B2440] flex items-center justify-center text-[#1B2440] shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <Image className="w-8 h-8 text-[#1B2440]" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            {isUrdu ? "گیلری" : "Gallery"}
          </span>
        </button>

        {/* 2. WhatsApp App */}
        <button
          id="phone-app-whatsapp"
          onClick={() => handleAppTap('whatsapp')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] flex items-center justify-center shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <WhatsAppLogo className="w-9 h-9" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            WhatsApp
          </span>
        </button>

        {/* 3. EasyPaisa Wallet App */}
        <button
          id="phone-app-easypaisa"
          onClick={() => handleAppTap('easypaisa')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-white border-[2px] border-[#1B2440] flex items-center justify-center p-2 shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <EasyPaisaLogo className="h-8 w-auto" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            EasyPaisa
          </span>
        </button>

        {/* 4. Phone Dialer */}
        <button
          onClick={() => handleAppTap('dialer')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#1B2440] flex items-center justify-center text-[#BA1A1A] shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <Phone className="w-7 h-7" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            {isUrdu ? "فون" : "Phone"}
          </span>
        </button>

        {/* 5. Messages */}
        <button
          onClick={() => handleAppTap('messages')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#D4C5F9] border-[2px] border-[#1B2440] flex items-center justify-center text-[#1B2440] shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <MessageSquare className="w-7 h-7" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            {isUrdu ? "میسجز" : "Messages"}
          </span>
        </button>

        {/* 6. Settings */}
        <button
          onClick={() => handleAppTap('settings')}
          className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-white border-[2px] border-[#1B2440] flex items-center justify-center text-[#1B2440] shadow-[2px_2px_0px_#1B2440] group-hover:scale-105 transition-transform">
            <Settings className="w-7 h-7" />
          </div>
          <span className="text-xs font-space font-black text-[#1B2440]">
            {isUrdu ? "سیٹنگز" : "Settings"}
          </span>
        </button>

      </div>

      {/* Dock Area at bottom */}
      <div className="w-full bg-white/70 backdrop-blur-xs border-[1.5px] border-[#1B2440] rounded-3xl p-2.5 flex items-center justify-around shadow-[2px_2px_0px_#1B2440]">
        <button onClick={() => handleAppTap('dialer')} className="p-2 cursor-pointer">
          <Phone className="w-6 h-6 text-[#0F5A3E]" />
        </button>
        <button onClick={() => handleAppTap('whatsapp')} className="p-2 cursor-pointer">
          <WhatsAppLogo className="w-6 h-6" />
        </button>
        <button onClick={() => handleAppTap('gallery')} className="p-2 cursor-pointer">
          <Image className="w-6 h-6 text-[#1B2440]" />
        </button>
      </div>
    </div>
  );
}
