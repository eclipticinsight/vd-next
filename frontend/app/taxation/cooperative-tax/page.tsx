"use client";

import React, { useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  COOPERATIVE_TAX_BENEFITS as taxBenefits,
  COOPERATIVE_TAX_REQUIREMENTS as requirements,
  COOPERATIVE_TAX_SERVICES as services,
  COOPERATIVE_TAX_FAQS as faqs,
  COOPERATIVE_TAX_HIGHLIGHTS as benefits
} from '@/utils/constants';
import {
  Building2,
  Calculator,
  FileCheck,
  Shield,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Calendar,
  Percent,
  PiggyBank,
  Scale,
  FileText,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Files,
  FolderOpen,
  CalendarCheck,
  DollarSign,
  ClipboardList,
  FolderTree,
  CalendarDays
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
    <div className={`relative w-full overflow-hidden pointer-events-none ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px] xl:h-[200px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const CooperativeTaxPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] =
  useState<number | null>(null);

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
  setActiveFaq(
    activeFaq === index ? null : index
  );
};

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section - Responsive */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden pt-20 lg:pt-16"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Navigate Cooperative
                <span className="block text-blue-300 mt-2 sm:mt-3">
                  Taxation with Confidence
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0">
                Specialized tax services for agricultural, consumer, worker, and
                housing cooperatives. Maximize benefits while ensuring full compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Schedule Free Consultation
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 gap-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now: {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <WaveTransition />
        </div>
      </section>

      {/* Benefits Section - Responsive */}
      <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-blue-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              ✦ Tax Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
                Tax Benefits
              </span>
              <br />
              <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">for Cooperatives</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Unlock <span className="font-semibold text-blue-600 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">exclusive tax advantages</span> designed specifically for 
              cooperative business structures. Save more while staying compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {taxBenefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative h-full flex flex-col bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100 hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-4 sm:mb-5 md:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-600 transition-colors flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section - Responsive */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                Proven <span className="text-blue-600">Results</span>
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Trusted by cooperatives nationwide for maximizing returns
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">30%</div>
                <div className="text-xs sm:text-sm font-medium text-blue-600 mb-0.5">Average Savings</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Industry leading returns</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">15+</div>
                <div className="text-xs sm:text-sm font-medium text-cyan-600 mb-0.5">Deduction Types</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Comprehensive coverage</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">100%</div>
                <div className="text-xs sm:text-sm font-medium text-indigo-600 mb-0.5">Compliance Rate</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Audit-proof filing</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">50+</div>
                <div className="text-xs sm:text-sm font-medium text-purple-600 mb-0.5">States Covered</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Nationwide presence</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -10px); }
            50% { transform: translate(20px, 0); }
            75% { transform: translate(10px, 10px); }
          }
          @media (min-width: 768px) {
            @keyframes float {
              0%, 100% { transform: translate(0, 0); }
              25% { transform: translate(20px, -20px); }
              50% { transform: translate(40px, 0); }
              75% { transform: translate(20px, 20px); }
            }
          }
          .animate-float { animation: float 15s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* Services Section - Responsive */}
      <section
        id="services"
        className="pt-12 sm:pt-16 md:pt-20 lg:pt-24
                   pb-20 sm:pb-24 md:pb-28 lg:pb-32
                   relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Tax and Accounting Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Cooperative Tax Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive tax solutions tailored to your cooperative's needs
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 auto-rows-fr">
            {services.map((service, index) => {
              const iconGradients = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-red-500",
                "from-green-500 to-emerald-500",
              ];
              const gradient = iconGradients[index % iconGradients.length];
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-6
                  border border-white/20 backdrop-blur-xl
                  transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl

                  ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/25"
                      : index === 1
                      ? "bg-gradient-to-br from-purple-500/30 to-pink-500/25"
                      : index === 2
                      ? "bg-gradient-to-br from-orange-500/30 to-red-500/25"
                      : "bg-gradient-to-br from-green-500/30 to-emerald-500/25"
                  }
                  `}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* Glow Effect */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                  {/* Content */}
                  <div className="relative z-20">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradient}
                    rounded-2xl flex items-center justify-center mb-5
                    shadow-xl group-hover:rotate-6 transition-all duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-8">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
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
                      <span className="text-gray-700 font-medium">{benefit}</span>
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

      {/* FAQ Section - Responsive */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Get answers to common questions about cooperative taxation
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-blue-50 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform flex-shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-blue-50 border-t border-blue-100">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full -mt-2 sm:-mt-3 z-10">
          <WaveTransition direction="top" />
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bookkeeping-cta-bg.webp"
            alt="Tax Planning Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-6 sm:mt-8 md:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            Ready to Optimize Your Cooperative's Taxes?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-4">
            Join hundreds of cooperatives that trust us with their tax preparation and planning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-center"
            >
              Schedule Free Consultation
            </a>
            
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CooperativeTaxPage;