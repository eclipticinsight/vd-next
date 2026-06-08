"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mail, Send, Users, TrendingUp, CheckCircle, X, 
  BookOpen, Award, Clock, Target, BarChart, PieChart,
  Zap, Shield, Download, Star, ChevronRight, Calendar,
  MessageCircle, Share2, Globe, Heart, Bell, Gift,
  Coffee, Smartphone, Settings, HelpCircle, DollarSign, ArrowRight
} from 'lucide-react';
import {
  EMAIL_PAGE_STATS,
  EMAIL_PAGE_FEATURES,
  EMAIL_PAGE_BENEFITS,
  EMAIL_PAGE_TESTIMONIALS,
  EMAIL_PAGE_RECENT_POSTS,
  EMAIL_PAGE_FAQS,
  EMAIL_PAGE_RESOURCES,
  EMAIL_PAGE_EVENTS,
  EMAIL_PAGE_SALES_SERVICES,
  EMAIL_PAGE_AUTOMATION_SERVICES,
  EMAIL_PAGE_PROCESS_STEPS,
  EMAIL_PAGE_COMPARISON_ROWS,
  EMAIL_PAGE_CHALLENGES,
  EMAIL_PAGE_SOLUTIONS
} from '@/utils/constants';

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

const LightBlueBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${(i * 17) % 100}%`,
    left: `${(i * 23) % 100}%`,
    delay: `${i % 6}s`,
    duration: `${15 + (i % 10)}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-40 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float animation-delay-3000"></div>

      {/* Floating squares */}
      <div className="absolute top-32 left-1/4 w-12 h-12 bg-blue-300/40 rotate-12 animate-float"></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-cyan-300/40 rotate-45 animate-float animation-delay-2000"></div>

      {/* Rotating rings */}
      <div className="absolute top-1/3 right-20 w-40 h-40 border-2 border-blue-300/40 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-20 w-56 h-56 border border-cyan-300/30 rounded-full animate-spin-reverse"></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float-particle"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

const EmailMarketingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<{
  email?: string;
}>({});
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [hoveredResource, setHoveredResource] = useState(null);

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translate(0px, 0px); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(40px, 0px); }
        75% { transform: translate(20px, 20px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      
      @keyframes float-particle {
        0% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(100px, -100px); opacity: 0; }
      }
      
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes ping-slow {
        0% { transform: scale(0.8); opacity: 0.8; }
        100% { transform: scale(1.5); opacity: 0; }
      }
      
      .animate-float-slow {
        animation: float-slow 15s ease-in-out infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      .animate-spin-reverse {
        animation: spin-reverse 25s linear infinite;
      }
      
      .animate-float-particle {
        animation: float-particle linear infinite;
      }
      
      .animate-slideIn {
        animation: slideIn 0.5s ease-out;
      }
      
      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-3000 {
        animation-delay: 3s;
      }
      
      .bg-grid-pattern {
        background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0);
        background-size: 40px 40px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string } = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length === 0) {
      // Subscribed log removed
      setIsSubscribed(true);
      setShowPopup(true);
      setEmail('');
      setFormErrors({});
      
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      setFormErrors(errors);
    }
  };

  const featureParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${(i * 13) % 100}%`,
  left: `${(i * 19) % 100}%`,
  delay: `${i % 5}s`,
  duration: `${10 + (i % 10)}s`,
}));

  const stats = EMAIL_PAGE_STATS;
  const features = EMAIL_PAGE_FEATURES;
  const benefits = EMAIL_PAGE_BENEFITS;
  const testimonials = EMAIL_PAGE_TESTIMONIALS;
  const recentPosts = EMAIL_PAGE_RECENT_POSTS;
  const faqs = EMAIL_PAGE_FAQS;
  const resources = EMAIL_PAGE_RESOURCES;
  const upcomingEvents = EMAIL_PAGE_EVENTS;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
            <CheckCircle className="w-5 h-5" />
            <div>
              <p className="font-semibold">Successfully subscribed!</p>
              <p className="text-sm text-green-100">Check your inbox for confirmation</p>
            </div>
            <button 
              onClick={() => setShowPopup(false)}
              className="hover:bg-green-600 rounded-full p-1 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Ultra Clean */}
      <div className="relative z-20 h-[500px] md:h-[700px] flex items-center pt-20 md:pt-32 pb-20 md:pb-32">
        {/* Background Image with Simple Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Content - No boxes, no cards, just text */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
            Master Email Marketing
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Join 10,000+ marketers. Get insights in 5 minutes a week.
          </p>
          
          {formErrors.email && (
            <p className="text-sm text-blue-400 mt-2">{formErrors.email}</p>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>

      {/* Email Marketing Services Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">   
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Email Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of email to grow your business through strategic sales campaigns 
              and intelligent automation
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Sales */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-200/50 shadow-xl h-full flex flex-col transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-32 transition-all duration-500"></div>
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:rotate-3 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Email Sales</h2>
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-ping-slow"></span>
                    <span className="font-medium">Revenue Focused</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed border-l-4 border-blue-400 pl-4 italic bg-blue-50/30 py-2 rounded-r-lg">
                  Drive revenue through targeted promotional campaigns and strategic sales sequences 
                  that convert prospects into customers.
                </p>

                <div className="space-y-4 flex-grow">
                  {EMAIL_PAGE_SALES_SERVICES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item p-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.text}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl">
                    <span className="text-gray-600 font-medium">Average ROI</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                        4200%
                      </span>
                      <span className="text-sm text-gray-500">return</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Automation */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-purple-200/50 shadow-xl h-full flex flex-col transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-32 transition-all duration-500"></div>
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-purple-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 transform group-hover:-rotate-3 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Email Automation</h2>
                  <div className="flex items-center text-sm text-purple-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-ping-slow"></span>
                    <span className="font-medium">Workflow Optimized</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed border-l-4 border-purple-400 pl-4 italic bg-purple-50/30 py-2 rounded-r-lg">
                  Set up intelligent workflows that nurture leads, engage customers, and deliver 
                  the right message at the perfect time—automatically.
                </p>

                <div className="space-y-4 flex-grow">
                  {EMAIL_PAGE_AUTOMATION_SERVICES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                      <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.text}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-purple-200">
                  <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-white p-4 rounded-xl">
                    <span className="text-gray-600 font-medium">Time saved</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                        20+ hrs
                      </span>
                      <span className="text-sm text-gray-500">per week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                window.location.href = "/contact";
              }}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              
              <span className="relative flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Start Your Email Marketing Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Sales Email Marketing Section - Multi-Color */}
      <div className="py-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
        <LightBlueBackground />

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Process Of Email{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convert prospects into customers with data-driven sales email campaigns that deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMAIL_PAGE_PROCESS_STEPS.map((item, idx) => (
              <div key={idx} className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 ${item.border}`}>
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  <span className={`text-3xl ${item.iconColor}`}>{item.icon}</span>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 ${item.hoverText} transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-sm text-gray-600 flex items-center">
                      <span className={`w-1.5 h-1.5 ${item.bulletColor} rounded-full mr-2`}></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Powerful Feature Section */}
      <div id="features" className="py-24 relative">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80"></div>
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Office background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 mix-blend-overlay z-20"></div>
        </div>
        
        {/* Animated background elements (on top of image but behind content) */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
          
          {/* Moving particles effect */}
          <div className="absolute inset-0 opacity-30">
            {featureParticles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
style={{
  top: particle.top,
  left: particle.left,
  animationDelay: particle.delay,
  animationDuration: particle.duration,
}}
              />
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300">Everything you need to grow your email list and revenue</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const colorSchemes = [
                { gradient: "from-blue-400 to-cyan-400", lightBg: "from-blue-500/20 to-cyan-500/20", iconBg: "from-blue-500 to-cyan-500", border: "group-hover:border-blue-400", text: "text-blue-400", shadow: "hover:shadow-blue-500/30", bg: "bg-white/5" },
                { gradient: "from-purple-400 to-pink-400", lightBg: "from-purple-500/20 to-pink-500/20", iconBg: "from-purple-500 to-pink-500", border: "group-hover:border-purple-400", text: "text-purple-400", shadow: "hover:shadow-purple-500/30", bg: "bg-white/5" },
                { gradient: "from-green-400 to-emerald-400", lightBg: "from-green-500/20 to-emerald-500/20", iconBg: "from-green-500 to-emerald-500", border: "group-hover:border-green-400", text: "text-green-400", shadow: "hover:shadow-green-500/30", bg: "bg-white/5" },
                { gradient: "from-orange-400 to-red-400", lightBg: "from-orange-500/20 to-red-500/20", iconBg: "from-orange-500 to-red-500", border: "group-hover:border-orange-400", text: "text-orange-400", shadow: "hover:shadow-orange-500/30", bg: "bg-white/5" },
                { gradient: "from-indigo-400 to-blue-400", lightBg: "from-indigo-500/20 to-blue-500/20", iconBg: "from-indigo-500 to-blue-500", border: "group-hover:border-indigo-400", text: "text-indigo-400", shadow: "hover:shadow-indigo-500/30", bg: "bg-white/5" },
                { gradient: "from-pink-400 to-rose-400", lightBg: "from-pink-500/20 to-rose-500/20", iconBg: "from-pink-500 to-rose-500", border: "group-hover:border-blue-400", text: "text-pink-400", shadow: "hover:shadow-pink-500/30", bg: "bg-white/5" }
              ];
              
              const colors = colorSchemes[index % colorSchemes.length];
              
              return (
                <div
                  key={index}
                  className={`group relative backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${colors.shadow}`}
                  style={{
                    animation: `float 3s ease-in-out ${index * 0.2}s infinite`
                  }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.lightBg} backdrop-blur-sm`}></div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -m-[1px]`}></div>
                  
                  <div className={`relative ${colors.bg} backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-colors`}>
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {feature.icon}
                      </div>
                      
                      <h3 className={`text-xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors`}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">{feature.description}</p>
                      
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className={`w-4 h-4 ${colors.text} mr-2 flex-shrink-0`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <button className={`font-semibold text-sm flex items-center group/btn bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
                          Learn more 
                          <ChevronRight className={`w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform ${colors.text}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>

      {/* Email Marketing Comparison Table */}
      <div className="py-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
        <LightBlueBackground />

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Automation vs{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sales Email
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful approaches. Different goals. Maximum impact when used together.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="p-6 font-bold text-lg flex items-center">Feature</div>
              <div className="p-6 font-bold text-lg bg-blue-600/20 flex items-center">
                <span className="mr-2">🤖</span> Automation Email
              </div>
              <div className="p-6 font-bold text-lg bg-purple-600/20 flex items-center">
                <span className="mr-2">💰</span> Sales Email
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {EMAIL_PAGE_COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition">
                  <div className="p-6 font-semibold text-gray-900 bg-gray-50/50">{row.feature}</div>
                  <div className="p-6 text-gray-700">{row.automation}</div>
                  <div className="p-6 text-gray-700">{row.sales}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation Email</h3>
              </div>
              <p className="text-gray-700 mb-3">Best for scaling communication and nurturing leads at every stage.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Set it and forget it efficiency
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Perfect for lead nurturing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Scales with your audience
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sales Email</h3>
              </div>
              <p className="text-gray-700 mb-3">Best for direct revenue generation and high-value prospect outreach.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Higher conversion potential
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Personalized at scale
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Direct revenue attribution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Section with Glassmorphism */}
      <div className="relative py-24 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg" 
            alt="Email marketing background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">The Problem & The Fix</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
              From <span className="text-red-400">Challenges</span> to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Challenges */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red-500/30">
                  <span className="text-2xl text-red-400 font-bold">!</span>
                </div>
                <h3 className="text-3xl font-bold text-white">The Challenge</h3>
              </div>
              
              <div className="space-y-6">
                {EMAIL_PAGE_CHALLENGES.map((challenge, idx) => (
                  <div key={idx} className="group relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-400 hover:-translate-y-2 overflow-hidden">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                        <span className="text-blue-400 text-xl">{challenge.icon}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {challenge.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {challenge.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Solutions */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Our Solution</h3>
              </div>
              
              <div className="space-y-6">
                {EMAIL_PAGE_SOLUTIONS.map((solution, idx) => (
                  <div key={idx} className="group relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-white/10 hover:border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 rounded-2xl group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all"></div>
                    <div className="flex items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition group-hover:bg-white/30">
                        <span className="text-white text-xl">{solution.icon}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{solution.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{solution.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="relative bg-blue-100 py-16 overflow-hidden">
        <LightBlueBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the newsletter
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      selectedFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative py-28 text-blue-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2000&q=80"
            alt="Email Marketing Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join 10,000+ Email Marketing Pros
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest strategies, tools, and insights delivered to your inbox every week
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
            {formErrors.email && (
              <p className="text-sm text-red-400 mt-2">{formErrors.email}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingPage;