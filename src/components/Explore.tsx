"use client";
// "use client" needed because: useState, useEffect, useRef (IntersectionObserver for infinite scroll)

import { useEffect, useRef, useState } from "react";
import ArtworkCard from "./Artworkcard";
import ArtworkDetailModal from "./ArtworkDetailModal";
import { useArtworks } from "@/hooks/useArtworks";
import type { Artwork } from "@/services/artworkService";

const Explore = () => {
  const { artworks, loading, error, hasMore, loadMore } = useArtworks();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll via IntersectionObserver
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loading, loadMore]);

  return (
    <section className=" max-w-9xl mx-auto">

      {/* HEADER */}
      <div className="sticky top-25 mb-3 md:mb-8 justify-center flex z-10">
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-sm mb-4">
          Failed to load: {error}
        </p>
      )}

      {/* ART GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {artworks.map((art) => (
          <ArtworkCard
            key={art.id}
            title={art.title}
            artist={art.artist_title}
            date={art.date_display}
            origin={art.place_of_origin}
            imageUrl={art.imageUrl}
            onSelect={() => setSelectedArtwork(art)}
          />
        ))}

        {/* LOADING SKELETONS */}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="h-72 rounded-2xl bg-gray-200 animate-pulse"
            />
          ))}
      </div>

      {/* INFINITE SCROLL SENTINEL */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="h-12 mt-8 flex items-center justify-center"
        >
          {loading && (
            <span className="text-sm text-gray-500">Loading more...</span>
          )}
        </div>
      )}

      {/* END MESSAGE */}
      {!hasMore && artworks.length > 0 && (
        <p className="text-center text-sm text-gray-500 mt-8">
          You&apos;ve reached the end.
        </p>
      )}

      {/* MODAL */}
      {selectedArtwork && (
        <ArtworkDetailModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </section>
  );
};

export default Explore;
