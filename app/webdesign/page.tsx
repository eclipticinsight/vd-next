"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Smartphone,
  Users,
  Star,
  Clock,
  Zap,
  Award,
  ChevronRight,
  ChevronDown,
  Check,
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

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

// Add animation styles
const animationStyles = `
  @keyframes blob {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  
  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-15px) translateX(10px); }
    50% { transform: translateY(10px) translateX(-10px); }
    75% { transform: translateY(-5px) translateX(5px); }
  }
  
  @keyframes float-delay {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    33% { transform: translateY(-20px) translateX(-10px); }
    66% { transform: translateY(15px) translateX(15px); }
  }
  
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes ping-slow {
    0% { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animate-progress-line {
    animation: progress 2s ease-out forwards;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-float-delay {
    animation: float-delay 10s ease-in-out infinite;
    animation-delay: 2s;
  }
  
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  }
`;

// ---------- Floating Objects Component ----------
const FloatingObjects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
    {/* Floating orbs with animations */}
    <motion.div
      className="absolute top-20 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 40, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-40 right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-xl"
      animate={{
        y: [0, -50, 0],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-60 right-20 w-24 h-24 bg-pink-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 35, 0],
        x: [0, -25, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-40 left-1/3 w-20 h-20 bg-indigo-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 left-1/4 w-28 h-28 bg-cyan-400/30 rounded-full blur-xl"
      animate={{
        y: [0, -40, 0],
        x: [0, 25, 0],
      }}
      transition={{
        duration: 11,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    
    {/* Geometric shapes */}
    <motion.div
      className="absolute top-32 left-1/4 w-16 h-16 border-4 border-blue-400/30 rounded-lg"
      animate={{
        y: [0, 30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute bottom-32 right-1/3 w-20 h-20 border-4 border-purple-400/30 rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 left-10 w-12 h-12 border-4 border-pink-400/30 transform rotate-45"
      animate={{
        y: [0, 25, 0],
        rotate: [45, 90, 45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />  
    
    {/* Floating waves */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-20">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200 T1500,200"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.5,
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0,300 Q200,200 400,300 T800,300 T1200,300 T1600,300"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.3,
          x: [0, -50, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />
    </svg>
  </div>
);

// ---------- Reusable Components ----------
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionHeader = ({
  title,
  subtitle = "",
  centered = true,
}: SectionHeaderProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-indigo-600 mt-4 mx-auto"></div>
  </div>
);

// ---------- Hero Section ----------
const Hero = () => (
  <section className="relative h-[700px] flex items-center bg-gradient-to-br from-indigo-50 via-white to-white overflow-hidden">
    
    {/* Background Video */}
    <div className="absolute inset-0 z-0">
      <video
        src="/videos/web.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
      
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          We Build <span className="text-indigo-400">Digital Experiences</span> That Drive Growth
        </h1>
      </div>

    </div>

    {/* Wave */}
    <div className="absolute bottom-0 left-0 w-full z-30">
      <WaveTransition />
    </div>

  </section>
);

// ---------- Services Section ----------
const services = [
  {
    title: "Custom Website Design",
    desc: "Unique, brand-focused designs that captivate your audience and create lasting first impressions. We craft bespoke digital experiences that reflect your brand's personality, values, and vision while ensuring intuitive navigation and engaging user journeys.",
    image: "/images/web-design.jpg",
    gradient: "from-pink-500 to-rose-500",
    features: ["UI/UX Design", "Branding", "Custom Layouts", "Wireframing", "Prototyping"],
    stats: { projects: 150, satisfaction: "99%" }
  },
  {
    title: "Frontend Development",
    desc: "Modern, fast and responsive UI development that brings designs to life with clean, maintainable code. We leverage the latest technologies to create lightning-fast, interactive applications that deliver exceptional user experiences across all browsers and devices.",
    image: "/images/frontend.jpg",
    gradient: "from-blue-500 to-cyan-500",
    features: ["React", "Tailwind", "Animations", "Next.js", "TypeScript"],
    stats: { projects: 200, satisfaction: "98%" }
  },
  {
    title: "Mobile Optimization",
    desc: "Perfect experience across all devices with responsive designs that adapt seamlessly to any screen size. We ensure your website loads quickly, functions flawlessly, and provides an intuitive experience whether users are on smartphones, tablets, or desktops.",
    image: "/images/mobile.jpg",
    gradient: "from-green-500 to-emerald-500",
    features: ["Responsive Design", "Speed Optimization", "SEO", "Touch Interactions", "Cross-Browser"],
    stats: { projects: 180, satisfaction: "97%" }
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend systems that power your applications with robust architecture and reliable performance. We build RESTful APIs, manage databases, and implement security protocols to ensure your data is protected and your applications run smoothly under any load.",
    image: "/images/backend.jpg",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Node.js", "MongoDB", "API Development", "PostgreSQL", "Authentication"],
    stats: { projects: 120, satisfaction: "99%" }
  }
];

const Services = () => (
  <section className="relative py-6 md:py-10 bg-gradient-to-br from-blue-100 via-blue to-blue-100 overflow-hidden">
    {/* Add floating animation styles */}
    <style>{animationStyles}</style>
    
    {/* Enhanced Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100 to-rose-100 rounded-full blur-3xl opacity-10"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      {/* Section Header - Enhanced */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 mb-6 shadow-sm">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">Our Expertise</span>
          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gray-900">
            Comprehensive
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Development Services
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          End-to-end solutions tailored to your business needs. From concept to deployment, 
          we've got you covered with cutting-edge technology and creative expertise.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-24 md:space-y-32">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`group relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Decorative line connector */}
            {idx < services.length - 1 && (
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent -bottom-28"></div>
            )}
            
            {/* Graphic Section - Floating Animation with Rounded Corners */}
            <div className="relative lg:w-1/2 flex justify-center">
              {/* Subtle shadow background with glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
              
              {/* Image Container with Floating Animation */}
              <div className={`relative transform transition-all duration-700 group-hover:scale-105 ${
                idx % 2 === 0 ? 'animate-float' : 'animate-float-slow'
              }`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain rounded-3xl shadow-2xl"
                  style={{
                    borderRadius: '2rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                />
                
                {/* Decorative corner elements - also rounded */}
                <div className={`absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 ${service.gradient.replace('from-', 'border-').replace('to-', '')} border-opacity-40 rounded-tl-3xl`} style={{ borderRadius: '1.5rem' }}></div>
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 ${service.gradient.replace('from-', 'border-').replace('to-', '')} border-opacity-40 rounded-br-3xl`} style={{ borderRadius: '1.5rem' }}></div>
                
                {/* Optional: Floating shadow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>

            {/* Text Section - Enhanced */}
            <div className="lg:w-1/2 space-y-6">
              {/* Title with badge */}
              <div className="relative">
                <div className="inline-block mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 text-white`}>
                    Service {idx + 1} / {services.length}
                  </span>
                </div>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                  {service.title}
                </h2>
                <div className={`absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform origin-left group-hover:w-32 transition-all duration-500`}></div>
              </div>
              
              {/* Description - More detailed */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {service.desc}
              </p>
              
              {/* Feature tags - Enhanced with icons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {service.features.map((feature, fIdx) => (
                  <span 
                    key={fIdx}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-50 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Our Process Section ----------
const steps = [
  { 
    title: "Planning", 
    icon: "📋",
    gradient: "from-blue-500 to-cyan-500",
    desc: "Strategic planning and goal setting",
    color: "blue"
  },
  { 
    title: "Design", 
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    desc: "User-centered visual design",
    color: "purple"
  },
  { 
    title: "Content Creation", 
    icon: "✍️",
    gradient: "from-orange-500 to-red-500",
    desc: "Compelling copy and visuals",
    color: "orange"
  },
  { 
    title: "Development", 
    icon: "💻",
    gradient: "from-green-500 to-emerald-500",
    desc: "Clean, scalable code",
    color: "green"
  },
  { 
    title: "Testing", 
    icon: "🧪",
    gradient: "from-indigo-500 to-blue-500",
    desc: "Comprehensive QA",
    color: "indigo"
  },
  { 
    title: "Launch", 
    icon: "🚀",
    gradient: "from-yellow-500 to-amber-500",
    desc: "Seamless deployment",
    color: "yellow"
  },
  { 
    title: "Maintenance", 
    icon: "⚙️",
    gradient: "from-teal-500 to-cyan-500",
    desc: "Ongoing support",
    color: "teal"
  }
];

const OurProcess = () => (
  <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-100 via-blue to-blue-100 overflow-hidden">
    <style>{animationStyles}</style>
    
    {/* Enhanced Animated Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      {/* Enhanced Header */}
      <div className="text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gray-900">
            Stages of Website
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Development Timeline
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A structured approach that takes your project from concept to launch and beyond.
        </p>
      </div>

      {/* Enhanced Timeline Container */}
      <div className="relative mt-12 md:mt-24">
        {/* Glow Effect Behind Timeline */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2">
          <div className="h-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent blur-sm"></div>
        </div>
        
        {/* Timeline Line Container */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
          {/* Background Line with Gradient */}
          <div className="h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
          
          {/* Animated Progress Line */}
          <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-progress-line" style={{ width: '100%' }}></div>
          
          {/* Animated Dots on Timeline */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-12">
            {steps.map((_, idx) => (
              <div key={idx} className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse-slow" style={{ animationDelay: `${idx * 0.2}s` }}></div>
            ))}
          </div>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 md:gap-4 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Step Container with Hover Effects */}
              <div className="flex flex-col items-center text-center transform transition-all duration-500 group-hover:translate-y-[-8px]">
                {/* Icon Circle with Enhanced Effects */}
                <div className="relative bg-white rounded-full p-1.5 z-20">
                  {/* Outer Glow Ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-xl opacity-40 group-hover:opacity-80 transition-all duration-500`}></div>
                  
                  {/* Main Circle with Rotating Border */}
                  <div className={`relative z-10 w-24 h-24 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 cursor-pointer overflow-hidden`}>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-3xl md:text-2xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                  </div>
                  
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-ping-slow opacity-0 group-hover:opacity-100"></div>
                </div>
                
                {/* Title with Gradient */}
                <h3 className={`text-base md:text-sm font-bold mt-4 mb-2 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
                  {step.title}
                </h3>
                
                {/* Enhanced Description Tooltip */}
                <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-56 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20 group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 backdrop-blur-sm">
                    <div className={`w-1 h-8 bg-gradient-to-b ${step.gradient} rounded-full absolute left-3 top-1/2 transform -translate-y-1/2`}></div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-3">{step.desc}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  </div>
                </div>
              </div>
              
              {/* Connector Dots for Mobile */}
              {idx < steps.length - 1 && (
                <div className="md:hidden absolute left-1/2 top-28 w-px h-10 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Mobile Detailed View */}
      <div className="md:hidden mt-12 space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-x-2 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <span className="text-2xl">{step.icon}</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-[10px] font-bold text-gray-700">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Summary Section */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-col md:flex-row items-center gap-4 p-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-semibold">8-12 Weeks Average Timeline</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-semibold">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Each stage is carefully executed to ensure quality, performance, and your complete satisfaction
        </p>
      </div>
    </div>
  </section>
);

// ---------- Why Choose Us ----------
const reasons = [
  { 
    icon: Award, 
    title: "Award‑Winning Team", 
    desc: "Our designers and developers have been recognized for excellence.",
    stats: "15+ Industry Awards",
    gradient: "from-amber-500 to-orange-500",
    bgPattern: "🏆",
    bgImage: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Clock, 
    title: "On‑Time Delivery", 
    desc: "We respect your timeline and always deliver as promised.",
    stats: "98% On-Time Rate",
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "⏰",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Users, 
    title: "Client‑Centric Approach", 
    desc: "You're a partner, not just a ticket. We communicate every step.",
    stats: "200+ Happy Clients",
    gradient: "from-purple-500 to-pink-500",
    bgPattern: "🤝",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Zap, 
    title: "Cutting‑Edge Tech", 
    desc: "We use the latest tools to build fast, secure, and future‑proof websites.",
    stats: "10+ Modern Technologies",
    gradient: "from-green-500 to-emerald-500",
    bgPattern: "⚡",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const WhyChooseUs = () => (
  <section className="relative py-16 md:py-24 overflow-hidden text-white">
    {/* Top Wave */}
    <div className="absolute top-0 left-0 w-full -mt-1 z-10">
      <WaveTransition direction="top" />
    </div>

    {/* Background Image */}
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2070&q=80"
        alt="Background"
        className="w-full h-full object-cover scale-110"
      />
    </div>

    {/* Dark Overlay - Made darker for better contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>

    {/* Decorative blob elements - Reduced opacity */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader title="Why Choose Us" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="group relative bg-white/15 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/20 hover:border-white/40"
          >
            {/* Hover Background Image - Reduced opacity to keep content readable */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src={reason.bgImage}
                alt=""
                className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-110 group-hover:scale-100"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay`}></div>
            </div>

            {/* Pattern - Reduced opacity */}
            <div className="absolute top-0 right-0 text-8xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-12">
              {reason.bgPattern}
            </div>

            {/* Gradient Border - More visible */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} group-hover:h-1.5 transition-all duration-300`}></div>

            <div className="relative p-8 z-10">
              {/* Icon - Enhanced visibility */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <reason.icon className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Title - Always readable */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-all duration-500">
                {reason.title}
              </h3>

              {/* Description - Always readable with better contrast */}
              <p className="text-gray-200 leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-500 font-medium">
                {reason.desc}
              </p>

              {/* Stats - More prominent */}
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${reason.gradient} bg-opacity-40 group-hover:bg-opacity-60 rounded-full backdrop-blur-sm transition-all duration-500`}>
                <span className="text-sm font-semibold text-white">
                  {reason.stats}
                </span>
              </div>

              {/* Progress Ring - More visible */}
              <div className="absolute bottom-4 right-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - (idx + 1) * 0.15)}
                    className="text-white transform -rotate-90 origin-center"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full z-30">
      <WaveTransition />
    </div>
  </section>
);

// ---------- Technologies We Use ----------
const techs = [
  { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95, color: "from-cyan-500 to-blue-500" },
  { name: "Vue", icon: "🟢", category: "Frontend", proficiency: 90, color: "from-green-500 to-emerald-500" },
  { name: "Tailwind CSS", icon: "🌊", category: "Styling", proficiency: 98, color: "from-sky-500 to-indigo-500" },
  { name: "Node.js", icon: "📦", category: "Backend", proficiency: 92, color: "from-green-600 to-lime-500" },
  { name: "WordPress", icon: "🔵", category: "CMS", proficiency: 88, color: "from-blue-600 to-blue-400" },
  { name: "Figma", icon: "🎨", category: "Design", proficiency: 94, color: "from-purple-500 to-pink-500" },
  { name: "Next.js", icon: "▲", category: "Framework", proficiency: 93, color: "from-gray-800 to-gray-600" },
  { name: "MongoDB", icon: "🍃", category: "Database", proficiency: 86, color: "from-green-700 to-green-500" },
];

const Technologies = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-100 via-blue to-blue-100 overflow-hidden">
      <FloatingObjects />
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SectionHeader 
          title="Technologies We Use" 
          subtitle="We leverage cutting-edge tools and frameworks to build robust, scalable solutions." 
        />
    
        {/* Main tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              <div className="p-5">
                {/* Icon with animated background */}
                <div className="relative mb-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative w-14 h-14 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    {tech.icon}
                  </div>
                </div>
                
                {/* Tech name */}
                <h3 className="text-base font-bold text-gray-900 mb-1 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
                  {tech.name}
                </h3>
                
                {/* Category badge */}
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mb-3">
                  {tech.category}
                </span>
                
                {/* Proficiency bar */}
                <div className="relative pt-1">
                  <div className="flex mb-1 items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">Proficiency</span>
                    <span className="text-xs font-bold text-indigo-600">{tech.proficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out w-0 group-hover:w-full`}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Hover effect corner */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-transparent to-indigo-100 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- FAQ Section ----------
const faqs = [
  { 
    q: "How long does it take to build a website?", 
    a: "Typical timelines range from 4–8 weeks for a custom website, depending on complexity. We'll give you a detailed estimate after our discovery call. Simple brochure sites can be ready in 3-4 weeks, while complex e-commerce platforms may take 8-12 weeks.",
    category: "timeline",
    popular: true
  },
  { 
    q: "Do you offer ongoing maintenance?", 
    a: "Absolutely! We have flexible support packages to keep your site updated, secure, and performing at its best. Options range from basic security updates to comprehensive maintenance including content updates, performance optimization, and monthly backups.",
    category: "support",
    popular: true
  },
  { 
    q: "Will my website be mobile-friendly?", 
    a: "Yes, every site we build is fully responsive and tested on all major devices and browsers. We follow a 'mobile-first' approach, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops.",
    category: "technical",
    popular: false
  },
  { 
    q: "What information do you need to start?", 
    a: "We'll guide you through the process. Initially, we need your brand guidelines (logos, colors, fonts), content ideas, goals for the website, and any examples of sites you like. Don't worry if you don't have everything—we can help develop it together.",
    category: "process",
    popular: true
  },
  { 
    q: "How much does a website cost?", 
    a: "Every project is unique, so costs vary based on complexity, features, and timeline. Basic websites start around $3,000-$5,000, while more complex projects with custom functionality range from $10,000-$50,000+. We provide transparent pricing with detailed quotes.",
    category: "pricing",
    popular: false
  },
  { 
    q: "Do you provide SEO services?", 
    a: "Yes, we build websites with SEO best practices from the ground up—clean code, fast loading, proper structure. We also offer ongoing SEO packages to help improve your search rankings and drive organic traffic.",
    category: "marketing",
    popular: false
  },
  { 
    q: "What platforms do you build on?", 
    a: "We're platform-agnostic and choose the best technology for your needs. Options include custom React/Vue sites, WordPress for content-heavy sites, Shopify for e-commerce, or Webflow for designer-friendly builds.",
    category: "technical",
    popular: true
  },
  { 
    q: "Will I be able to update the site myself?", 
    a: "Absolutely! We build with user-friendly content management systems and provide training. Whether it's WordPress, Sanity, or a custom CMS, you'll have control to update text, images, and blog posts without touching code.",
    category: "support",
    popular: false
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'timeline', name: 'Timeline', count: faqs.filter(f => f.category === 'timeline').length },
    { id: 'pricing', name: 'Pricing', count: faqs.filter(f => f.category === 'pricing').length },
    { id: 'technical', name: 'Technical', count: faqs.filter(f => f.category === 'technical').length },
    { id: 'support', name: 'Support', count: faqs.filter(f => f.category === 'support').length },
    { id: 'process', name: 'Process', count: faqs.filter(f => f.category === 'process').length },
    { id: 'marketing', name: 'Marketing', count: faqs.filter(f => f.category === 'marketing').length },
  ];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-100 to-blue-100 overflow-hidden">
      <FloatingObjects />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Got questions? We've got answers. Find everything you need to know about our process." 
        />
        
        {/* Main FAQ accordion */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${
                  openIndex === idx ? 'bg-indigo-50/30' : 'hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === idx ? 'bg-indigo-600' : 'bg-indigo-100'
                    }`}>
                      <HelpCircle size={16} className={openIndex === idx ? 'text-white' : 'text-indigo-600'} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      openIndex === idx ? 'text-indigo-600' : 'text-gray-900'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`flex-shrink-0 transition-all duration-300 ${
                      openIndex === idx ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                    }`}
                  />
                </button>
                
                {/* Answer with animation */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-16">
                    <div className="prose prose-indigo">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                    
                    {/* Category tag */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-gray-400">Category:</span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ---------- CTA Section ----------
const CTA = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {/* Top Wave */}
    <div className="absolute top-0 left-0 w-full -mt-1 z-10">
      <WaveTransition direction="top" />
    </div>
   
    {/* Background Image */}
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
        alt="Team collaborating on a project"
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        Let's Build Something{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          Amazing Together
        </span>
      </motion.h2>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/30 flex items-center gap-3 text-lg">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </motion.div>
    </div>
  </section>
);

// ---------- Main Component ----------
const WebDesignDevelopmentPage = () => {
  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans antialiased">
      <Hero />
      <Services />
      <OurProcess />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <CTA />
    </div>
  );
};

export default WebDesignDevelopmentPage;