"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ShieldCheck, Clock, Users, DollarSign, Sparkles } from "lucide-react";

// ==================== COUNTER COMPONENT ====================
function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // premium ease-out
        onUpdate(latest) {
          if (ref.current) {
            // Check if target is a decimal value to format accordingly
            const isDecimal = value % 1 !== 0;
            ref.current.textContent = `${prefix}${latest.toFixed(isDecimal ? 1 : 0)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// ==================== STATS DATA ====================
const stats = [
  {
    prefix: "",
    value: 99.2,
    suffix: "%",
    title: "SLA Compliance",
    description: "Guaranteed execution and precision across accounting, finance & IT operations.",
    icon: ShieldCheck,
    color: "from-purple-400 to-indigo-400",
    accent: "text-purple-400",
    borderAccent: "from-purple-500 to-indigo-500",
    glow: "rgba(168,85,247,0.18)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(168,85,247,0.15)] hover:shadow-[0_30px_60px_-5px_rgba(168,85,247,0.3)]"
  },
  {
    prefix: "",
    value: 15,
    suffix: "k+",
    title: "Hours Reclaimed",
    description: "Operational hours saved for clients through automated software pipelines.",
    icon: Clock,
    color: "from-pink-400 to-rose-400",
    accent: "text-pink-400",
    borderAccent: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.18)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(236,72,153,0.15)] hover:shadow-[0_30px_60px_-5px_rgba(236,72,153,0.3)]"
  },
  {
    prefix: "",
    value: 250,
    suffix: "+",
    title: "Active Clients",
    description: "Global business partners trusting us to power their day-to-day services.",
    icon: Users,
    color: "from-sky-400 to-cyan-400",
    accent: "text-sky-400",
    borderAccent: "from-sky-500 to-cyan-500",
    glow: "rgba(14,165,233,0.18)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_60px_-5px_rgba(14,165,233,0.3)]"
  },
  {
    prefix: "$",
    value: 4.2,
    suffix: "M+",
    title: "Overhead Reduced",
    description: "Direct capital saved through technology alignment & process optimization.",
    icon: DollarSign,
    color: "from-emerald-400 to-teal-400",
    accent: "text-emerald-400",
    borderAccent: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.18)",
    shadow: "shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)] hover:shadow-[0_30px_60px_-5px_rgba(16,185,129,0.3)]"
  }
];

export default function StatsSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 py-24 sm:py-32 font-sans overflow-visible">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-300/30 blur-[130px] animate-float" style={{ animationDuration: "14s" }} />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-300/30 blur-[120px] animate-float" style={{ animationDuration: "16s", animationDelay: "-3s" }} />
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center mb-20 max-w-3xl">


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6"
          >
            Precision Performance,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We don&apos;t just manage your systems and books—we structure workflows to drive operational cost efficiency and scalability.
          </motion.p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`group relative rounded-[32px] overflow-hidden
border border-slate-200 hover:border-sky-300
bg-white backdrop-blur-xl p-8 flex flex-col justify-between
min-h-[300px] ${stat.shadow} transition-all duration-300`}
              >
                {/* Left-border gradient accent indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${stat.borderAccent} rounded-l-[32px] z-30`} />

                {/* Glowing background accent orb inside card */}
                <div
                  className="absolute bottom-[-15%] right-[-15%] w-[220px] h-[220px] rounded-full blur-[80px] pointer-events-none z-0 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: stat.glow }}
                />

                {/* Card Top Block */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 ${stat.accent} shadow-xl backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-400 text-sm font-black tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Stat Display Block */}
                <div className="mt-8 relative z-10 space-y-2">
                  <h3 className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight leading-none`}>
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </h3>

                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                    {stat.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
