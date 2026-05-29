"use client";
// "use client" needed because: useState, useEffect (scroll listener), useRouter (navigation)

// CHANGE: was `import { useNavigate } from "react-router-dom"`
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import back7 from "@/assets/back7.png";
// ↑ In Next.js, importing a PNG returns { src, width, height } — NOT a plain string.
//   So below we use `back7.src` instead of `back7` directly in the img tag.

const Herosection = () => {
  const [blur, setBlur] = useState(0);
  // CHANGE: was `const navigate = useNavigate()`
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxBlur = 15;
      const newBlur = Math.min(scrollY / 90, maxBlur);
      setBlur(newBlur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="hero-section relative flex items-center bg-[#F6F4F1]">

        <div
          className="flex flex-col md:flex-row w-full transition-all duration-75"
          style={{ filter: `blur(${blur}px)` }}
        >

          <div className="w-full md:w-1/2 flex flex-col gap-6 bg-[#F6F4F1] justify-center items-center text-center px-2 py-16 md:py-0">
            <h1 className="herotitle text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">Your Digital Studio.</h1>
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600">A home for artists who deserve to be seen</h3>

            <div className="flex gap-8">
              {/* CHANGE: was `navigate("/signin?role=collector")` → `router.push(...)` */}
              <button
                onClick={() => router.push("/signin?role=collector")}
                className="font-display px-6 py-2 rounded-full bg-black text-white text-lg tracking-tight hover:bg-white border hover:text-black transition-colors"
              >
                Collector
              </button>
              <button
                onClick={() => router.push("/signin?role=artist")}
                className="font-display px-6 py-2 rounded-full bg-black text-white text-lg tracking-tight hover:bg-white border hover:text-black transition-colors"
              >
                Artist
              </button>
            </div>
          </div>

          {/* CHANGE: was `<img src={back7}>` → `<img src={back7.src}>` because Next.js image imports return objects */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full bg-gray-300">
              <img src={back7.src} alt="Hero" className="object-contain" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce pointer-events-none transition-opacity duration-300"
          style={{ opacity: blur > 0 ? 0 : 1 }}
        >
          <span className="text-xs text-gray-800 tracking-widest uppercase">Explore</span>
          <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </section>
    </>
  );
};

export default Herosection;
