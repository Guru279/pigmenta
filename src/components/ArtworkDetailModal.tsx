"use client";
// "use client" needed because: useEffect (scroll lock, escape key listener)

import { useEffect } from "react";
import type { Artwork } from "@/services/artworkService";

interface ArtworkDetailModalProps {
  artwork: Artwork;
  onClose: () => void;
}

const ArtworkDetailModal = ({ artwork, onClose }: ArtworkDetailModalProps) => {

  // Lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="
          relative bg-[#f6f4f1] rounded-3xl shadow-2xl
          w-full max-w-2xl max-h-[90vh] overflow-y-auto
          animate-fade-in
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-10
            bg-white/80 backdrop-blur-md rounded-full
            w-9 h-9 flex items-center justify-center
            text-gray-600 hover:text-black hover:bg-white
            transition shadow
          "
          aria-label="Close detail"
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="w-full h-full sm:h-96 rounded-t-3xl bg-gray-300">
          {artwork.imageUrl ? (
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image available
            </div>
          )}
        </div>

        {/* META */}
        <div className="p-6 space-y-3">
          <h2 className="text-xl font-semibold leading-snug">{artwork.title}</h2>

          {artwork.artist_title && (
            <p className="text-base text-gray-700">{artwork.artist_title}</p>
          )}

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            {artwork.date_display && (
              <span className="bg-gray-200 rounded-full px-3 py-1">
                {artwork.date_display}
              </span>
            )}
            {artwork.place_of_origin && (
              <span className="bg-gray-200 rounded-full px-3 py-1">
                {artwork.place_of_origin}
              </span>
            )}
            {artwork.medium_display && (
              <span className="bg-gray-200 rounded-full px-3 py-1">
                {artwork.medium_display}
              </span>
            )}
          </div>

          {artwork.dimensions && (
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">Dimensions: </span>
              {artwork.dimensions}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailModal;
