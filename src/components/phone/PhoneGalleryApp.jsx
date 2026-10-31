import { useState } from 'react';
import { ArrowLeft, Share2, Heart, Trash2 } from 'lucide-react';
import { FICTIONAL_GALLERY_PHOTOS } from '../../data/lessons';
import { FictionalPhotoSVG } from './FictionalSVGs';
import soundEffects from '../../utils/soundEffects';

export default function PhoneGalleryApp({ onBackToHome, onOpenShareSheet, isUrdu = false }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelect = (photo) => {
    soundEffects.playClick();
    setSelectedPhoto(photo);
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-white select-none">
      {/* Top Header */}
      <div className="p-3 border-b border-[#1B2440]/15 flex items-center justify-between bg-[#FFFBF5]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playNav();
              if (selectedPhoto) {
                setSelectedPhoto(null);
              } else {
                onBackToHome();
              }
            }}
            className="p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5 text-[#1B2440]" />
          </button>
          <h3 className="font-space font-black text-sm sm:text-base text-[#1B2440]">
            {selectedPhoto ? selectedPhoto.title : (isUrdu ? "خاندانی البم" : "Family Photos")}
          </h3>
        </div>

        <span className="text-xs font-bold text-[#1B2440]/60">
          {selectedPhoto ? selectedPhoto.category : `${FICTIONAL_GALLERY_PHOTOS.length} photos`}
        </span>
      </div>

      {/* Main Content: Grid or Detail View */}
      {!selectedPhoto ? (
        <div className="p-3 grid grid-cols-2 gap-3 overflow-y-auto flex-1">
          {FICTIONAL_GALLERY_PHOTOS.map((photo) => (
            <button
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              onClick={() => handleSelect(photo)}
              className="bg-[#FFFBF5] border-[2px] border-[#1B2440] rounded-2xl overflow-hidden flex flex-col text-left cursor-pointer active:scale-95 transition-all shadow-[2px_2px_0px_#1B2440] group"
            >
              <div className="w-full h-24 overflow-hidden border-b border-[#1B2440]/20">
                <FictionalPhotoSVG type={photo.svgType} />
              </div>
              <div className="p-2">
                <span className="block font-space font-extrabold text-xs text-[#1B2440] truncate">
                  {photo.title}
                </span>
                <span className="text-[10px] font-bold text-[#1B2440]/60 uppercase">
                  {photo.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* Full View with Share Action */
        <div className="flex-1 flex flex-col justify-between p-4 bg-[#FFFBF5]">
          <div className="w-full flex-1 rounded-2xl overflow-hidden border-[2px] border-[#1B2440] shadow-[3px_3px_0px_#1B2440] bg-white flex items-center justify-center p-2 my-auto max-h-[340px]">
            <FictionalPhotoSVG type={selectedPhoto.svgType} className="w-full h-full object-contain" />
          </div>

          {/* Action Bar */}
          <div className="pt-3 border-t border-[#1B2440]/15 flex items-center justify-around">
            <button
              id="btn-photo-share"
              onClick={() => {
                soundEffects.playClick();
                onOpenShareSheet(selectedPhoto);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#B8F2D0] hover:bg-[#a6e6bf] border-[2px] border-[#1B2440] text-xs sm:text-sm font-space font-black text-[#1B2440] cursor-pointer active:scale-95 shadow-[2px_2px_0px_#1B2440]"
            >
              <Share2 className="w-4 h-4 text-[#1B2440]" />
              <span>{isUrdu ? "شیئر کریں" : "Share Photo"}</span>
            </button>

            <button
              onClick={() => soundEffects.playClick()}
              className="p-2.5 rounded-2xl bg-white border border-[#1B2440] text-[#1B2440] cursor-pointer"
              title="Favorite"
            >
              <Heart className="w-4 h-4" />
            </button>

            <button
              onClick={() => soundEffects.playClick()}
              className="p-2.5 rounded-2xl bg-white border border-[#1B2440] text-[#1B2440] cursor-pointer"
              title="Delete"
            >
              <Trash2 className="w-4 h-4 text-[#BA1A1A]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
