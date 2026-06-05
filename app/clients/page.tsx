"use client";
 
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
 
export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.15" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.25" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" fillOpacity="0.35" />
      </svg>
    </div>
  );
};
 
/* HERO BACKGROUND IMAGE */
const heroBg =
  "https://img.freepik.com/premium-photo/business-people-handshake-collaboration-thank-you-contract-meeting-with-diversity-teamwork-collaboration-happy-manager-b2b-partnership-investment-company-growth-staff-applause_590464-82212.jpg";
 
/* LOWER SECTION BACKGROUND IMAGE */
const lowerBg =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";
 
/* ================= TRANSPARENT 3D BACKGROUND ================= */
const Elegant3DBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 25 });
 
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;
      mouseX.set(x);
      mouseY.set(y);
    };
 
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);
 
  const waves = [
    { id: 1, size: 360, top: "10%", left: "10%", opacity: 0.12, speed: 28 },
    { id: 2, size: 260, top: "20%", left: "70%", opacity: 0.1, speed: 32 },
    { id: 3, size: 420, top: "65%", left: "15%", opacity: 0.14, speed: 36 },
    { id: 4, size: 300, top: "70%", left: "75%", opacity: 0.11, speed: 30 },
  ];
 
  const squares = [
    { id: 1, size: 80, top: "30%", left: "25%", speed: 18 },
    { id: 2, size: 100, top: "55%", left: "55%", speed: 22 },
    { id: 3, size: 70, top: "15%", left: "80%", speed: 20 },
  ];
 
  const rings = [
    { id: 1, size: 140, top: "40%", left: "10%", speed: 26 },
    { id: 2, size: 180, top: "75%", left: "40%", speed: 32 },
  ];
 
  const particles = Array.from({ length: 20 }, (_, i) => ({
    top: `${((i * 37) + 13) % 100}%`,
    left: `${((i * 53) + 29) % 100}%`,
    duration: 6 + (i % 6),
  }));
 
  const blobs = [
    { width: 140, height: 132, top: "12%", left: "15%", yOffset: -18, xOffset: 12, duration: 18 },
    { width: 180, height: 160, top: "28%", left: "72%", yOffset: 16, xOffset: -14, duration: 22 },
    { width: 120, height: 140, top: "55%", left: "22%", yOffset: -12, xOffset: 18, duration: 20 },
    { width: 160, height: 128, top: "72%", left: "38%", yOffset: 20, xOffset: -16, duration: 24 },
    { width: 130, height: 150, top: "82%", left: "80%", yOffset: -20, xOffset: 15, duration: 19 },
  ];
 
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Base transparent light-blue wash - Very subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 via-cyan-50/10 to-blue-100/15" />
 
      {/* Transparent Glass Waves */}
      {waves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute rounded-full"
          style={{
            top: wave.top,
            left: wave.left,
            width: wave.size,
            height: wave.size,
            x: smoothX,
            y: smoothY,
            background: "radial-gradient(circle, rgba(255,255,255,0.15), rgba(56,189,248,0.05))",
            opacity: wave.opacity,
            filter: "blur(60px)",
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: wave.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
 
      {/* Floating Transparent Glass Squares */}
      {squares.map((sq) => (
        <motion.div
          key={`square-${sq.id}`}
          className="absolute rounded-2xl backdrop-blur-sm"
          style={{
            top: sq.top,
            left: sq.left,
            width: sq.size,
            height: sq.size,
            x: smoothX,
            y: smoothY,
            background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(14,165,233,0.04))",
            border: "1px solid rgba(14,165,233,0.12)",
            boxShadow: "0 0 20px rgba(14,165,233,0.08)",
          }}
          animate={{
            rotate: [0, 180, 360],
            y: [0, 20, 0],
          }}
          transition={{
            duration: sq.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
 
      {/* Transparent Glowing Rings */}
      {rings.map((ring) => (
        <motion.div
          key={`ring-${ring.id}`}
          className="absolute rounded-full"
          style={{
            top: ring.top,
            left: ring.left,
            width: ring.size,
            height: ring.size,
            x: smoothX,
            y: smoothY,
            border: "2px solid rgba(56,189,248,0.18)",
            boxShadow: "0 0 25px rgba(56,189,248,0.08)",
            background: "radial-gradient(circle, rgba(56,189,248,0.02), transparent 70%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: ring.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
 
      {/* Shimmer Particles - Transparent */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-sky-400/20"
          style={{
            top: particle.top,
            left: particle.left,
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
 
      {/* Additional Floating Glass Blobs - Transparent */}
      {blobs.map((blob, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: blob.width,
            height: blob.height,
            top: blob.top,
            left: blob.left,
            x: smoothX,
            y: smoothY,
            background: `radial-gradient(circle, rgba(255,255,255,0.08), rgba(14,165,233,0.02))`,
            border: "1px solid rgba(14,165,233,0.08)",
          }}
          animate={{
            y: [0, blob.yOffset, 0],
            x: [0, blob.xOffset, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
 
      {/* Soft Grid Overlay - Transparent */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
 
/* ================= STATS SECTION ================= */
const StatsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "Happy Clients",
      icon: <UserGroupIcon className="w-8 h-8" />,
      color: "from-sky-400 to-cyan-500",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: <StarIcon className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      value: "98%",
      label: "Retention Rate",
      icon: <ChartBarIcon className="w-8 h-8" />,
      color: "from-emerald-400 to-green-500",
    },
    {
      value: "1+",
      label: "Years Experience",
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "from-violet-400 to-purple-500",
    },
  ];
 
  return (
    <div className="relative py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
              />
              <div
                className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <div className="text-white">{stat.icon}</div>
              </div>
            </div>
 
            <div className="text-4xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-slate-300 mb-3">{stat.label}</div>
 
            <div className="relative h-1.5 w-24 mx-auto rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
 
/* ================= TESTIMONIAL CARD ================= */
type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  date: string;
  tags: string[];
};
 
const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative h-full flex flex-col justify-between bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500" />
 
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="font-bold text-gray-900">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {testimonial.position}
                </p>
                <p className="text-xs text-gray-400">
                  {testimonial.company}
                </p>
              </div>
            </div>
 
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isLiked ? (
                <HeartIconSolid className="w-6 h-6 text-pink-500" />
              ) : (
                <HeartIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>
          </div>
 
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIconSolid
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-700">
              {testimonial.rating}.0
            </span>
            <span className="ml-2 text-sm text-gray-500">
              • {testimonial.date}
            </span>
          </div>
 
          <p
            className={`text-gray-600 leading-relaxed mb-4 min-h-[72px] ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {testimonial.content}
          </p>
         
          <div className="flex flex-wrap gap-2 mt-6">
            {testimonial.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
 
/* ================= MAIN PAGE ================= */
export default function OurClients() {
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();
 
  const testimonials = [
    {
      id: 1,
      name: "James Kneblik, Jr.",
      position: "Vice President",
      company: "Surgical Resources Group LLC",
      content:
        "Visionary Dynamics has been an outstanding partner—highly supportive, reliable, and dedicated to driving real efficiency and transformation in our business. Their professionalism, collaboration, and commitment to delivering results have made a significant impact. We truly value the work they've done and look forward to many more great achievements together.",
      rating: 5,
      date: "2 weeks ago",
      tags: ["Technology", "E-commerce"],
    },
    {
      id: 2,
      name: "Brad Coffman",
      position: "CEO",
      company: "Valorem Brokers",
      content:
        "Visionary Dynamics has been a truly reliable partner, consistently demonstrating exceptional professionalism and a strong commitment to delivering results. Their ability to execute on time and maintain high standards has made a meaningful impact on our business, clients, and referrals. We genuinely appreciate their dedication, growth, and the value they continue to bring.",
      rating: 5,
      date: "1 month ago",
      tags: ["Finance", "Consulting"],
    },
    {
      id: 3,
      name: "Saket Gunjan",
      position: "President",
      company: "Squegg",
      content:
        "Working with Visionary Dynamics has been an absolute pleasure. Their team brings exceptional energy, professionalism, and expertise, making the entire experience seamless and highly effective. We truly appreciate their dedication and look forward to expanding our collaboration into new areas",
      rating: 5,
      date: "3 weeks ago",
      tags: ["Healthcare", "Marketing"],
    },
    {
      id: 4,
      name: "David Wilson",
      position: "CTO",
      company: "CloudSecure Systems",
      content:
        "They implemented top-tier cybersecurity with flawless execution. Zero breaches since deployment.",
      rating: 5,
      date: "2 months ago",
      tags: ["IT", "Cybersecurity"],
    },
  ];
 
  const filters = [
    { id: "all", label: "All Testimonials" },
    { id: "technology", label: "Technology" },
    { id: "finance", label: "Finance" },
    { id: "healthcare", label: "Healthcare" },
    { id: "it", label: "IT" },
  ];
 
  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "all") return true;
    return t.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter)
    );
  });
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-slate-800">
      {/* HERO */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm pointer-events-none" />
 
        <div className="relative container mx-auto px-6 z-10 flex flex-col items-center justify-center text-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-white"
          >
            Client Success Stories
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>
 
      {/* TESTIMONIALS — Transparent BG */}
      <div className="relative py-24 overflow-hidden bg-blue-100 z-0">
        <Elegant3DBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
 
        <div className="relative container mx-auto px-6 z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've partnered with.
            </p>
          </div>
 
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {filteredTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </div>
 
      {/* LOWER — IMAGE BG + DARK OVERLAY */}
      <div className="relative py-16 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
 
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${lowerBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
 
        <div className="relative container mx-auto px-6 z-20">
          <StatsSection />
 
          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                Let's work together to achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push("/contact")}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="px-8 py-4 bg-white/20 text-white rounded-xl font-semibold shadow-lg border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1"
                >
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 