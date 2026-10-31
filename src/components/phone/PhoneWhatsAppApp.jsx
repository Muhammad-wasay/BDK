import { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Video, 
  Mic, 
  Paperclip, 
  Send, 
  CheckCheck, 
  ShieldAlert, 
  AlertTriangle 
} from 'lucide-react';
import { FICTIONAL_CONTACTS } from '../../data/lessons';
import { FictionalPhotoSVG } from './FictionalSVGs';
import soundEffects from '../../utils/soundEffects';

export default function PhoneWhatsAppApp({
  activeChatId,
  onSelectChat,
  onBackToChats,
  onRecordVoiceNote,
  onBlockSender,
  onInspectLink,
  sentPhoto = null,
  voiceNoteSent = false,
  isUrdu = false
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const currentContact = FICTIONAL_CONTACTS.find((c) => c.id === activeChatId) || {
    id: 'scam_sender',
    name: '+92 300 0928371',
    avatar: '⚠️',
    relation: isUrdu ? 'مشکوک رابطہ' : 'Unknown Sender',
    unread: 1
  };

  const handleMicClick = () => {
    soundEffects.playClick();
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      soundEffects.playSuccess();
      if (onRecordVoiceNote) {
        onRecordVoiceNote();
      }
    }, 1200);
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-[#EFEAE2] select-none">
      {!activeChatId ? (
        /* WhatsApp Chat List View */
        <div className="w-full flex-1 flex flex-col bg-white">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] text-white p-3 flex items-center justify-between">
            <span className="font-space font-extrabold text-base">WhatsApp</span>
            <span className="text-xs font-bold text-white/80">{isUrdu ? "چیٹس" : "Chats"}</span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#1B2440]/10">
            {FICTIONAL_CONTACTS.map((contact) => (
              <button
                key={contact.id}
                id={`chat-item-${contact.id}`}
                onClick={() => {
                  soundEffects.playClick();
                  onSelectChat(contact.id);
                }}
                className="w-full p-3 flex items-center justify-between hover:bg-slate-50 text-left cursor-pointer active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#B8F2D0] border border-[#1B2440] flex items-center justify-center text-xl flex-shrink-0">
                    {contact.avatar}
                  </div>
                  <div>
                    <h4 className="font-space font-extrabold text-sm text-[#1B2440]">
                      {contact.name}
                    </h4>
                    <span className="text-xs font-bold text-[#1B2440]/60 block">
                      {contact.relation}
                    </span>
                  </div>
                </div>

                {contact.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#25D366] text-white text-xs font-black flex items-center justify-center">
                    {contact.unread}
                  </span>
                )}
              </button>
            ))}

            {/* Simulated Scam Sender in Chat List for Lesson 4 */}
            <button
              id="chat-item-scam-sender"
              onClick={() => {
                soundEffects.playClick();
                onSelectChat('scam_sender');
              }}
              className="w-full p-3 flex items-center justify-between bg-[#FFE8E5]/30 hover:bg-[#FFE8E5]/60 text-left cursor-pointer border-t-2 border-dashed border-[#BA1A1A]/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FFE8E5] border border-[#BA1A1A] flex items-center justify-center text-xl flex-shrink-0 text-[#BA1A1A]">
                  ⚠️
                </div>
                <div>
                  <h4 className="font-space font-extrabold text-sm text-[#BA1A1A]">
                    +92 300 0928371
                  </h4>
                  <span className="text-xs font-bold text-[#BA1A1A] block">
                    {isUrdu ? "مبارک ہو! انعام نکلا ہے..." : "Mubarak ho! 50,000 Inaam..."}
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#BA1A1A] text-white text-xs font-black">
                !
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* Active Conversation Screen */
        <div className="w-full flex-1 flex flex-col justify-between">
          {/* Chat Header */}
          <div className="bg-[#075E54] text-white p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundEffects.playNav();
                  onBackToChats();
                }}
                className="p-1 rounded-lg hover:bg-white/10 cursor-pointer"
                title="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-sm">
                {currentContact.avatar}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-space font-extrabold text-xs sm:text-sm">
                  {currentContact.name}
                </span>
                <span className="text-[10px] text-white/80">
                  {activeChatId === 'scam_sender' ? (isUrdu ? "غیر تصدیق شدہ" : "Unverified Number") : "online"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white/80" />
              <Video className="w-4 h-4 text-white/80" />
            </div>
          </div>

          {/* Scam Alert Top Action Bar (If inspecting scam chat in Lesson 4) */}
          {activeChatId === 'scam_sender' && (
            <div className="bg-[#FFE8E5] border-b-[2px] border-[#BA1A1A] p-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#BA1A1A]">
                <ShieldAlert className="w-4 h-4" />
                <span>{isUrdu ? "مشکوک نمبر" : "Unknown Contact"}</span>
              </div>
              <button
                id="btn-block-scam-sender"
                onClick={() => {
                  soundEffects.playSuccess();
                  if (onBlockSender) onBlockSender();
                }}
                className="px-3 py-1 rounded-xl bg-[#BA1A1A] hover:bg-red-800 text-white font-space font-black text-xs cursor-pointer active:scale-95 transition-all shadow-[1px_1px_0px_#1B2440]"
              >
                {isUrdu ? "بلاک کریں (Block)" : "Block & Report"}
              </button>
            </div>
          )}

          {/* Conversation Thread Messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3">
            {/* Encryption notice */}
            <div className="bg-[#FFF8E7] border border-[#E0D0A5] rounded-xl p-2 text-center text-[10px] text-[#54656F] font-bold mx-auto max-w-xs">
              🔒 Practice Chat Simulation • No real data sent
            </div>

            {/* If Scam Chat */}
            {activeChatId === 'scam_sender' ? (
              <div className="bg-white border-[1.5px] border-[#BA1A1A] rounded-2xl rounded-tl-none p-3 max-w-[85%] self-start flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#BA1A1A] bg-[#FFE8E5] px-1.5 py-0.5 rounded w-fit">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Scam Warning</span>
                </div>
                <p className="text-xs font-bold text-[#1B2440] leading-snug">
                  Mubarak! Ehsaas Scheme mein aapka 50,000 Inaam nikla hai. Abhi foran link par click karein:
                </p>

                {/* The Trap Link to Inspect */}
                <button
                  id="inspect-fake-link-domain"
                  onClick={() => {
                    soundEffects.playClick();
                    if (onInspectLink) onInspectLink();
                  }}
                  className="bg-[#FFE8E5] border-[1.5px] border-dashed border-[#BA1A1A] rounded-xl p-2 text-left text-xs font-black text-[#BA1A1A] hover:bg-[#ffd5d0] cursor-pointer"
                >
                  👉 http://ehsaas-inam-claim-2026.xyz
                  <span className="block text-[10px] font-semibold text-[#BA1A1A]/80 mt-0.5">
                    (Click to inspect domain warning)
                  </span>
                </button>
              </div>
            ) : (
              /* Normal Family Messages */
              <>
                <div className="bg-white border border-[#1B2440]/15 rounded-2xl rounded-tl-none p-3 max-w-[80%] self-start text-xs font-bold text-[#1B2440] leading-snug shadow-sm">
                  {activeChatId === 'ammi' 
                    ? "Assalam-o-Alaikum Abu ji! Ghar kab tak ayenge?" 
                    : activeChatId === 'beti' 
                      ? "Baba! Mujhe kal university ke project ke liye aapse mashwara karna hai." 
                      : "Assalam-o-Alaikum sab ko! Shaam ki chai par milte hain."}
                </div>

                {/* Sent Photo if shared in Lesson 1 */}
                {sentPhoto && activeChatId === 'ammi' && (
                  <div className="bg-[#DCF8C6] border border-[#1B2440]/20 rounded-2xl rounded-tr-none p-2 max-w-[80%] self-end flex flex-col gap-1 shadow-sm">
                    <div className="w-full h-32 rounded-xl overflow-hidden border border-[#1B2440]/20 bg-white">
                      <FictionalPhotoSVG type={sentPhoto.svgType} />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#54656F] font-bold">
                      <span>{sentPhoto.title}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                    </div>
                  </div>
                )}

                {/* Sent Voice Note if recorded in Lesson 2 */}
                {voiceNoteSent && activeChatId === 'beti' && (
                  <div className="bg-[#DCF8C6] border border-[#1B2440]/20 rounded-2xl rounded-tr-none p-2.5 max-w-[80%] self-end flex items-center gap-2.5 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#128C7E] text-white flex items-center justify-center">
                      ▶
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="h-1.5 bg-[#128C7E]/40 rounded-full w-full"></div>
                      <div className="flex items-center justify-between text-[10px] text-[#54656F] font-bold mt-1">
                        <span>0:08</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="p-2 bg-[#F0F2F5] border-t border-[#1B2440]/15 flex items-center gap-2">
            <div className="flex-1 bg-white border border-[#1B2440]/20 rounded-2xl px-3 py-2 flex items-center justify-between">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={isUrdu ? "میسج لکھیں..." : "Type a message..."}
                className="w-full text-xs font-bold text-[#1B2440] bg-transparent focus:outline-none"
              />
              <Paperclip className="w-4 h-4 text-[#54656F]" />
            </div>

            {/* Microphone Button (id="btn-mic-record") */}
            <button
              id="btn-mic-record"
              onClick={handleMicClick}
              className={`min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[1px_1px_0px_#1B2440] ${
                isRecording 
                  ? 'bg-[#FF6B6B] text-white animate-ping' 
                  : 'bg-[#128C7E] text-white hover:bg-[#075E54] active:scale-95'
              }`}
              title="Record Voice Note"
              aria-label="Record Voice Note"
            >
              {inputVal ? <Send className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
