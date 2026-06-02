"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

// ================= WAVE TRANSITION COMPONENT =================
export const WaveTransition = ({ direction = "bottom" }: { direction?: "top" | "bottom" }) => {
  const isTop = direction === "top";
  
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[200px] md:h-[260px]"
        preserveAspectRatio="none"
      >
        {/* 🔥 TOP CURVE FIXED HERE */}
        <path
          d="M0,140 
             C240,120 480,160 720,130 
             C960,100 1200,160 1440,140 
             L1440,320 L0,320 Z"
          fill="#37393b"
          fillOpacity="0.3"
        />

        <path
          d="M0,220C480,320 960,140 1440,220V320H0Z"
          fill="#93C5FD"
          fillOpacity="0.5"
        />

        <path
          d="M0,260C480,360 960,180 1440,260V320H0Z"
          fill="#b5c7df"
        />
      </svg>
    </div>
  );
};

// ================= TESTIMONIAL DATA =================
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechNova Solutions",
    content: "Their expertise transformed our financial operations completely. The transparency and attention to detail exceeded all expectations. Our efficiency improved by 65%!",
    rating: 5,
    avatar: "👩‍💼",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CFO, Global Innovations Inc.",
    content: "Outstanding service! The team provided customized solutions that perfectly fit our international operations. Their knowledge of global regulations is impeccable.",
    rating: 5,
    avatar: "👨‍💼",
    color: "from-emerald-400 to-green-400",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder, BloomTech",
    content: "Affordable yet premium service. They saved us thousands while ensuring 100% compliance. The customer support team is available 24/7 and extremely helpful.",
    rating: 5,
    avatar: "👩‍🔬",
    color: "from-violet-400 to-purple-400",
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Operations Director, ScaleFast",
    content: "The security measures and integrity shown by their team gave us complete peace of mind. Our sensitive financial data has never been more secure.",
    rating: 5,
    avatar: "👨‍💼",
    color: "from-amber-400 to-orange-400",
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    role: "Finance Manager, EcoSolutions",
    content: "Solution-focused approach that actually understands business needs. They don't just provide services; they provide strategic business solutions.",
    rating: 5,
    avatar: "👩‍🎓",
    color: "from-rose-400 to-pink-400",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Managing Partner, VentureGrowth",
    content: "Their expertise in financial technology is unmatched. They helped us scale from startup to Series B with flawless financial management every step of the way.",
    rating: 5,
    avatar: "👨‍🚀",
    color: "from-indigo-400 to-blue-400",
  },
];

// ================= CARD COMPONENT =================
function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full rounded-2xl">
        {/* Gradient Background */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.color} ${isActive ? "opacity-30" : "opacity-20"}`} />
        
        {/* Glass Card */}
        <div className={`relative bg-white/10 backdrop-blur-2xl backdrop-blur-xl rounded-2xl p-5 md:p-6 h-full flex flex-col border-2 transition-all duration-300 ${
          isActive 
            ? "border-white/60 shadow-2xl shadow-cyan-400/60" 
            : "border-white/40"
        }`}>
          <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none" />

          {/* Avatar Section */}
          <div className="flex flex-col items-center text-center space-y-2 mb-4">
            <div className="relative">
              <div className={`absolute -inset-1.5 rounded-xl bg-gradient-to-r ${testimonial.color} blur-lg ${isActive ? "opacity-80" : "opacity-60"}`} />
              <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-2xl ${isActive ? "ring-2 ring-white/50" : ""}`}>
                <span className="text-2xl md:text-3xl">{testimonial.avatar}</span>
              </div>
            </div>

            <div>
              <h3 className={`font-bold ${isActive ? "text-lg md:text-xl text-white" : "text-base md:text-lg text-white/90"} transition-all duration-300`}>
                {testimonial.name}
              </h3>
              <p className={`font-medium mt-0.5 ${isActive ? "text-cyan-300 text-xs md:text-sm" : "text-cyan-300/80 text-xs md:text-xs"}`}>
                {testimonial.role}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className={`${isActive ? "w-4 h-4 md:w-5 md:h-5" : "w-3.5 h-3.5 md:w-4 md:h-4"} text-amber-400 fill-current`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className={`ml-1 font-semibold ${isActive ? "text-cyan-200 text-sm md:text-base" : "text-cyan-200/80 text-xs md:text-sm"}`}>
                {testimonial.rating}.0
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative">
          <div className={`absolute -top-2 -left-2 ${isActive ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"} text-white/20 font-serif`}>&quot;</div>
            <div className={`absolute -bottom-2 -right-2 ${isActive ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"} text-white/20 font-serif rotate-180`}>&quot;</div>
            <p className={`leading-relaxed relative z-10 ${isActive ? "text-white text-xs md:text-sm lg:text-base" : "text-white/80 text-xs md:text-xs"} font-medium line-clamp-none`}>
              &quot;{testimonial.content}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= MAIN TESTIMONIALS COMPONENT =================
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  // Get previous, current, and next indices
  const getPrevIndex = useCallback(() => (currentIndex - 1 + testimonials.length) % testimonials.length, [currentIndex]);
  const getNextIndex = useCallback(() => (currentIndex + 1) % testimonials.length, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(getPrevIndex());
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, getPrevIndex]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(getNextIndex());
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, getNextIndex]);

  // Auto-slide functionality
  useEffect(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
    
    if (!isHovered && !isAnimating) {
      autoPlayInterval.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isHovered, isAnimating, handleNext]);

  return (
    <section 
      className="relative w-full min-h-[70vh] pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 px-4 md:px-8 lg:px-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full -mt-1 z-10">
        <WaveTransition direction="top" />
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background Image - Updated for Next.js */}
        <div className="absolute inset-0">
          <Image
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2070"
  alt="Background"
  fill
  className="object-cover"
  priority
  quality={75}
/>
        </div>
        
        {/* Overlay Gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.90) 40%, rgba(30, 41, 59, 0.85) 100%)`,
          }}
        />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Floating Particles */}
{[...Array(20)].map((_, i) => (
  <div
    key={i}
    className="absolute rounded-full"
    style={{
      width: `${20 + i * 3}px`,
      height: `${20 + i * 4}px`,
      top: `${(i * 13) % 100}%`,
      left: `${(i * 17) % 100}%`,
      background:
        "radial-gradient(circle, rgba(59,130,246,0.12), transparent)",
      filter: "blur(8px)",
    }}
  />
))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-xs md:text-sm font-semibold text-cyan-300 uppercase tracking-widest bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-cyan-500/30">
              Client Testimonials
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Trusted by </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Industry Leaders
            </span>
          </h2>

          <p className="text-base text-blue-100/80 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our solutions.
          </p>
        </div>

        {/* 3-Card Slider Container */}
        <div className="relative px-4 md:px-8 lg:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md border border-cyan-500/40 shadow-lg flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md border border-cyan-500/40 shadow-lg flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 3 Cards Layout - Reduced Height */}
          <div className="relative h-[340px] md:h-[390px] lg:h-[420px] overflow-visible">
            {/* Left Card (Previous) */}
            <div
              className="absolute left-[4%] top-6 w-[24%] md:w-[26%] h-[78%] transition-all duration-700 ease-out"
              style={{
                opacity: 0.45,
                zIndex: 5,
                transform:
                  `translateX(${isAnimating ? "-20px" : "0px"}) scale(.82)`
              }}
            >
              <TestimonialCard 
                testimonial={testimonials[getPrevIndex()]} 
                isActive={false}
              />
            </div>

            {/* Center Card (Active) */}
            <div
              className="absolute left-1/2 top-0 w-[92%] md:w-[72%] lg:w-[58%] h-full z-20"
              style={{
                transform:
                  `translateX(-50%) scale(${isAnimating ? .97 : 1.05})`
              }}
            >
              <TestimonialCard 
                testimonial={testimonials[currentIndex]} 
                isActive={true}
              />
            </div>

            {/* Right Card (Next) */}
            <div
              className="absolute right-[4%] top-6 w-[24%] md:w-[26%] h-[78%] transition-all duration-700 ease-out"
              style={{
                opacity: 0.45,
                zIndex: 5,
                transform:
`translateX(${isAnimating ? "20px":"0px"}) scale(.82)`
}}
>
              <TestimonialCard 
                testimonial={testimonials[getNextIndex()]} 
                isActive={false}
              />
            </div>
          </div>
        </div>

        {/* Auto-play status indicator */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-xs text-cyan-300/80">
            <span className="relative flex h-1.5 w-1.5">
              {!isHovered && !isAnimating && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${!isHovered && !isAnimating ? 'bg-cyan-400' : 'bg-cyan-400/50'}`}></span>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBackground {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          33% { transform: translateY(-20px) rotate(120deg); opacity: 0.2; }
          66% { transform: translateY(20px) rotate(240deg); opacity: 0.15; }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}