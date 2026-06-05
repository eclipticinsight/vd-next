"use client";

import React, { useRef, useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Shield, 
  Users, 
  BarChart, 
  CloudUpload, 
  Calendar, 
  Star,
  TrendingUp,
  Clock,
  Database,
  LayoutDashboard,
  FileCheck
} from "lucide-react";
import Image from "next/image";

// Wave Transition Component
export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
  
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#c9ddf6" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const SoftwareMigrationPage = () => {
  const sectionRef = useRef(null);

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(15px) translateX(-15px); }
        75% { transform: translateY(-10px) translateX(20px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-15px) translateX(10px); }
        66% { transform: translateY(10px) translateX(-10px); }
      }
      
      @keyframes float-delay {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-25px) translateX(-10px); }
        50% { transform: translateY(20px) translateX(15px); }
        75% { transform: translateY(-15px) translateX(-20px); }
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delay {
        animation: float-delay 7s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "QuickBooks Online",
      description: "Seamless migration, cleanup, and optimization of your QuickBooks Online environment.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "Bill.com",
      description: "AP/AR automation setup with approval workflows and clean payment integrations.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Microsoft SharePoint",
      description: "Structured financial document management and secure collaboration setup.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "QuickBooks Desktop",
      description: "Version upgrades, file repair, hosting migration, and cloud transition support.",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Gusto & ADP Payroll",
      description: "Payroll system setup, tax compliance configuration, and HR integrations.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Stripe",
      description: "Payment gateway integration with automated reconciliation and reporting sync.",
      gradient: "from-indigo-600 to-purple-700"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "QuickBooks Desktop → QuickBooks Online (QBD → QBO)",
      description: "Full historical data migration from QuickBooks Desktop to QuickBooks Online with account mapping, payroll alignment, and reconciliation validation.",
      icon: <Database className="w-8 h-8 text-indigo-600" />
    },
    {
      step: "02",
      title: "QuickBooks Online → QuickBooks Desktop (QBO → QBD)",
      description: "Structured downgrade or enterprise transition with secure data export, file rebuild, and balance verification.",
      icon: <CloudUpload className="w-8 h-8 text-indigo-600" />
    },
    {
      step: "03",
      title: "Xero ↔ QuickBooks Online (Xero → QBO / QBO → Xero)",
      description: "Seamless platform switching with chart-of-accounts restructuring, bank feed setup, and clean opening balance adjustments.",
      icon: <BarChart className="w-8 h-8 text-indigo-600" />
    },
    {
      step: "04",
      title: "Wave / Sage → QuickBooks Online",
      description: "Complete migration from Wave or Sage to QBO including customer/vendor data, open invoices, payroll history, and tax configuration.",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden">
      {/* Hero Section - More dramatic gradient */}
      <section className="relative text-white overflow-hidden pt-6 md:pt-10 lg:pt-12 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg')",
          }}
        />

        {/* Dark Base Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Blue Finance Tone Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-black/50 to-black/70"></div>

        {/* Soft Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pb-40">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Software Setup & <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text">
                Migration
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 hover:border-white/50 text-white font-medium px-8 py-5 rounded-2xl backdrop-blur-sm transition-all flex items-center gap-2 text-lg justify-center"
              >
                <Calendar className="w-5 h-5" />
                Schedule strategy call
              </a>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveTransition direction="bottom" />
        </div>
      </section>
      
      {/* Software Setup Section */}
      <section className="relative py-28 bg-blue-100 overflow-hidden">
        {/* Animated Background Objects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Circle 1 */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/100 rounded-full animate-float-slow"></div>

          {/* Floating Circle 2 */}
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-indigo-200/40 rounded-full animate-float"></div>

          {/* Small Accent Bubble */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-cyan-200/100 rounded-full animate-float-delay"></div>
          
          {/* Professional Background Objects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Faint Bar Chart */}
            <div className="absolute bottom-16 left-16 flex items-end gap-2 opacity-30 animate-float-slow">
              <div className="w-5 h-20 bg-blue-500/60 rounded-sm"></div>
              <div className="w-5 h-28 bg-blue-600/60 rounded-sm"></div>
              <div className="w-5 h-16 bg-blue-400/60 rounded-sm"></div>
              <div className="w-5 h-24 bg-blue-700/60 rounded-sm"></div>
            </div>

            {/* Soft Line Graph Box */}
            <div className="absolute top-24 right-24 w-72 h-40 border border-blue-500/40 rounded-xl opacity-30 animate-float">
              <div className="absolute bottom-10 left-6 w-56 h-1 bg-blue-600 rotate-6"></div>
            </div>

            {/* Large Transparent Dollar */}
            <div className="absolute top-1/3 left-1/4 text-[140px] font-bold text-pink-500/20 animate-float-delay">
              $
            </div>

            {/* Document Shape */}
            <div className="absolute bottom-24 right-1/4 w-36 h-44 bg-pink-400/30 rounded-xl animate-float"></div>

            {/* Small Floating Squares */}
            <div className="absolute top-12 left-1/2 w-8 h-8 bg-indigo-400/50 rotate-12 animate-float"></div>
            <div className="absolute bottom-36 left-1/3 w-10 h-10 bg-blue-500/40 rotate-45 animate-float-delay"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
              Software Setup
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Migrations Section */}
      <section className="relative py-28 min-h-[800px] text-white overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-black/60 to-black/80"></div>

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Supported Migrations
            </h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Structured, secure transitions between major accounting platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/10 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-indigo-600 transition-all">
                  {React.cloneElement(step.icon, {
                    className: "w-8 h-8 transition-all duration-300"
                  })}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-indigo-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveTransition />
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section ref={sectionRef} className="relative py-20 bg-blue-100 overflow-hidden">
        {/* Animated Background Objects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Circle 1 */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/100 rounded-full animate-float-slow"></div>

          {/* Floating Circle 2 */}
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-indigo-200/40 rounded-full animate-float"></div>

          {/* Professional Background Objects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Faint Bar Chart */}
            <div className="absolute bottom-16 left-16 flex items-end gap-2 opacity-30 animate-float-slow">
              <div className="w-5 h-20 bg-blue-500/60 rounded-sm"></div>
              <div className="w-5 h-28 bg-blue-600/60 rounded-sm"></div>
              <div className="w-5 h-16 bg-blue-400/60 rounded-sm"></div>
              <div className="w-5 h-24 bg-blue-700/60 rounded-sm"></div>
            </div>

            {/* Soft Line Graph Box */}
            <div className="absolute top-24 right-24 w-72 h-40 border border-blue-500/40 rounded-xl opacity-30 animate-float">
              <div className="absolute bottom-10 left-6 w-56 h-1 bg-blue-600 rotate-6"></div>
            </div>

            {/* Large Transparent Dollar */}
            <div className="absolute top-1/3 left-1/4 text-[140px] font-bold text-pink-500/20 animate-float-delay">
              $
            </div>

            {/* Small Floating Squares */}
            <div className="absolute top-12 left-1/2 w-8 h-8 bg-indigo-400/50 rotate-12 animate-float"></div>
            <div className="absolute bottom-36 left-1/3 w-10 h-10 bg-blue-500/40 rotate-45 animate-float-delay"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative">
          {/* EXACT LABEL */}
          <div className="mb-3">
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Value Proposition
          </h2>

          {/* Connector lines */}
          <svg
            className="absolute left-1/2 top-32 -translate-x-1/2 hidden lg:block"
            width="900"
            height="220"
            viewBox="0 0 900 220"
            fill="none"
          >
            <path
              d="M450 0 V60 C450 80 430 90 410 90 H100 V180"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M450 0 V60 H300 V180"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M450 0 V60 H600 V180"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M450 0 V60 C450 80 470 90 490 90 H800 V180"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Cards */}
          <div className="relative mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* PERSONAL SUPPORT */}
            <div className="flex flex-col items-center group">
              <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
                <Image
                  src="/animations/help-desk.png"
                  alt="Personal Support"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                PERSONAL SUPPORT
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
                You get your own expert no bots, no confusion.
              </p>
            </div>

            {/* BETTER VALUE */}
            <div className="flex flex-col items-center group">
              <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
                <Image
                  src="/animations/increase.png"
                  alt="Better Value"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                BETTER VALUE
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
                Quality accounting without the big price tag.
              </p>
            </div>

            {/* YOUR DASHBOARD */}
            <div className="flex flex-col items-center group">
              <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
                <Image
                  src="/animations/dashboard.png"
                  alt="Your Dashboard"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                YOUR DASHBOARD
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
                See your numbers anytime, anywhere.
              </p>
            </div>

            {/* LIVE UPDATE */}
            <div className="flex flex-col items-center group">
              <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
                <Image
                  src="/animations/update.png"
                  alt="Live Update"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                LIVE UPDATE
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
                Stay in the loop with real-time financial info.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - cinematic background */}
      <section className="relative text-white py-28 min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-black/60 to-black/80"></div>

        {/* Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to elevate your accounting stack?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-white/60 text-white font-medium px-8 py-5 rounded-2xl backdrop-blur-sm transition-all text-lg inline-block"
            >
              Talk to a migration expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareMigrationPage;