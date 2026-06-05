"use client";
 
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
 
export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};
 
/* HERO BACKGROUND IMAGE */
const heroBg =
  "https://wallpaperaccess.com/full/656670.jpg";
 
/* APPROACH BACKGROUND IMAGE */
const approachBg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";
 
/* ================= GLASS SHAPES 3D PARALLAX BACKGROUND ================= */
const Parallax3DBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });
 
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 70;
      const y = (e.clientY / window.innerHeight - 0.5) * 70;
      mouseX.set(x);
      mouseY.set(y);
    };
 
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);
 
  const glassShapes = [
    { size: 180, top: "15%", left: "10%", rotate: 12, speed: 24, type: "square" },
    { size: 260, top: "20%", left: "75%", rotate: -8, speed: 28, type: "ring" },
    { size: 140, top: "65%", left: "15%", rotate: 6, speed: 22, type: "square" },
    { size: 220, top: "70%", left: "70%", rotate: -15, speed: 30, type: "ring" },
    { size: 200, top: "40%", left: "45%", rotate: 10, speed: 26, type: "square" },
  ];
 
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Soft Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-white/20 to-white/10" />
 
      {/* Glass Shapes */}
      {glassShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            rotate: [shape.rotate, shape.rotate + 20, shape.rotate],
            y: ["0px", "18px", "0px"],
          }}
          transition={{
            duration: shape.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glass Square - Transparent Version */}
          {shape.type === "square" && (
            <div
              className="w-full h-full rounded-2xl backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(14,165,233,0.04))",
                border: "1px solid rgba(14,165,233,0.15)",
                boxShadow: "0 0 20px rgba(14,165,233,0.12)",
              }}
            />
          )}
 
          {/* 3D Ring - Transparent Version */}
          {shape.type === "ring" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                border: "2px solid rgba(14,165,233,0.2)",
                boxShadow: "0 0 25px rgba(14,165,233,0.1)",
                background: "radial-gradient(circle, rgba(14,165,233,0.02), transparent 70%)",
              }}
            />
          )}
        </motion.div>
      ))}
     
      {/* Soft Light Rays */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(14,165,233,0.25) 40%, transparent 60%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
 
/* ================= MAIN COMPONENT ================= */
export default function Industries() {
  const industries = [
    {
      id: 1,
      name: "CPA Firms & Consultancy Agencies",
      description:
        "Empowering CPA firms and consultancy agencies with compliance-driven automation, financial intelligence, and strategic advisory platforms that streamline operations and drive sustainable growth.",
      category: "Professional Services",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&h=600&fit=crop",
      bgColor: "bg-sky-50",
      color: "text-sky-600",
      borderColor: "border-sky-200",
      gradient: "from-sky-400 to-cyan-400",
    },
    {
      id: 2,
      name: "Real Estate",
      description:
        "Driving property growth through market intelligence, digital platforms, and investment-focused advisory solutions.",
      category: "Property & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      bgColor: "bg-amber-50",
      color: "text-amber-600",
      borderColor: "border-amber-200",
      gradient: "from-amber-400 to-orange-400",
    },
    {
      id: 3,
      name: "Healthcare",
      description:
        "Advancing patient care and operational excellence through digital health, compliance, and data-driven solutions.",
      category: "Medical & Life Sciences",
      image:
        "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg",
      bgColor: "bg-emerald-50",
      color: "text-emerald-600",
      borderColor: "border-emerald-200",
      gradient: "from-emerald-400 to-teal-400",
    },
    {
      id: 4,
      name: "E-Commerce",
      description:
        "Scaling digital storefronts with performance marketing, automation, and customer-centric commerce strategies.",
      category: "Digital Commerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      bgColor: "bg-rose-50",
      color: "text-rose-600",
      borderColor: "border-rose-200",
      gradient: "from-rose-400 to-pink-400",
    },
    {
      id: 5,
      name: "Information Technology",
      description:
        "Building secure, scalable, and innovative digital ecosystems with cloud, AI, and enterprise IT solutions.",
      category: "Technology Services",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      bgColor: "bg-blue-50",
      color: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      id: 6,
      name: "Recruitment Agency",
      description:
        "Connecting organizations with top talent through strategic hiring, workforce planning, and digital recruitment platforms.",
      category: "Human Capital",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      bgColor: "bg-violet-50",
      color: "text-violet-600",
      borderColor: "border-violet-200",
      gradient: "from-violet-400 to-fuchsia-400",
    },
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* ================= HERO ================= */}
      <div className="relative h-[60vh] flex items-center overflow-hidden isolate">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
 
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
 
        <div className="relative container mx-auto px-6 z-40 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Industries We Serve
          </h1>
        </div>
       
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>
 
      {/* ================= 3D SECTION ================= */}
      <div className="relative overflow-hidden py-20 bg-sky-100">
        <Parallax3DBackground />
 
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
 
        <div className="relative container mx-auto px-6 z-30">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-6 py-2.5 rounded-full shadow-md mb-6">
              <h2 className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                Global Industry Expertise
              </h2>
            </div>
 
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Powering Businesses Across Multiple Sectors
            </h3>
 
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We partner with organizations worldwide to unlock performance,
              accelerate innovation, and deliver sustainable growth.
            </p>
          </div>
 
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="group relative">
                <div
                  className={`relative bg-white/95 backdrop-blur rounded-2xl border-2 ${industry.borderColor} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                >
                  <div
                    className={`h-1.5 bg-gradient-to-r ${industry.gradient}`}
                  />
 
                  <div className="p-6">
                    <div className="relative mb-5">
                      <div
                        className={`relative ${industry.bgColor} w-full h-48 rounded-xl overflow-hidden shadow-md transition-shadow duration-300`}
                      >
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
 
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
 
                        <div className="absolute top-4 left-4">
                          <div
                            className={`px-3 py-1.5 ${industry.bgColor} rounded-full backdrop-blur-sm border border-white/30 shadow-sm`}
                          >
                            <span
                              className={`text-xs font-semibold ${industry.color}`}
                            >
                              {industry.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
 
                    <h4
                      className={`text-xl font-bold mb-3 ${industry.color}`}
                    >
                      {industry.name}
                    </h4>
 
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* ================= OUR APPROACH ================= */}
      <div className="relative py-28 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
     
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${approachBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm z-10" />
 
        <div className="relative container mx-auto px-6 z-30">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              A Structured Approach to Success
            </h2>
 
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We follow a proven framework that delivers measurable results and
              long-term impact.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Understand your business landscape, challenges, and opportunities.",
                icon: <ChartBarIcon className="w-8 h-8" />,
                color: "from-cyan-400 to-blue-500",
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "Co-create tailored strategies with clear goals and milestones.",
                icon: <UsersIcon className="w-8 h-8" />,
                color: "from-indigo-400 to-purple-500",
              },
              {
                step: "03",
                title: "Implementation Support",
                description:
                  "Execute solutions with hands-on support and optimization.",
                icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
                color: "from-emerald-400 to-teal-500",
              },
              {
                step: "04",
                title: "Results Measurement",
                description:
                  "Track KPIs, measure ROI, and ensure sustainable success.",
                icon: <CheckCircleIcon className="w-8 h-8" />,
                color: "from-violet-400 to-purple-500",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className={`relative overflow-hidden rounded-3xl p-8
                    bg-gradient-to-br ${item.color}
                    border border-white/20
                    shadow-2xl
                    hover:scale-[1.03]
                    transition-all duration-500`}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/35" />
 
                  {/* Step Number */}
                  <div className="absolute top-3 left-4 text-[72px] font-extrabold text-white/10 z-10">
                    {item.step}
                  </div>
 
                  {/* Icon */}
                  <div className="relative z-20 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
 
                  {/* Title */}
                  <h3 className="relative z-20 text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
 
                  {/* Description */}
                  <p className="relative z-20 text-white/95 text-[16px] leading-8 font-medium">
                    {item.description}
                  </p>
 
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 