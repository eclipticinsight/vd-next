"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ABOUT_PAGE_MISSION_DATA,
  ABOUT_PAGE_VISION_DATA,
  ABOUT_PAGE_JOURNEY_DATA
} from "@/utils/constants";
import {
  HeartHandshake,
  Pause,
  Play,

  Triangle,
  ChevronLeft,
  ChevronRight,

} from "lucide-react";

// ==================== WAVE TRANSITION COMPONENT ====================
export const WaveTransition = ({ direction = "bottom" }: { direction?: "top" | "bottom" }) => {
  const isTop = direction === "top";

  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

// ==================== MAIN ABOUT US PAGE ====================
const AboutUs = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* ==================== SECTION 1: HERO WITH BACKGROUND & OVERLAY ==================== */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center bg-blue-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.webp"
            alt="Business team stacking hands"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Cinematic overlay with gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.75)_50%,rgba(2,6,23,0.95)_80%)]" />

        {/* Top + Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-transparent to-[#020617]/90" />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white drop-shadow-2xl"
            style={{ transform: "translateZ(10px)" }}
          >
            About Us
          </h1>
          <p
            className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100/80"
            style={{ transform: "translateZ(25px)" }}
          >
            Empowering businesses with innovative solutions and unwavering commitment
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full" />
          </div>
        </motion.div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <WaveTransition direction="bottom" />
        </div>
      </section>

      {/* ==================== SECTION 2: ABOUT VISIONARY DYNAMICS ==================== */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-blue-100">
        {/* Decorative floating elements - optimized for performance with FIXED values */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-l from-sky-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-300/5 rounded-full blur-3xl" />

          {/* Floating particles - subtle with FIXED positions (NO Math.random()) */}
          {[
            { left: "5%", top: "15%", duration: 2.5, delay: 0.2 },
            { left: "15%", top: "45%", duration: 3.2, delay: 1.1 },
            { left: "25%", top: "75%", duration: 2.8, delay: 0.5 },
            { left: "35%", top: "25%", duration: 4.1, delay: 1.8 },
            { left: "45%", top: "85%", duration: 3.5, delay: 0.9 },
            { left: "55%", top: "35%", duration: 2.9, delay: 2.0 },
            { left: "65%", top: "65%", duration: 3.8, delay: 1.4 },
            { left: "75%", top: "10%", duration: 2.3, delay: 0.7 },
            { left: "85%", top: "55%", duration: 4.2, delay: 1.6 },
            { left: "92%", top: "30%", duration: 3.1, delay: 2.2 },
            { left: "8%", top: "90%", duration: 3.6, delay: 0.3 },
            { left: "70%", top: "95%", duration: 2.7, delay: 1.9 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Image with glass effect */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative group">
                <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-200/40 bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/about-partner.webp"
                    alt="Business team collaboration"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                {/* Decorative glow */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-40 sm:h-40 bg-blue-300/20 rounded-full blur-2xl" />
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-sky-300/15 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full space-y-6 sm:space-y-8"
            >
              <div>
                <p className="text-sm sm:text-base uppercase tracking-wider text-blue-700 font-semibold mb-2">
                  About Visionary Dynamics
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Your Partner in{" "}
                  <span className="text-blue-700 relative inline-block">
                    Progress
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                  </span>
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 text-slate-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  A group of seasoned professionals with more than six years of experience lead{" "}
                  <span className="font-semibold text-black-1100">Visionary Dynamics Consulting Inc.</span>{" "}
                  We are committed to providing our clients with specialized, superior solutions that enable them to reach their objectives.
                  “Visionary Dynamics is a wholly integrated division operating under the strategic direction of Ecliptic Insight Ventures.”
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  We serve both individuals and companies with our expertise in IT asset management and customized financial services.{" "}
                  <span className="font-semibold text-black-1100">
                    Financial planning, bookkeeping, tax planning, management accounting, predictive analytics, financial analysis, software asset management, CMDB,
                  </span>{" "}
                  and more are just a few of the many services we provide.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  At Visionary Dynamics, we use strategic insights and creative solutions to enable clients to maximize resources and make wise decisions. Above all, we ensure the{" "}
                  <span className="font-semibold text-black-1100">security of all client information</span>{" "}
                  by upholding strict confidentiality and complying with international data protection regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: CEO MESSAGE ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-gray-900 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        {/* Background Image */}
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/ceo-bg.webp"
            alt="Office background"
            fill
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/85 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5 w-full flex justify-center"
            >
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white shadow-xl bg-white">
                    <Image
                      src="/images/ceoimage.webp"
                      alt="Aakash Dhandhania"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 sm:mt-5 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-1">Leadership</p>
                  <p className="text-lg sm:text-xl font-bold text-white mb-0.5">Aakash Dhandhania</p>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium bg-gradient-to-r from-blue-900/40 to-indigo-900/40 py-1.5 px-4 rounded-full inline-block border border-blue-700/30">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-3/5 w-full"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-blue-300/50 transition-all duration-300 hover:shadow-3xl hover:border-blue-400/70">
                <div className="mb-5 sm:mb-6 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
                    CEO Message
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto lg:mx-0" />
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm font-medium">
                    A vision for tomorrow, built on today's commitment
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-black-1100">Welcome to Visionary Dynamics.</span>{" "}
                    It is my privilege to connect with you and share the vision that drives our organization forward. We are committed to delivering exceptional solutions that empower businesses, individuals, and communities to thrive in a rapidly evolving world.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Our journey is built on a foundation of{" "}
                    <span className="font-semibold text-black-1100">trust, innovation, and unwavering dedication to excellence</span>. We believe in creating value through meaningful partnerships and staying at the forefront of industry trends.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    As we continue to grow, our focus remains steadfast:{" "}
                    <span className="font-semibold text-black-1100">to provide services and solutions that make a real difference</span>. Whether you're here to explore opportunities or seek guidance, we are here to support you every step of the way.
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold text-center lg:text-left italic bg-gradient-to-r from-blue-50 to-indigo-50 py-3 px-4 sm:px-5 rounded-xl border-l-4 border-blue-500">
                      "Thank you for being a part of our story. Together, we can build a brighter, more successful future."
                    </p>
                  </div>

                  <div className="flex justify-center lg:justify-end mt-4 sm:mt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <p className="text-xs uppercase tracking-wider text-gray-500">With gratitude,</p>
                        <p className="text-base sm:text-lg font-bold text-blue-700 mt-0.5">Aakash Dhandhania</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        AD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <WaveTransition direction="bottom" />
        </div>
      </section>

      {/* ==================== SECTION 4: CORE VALUES ==================== */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-blue-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Innovation", desc: "Constantly pushing boundaries to deliver cutting-edge solutions.", icon: "💡" },
              { title: "Integrity", desc: "Unwavering commitment to honesty, transparency, and ethics.", icon: "🛡️" },
              { title: "Excellence", desc: "Striving for the highest quality in every service we provide.", icon: "⭐" },
              { title: "Collaboration", desc: "Building strong partnerships to achieve shared success.", icon: "🤝" },
              { title: "Client-Centric", desc: "Your goals become our mission. We succeed when you do.", icon: "🎯" },
              { title: "Security", desc: "Protecting your data with the highest industry standards.", icon: "🔒" },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: MISSION & VISION SECTION ==================== */}
      <MissionVisionSection />

      {/* ==================== SECTION 6: OUR JOURNEY TIMELINE ==================== */}
      <JourneySection />
    </div>
  );
};

// ==================== MISSION & VISION SECTION COMPONENT ====================
const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/about-mission-1.webp",
    "images/about-mission-2.webp",
    "images/about-mission-3.webp",
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const currentData = activeTab === "mission" ? ABOUT_PAGE_MISSION_DATA : ABOUT_PAGE_VISION_DATA;

  // FIXED: Static particles data (NO Math.random())
  const floatingParticles = [
    { left: "10%", top: "20%", duration: 5, xOffset: 0 },
    { left: "25%", top: "40%", duration: 6, xOffset: 1 },
    { left: "40%", top: "60%", duration: 7, xOffset: 2 },
    { left: "55%", top: "30%", duration: 5.5, xOffset: 3 },
    { left: "70%", top: "80%", duration: 6.5, xOffset: 4 },
    { left: "85%", top: "50%", duration: 7.5, xOffset: 5 },
    { left: "15%", top: "70%", duration: 4.8, xOffset: 6 },
    { left: "35%", top: "15%", duration: 6.2, xOffset: 7 },
    { left: "50%", top: "85%", duration: 5.3, xOffset: 8 },
    { left: "65%", top: "10%", duration: 7.1, xOffset: 9 },
    { left: "80%", top: "65%", duration: 4.5, xOffset: 10 },
    { left: "95%", top: "35%", duration: 6.8, xOffset: 11 },
  ];

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* Hero Section for Mission/Vision */}
      <section className="relative w-full min-h-[40vh] overflow-hidden bg-gradient-to-br from-sky-100 via-blue-200/80 to-cyan-100">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-cyan-200/20 to-sky-300/20"
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-cyan-200/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(219,234,254,0.7)_45%,rgba(191,219,254,0.9)_80%)]" />
        </div>

        <div className="relative w-full px-10 sm:px-14 lg:px-24 pt-0 pb-16 h-full flex items-center text-center">
          <div className="w-full">
            <h1 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Mission</span>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"> &amp; </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">Vision</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-slate-800/90 max-w-4xl mx-auto leading-relaxed font-light mb-16"
            >
              Shaping the future of technology through purpose-driven innovation and strategic excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative inline-flex rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-200 p-2 shadow-xl">
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/40 to-cyan-400/40 backdrop-blur-sm"
                  style={{ width: "50%", left: activeTab === "mission" ? "0%" : "50%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                {["mission", "vision"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "mission" | "vision")}
                    className={`relative px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 z-10 ${activeTab === tab ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                      }`}
                  >
                    <span>{tab === "mission" ? "Our Mission" : "Our Vision"}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full pt-0 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200">
        {/* Floating decorative elements - FIXED with static values (NO Math.random()) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingParticles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(particle.xOffset) * 20, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Triangle className="w-8 h-8 text-blue-400/15" />
            </motion.div>
          ))}
        </div>

        <div className="relative w-full px-6 sm:px-10 lg:px-24 xl:px-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="grid lg:grid-cols-2 gap-20 items-center mb-32"
            >
              <div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-block mt-8 mb-4"
                >
                  <div className={`p-5 rounded-3xl bg-gradient-to-br ${currentData.gradient} shadow-2xl`}>
                    {currentData.icon}
                  </div>
                </motion.div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {currentData.title}
                  </span>
                </h3>
                <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 mb-12 shadow-xl">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-light">{currentData.text}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {currentData.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 * idx }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 p-6 text-center shadow-lg"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-sky-200 mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-700 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-white/60">
                  <div className="relative h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={currentData.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-slate-900 mb-16"
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Core Pillars
            </span>
          </motion.h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentData.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 p-8 shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${currentData.gradient} mb-6`}>
                  {pillar.icon}
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h5>
                <p className="text-slate-700 mb-4">{pillar.description}</p>
                <div className="font-semibold text-slate-900">{pillar.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ==================== JOURNEY TIMELINE SECTION ====================
const JourneySection = () => {


  return (
    <section
      className="relative w-full pt-16 pb-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/journey-bg.webp')",
      }}
    >
      <div className="absolute top-0 left-0 w-full -mt-1 z-10">
        <WaveTransition direction="top" />
      </div>
      <div className="absolute inset-0 bg-slate-900/85" />

      <div className="relative w-full px-6 sm:px-10 lg:px-24 xl:px-32 z-10">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Journey
          </span>
        </motion.h4>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {ABOUT_PAGE_JOURNEY_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-12`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white/20 shadow-lg"
                  />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.year}</div>
                    <div className="text-xl font-bold text-white mt-2 mb-3">{item.title}</div>
                    <div className="text-white/80 text-sm leading-relaxed">{item.desc}</div>
                  </motion.div>
                </div>

                {/* Empty spacer for layout */}
                <div className="hidden md:block w-5/12" />

                {/* Mobile Timeline Indicator */}
                <div className="md:hidden flex items-center gap-3 w-full">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Stats Summary */}

      </div>


    </section>
  );
};

export default AboutUs;
