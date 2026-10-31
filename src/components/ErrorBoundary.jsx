import { Component } from 'react';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary caught error]:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const language = this.props.language || 'roman';
      const isUrdu = language === 'urdu';
      const isEn = language === 'en';

      return (
        <div 
          className="min-h-screen bg-[#FFF4E0] text-[#1B2440] font-nunito flex items-center justify-center p-4 selection:bg-[#B8F2D0]"
          dir={isUrdu ? 'rtl' : 'ltr'}
        >
          <div className="w-full max-w-lg bg-white border-[3px] border-[#1B2440] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center gap-5 shadow-[4px_4px_0px_#1B2440]">
            <div className="w-16 h-16 rounded-2xl bg-[#FFE8E5] border-[2px] border-[#BA1A1A] text-[#BA1A1A] flex items-center justify-center text-3xl">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-space font-extrabold text-2xl sm:text-3xl text-[#1B2440]">
                {isUrdu 
                  ? "کچھ غلط ہو گیا" 
                  : isEn 
                    ? "Something went wrong" 
                    : "Kuch ghalat ho gaya"}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#1B2440]/80 leading-relaxed">
                {isUrdu
                  ? "پریشان نہ ہوں! آپ کا کوئی ذاتی ڈیٹا یا پیش رفت ضائع نہیں ہوئی۔ ہم صفحہ دوبارہ ترتیب دے رہے ہیں۔"
                  : isEn
                    ? "Don't worry! No sensitive data was lost. Everything stays securely on this device."
                    : "Fikar na karein! Aapka koi data zaya nahi hua. Sab kuch aapke mobile par mehfooz hai."}
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                type="button"
                className="w-full sm:w-auto px-6 min-h-[48px] rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] text-[#1B2440] font-space font-extrabold text-base border-[2px] border-[#1B2440] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <Home className="w-5 h-5" />
                <span>{isUrdu ? "ہوم پیج پر جائیں" : isEn ? "Go to Home" : "Home par jayein"}</span>
              </button>

              <button
                onClick={this.handleReload}
                type="button"
                className="w-full sm:w-auto px-6 min-h-[48px] rounded-2xl bg-white hover:bg-slate-50 text-[#1B2440] font-space font-extrabold text-base border-[2px] border-[#1B2440] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                <span>{isUrdu ? "صفحہ ری لوڈ کریں" : isEn ? "Reload Page" : "Reload karein"}</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
