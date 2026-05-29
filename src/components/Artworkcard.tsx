"use client";
// "use client" needed because: useState (liked state for the heart button)

import { useState } from "react";

interface ArtworkCardProps {
  title: string;
  artist: string | null;
  date: string | null;
  origin: string | null;
  imageUrl: string | null;
  onSelect: () => void;
}

const ArtworkCard = ({ title, artist, date, origin, imageUrl, onSelect }: ArtworkCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={onSelect}
      className="bg-gray-200/65 rounded-2xl p-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
    >

      {/* Media */}
      <div className="relative bg-gray-400/60 rounded-xl h-48 mb-4 overflow-hidden">
        
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">No image</div>
        )}

        {/* Favourite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`
            absolute top-3 right-3
            bg-white/20 backdrop-blur-md
            rounded-full p-1
            text-gray-700 hover:text-red-500
            transition-colors duration-200
            ${liked ? 'text-red-500 scale-140' : 'text-gray-300'}
          `}
        >
          ♥
        </button>

      </div>

      {/* Meta */}
      <div>
        <h3 className="text-sm font-semibold leading-snug line-clamp-2">{title}</h3>
        {artist && <p className="text-xs text-gray-700 mt-0.5">{artist}</p>}
        <div className="flex gap-2 mt-1 text-xs text-gray-400">
          {date && <span>{date}</span>}
          {origin && <span>· {origin}</span>}
        </div>
      </div>

    </div>
  );
};

export default ArtworkCard;
