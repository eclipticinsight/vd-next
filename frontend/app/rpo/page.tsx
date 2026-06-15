'use client';

import { useState, useEffect } from 'react';
import {
  ChevronRight, Star
} from 'lucide-react';
import WaveTransition from '@/components/sections/WaveTransition';
import {
  RPO_SERVICES as services,
  RPO_STATS as stats,
  RPO_WHY_CHOOSE_US as whyChooseUs,
  RPO_INDUSTRIES as industries
} from '@/utils/constants';

export default function RPOShowcase() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="min-h-[550px] md:min-h-[700px] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://contentstatic.timesjobs.com/photo/74902695/slideshows/5-tips-to-prepare-for-group-discussion-rounds.jpg')"
        }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <div className="space-y-6 text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Hiring <br />
                with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Strategic RPO
                </span>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Scale your workforce efficiently, reduce time-to-hire by 40%, and access top talent globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center group"
                >
                  Start Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-100 via-blue to-blue-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-100/20 to-transparent rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animation */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                RPO Solutions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end recruitment outsourcing tailored to your business needs
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                data-animate={`service-${idx}`}
                style={{
                  opacity: isVisible[`service-${idx}` as keyof typeof isVisible] ? 1 : 0,

                  transform: isVisible[`service-${idx}` as keyof typeof isVisible]
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${service.delay * 0.1}s, transform 0.6s ease-out ${service.delay * 0.1}s`
                }}
                id={`service-${idx}`}
              >
                {/* Animated Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500 -z-10"
                  style={{
                    padding: '2px',
                    background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}>
                </div>

                {/* Icon Section with Pulse Effect */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${service.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 group-hover:shadow-xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title with Gradient on Hover */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                {/* Extended Description on Hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 mb-0 group-hover:mb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.longDesc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://tse1.mm.bing.net/th/id/OIP.UjXZCrAhUC_LmUI1yipX4QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3')"
        }}>
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-4">
              <span className="text-xs font-semibold text-white">PERFORMANCE METRICS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Proven Results That Speak Volumes</h3>
            <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Our RPO solutions deliver measurable impact for businesses of all sizes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx}
                data-animate={`stat-${idx}`}
                style={{
                  opacity: isVisible[`service-${idx}` as keyof typeof isVisible] ? 1 : 0,

                  transform: isVisible[`service-${idx}` as keyof typeof isVisible]
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${idx * 0.1}s, transform 0.6s ease-out ${idx * 0.1}s`
                }}
                className="group relative">
                <div className="relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"></div>
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-br ${stat.color}`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-200 mb-2">{stat.label}</div>
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur rounded-full">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs font-semibold text-green-400">{stat.trend}</span>
                      <span className="text-xs text-gray-300">vs last year</span>
                    </div>
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

      {/* RPO Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">RPO Process</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">A 360° approach to recruitment excellence</p>
          </div>

          {/* Circular Process - Cards on Circle Surface */}
          <div className="relative max-w-7xl mx-auto">
            {/* Main Circle */}
            <div className="relative w-[750px] h-[750px] mx-auto hidden md:block">

              {/* Rotating Dashed Circle Line */}
              <div className="absolute inset-0 rounded-full pointer-events-none rotating-border"></div>

              {/* Rotating Dotted Circle Line (opposite direction) */}
              <div className="absolute inset-6 rounded-full pointer-events-none rotating-border-reverse"></div>

              {/* Inner Static Ring */}
              <div className="absolute inset-12 rounded-full border border-green-200 pointer-events-none"></div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex flex-col items-center justify-center shadow-2xl z-20 ring-4 ring-white">
                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-base font-bold">RPO</span>
                <span className="text-white text-xs">Success</span>
              </div>

              {/* Cards with Tooltips */}

              {/* Step 1 - 90° (Top) */}
              <div className="absolute z-10 group" style={{
                left: '50%',
                top: '0%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">🔍</span>
                  <span className="text-white text-xs font-bold">STEP 01</span>
                  <span className="text-white text-sm font-semibold">Discovery</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  📋 Analyze requirements & create strategy
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              {/* Step 2 - 30° (Top Right) */}
              <div className="absolute z-10 group" style={{
                left: 'calc(50% + 389.7px)',
                top: 'calc(50% - 225px)',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">🎯</span>
                  <span className="text-white text-xs font-bold">STEP 02</span>
                  <span className="text-white text-sm font-semibold">Sourcing</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  🎯 Find candidates via multiple channels
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              {/* Step 3 - 330° (Bottom Right) */}
              <div className="absolute z-10 group" style={{
                left: 'calc(50% + 389.7px)',
                top: 'calc(50% + 225px)',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">✅</span>
                  <span className="text-white text-xs font-bold">STEP 03</span>
                  <span className="text-white text-sm font-semibold">Screening</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  ✅ Resume review & skill assessment
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              {/* Step 4 - 270° (Bottom) */}
              <div className="absolute z-10 group" style={{
                left: '50%',
                top: '100%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">💬</span>
                  <span className="text-white text-xs font-bold">STEP 04</span>
                  <span className="text-white text-sm font-semibold">Interview</span>
                </div>
                {/* Tooltip - positioned above for bottom card */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  💬 Coordinate & schedule interviews
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-8 border-transparent border-t-gray-900"></div>
                </div>
              </div>

              {/* Step 5 - 210° (Bottom Left) */}
              <div className="absolute z-10 group" style={{
                left: 'calc(50% - 389.7px)',
                top: 'calc(50% + 225px)',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">📝</span>
                  <span className="text-white text-xs font-bold">STEP 05</span>
                  <span className="text-white text-sm font-semibold">Offers</span>
                </div>
                {/* Tooltip - positioned above for bottom card */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  📝 Offer negotiation & acceptance
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-8 border-transparent border-t-gray-900"></div>
                </div>
              </div>

              {/* Step 6 - 150° (Top Left) */}
              <div className="absolute z-10 group" style={{
                left: 'calc(50% - 389.7px)',
                top: 'calc(50% - 225px)',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white">
                  <span className="text-3xl mb-1">🚀</span>
                  <span className="text-white text-xs font-bold">STEP 06</span>
                  <span className="text-white text-sm font-semibold">Onboarding</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                  🚀 Smooth integration & training
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-gray-900"></div>
                </div>
              </div>

              {/* Radial lines from center to cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="calc(50% + 43.3%)" y2="calc(50% - 25%)" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="calc(50% + 43.3%)" y2="calc(50% + 25%)" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="calc(50% - 43.3%)" y2="calc(50% + 25%)" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="calc(50% - 43.3%)" y2="calc(50% - 25%)" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4" />
              </svg>
            </div>

            {/* Mobile View - List Layout with Descriptions */}
            <div className="md:hidden space-y-4">
              {[
                { step: '01', title: 'Discovery', icon: '🔍', color: 'bg-green-500', desc: 'Analyze requirements & create strategy' },
                { step: '02', title: 'Sourcing', icon: '🎯', color: 'bg-blue-500', desc: 'Find candidates via multiple channels' },
                { step: '03', title: 'Screening', icon: '✅', color: 'bg-purple-500', desc: 'Resume review & skill assessment' },
                { step: '04', title: 'Interview', icon: '💬', color: 'bg-orange-500', desc: 'Coordinate & schedule interviews' },
                { step: '05', title: 'Offers', icon: '📝', color: 'bg-red-500', desc: 'Offer negotiation & acceptance' },
                { step: '06', title: 'Onboarding', icon: '🚀', color: 'bg-teal-500', desc: 'Smooth integration & training' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className={`w-14 h-14 ${step.color} rounded-full flex flex-col items-center justify-center flex-shrink-0`}>
                    <span className="text-xl">{step.icon}</span>
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{step.title}</h3>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>

            {/* Description Cards - Below Circle */}
            <div className="mt-32 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">01</div>
                  <h4 className="font-semibold text-gray-800 text-lg">Discovery</h4>
                </div>
                <p className="text-gray-600">Understand your hiring needs, company culture, and specific role requirements</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">02-03</div>
                  <h4 className="font-semibold text-gray-800 text-lg">Sourcing & Screening</h4>
                </div>
                <p className="text-gray-600">Find qualified candidates and evaluate them through comprehensive screening process</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">04-06</div>
                  <h4 className="font-semibold text-gray-800 text-lg">Interview to Onboarding</h4>
                </div>
                <p className="text-gray-600">Seamless process from interviews to offer management and successful integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add animation styles */}
        <style jsx>{`
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes rotateReverse {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
    
    .rotating-border {
      border: 3px dashed #22c55e;
      animation: rotate 20s linear infinite;
    }
    
    .rotating-border-reverse {
      border: 2px dotted #86efac;
      animation: rotateReverse 15s linear infinite;
    }
  `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://static.wixstatic.com/media/3b0d21_652debcd1b8d405d977c33cbbd4caa9b~mv2.png/v1/fill/w_512,h_383,al_c,q_85,enc_auto/3b0d21_652debcd1b8d405d977c33cbbd4caa9b~mv2.png')",
          }}>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-white">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-blue-400">Partner With Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">We become an extension of your team, delivering measurable results</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100">{item.desc}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">94%</div>
              <div className="text-sm text-blue-200">Match Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">40%</div>
              <div className="text-sm text-blue-200">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">98%</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-300">87%</div>
              <div className="text-sm text-blue-200">Retention</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expertise Across
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> All Major Sectors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">We provide specialized recruitment solutions tailored to your industry's unique needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-3xl">{industry.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {industry.roles.map((role, ridx) => (
                    <span key={ridx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">{role}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.smart-manpower.com/Content/Home1/RPO_Images-02.jpg')"
        }}>
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Recruitment?</h2>
            <p className="text-blue-100 text-lg mb-8">Join 500+ companies that have optimized their hiring with our RPO solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center group"
              >
                Start Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}