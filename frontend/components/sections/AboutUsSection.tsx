"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles, Users, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

// ==================== STEPS DATA ====================
const cards = [
  {
    step: "Step 01.",
    title: "Strategic Operations Audit",
    description: "We conduct an in-depth audit of your current financial pipelines, communication setups, and IT infrastructure. This mapping phase establishes the operational baseline and identifies key automation opportunities.",
    icon: Sparkles,
    gradient: "from-[#6d28d9]/90 via-[#5b21b6]/95 to-[#2e1065]/95 backdrop-blur-xl",
    accent: "text-purple-200",
    borderAccent: "from-purple-400 via-violet-400/50 to-transparent",
    glow: "rgba(168,85,247,0.35)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(168,85,247,0.35)] hover:shadow-[0_35px_70px_-5px_rgba(168,85,247,0.6)]",
    image: "/images/step_audit_unique.webp"
  },
  {
    step: "Step 02.",
    title: "Dedicated Team Alignment",
    description: "Once paths are defined, we align your business with our specialized virtual assistants, systems engineers, and certified accountants. Together, we establish communication boundaries, workflows, and response KPIs.",
    icon: Users,
    gradient: "from-[#ec4899]/90 via-[#db2777]/95 to-[#701a75]/95 backdrop-blur-xl",
    accent: "text-pink-200",
    borderAccent: "from-pink-400 via-rose-400/50 to-transparent",
    glow: "rgba(236,72,153,0.35)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(236,72,153,0.35)] hover:shadow-[0_35px_70px_-5px_rgba(236,72,153,0.6)]",
    image: "/images/step_team_unique.webp"
  },
  {
    step: "Step 03.",
    title: "Secure Infrastructure Setup",
    description: "We provision encrypted sandboxes, configure automated ledger syncing, and secure your cloud assets under Microsoft Azure. This setup guarantees that all customer and internal records are completely insulated.",
    icon: ShieldCheck,
    gradient: "from-[#0ea5e9]/90 via-[#0284c7]/95 to-[#0c4a6e]/95 backdrop-blur-xl",
    accent: "text-sky-200",
    borderAccent: "from-sky-400 via-cyan-400/50 to-transparent",
    glow: "rgba(14,165,233,0.35)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(14,165,233,0.35)] hover:shadow-[0_35px_70px_-5px_rgba(14,165,233,0.6)]",
    image: "/images/step_security_unique.webp"
  },
  {
    step: "Step 04.",
    title: "Scale & Continuous Intelligence",
    description: "With compliance systems live and processes humming, we apply advanced data analytics to report cash flow velocity, asset depreciation, and workflow efficiency—empowering you to scale with complete confidence.",
    icon: Cpu,
    gradient: "from-[#10b981]/90 via-[#059669]/95 to-[#064e3b]/95 backdrop-blur-xl",
    accent: "text-emerald-200",
    borderAccent: "from-emerald-400 via-teal-400/50 to-transparent",
    glow: "rgba(16,185,129,0.35)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(16,185,129,0.35)] hover:shadow-[0_35px_70px_-5px_rgba(16,185,129,0.6)]",
    image: "/images/step_scale_unique.webp"
  }
];

export default function AboutUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire stack container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative w-full py-24 sm:py-32 font-sans overflow-visible">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stats-bg.webp"
          alt="Office workspace background with blurred analytics overlay for About Us statistics"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-80" />

        {/* Optional Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950/70 to-cyan-950/50" />
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] animate-float" style={{ animationDuration: "12s" }} />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-pink-500/15 blur-[120px] animate-float" style={{ animationDuration: "16s", animationDelay: "-4s" }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-sky-500/15 blur-[120px] animate-float" style={{ animationDuration: "14s", animationDelay: "-2s" }} />
        <div className="absolute bottom-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] animate-float" style={{ animationDuration: "10s", animationDelay: "-6s" }} />
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Header Title */}
        <div className="text-center mb-24 max-w-2xl">


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6"
          >
            How We Optimize{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Your Operations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Four structured steps designed to align your staff, secure your data pipeline, and scale with predictive business metrics.
          </motion.p>
        </div>

        {/* Cards Stack Layout */}
        <div className="relative w-full flex flex-col gap-12 sm:gap-20">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            // Calculate stacking scale/opacity transformations
            // Stacking scale calculations based on index
            const targetScale = 1 - ((cards.length - 1 - idx) * 0.05);

            // Stagger animation trigger points
            const start = idx * 0.22;
            const end = (idx + 1) * 0.22;

            const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);
            const dimOpacity = useTransform(scrollYProgress, [start, end], [0, 0.3]);

            return (
              <div
                key={idx}
                className="sticky top-[18vh] w-full flex justify-center pb-24"
                style={{
                  top: `calc(18vh + ${idx * 24}px)`
                }}
              >
                <motion.div
                  style={{ scale }}
                  whileHover={{
                    scale: 1.025,
                    transition: { duration: 0.3 }
                  }}
                  className={`group w-full max-w-[90rem] rounded-[40px] overflow-hidden border border-white/20 hover:border-white/35 bg-gradient-to-br ${card.gradient} ${card.shadow} p-8 sm:p-12 md:p-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 min-h-[520px] relative transition-all duration-300`}
                >
                  {/* Left-border gradient accent indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b ${card.borderAccent} rounded-l-[40px] z-30`} />

                  {/* Glowing background accent orb inside card */}
                  <div
                    className="absolute top-[-25%] right-[-15%] w-[480px] h-[480px] rounded-full blur-[120px] pointer-events-none z-0"
                    style={{ backgroundColor: card.glow }}
                  />

                  {/* Dimming overlay for stacked layers */}
                  <motion.div
                    style={{ opacity: dimOpacity }}
                    className="absolute inset-0 bg-slate-950 pointer-events-none z-20"
                  />

                  {/* Text Details Left */}
                  <div className="flex-1 space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider ${card.accent}`}>
                        <span className={`w-2 h-2 rounded-full bg-current animate-pulse`} />
                        {card.step}
                      </span>
                      <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/15 ${card.accent} shadow-xl backdrop-blur-md hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {card.description}
                    </p>


                  </div>

                  {/* Image Right */}
                  <div className="w-full md:w-[46%] aspect-[1.3] relative rounded-[28px] overflow-hidden border border-white/20 shadow-2xl shrink-0 z-10 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_45px_rgba(255,255,255,0.12)]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    {/* Light reveal glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
