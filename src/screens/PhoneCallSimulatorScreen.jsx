import { useState, useEffect } from 'react';
import {
  Phone,
  PhoneOff,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  RotateCcw,
  Volume2
} from 'lucide-react';
import soundEffects from '../utils/soundEffects';
import { HBLLogo } from '../components/BrandLogos';
import UrduVoiceoverBar from '../components/UrduVoiceoverBar';

export default function PhoneCallSimulatorScreen({ onGoHome, babaJiMode, language = 'roman' }) {
  const [callState, setCallState] = useState('incoming'); // 'incoming' | 'branch_1' | 'branch_2' | 'outcome'
  const [callDuration, setCallDuration] = useState(0);
  const [selectedBranch1, setSelectedBranch1] = useState(null);
  const [outcomeData, setOutcomeData] = useState(null);

  const isUrdu = language === 'urdu';

  // Timer while on call
  useEffect(() => {
    let timer;
    if (callState === 'branch_1' || callState === 'branch_2') {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callState]);

  const formatDuration = (sec) => {
    const mins = Math.floor(sec / 60).toString().padStart(2, '0');
    const secs = (sec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Dialogue Tree definition in 3 languages
  const dialogueContent = {
    roman: {
      callerName: "HBL Verification Desk",
      callerNumber: "+92 300 1234567",
      incomingTag: "Ghair-Tasdeeq Shuda Mobile Call",
      initialVoice: "Assalam-o-Alaikum! Main HBL Verification Desk se bol raha hoon. Aapke account se Rs. 85,000 ka mashkook transfer attempt ho raha hai!",
      branch1Prompt: "Aap kya jawab denge? (What would you say?)",
      branch1Options: [
        {
          id: 'panic',
          text: "“Arey foran rokein! Mujhe kya karna hoga?” (Ghabrahat mein jawab)",
          responseVoice: "Ghabrayein nahi, aapke number par abhi 6-digit verification code (OTP) aaya hai. Foran batayein taake transaction cancel ho sake!"
        },
        {
          id: 'cautious',
          text: "“Aap kis branch se bol rahe hain? Main bank ki official helpline par call back karta hoon.”",
          responseVoice: "Helpline milte milte 20 minute lag jayenge! Itni dair mein aapka account permanent freeze ho jayega!"
        }
      ],
      branch2Prompt: "Ab aapka radd-e-amal kya hoga?",
      branch2Options: {
        panic: [
          {
            id: 'give_otp',
            text: "“SMS dekh kar OTP code bata deta hoon: 849201”",
            isCorrect: false,
            title: "🚨 Paise Nikal Gaye! (Practice Simulation)",
            desc: "Asli zindagi mein aapka poora account khali ho jata! Asli bank ka branch manager ya governor bhi phone par OTP nahi maang sakta. OTP ka matlab One-Time-Password hai jo sirf aapke liye hota hai.",
            lesson: "KABHI BHI phone par kisi ko apna 4 ya 6 digit ka OTP na batayein."
          },
          {
            id: 'refuse_otp',
            text: "“Nahi, main phone par koi code nahi bataunga. Main khud branch aa kar pata karta hoon.”",
            isCorrect: true,
            title: "🏆 Shabash! Aapne Dhoka Nakaam Bana Diya!",
            desc: "Scammer ne ghabra kar phone kaat diya! Jab aapne OTP dene se inkaar kiya to chor ka mansooba dharay ka dhara reh gaya.",
            lesson: "Phone par code maangne wala 100% chor hota hai."
          }
        ],
        cautious: [
          {
            id: 'hang_up_helpline',
            text: "“Dhamki na dein, main ATM card ke peeche likhe number 111-111-425 par hi rabta karunga.” (Phone Kaat Dein)",
            isCorrect: true,
            title: "🌟 Behtareen Faisla! Safe Citizen!",
            desc: "Asli bank kabhi helpline par call karne se nahi darta! Sirf fraud log jaldbazi machate hain taake aap soch na sakein.",
            lesson: "Hamesha ATM card ke peeche likhi helpline par khud call karein."
          },
          {
            id: 'surrender_threat',
            text: "“Acha theek hai, batayein kya verify karna hai?”",
            isCorrect: false,
            title: "⚠️ Zara Thehrein! Dhamki Ke Dabaao Mein Na Aayein",
            desc: "Scammer ne aapse ATM PIN mangna shuru kar diya! Freeze hone ka darr farzi tha taake aap foran raazi ho jayein.",
            lesson: "Account freeze ki dhamki dekh kar pehle saans lain aur phone kaat kar official bank helpline milayein."
          }
        ]
      },
      rejectOutcome: {
        isCorrect: true,
        title: "🛡️ Zabardast! Call Reject Karna Behtareen Faisla!",
        desc: "Aam 11-digit mobile number (+92 300...) se aane wali bank call ko reject karna 100% sahi qadam hai. Asli bank hamesha official UAN se call karta hai.",
        lesson: "Ghair-tasdeeq shuda mobile call hamesha mashkook hoti hai."
      }
    },
    urdu: {
      callerName: "ایچ بی ایل ویری فکیشن ڈیسک",
      callerNumber: "+92 300 1234567",
      incomingTag: "غیر تصدیق شدہ موبائل کال",
      initialVoice: "السلام علیکم! میں ایچ بی ایل ویری فکیشن سینٹر سے بات کر رہا ہوں۔ آپ کے اکاؤنٹ سے ۸۵،۰۰۰ روپے کی مشکوک ٹرانزیکشن ہو رہی ہے!",
      branch1Prompt: "آپ کیا جواب دیں گے؟",
      branch1Options: [
        {
          id: 'panic',
          text: "“ارے فورا روکیں! مجھے کیا کرنا ہوگا؟” (گھبراہٹ میں ردعمل)",
          responseVoice: "گھبرائیں نہیں، آپ کے فون پر ابھی ۶ ہندسوں کا تصدیقی کوڈ (او ٹی پی) آیا ہے۔ فوری بتائیں تاکہ رقم منسوخ کی جا سکے!"
        },
        {
          id: 'cautious',
          text: "“آپ کس برانچ سے بول رہے ہیں؟ میں بینک کی آفیشل ہیلپ لائن پر خود کال کرتا ہوں۔”",
          responseVoice: "ہیلپ لائن ملتے ملتے دیر ہو جائے گی! اتنی دیر میں آپ کا اکاؤنٹ مستقل منجمد ہو جائے گا!"
        }
      ],
      branch2Prompt: "اب آپ کا اگلا فیصلہ کیا ہوگا؟",
      branch2Options: {
        panic: [
          {
            id: 'give_otp',
            text: "“ایس ایم ایس دیکھ کر او ٹی پی کوڈ بتا دیتا ہوں: 849201”",
            isCorrect: false,
            title: "🚨 پیسے نکل گئے! (فرضی مشق)",
            desc: "اصلی زندگی میں آپ کا پورا اکاؤنٹ خالی ہو جاتا! بینک کا مینیجر بھی فون پر او ٹی پی نہیں مانگ سکتا۔ او ٹی پی صرف آپ کے استعمال کے لیے ہوتا ہے۔",
            lesson: "کبھی بھی فون پر کسی کو اپنا خفیہ او ٹی پی کوڈ نہ بتائیں۔"
          },
          {
            id: 'refuse_otp',
            text: "“نہیں، میں فون پر کوئی کوڈ نہیں بتاؤں گا۔ میں خود برانچ جا کر پتہ کروں گا۔”",
            isCorrect: true,
            title: "🏆 شاباش! آپ نے فراڈ ناکام بنا دیا!",
            desc: "فراڈیے نے گھبرا کر فون کاٹ دیا! جب آپ نے او ٹی پی دینے سے انکار کیا تو آپ کے پیسے محفوظ رہے۔",
            lesson: "فون پر خفیہ کوڈ مانگنے والا ۱۰۰ فیصد دھوکہ باز ہوتا ہے۔"
          }
        ],
        cautious: [
          {
            id: 'hang_up_helpline',
            text: "“دھمکی نہ دیں، میں کارڈ کی پشت پر لکھے نمبر 111-111-425 پر ہی رابطہ کروں گا۔” (فون کاٹ دیں)",
            isCorrect: true,
            title: "🌟 بہترین فیصلہ! محفوظ شہری!",
            desc: "اصلی بینک کبھی آفیشل ہیلپ لائن پر کال کرنے سے نہیں روکتا! صرف دھوکہ باز جلدی مچاتے ہیں۔",
            lesson: "ہمیشہ اے ٹی ایم کارڈ کے پیچھے لکھی ہیلپ لائن پر خود کال کریں۔"
          },
          {
            id: 'surrender_threat',
            text: "“اچھا ٹھیک ہے، بتائیں کیا تصدیق کرنی ہے؟”",
            isCorrect: false,
            title: "⚠️ ذرا ٹھہریں! دھمکی کے دباؤ میں نہ آئیں",
            desc: "فراڈیے نے آپ سے اے ٹی ایم پن مانگنا شروع کر دیا! اکاؤنٹ بند ہونے کا خوف صرف دھوکہ تھا۔",
            lesson: "اکاؤنٹ بند ہونے کی دھمکی پر پہلے پرسکون رہیں اور آفیشل ہیلپ لائن ملائیں۔"
          }
        ]
      },
      rejectOutcome: {
        isCorrect: true,
        title: "🛡️ زبردست! کال کاٹنا بہترین فیصلہ!",
        desc: "عام موبائل نمبر (+92 300...) سے آنے والی بینک کال کو کاٹنا ۱۰۰ فیصد درست قدم ہے۔ اصلی بینک عام موبائل نمبر سے کال نہیں کرتا۔",
        lesson: "غیر تصدیق شدہ موبائل کال ہمیشہ مشکوک ہوتی ہے۔"
      }
    },
    en: {
      callerName: "HBL Verification Desk",
      callerNumber: "+92 300 1234567",
      incomingTag: "Unverified Mobile Phone Call",
      initialVoice: "Hello! This is HBL Bank Verification Center. A suspicious transfer of Rs. 85,000 is currently being attempted from your account!",
      branch1Prompt: "What would you say in response?",
      branch1Options: [
        {
          id: 'panic',
          text: "“Oh no, stop it immediately! What do I need to do?” (Panicked response)",
          responseVoice: "Don't panic! A 6-digit verification code (OTP) was just sent to your phone. Tell me the code immediately to cancel the transfer!"
        },
        {
          id: 'cautious',
          text: "“Which branch are you calling from? I will call back on the official bank helpline.”",
          responseVoice: "The helpline will take 20 minutes to connect! By then your account will be permanently frozen!"
        }
      ],
      branch2Prompt: "What do you do now?",
      branch2Options: {
        panic: [
          {
            id: 'give_otp',
            text: "“Let me check the SMS and read the code: 849201”",
            isCorrect: false,
            title: "🚨 Money Stolen! (Practice Simulation)",
            desc: "In real life your entire bank balance would be drained! Even a branch manager or governor cannot ask for your OTP. OTP means One-Time Password strictly for yourself.",
            lesson: "NEVER disclose any 4 or 6 digit verification code over a telephone call."
          },
          {
            id: 'refuse_otp',
            text: "“No, I will not disclose any code over the phone. I will visit the branch in person.”",
            isCorrect: true,
            title: "🏆 Well Done! You Foiled the Scammer!",
            desc: "The scammer hung up in frustration! When you refused to share the OTP, their attempt failed completely.",
            lesson: "Anyone demanding verification codes over the phone is an imposter."
          }
        ],
        cautious: [
          {
            id: 'hang_up_helpline',
            text: "“Do not threaten me. I will only call the official 111-111-425 printed on my debit card.” (Hang Up)",
            isCorrect: true,
            title: "🌟 Perfect Decision! Safe Citizen!",
            desc: "Legitimate banks never discourage calling official customer support! Only fraudsters rush victims into reckless panic.",
            lesson: "Always call the official helpline number printed directly on the back of your card."
          },
          {
            id: 'surrender_threat',
            text: "“Alright fine, what information do you need?”",
            isCorrect: false,
            title: "⚠️ Hold On! Don't Yield to Intimidation",
            desc: "The scammer immediately began phishing for your ATM PIN! The threat of account freezing was completely fabricated.",
            lesson: "Stay calm when threatened with account blocks and verify independently."
          }
        ]
      },
      rejectOutcome: {
        isCorrect: true,
        title: "🛡️ Outstanding! Rejecting Was the Safest Move!",
        desc: "Declining a supposed bank call arriving from a personal 11-digit mobile number (+92 300...) is 100% correct.",
        lesson: "Unverified mobile callers claiming bank authority are untrustworthy."
      }
    }
  };

  const currentDialogue = dialogueContent[language] || dialogueContent.roman;

  const handleAcceptCall = () => {
    soundEffects.playClick();
    setCallState('branch_1');
  };

  const handleRejectCall = () => {
    soundEffects.playClick();
    soundEffects.playSuccess();
    setOutcomeData(currentDialogue.rejectOutcome);
    setCallState('outcome');
  };

  const handleSelectBranch1 = (option) => {
    soundEffects.playClick();
    setSelectedBranch1(option.id);
    setCallState('branch_2');
  };

  const handleSelectBranch2 = (option) => {
    soundEffects.playClick();
    if (option.isCorrect) {
      soundEffects.playSuccess();
    } else {
      soundEffects.playError();
    }
    setOutcomeData(option);
    setCallState('outcome');
  };

  const handleRestart = () => {
    soundEffects.playClick();
    setCallState('incoming');
    setCallDuration(0);
    setSelectedBranch1(null);
    setOutcomeData(null);
  };

  return (
    <div
      className={`max-w-2xl mx-auto px-4 py-6 md:py-8 w-full flex-1 flex flex-col ${
        babaJiMode ? 'elder-active' : ''
      } ${isUrdu ? 'font-urdu-mode' : ''}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            soundEffects.playNav();
            onGoHome();
          }}
          className="w-12 h-12 rounded-2xl bg-white border-[2px] border-[#1B2440] hover:bg-[#FFF4E0] flex items-center justify-center text-[#1B2440] cursor-pointer transition-all active:scale-95"
          title="Back to Home"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-center">
          <span className="text-xs sm:text-sm font-space font-extrabold uppercase tracking-wider bg-[#FFD3B6] text-[#1B2440] border-[1.5px] border-[#1B2440] rounded-full px-3.5 py-1">
            {isUrdu ? "انٹرایکٹو فون کال سمولیٹر" : "Branching Phone Call Simulator"}
          </span>
        </div>
        <div className="w-12"></div>
      </div>

      {/* Main Interactive Phone Frame */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[380px] bg-[#1B2440] rounded-[44px] p-5 sm:p-6 shadow-md border-[3px] border-[#1B2440]">
          {/* Internal Screen */}
          <div className="bg-gradient-to-b from-[#2D3A5E] to-[#1B2440] rounded-[34px] p-5 sm:p-6 flex flex-col items-center text-white min-h-[500px] justify-between">
            {/* Top Bar inside Phone */}
            <div className="w-full flex justify-between items-center text-xs font-bold text-white/70 pb-2 border-b border-white/10">
              <span>SIM 1 • Jazz</span>
              <span>{callState === 'incoming' ? 'Incoming...' : formatDuration(callDuration)}</span>
            </div>

            {/* Caller Profile */}
            <div className="text-center my-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#D4C5F9] border-[3px] border-white/30 flex items-center justify-center text-3xl mb-3 shadow-inner">
                👨‍💼
              </div>
              <div className="mb-2">
                <HBLLogo className="h-6 w-auto bg-white px-2.5 py-1 rounded-lg inline-block" />
              </div>
              <h2 className="font-space font-extrabold text-xl text-white">
                {currentDialogue.callerName}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-white/80 mt-0.5">
                {currentDialogue.callerNumber}
              </p>
              <span className="mt-1.5 inline-block text-xs font-bold bg-[#FF6B6B]/30 border border-[#FF6B6B]/60 text-red-200 px-3 py-0.5 rounded-full">
                {currentDialogue.incomingTag}
              </span>
            </div>

            {/* STATE 1: INCOMING CALL */}
            {callState === 'incoming' && (
              <div className="w-full text-center mt-6">
                <p className="text-xs font-bold text-white/70 mb-6 animate-pulse">
                  {isUrdu ? "فون کی گھنٹی بج رہی ہے..." : "Phone is ringing..."}
                </p>
                <div className="flex items-center justify-around gap-6">
                  {/* Reject Button */}
                  <div className="flex flex-col items-center gap-1.5">
                    <button
                      onClick={handleRejectCall}
                      className="w-16 h-16 rounded-full bg-[#FF6B6B] hover:bg-[#ff5252] flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-md border-2 border-white/40"
                    >
                      <PhoneOff className="w-7 h-7 text-white" />
                    </button>
                    <span className="text-xs font-bold text-white/90">
                      {isUrdu ? "کال کاٹیں" : "Reject Call"}
                    </span>
                  </div>

                  {/* Accept Button */}
                  <div className="flex flex-col items-center gap-1.5">
                    <button
                      onClick={handleAcceptCall}
                      className="w-16 h-16 rounded-full bg-[#B8F2D0] hover:bg-[#9fe7be] flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-md border-2 border-white/40"
                    >
                      <Phone className="w-7 h-7 text-[#1B2440]" />
                    </button>
                    <span className="text-xs font-bold text-white/90">
                      {isUrdu ? "کال اٹھائیں" : "Answer Call"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STATE 2: CONNECTED - BRANCH 1 CHOICE */}
            {callState === 'branch_1' && (
              <div className="w-full flex flex-col gap-3.5 animate-fadeIn">
                {/* Caller Voice Box */}
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-black text-[#B8F2D0]">
                    <Volume2 className="w-4 h-4" />
                    <span>{isUrdu ? "کالر کہہ رہا ہے:" : "Caller says:"}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                    {currentDialogue.initialVoice}
                  </p>
                </div>

                <UrduVoiceoverBar
                  text={currentDialogue.initialVoice}
                  label={isUrdu ? "کال سنیں" : "Listen to Caller"}
                  language={language}
                />

                {/* Prompt */}
                <span className="text-xs font-space font-black text-amber-200 block text-center mt-1">
                  {currentDialogue.branch1Prompt}
                </span>

                {/* Branch 1 Choices */}
                <div className="flex flex-col gap-2.5">
                  {currentDialogue.branch1Options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectBranch1(opt)}
                      className="w-full text-left p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[50px] active:scale-98 leading-snug"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STATE 3: CONNECTED - BRANCH 2 CHOICE */}
            {callState === 'branch_2' && selectedBranch1 && (
              <div className="w-full flex flex-col gap-3.5 animate-fadeIn">
                {/* Caller Response to Branch 1 */}
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-black text-amber-300">
                    <Volume2 className="w-4 h-4" />
                    <span>{isUrdu ? "کالر کا جواب:" : "Caller responds:"}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                    {selectedBranch1 === 'panic'
                      ? currentDialogue.branch1Options[0].responseVoice
                      : currentDialogue.branch1Options[1].responseVoice}
                  </p>
                </div>

                <UrduVoiceoverBar
                  text={selectedBranch1 === 'panic'
                    ? currentDialogue.branch1Options[0].responseVoice
                    : currentDialogue.branch1Options[1].responseVoice}
                  label={isUrdu ? "جواب سنیں" : "Listen to Caller"}
                  language={language}
                />

                {/* Prompt */}
                <span className="text-xs font-space font-black text-amber-200 block text-center mt-1">
                  {currentDialogue.branch2Prompt}
                </span>

                {/* Branch 2 Options */}
                <div className="flex flex-col gap-2.5">
                  {currentDialogue.branch2Options[selectedBranch1].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectBranch2(opt)}
                      className="w-full text-left p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[50px] active:scale-98 leading-snug"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STATE 4: OUTCOME (FEEDBACK & LEARNING) */}
            {callState === 'outcome' && outcomeData && (
              <div className="w-full animate-fadeIn flex flex-col gap-3.5">
                <div className={`rounded-2xl p-4.5 border-2 ${
                  outcomeData.isCorrect
                    ? 'bg-[#B8F2D0] text-[#1B2440] border-[#0F5A3E]'
                    : 'bg-[#FFE8E5] text-[#BA1A1A] border-[#BA1A1A]'
                }`}>
                  <div className="flex items-start gap-2.5 mb-2">
                    {outcomeData.isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-[#0F5A3E] shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-[#BA1A1A] shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-space font-black text-base sm:text-lg">
                        {outcomeData.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold mt-1 leading-relaxed opacity-95">
                        {outcomeData.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-black/15 text-xs sm:text-sm font-black">
                    📌 {outcomeData.lesson}
                  </div>
                </div>

                {/* Action Buttons */}
                <button
                  onClick={handleRestart}
                  className="w-full py-3.5 rounded-2xl bg-[#FFF1A8] hover:bg-[#ffe769] text-[#1B2440] font-space font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 min-h-[48px]"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isUrdu ? "دوبارہ کال کی مشق کریں" : "Practice Call Again"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Golden Rule Footer Note */}
      <div className="mt-6 bg-[#B8F2D0] border-[2px] border-[#1B2440] rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-xs">
        <ShieldCheck className="w-6 h-6 text-[#0F5A3E] flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-space font-black text-xs sm:text-sm text-[#1B2440] block uppercase">
            {isUrdu ? "بینک کا سنہری اصول" : "Golden Banking Rule"}
          </span>
          <p className="text-xs sm:text-sm text-[#1B2440] font-bold mt-1 leading-relaxed">
            {isUrdu
              ? "اصلی بینک کبھی فون پر او ٹی پی یا پاس ورڈ نہیں مانگتا۔ اگر کوئی مانگے تو سمجھ جائیں کہ وہ سو فیصد دھوکہ باز ہے۔"
              : "Real banks never ask for OTPs or passwords over the phone. Anyone asking for confidential codes is 100% a scammer."}
          </p>
        </div>
      </div>
    </div>
  );
}
