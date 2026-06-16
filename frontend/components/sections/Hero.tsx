"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if the screen is desktop (>= 1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">

      {/* ===== Background Video / Poster Image Fallback =====
          Mobile: hero-bg-mobile CSS class applies the image via stylesheet —
          visible immediately without waiting for JS hydration (fixes LCP).
          Desktop: video plays once JS mounts; CSS class clears bg at >=1024px. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020b1c] via-[#081830] to-[#020b1c] hero-bg-mobile">
        {isMounted && isDesktop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/hero-bg.webp"
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
              }`}
          >
            <source src="/videos/vd.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide font-display">
            Visionary
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-sky-400 mt-3 tracking-widest font-display">
            Dynamics
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;