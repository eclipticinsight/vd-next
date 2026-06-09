"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">

      {/* ===== Background Video ===== */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/vd.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            Visionary
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-sky-400 mt-3 tracking-widest">
            Dynamics
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;