"use client";

import React, { useState, useEffect, useRef } from "react";

/* =========================
   DATA
========================= */
interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: Feature[] = [
  {
    title: "Scalable Growth",
    description:
      "Processes designed to grow with your business, adapting seamlessly as your operations, team size & market reach expand.",
    icon: "📈",
    color: "from-sky-400 to-cyan-400",
  },
  {
    title: "Risk Mitigation",
    description:
      "Proactive controls and compliance checks built into every process to identify, reduce, and prevent operational and financial risks.",
    icon: "🛡️",
    color: "from-emerald-400 to-green-400",
  },
  {
    title: "Operational Excellence",
    description:
      "Refined workflows that improve efficiency, eliminate bottlenecks, and ensure consistent, high-quality outcomes.",
    icon: "⚙️",
    color: "from-violet-400 to-purple-400",
  },
  {
    title: "Cost Optimization",
    description:
      "Data-driven processes that reduce overhead, improve resource utilization, and maximize return on investment.",
    icon: "💡",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "Client Partnership",
    description:
      "A collaborative, long-term approach that aligns our processes with your vision, goals, and evolving business strategy.",
    icon: "🤝",
    color: "from-rose-400 to-pink-400",
  },
  {
    title: "Insight-Driven Decisions",
    description:
      "Actionable insights generated from structured reporting and analytics to guide smarter, faster business decisions.",
    icon: "📊",
    color: "from-indigo-400 to-blue-400",
  },
  {
    title: "Continuous Improvement",
    description:
      "Ongoing evaluation and refinement of processes to keep your business competitive and future-ready.",
    icon: "🔄",
    color: "from-sky-400 to-blue-400",
  },
  {
    title: "Global Compliance",
    description:
      "Processes aligned with international standards and regulatory frameworks to support cross-border operations and expansion.",
    icon: "🌍",
    color: "from-teal-400 to-emerald-400",
  },
];

/* =========================
   TRANSPARENT BACKGROUND OBJECTS
   - All elements now use fully transparent/glassmorphic styles
   - Subtle borders and shadows only, no solid colors
========================= */
interface BgObject {
  id: number;
  size: number;
  x: number;
  y: number;
  depth: number;
  speed: number;
  type: number;
}

const bgObjects: BgObject[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  size: 100 + Math.random() * 180,
  x: 2 + Math.random() * 96,
  y: 5 + Math.random() * 90,
  depth: -150 + Math.random() * 350,
  speed: 12 + Math.random() * 20,
  type: i % 4,
}));

// Color mapping for hover effects (kept for card interactions)
interface ColorSet {
  light: string;
  medium: string;
  dark: string;
}

const colorMapping: Record<string, ColorSet> = {
  "from-sky-400 to-cyan-400": {
    light: "rgba(56, 189, 248, 0.08)",
    medium: "rgba(56, 189, 248, 0.15)",
    dark: "rgba(56, 189, 248, 0.25)",
  },
  "from-emerald-400 to-green-400": {
    light: "rgba(52, 211, 153, 0.08)",
    medium: "rgba(52, 211, 153, 0.15)",
    dark: "rgba(52, 211, 153, 0.25)",
  },
  "from-violet-400 to-purple-400": {
    light: "rgba(167, 139, 250, 0.08)",
    medium: "rgba(167, 139, 250, 0.15)",
    dark: "rgba(167, 139, 250, 0.25)",
  },
  "from-amber-400 to-orange-400": {
    light: "rgba(251, 191, 36, 0.08)",
    medium: "rgba(251, 191, 36, 0.15)",
    dark: "rgba(251, 191, 36, 0.25)",
  },
  "from-rose-400 to-pink-400": {
    light: "rgba(251, 113, 133, 0.08)",
    medium: "rgba(251, 113, 133, 0.15)",
    dark: "rgba(251, 113, 133, 0.25)",
  },
  "from-indigo-400 to-blue-400": {
    light: "rgba(129, 140, 248, 0.08)",
    medium: "rgba(129, 140, 248, 0.15)",
    dark: "rgba(129, 140, 248, 0.25)",
  },
  "from-sky-400 to-blue-400": {
    light: "rgba(56, 189, 248, 0.08)",
    medium: "rgba(56, 189, 248, 0.15)",
    dark: "rgba(56, 189, 248, 0.25)",
  },
  "from-teal-400 to-emerald-400": {
    light: "rgba(45, 212, 191, 0.08)",
    medium: "rgba(45, 212, 191, 0.15)",
    dark: "rgba(45, 212, 191, 0.25)",
  },
};

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  /* =========================
     MOUSE PARALLAX
  ========================= */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Re-generate background objects on client-side only to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [clientBgObjects, setClientBgObjects] = useState<BgObject[]>([]);

  useEffect(() => {
    setMounted(true);
    setClientBgObjects(
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        size: 100 + Math.random() * 180,
        x: 2 + Math.random() * 96,
        y: 5 + Math.random() * 90,
        depth: -150 + Math.random() * 350,
        speed: 12 + Math.random() * 20,
        type: i % 4,
      }))
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-screen min-h-screen py-28 overflow-hidden bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100"
    >
      {/* =========================
          TRANSPARENT BASE LAYER - Clean, minimal, no heavy colors
      ========================= */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient for depth - fully transparent feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.03)_0%,_transparent_70%)]" />
        
        {/* Soft atmospheric wisps - transparent and ethereal */}
        <div className="absolute top-[5%] left-[0%] w-[300px] h-[300px] bg-gradient-to-r from-sky-200/10 to-cyan-200/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-l from-indigo-200/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] bg-violet-200/5 rounded-full blur-2xl" />
        
        {/* Ultra-fine grid pattern - barely visible */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px),
                              linear-gradient(0deg, rgba(56,189,248,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================
          TRANSPARENT LIVING 3D OBJECT LAYER
          - All elements now use glass/transparent styles
          - No solid fills, only borders, gradients with low opacity, and subtle glows
      ========================= */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {clientBgObjects.map((obj) => (
            <div
              key={obj.id}
              className="absolute will-change-transform"
              style={{
                width: obj.size,
                height: obj.size,
                top: `${obj.y}%`,
                left: `${obj.x}%`,
                transform: `
                  translateY(${mousePosition.y * 0.05}px)
                  translateZ(${obj.depth}px)
                  rotateX(${mousePosition.y * 0.03}deg)
                  rotateY(${mousePosition.x * 0.03}deg)
                `,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Type 0: Transparent ring with subtle border glow */}
              {obj.type === 0 && (
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    border: "1.5px solid rgba(56, 189, 248, 0.2)",
                    boxShadow: "0 0 30px rgba(56, 189, 248, 0.1), inset 0 0 20px rgba(56, 189, 248, 0.05)",
                    background: "radial-gradient(circle, rgba(56, 189, 248, 0.02), transparent 80%)",
                    backdropFilter: "blur(2px)",
                  }}
                />
              )}

              {/* Type 1: Transparent glass orb with soft inner glow */}
              {obj.type === 1 && (
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25), rgba(56, 189, 248, 0.03), transparent 85%)",
                    boxShadow: "0 0 40px rgba(56, 189, 248, 0.08), inset 0 0 20px rgba(255,255,255,0.2)",
                    border: "1px solid rgba(56, 189, 248, 0.12)",
                    backdropFilter: "blur(1px)",
                  }}
                />
              )}

              {/* Type 2: Geometric shape - triangle ring */}
              {obj.type === 2 && (
                <div
                  className="w-full h-full"
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      border: "1.5px solid rgba(139, 92, 246, 0.15)",
                      transform: "rotate(45deg)",
                      borderRadius: "20%",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.05)",
                    }}
                  />
                  <div
                    className="absolute inset-[15%]"
                    style={{
                      border: "1px solid rgba(139, 92, 246, 0.1)",
                      transform: "rotate(-15deg)",
                      borderRadius: "30%",
                    }}
                  />
                </div>
              )}

              {/* Type 3: Soft glowing orb */}
              {obj.type === 3 && (
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.04), transparent 70%)",
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.06), inset 0 0 30px rgba(6, 182, 212, 0.03)",
                    border: "1px solid rgba(6, 182, 212, 0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* =========================
          CONTENT LAYER
      ========================= */}
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-24"
        style={{
          transform: `
            translateY(${mousePosition.y * 0.02}px)
            translateX(${mousePosition.x * 0.02}px)
          `,
          transition: "transform 0.15s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
        }}
      >
        {/* HEADER with transparent/glass styling */}
        <div className="text-center mb-20">
          <div className="w-full flex justify-center items-center mb-10">
            <div className="hidden sm:block w-24 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            <span
              className="mx-4 px-4 sm:px-10 py-3 sm:py-4 text-[11px] sm:text-sm font-bold text-sky-700 uppercase tracking-[0.15em] sm:tracking-[0.35em] whitespace-nowrap bg-white/60 backdrop-blur-md rounded-2xl border border-sky-400/20 shadow-lg"
            >
              Why Choose Us
            </span>

            <div className="hidden sm:block w-24 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">Trusted Excellence for</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Business Success
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-sky-300/20 shadow-xl">
            We combine deep expertise with innovative technology to deliver
            measurable results that drive sustainable growth and operational
            excellence.
          </p>
        </div>

        {/* CARDS GRID */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
          style={{ contentVisibility: "auto" }}
        >
          {features.map((feature, index) => {
            const colors = colorMapping[feature.color];

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform:
                    hoveredCard === index
                      ? "translateY(-4px)"
                      : "translateY(0px)",
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Background Color Spread Effect - subtle */}
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-500 ease-out"
                  style={{
                    backgroundColor:
                      hoveredCard === index ? colors.light : "transparent",
                    boxShadow:
                      hoveredCard === index
                        ? `0 0 0 1px ${colors.medium}, 0 25px 50px -12px ${colors.dark}30`
                        : "none",
                    opacity: hoveredCard === index ? 1 : 0,
                    transform:
                      hoveredCard === index ? "scale(1.02)" : "scale(1)",
                  }}
                />

                {/* Animated Border Glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
                  style={{
                    boxShadow:
                      hoveredCard === index
                        ? `inset 0 0 0 1px ${colors.medium}, 0 0 20px ${colors.dark}`
                        : "inset 0 0 0 1px rgba(148, 163, 184, 0.08)",
                  }}
                />

                {/* Corner Accents */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl transition-all duration-500 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === index
                        ? `linear-gradient(135deg, transparent, ${colors.medium})`
                        : "transparent",
                    opacity: hoveredCard === index ? 0.6 : 0,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-3xl transition-all duration-500 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === index
                        ? `linear-gradient(135deg, ${colors.medium}, transparent)`
                        : "transparent",
                    opacity: hoveredCard === index ? 0.6 : 0,
                  }}
                />

                {/* Main Card - Glassmorphic transparent style */}
                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110`}
                    style={{
                      transform:
                        hoveredCard === index
                          ? "scale(1.15) rotate(5deg)"
                          : "scale(1) rotate(0deg)",
                      boxShadow:
                        hoveredCard === index
                          ? `0 15px 30px ${colors.dark}, 0 0 40px ${colors.medium}`
                          : "0 10px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <span
                      className="text-3xl transition-all duration-400"
                      style={{
                        filter:
                          hoveredCard === index
                            ? "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
                            : "none",
                        transform:
                          hoveredCard === index ? "scale(1.2)" : "scale(1)",
                      }}
                    >
                      {feature.icon}
                    </span>

                    {/* Icon Glow */}
                    <div
                      className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${colors.medium}, transparent 70%)`,
                        filter: "blur(10px)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 transition-all duration-400 relative"
                    style={{
                      color:
                        hoveredCard === index
                          ? colors.dark.replace("0.25", "0.9")
                          : "#1e293b",
                    }}
                  >
                    {feature.title}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-500"
                      style={{
                        width: hoveredCard === index ? "100%" : "0%",
                        background: `linear-gradient(90deg, ${colors.dark}, ${colors.medium})`,
                      }}
                    />
                  </h3>

                  {/* Description */}
                  <p
                    className="text-slate-600 mb-6 leading-relaxed transition-all duration-400"
                    style={{
                      color: hoveredCard === index ? "#475569" : "#64748b",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}