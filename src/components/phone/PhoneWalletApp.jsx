import { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  Receipt, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Lock,
  AlertTriangle 
} from 'lucide-react';
import { EasyPaisaLogo } from '../BrandLogos';
import soundEffects from '../../utils/soundEffects';

export default function PhoneWalletApp({ 
  onBackToHome, 
  onStepComplete, 
  isUrdu = false 
}) {
  const [walletView, setWalletView] = useState('home'); // 'home' | 'transfer_input' | 'transfer_confirm' | 'success'
  const [nameVerified, setNameVerified] = useState(false);

  const handleSendMoneyClick = () => {
    soundEffects.playClick();
    setWalletView('transfer_confirm');
  };

  const handleVerifyName = () => {
    soundEffects.playSuccess();
    setNameVerified(true);
    if (onStepComplete) {
      onStepComplete('verify-recipient-name');
    }
  };

  const handleConfirmSend = () => {
    soundEffects.playSuccess();
    setWalletView('success');
    if (onStepComplete) {
      onStepComplete('btn-confirm-safe-send');
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-[#F7F9FA] select-none">
      {/* Top Wallet Header */}
      <div className="bg-[#00A651] text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playNav();
              if (walletView !== 'home') {
                setWalletView('home');
              } else {
                onBackToHome();
              }
            }}
            className="p-1 rounded-lg hover:bg-white/10 cursor-pointer"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="bg-white/95 px-2 py-0.5 rounded-lg">
            <EasyPaisaLogo className="h-6 w-auto" />
          </div>
        </div>
        <span className="text-xs font-bold text-white/80">
          {isUrdu ? "محفوظ پریکٹس والٹ" : "Practice Wallet"}
        </span>
      </div>

      {/* View 1: Wallet Home Screen */}
      {walletView === 'home' && (
        <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
          {/* Balance Card */}
          <div className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-4 shadow-[2px_2px_0px_#1B2440] flex flex-col gap-1">
            <span className="text-xs font-bold text-[#1B2440]/60">
              {isUrdu ? "موجودہ پریکٹس بیلنس:" : "Practice Balance:"}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-space font-extrabold text-[#00A651]">PKR</span>
              <span className="text-2xl font-space font-black text-[#1B2440]">14,850.00</span>
            </div>
            <span className="text-[10px] font-bold text-[#0F5A3E] bg-[#B8F2D0]/50 px-2 py-0.5 rounded-full w-fit mt-1">
              {isUrdu ? "فرضی رقم • کوئی مالی خطرہ نہیں" : "Simulated Funds • Zero Real Risk"}
            </span>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Send Money Button (id="btn-send-money") */}
            <button
              id="btn-send-money"
              onClick={handleSendMoneyClick}
              className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-[#B8F2D0]/30 active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center text-[#1B2440]">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-xs font-space font-black text-[#1B2440] text-center leading-tight">
                {isUrdu ? "رقم بھیجیں" : "Send Money"}
              </span>
            </button>

            {/* Bill Payment */}
            <button
              onClick={() => soundEffects.playClick()}
              className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-50 opacity-80"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF1A8] border border-[#1B2440] flex items-center justify-center text-[#1B2440]">
                <Receipt className="w-5 h-5" />
              </div>
              <span className="text-xs font-space font-black text-[#1B2440] text-center leading-tight">
                {isUrdu ? "بل ادائیگی" : "Bill Payment"}
              </span>
            </button>

            {/* Mobile Load */}
            <button
              onClick={() => soundEffects.playClick()}
              className="bg-white border-[2px] border-[#1B2440] rounded-2xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-50 opacity-80"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFD3B6] border border-[#1B2440] flex items-center justify-center text-[#1B2440]">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-space font-black text-[#1B2440] text-center leading-tight">
                {isUrdu ? "موبائل لوڈ" : "Mobile Load"}
              </span>
            </button>
          </div>

          {/* Safety Reminder Banner */}
          <div className="bg-[#FFF4E0] border-[1.5px] border-[#1B2440] rounded-2xl p-3 text-xs font-bold text-[#1B2440] flex items-start gap-2">
            <Lock className="w-4 h-4 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
            <span>
              {isUrdu
                ? "سنہری اصول: پیسے بھیجتے وقت ہمیشہ وصول کنندہ کا نام دو بار چیک کریں۔"
                : "Safety Rule: Always inspect the recipient's verified account title before sending."}
            </span>
          </div>
        </div>
      )}

      {/* View 2: Transfer Confirmation Modal */}
      {walletView === 'transfer_confirm' && (
        <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="text-center pb-2 border-b border-[#1B2440]/15">
              <span className="text-xs font-bold text-[#1B2440]/70 uppercase tracking-wider">
                {isUrdu ? "ادائیگی کی تصدیق" : "Transfer Confirmation"}
              </span>
              <h3 className="font-space font-black text-2xl text-[#00A651] mt-1">
                PKR 500.00
              </h3>
            </div>

            {/* Recipient Card to Inspect (id="verify-recipient-name") */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-space font-extrabold text-[#1B2440] flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#0F5A3E]" />
                {isUrdu ? "وصول کنندہ کا تصدیق شدہ نام چیک کریں:" : "Verify Recipient Name Carefully:"}
              </span>

              <button
                id="verify-recipient-name"
                onClick={handleVerifyName}
                className={`w-full p-3.5 rounded-2xl border-[2px] text-left cursor-pointer transition-all ${
                  nameVerified
                    ? 'bg-[#B8F2D0] border-[#0F5A3E] ring-2 ring-[#0F5A3E]'
                    : 'bg-white border-[#1B2440] hover:bg-[#FFFBF5] shadow-[2px_2px_0px_#1B2440]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#1B2440]/60 block font-bold">Account Title:</span>
                    <span className="font-space font-black text-base text-[#1B2440]">
                      Hassan Ali (حسن علی)
                    </span>
                    <span className="text-xs font-bold text-[#1B2440]/80 block mt-0.5">
                      0300-1234567 • EasyPaisa Wallet
                    </span>
                  </div>
                  {nameVerified && (
                    <CheckCircle2 className="w-6 h-6 text-[#0F5A3E]" />
                  )}
                </div>
              </button>
            </div>

            {nameVerified && (
              <div className="p-2.5 rounded-xl bg-[#B8F2D0]/50 border border-[#0F5A3E] text-xs font-bold text-[#0F5A3E] flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{isUrdu ? "نام تصدیق ہو گیا۔ اب رقم بھیجیں۔" : "Recipient verified! Ready to send safely."}</span>
              </div>
            )}
          </div>

          {/* Action Send Button (id="btn-confirm-safe-send") */}
          <div className="pt-3 border-t border-[#1B2440]/15 flex flex-col gap-2">
            <button
              id="btn-confirm-safe-send"
              onClick={handleConfirmSend}
              className="w-full py-3.5 rounded-2xl bg-[#00A651] hover:bg-[#008f45] text-white font-space font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isUrdu ? "500 روپے بھیجیں (محفوظ مشق)" : "Send PKR 500 (Safe Practice)"}</span>
            </button>
            <button
              onClick={() => setWalletView('home')}
              className="text-center text-xs font-bold text-[#1B2440]/60 underline cursor-pointer"
            >
              {isUrdu ? "منسوخ کریں" : "Cancel Transfer"}
            </button>
          </div>
        </div>
      )}

      {/* View 3: Success Receipt */}
      {walletView === 'success' && (
        <div className="p-4 flex-1 flex flex-col items-center justify-center text-center gap-3 bg-white">
          <div className="w-14 h-14 rounded-full bg-[#B8F2D0] border-[2px] border-[#0F5A3E] flex items-center justify-center text-[#0F5A3E]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-space font-black text-xl text-[#1B2440]">
            {isUrdu ? "ٹرانزیکشن کامیاب (مشق)" : "Practice Transfer Sent!"}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#1B2440]/75 max-w-xs">
            {isUrdu 
              ? "آپ نے کامیابی کے ساتھ نام کی تصدیق کر کے رقم بھیجنا سیکھ لیا۔ آپ کا کوئی اصلی پیسہ نہیں کٹا۔" 
              : "You successfully verified the recipient's identity before completing the transfer. Zero real funds deducted."}
          </p>

          <button
            onClick={() => setWalletView('home')}
            className="mt-4 px-6 py-2.5 rounded-2xl bg-[#B8F2D0] border-[2px] border-[#1B2440] font-space font-black text-xs text-[#1B2440] cursor-pointer"
          >
            {isUrdu ? "والٹ ہوم پر واپس" : "Return to Wallet Home"}
          </button>
        </div>
      )}
    </div>
  );
}
