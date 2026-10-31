import { X } from 'lucide-react';
import { FICTIONAL_CONTACTS } from '../../data/lessons';
import { WhatsAppLogo } from '../BrandLogos';
import soundEffects from '../../utils/soundEffects';

export default function PhoneShareSheet({ onSelectContact, onCancel, isUrdu = false }) {
  return (
    <div className="absolute inset-0 z-40 bg-[#1B2440]/50 backdrop-blur-xs flex flex-col justify-end animate-fadeIn">
      <div 
        className="w-full bg-white border-t-[3px] border-[#1B2440] rounded-t-[32px] p-4 flex flex-col gap-3 shadow-lg"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#1B2440]/15">
          <div className="flex items-center gap-1.5">
            <WhatsAppLogo className="w-5 h-5" />
            <h4 className="font-space font-black text-sm text-[#1B2440]">
              {isUrdu ? "واٹس ایپ پر شیئر کریں" : "Share via WhatsApp"}
            </h4>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onCancel();
            }}
            className="p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-[#1B2440]" />
          </button>
        </div>

        {/* Contacts Horizontal/Vertical List */}
        <div className="flex flex-col gap-1.5 py-1">
          <span className="text-[11px] font-space font-extrabold uppercase text-[#1B2440]/60">
            {isUrdu ? "رابطہ منتخب کریں:" : "Select Contact:"}
          </span>
          <div className="grid grid-cols-2 gap-2">
            {FICTIONAL_CONTACTS.map((contact) => (
              <button
                key={contact.id}
                id={`share-contact-${contact.id}`}
                onClick={() => {
                  soundEffects.playSuccess();
                  onSelectContact(contact);
                }}
                className="p-2.5 rounded-2xl bg-[#FFFBF5] hover:bg-[#B8F2D0] border-[1.5px] border-[#1B2440] flex items-center gap-2.5 text-left cursor-pointer active:scale-95 transition-all shadow-[1px_1px_0px_#1B2440]"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-[#1B2440] flex items-center justify-center text-lg flex-shrink-0">
                  {contact.avatar}
                </div>
                <div className="overflow-hidden">
                  <span className="block font-space font-extrabold text-xs text-[#1B2440] truncate">
                    {contact.name}
                  </span>
                  <span className="text-[10px] text-[#1B2440]/60 font-bold block truncate">
                    {contact.relation}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cancel Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onCancel();
          }}
          className="w-full py-2.5 rounded-xl border border-[#1B2440] text-xs font-space font-extrabold text-[#1B2440] hover:bg-slate-50 cursor-pointer"
        >
          {isUrdu ? "منسوخ کریں" : "Cancel"}
        </button>
      </div>
    </div>
  );
}
