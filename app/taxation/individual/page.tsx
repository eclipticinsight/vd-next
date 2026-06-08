"use client";

import React, { useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  INDIVIDUAL_TAX_BENEFITS as benefits,
  INDIVIDUAL_TAX_FILING_STATUSES as filingStatuses,
  INDIVIDUAL_TAX_DEDUCTIONS as deductions,
  INDIVIDUAL_TAX_CREDITS as credits,
  INDIVIDUAL_TAX_DOCUMENTS as documents,
  INDIVIDUAL_TAX_FAQS as faqs,
  INDIVIDUAL_TAX_BRACKETS as brackets
} from '@/utils/constants';
import {
  Calculator,
  CheckCircle,
  ChevronDown, 
  Phone,
} from 'lucide-react';
import Image from 'next/image';

interface WaveProps {
  direction?: "top" | "bottom";
}

export const WaveTransition = ({
  direction = "bottom",
}: WaveProps) => {
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

const IndividualTaxationPage = () => {
  const [activeFaq, setActiveFaq] =
  useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('filers');

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-3d {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-20px) translateX(15px) rotate(5deg); }
        50% { transform: translateY(15px) translateX(-10px) rotate(-3deg); }
        75% { transform: translateY(-10px) translateX(20px) rotate(2deg); }
      }
      
      @keyframes float-3d-slow {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-15px) translateX(12px) rotate(3deg); }
        50% { transform: translateY(20px) translateX(-15px) rotate(-4deg); }
        75% { transform: translateY(-8px) translateX(18px) rotate(2deg); }
      }
      
      @keyframes float-3d-delay {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-25px) translateX(18px) rotate(6deg); }
        50% { transform: translateY(18px) translateX(-12px) rotate(-5deg); }
        75% { transform: translateY(-12px) translateX(22px) rotate(3deg); }
      }
      
      @keyframes spin-3d {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes spin-3d-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      
      @keyframes float-particle {
        0% { transform: translateY(0px) translateX(0px); opacity: 0; }
        50% { opacity: 0.6; }
        100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
      }
      
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(40px, 0); }
        75% { transform: translate(20px, 20px); }
      }
      
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes slide {
        0% { transform: translateX(-30px); }
        50% { transform: translateX(30px); }
        100% { transform: translateX(-30px); }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .animate-float-3d {
        animation: float-3d 8s ease-in-out infinite;
      }
      
      .animate-float-3d-slow {
        animation: float-3d-slow 12s ease-in-out infinite;
      }
      
      .animate-float-3d-delay {
        animation: float-3d-delay 10s ease-in-out infinite;
      }
      
      .animate-spin-3d {
        animation: spin-3d 20s linear infinite;
      }
      
      .animate-spin-3d-reverse {
        animation: spin-3d-reverse 25s linear infinite;
      }
      
      .animate-float { animation: float 15s ease-in-out infinite; }
      .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      .animate-slide { animation: slide 8s ease-in-out infinite; }
      .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      
      .animation-delay-1000 { animation-delay: 1s; }
      .animation-delay-1500 { animation-delay: 1.5s; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-3000 { animation-delay: 3s; }
      .animation-delay-4000 { animation-delay: 4s; }
      
      .perspective-1000 {
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dark Overlay */}
      <section className="relative min-h-[650px]
pt-28 md:pt-28 lg:pt-32
pb-28 md:pb-28 lg:pb-32
flex items-center text-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Person working on taxes" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Stress-Free Tax Filing
                <span className="block text-gray-300">For Individuals & Families</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Benefits Section - Transparent Moving Objects */}
      <section className="py-20 relative overflow-hidden bg-blue-100">
        {/* Transparent Moving Background Objects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles - transparent */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/15 rounded-full mix-blend-multiply animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/12 rounded-full mix-blend-multiply animate-float animation-delay-2000"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-indigo-200/10 rounded-full mix-blend-multiply animate-float animation-delay-4000"></div>
          
          {/* Small moving dots - transparent */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-cyan-400/18 rounded-full animate-bounce-slow animation-delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-indigo-400/15 rounded-full animate-bounce-slow animation-delay-2000"></div>
          
          {/* Moving lines - transparent */}
          <div className="absolute top-60 left-0 w-40 h-px bg-gradient-to-r from-blue-400/20 to-transparent rounded-full animate-slide"></div>
          <div className="absolute bottom-60 right-0 w-60 h-px bg-gradient-to-l from-cyan-400/20 to-transparent rounded-full animate-slide animation-delay-3000"></div>
          
          {/* Floating shapes - transparent */}
          <div className="absolute top-1/3 right-20">
            <div className="w-12 h-12 border border-blue-300/10 rounded-lg animate-spin-slow"></div>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <div className="w-16 h-16 border border-cyan-300/10 rounded-full animate-spin-slow animation-delay-1500"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Smart Tax Filing
              </span>
              <br />
              <span className="text-gray-800">for Individuals</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const gradients = [
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",

  // Fast Processing - Purple
  "from-purple-500 to-pink-500",

  // Year-Round Support - Orange
  "from-orange-500 to-red-500"
];

const bgGradients = [
  "bg-gradient-to-br from-blue-100/80 to-cyan-100/60",
  "bg-gradient-to-br from-cyan-100/80 to-teal-100/60",

  // Fast Processing
  "bg-gradient-to-br from-purple-100/80 to-pink-100/60",

  // Year-Round Support
  "bg-gradient-to-br from-orange-100/80 to-red-100/60"
];
              
              const gradient = gradients[index % gradients.length];
              const bgGradient = bgGradients[index % bgGradients.length];
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden`}
                >
                  {/* Decorative background pattern - transparent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                  
                  {/* Icon with gradient */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {benefit.icon}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradient} transition-all`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Bottom bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              );
            })}
          </div>

          {/* Stats Row - Transparent */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/30">
              <div className="text-3xl font-black text-blue-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-cyan-200/30">
              <div className="text-3xl font-black text-cyan-600">$2.3B</div>
              <div className="text-sm text-gray-600 mt-1">Refunds Secured</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-indigo-200/30">
              <div className="text-3xl font-black text-indigo-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/30">
              <div className="text-3xl font-black text-blue-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Checklist - Transparent Background */}
      <section className="relative w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80"
            alt="Tax documents background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-white mt-6 lg:mt-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-blue-300 rounded-full text-sm font-semibold mb-6">
              Get Organized
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What You'll Need
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Use our checklist to gather everything before you start.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {documents.map((section, idx) => (
              <div
                key={idx}
                className={`group backdrop-blur-md rounded-2xl p-6 lg:p-8
                  border border-white/20 shadow-lg
                  transition-all duration-500
                  hover:shadow-2xl hover:-translate-y-2
                  ${
                    idx === 0
                      ? "bg-white/10 hover:bg-gradient-to-br hover:from-blue-500/25 hover:to-cyan-500/25 hover:border-cyan-400/50"
                      : idx === 1
                      ? "bg-white/10 hover:bg-gradient-to-br hover:from-purple-500/25 hover:to-pink-500/25 hover:border-pink-400/50"
                      : "bg-white/10 hover:bg-gradient-to-br hover:from-green-500/25 hover:to-emerald-500/25 hover:border-emerald-400/50"
                  }`}
              >
                <h3 className="text-xl font-bold mb-6 text-white transition-all duration-300 group-hover:text-cyan-200">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Why Choose Us - Light Blue BG with Moving 3D Objects */}
      <div className="relative py-24">
        {/* Light Blue Base Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>
        
        {/* Moving 3D Objects - Only these move */}
        <div className="absolute inset-0 perspective-1000 pointer-events-none">
          {/* Floating cubes */}
          <div className="absolute top-10 left-[5%] w-16 h-16 bg-blue-400/20 rounded-xl rotate-12 animate-float-3d"
               style={{ transform: 'translateZ(30px) rotateX(15deg) rotateY(25deg)' }}></div>
          <div className="absolute top-32 right-[8%] w-24 h-24 bg-purple-400/20 rounded-2xl rotate-45 animate-float-3d-delay"
               style={{ transform: 'translateZ(60px) rotateX(20deg) rotateY(35deg)' }}></div>
          <div className="absolute bottom-24 left-[12%] w-20 h-20 bg-cyan-400/20 rounded-3xl rotate-90 animate-float-3d-slow"
               style={{ transform: 'translateZ(40px) rotateX(10deg) rotateY(45deg)' }}></div>
          
          {/* Floating spheres */}
          <div className="absolute top-1/3 right-[15%] w-32 h-32 bg-blue-300/20 rounded-full blur-sm animate-float-3d"
               style={{ transform: 'translateZ(50px)' }}></div>
          <div className="absolute bottom-1/4 left-[20%] w-40 h-40 bg-purple-300/20 rounded-full blur-sm animate-float-3d-slow"
               style={{ transform: 'translateZ(70px)' }}></div>
          
          {/* Rotating rings */}
          <div className="absolute top-2/3 left-[30%] w-36 h-36 border-2 border-blue-300/30 rounded-full animate-spin-3d"
               style={{ transform: 'translateZ(45px) rotateX(50deg)' }}></div>
          <div className="absolute top-1/2 right-[25%] w-48 h-48 border-2 border-purple-300/30 rounded-full animate-spin-3d-reverse"
               style={{ transform: 'translateZ(80px) rotateY(40deg)' }}></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateZ(${Math.random() * 80 + 20}px)`,
                animation: `float-particle ${Math.random() * 6 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
          
          {/* 3D grid lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="moving-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-grad)" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#moving-grid)"/>
            </svg>
          </div>
        </div>
      
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Why Choose Us Content (Static) */}
            <div className="space-y-8">
              {/* Main Heading with Gradient */}
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Why Choose Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tax Services?
                </span>
              </h2>
      
              {/* Description with Icon */}
              <div className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-100/50 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With <span className="font-bold text-blue-600">15+ years of experience</span> and a commitment to excellence, 
                  we ensure your taxes are handled with precision and care.
                </p>
              </div>
      
              {/* Benefits Grid with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const colors = [
                    { bg: "bg-blue-100/80", text: "text-blue-600", border: "border-blue-200", icon: "text-blue-600" },
                    { bg: "bg-purple-100/80", text: "text-purple-600", border: "border-purple-200", icon: "text-purple-600" },
                    { bg: "bg-green-100/80", text: "text-green-600", border: "border-green-200", icon: "text-green-600" },
                    { bg: "bg-amber-100/80", text: "text-amber-600", border: "border-amber-200", icon: "text-amber-600" },
                    { bg: "bg-pink-100/80", text: "text-pink-600", border: "border-pink-200", icon: "text-pink-600" },
                    { bg: "bg-indigo-100/80", text: "text-indigo-600", border: "border-indigo-200", icon: "text-indigo-600" }
                  ];
                  const color = colors[index % colors.length];
      
                  return (
                    <div 
                      key={index} 
                      className={`group flex items-center gap-3 p-4 ${color.bg} backdrop-blur-sm rounded-xl border ${color.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className={`w-8 h-8 rounded-full bg-white ${color.icon} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
      
            {/* Right Column - Consultation Form (Static) */}
            <div className="relative">
              {/* Decorative background - static but with glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Form Card */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50">
                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                
                {/* Decorative pattern - static */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%">
                    <pattern id="form-pattern-static" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="#3b82f6"/>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#form-pattern-static)"/>
                  </svg>
                </div>
      
                <div className="relative p-8 md:p-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Ready to optimize your taxes?</h3>
                      <p className="text-gray-500">Get a free consultation today</p>
                    </div>
                  </div>
      
                  {/* Benefits List */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full border border-blue-200">✓ Free 30-min call</span>
                    <span className="px-3 py-1 bg-purple-100/80 backdrop-blur-sm text-purple-700 text-xs font-semibold rounded-full border border-purple-200">✓ No obligation</span>
                    <span className="px-3 py-1 bg-green-100/80 backdrop-blur-sm text-green-700 text-xs font-semibold rounded-full border border-green-200">✓ Expert advice</span>
                  </div>
      
                  {/* Form */}
                  <div className="space-y-5">
                    <iframe
                      src="https://forms.office.com/Pages/ResponsePage.aspx?id=yMabWpDCxEastsnhmE2W-mFI-VeFxbZOn60RulHW7UxUNEtMSkg4VlkwU1YyNTIwUUVVUVEwME4wUS4u&embed=true"
                      className="w-full rounded-xl"
                      style={{
                        width: "100%",
                        minHeight: "650px",
                        border: "none",
                        maxWidth: "100%",
                      }}
                      title="Microsoft Form"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Transparent Moving Objects */}
      <section className="relative w-full py-20 overflow-hidden bg-blue-100">
        {/* Transparent floating colorful shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300/8 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-yellow-300/8 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-green-300/8 rounded-full animate-float animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/8 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about individual taxation
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-200/50">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/90 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 py-4 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dark Overlay */}
      <section className="py-28 relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tax consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Maximize Your Tax Refund?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients who trust us with their taxes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Start Your Return
            </a>
            <a
              href="tel:+17275649476"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {CONTACT_INFO.phone}
            </a>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default IndividualTaxationPage;