"use client";

import React, { useRef, useEffect } from "react";
import { Phone, MessageSquare, ChevronRight, Mail, MapPin, Clock, } from "lucide-react";
import Image from "next/image";
import {
  PAYROLL_PAGE_HERO_PARTICLES,
  PAYROLL_PAGE_SERVICES_PARTICLES,
  PAYROLL_PAGE_WHY_CHOOSE_PARTICLES,
  PAYROLL_PAGE_SERVICES,
  PAYROLL_PAGE_FORMS,
  PAYROLL_PAGE_PROCESS_STEPS,
  BOOKKEEPING_PAGE_VALUE_PROPS
} from "@/utils/constants";

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
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

export default function PayrollPage() {
  const sectionRef = useRef(null);


  // Add floating animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const shapes = document.querySelectorAll<HTMLElement>('.float-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.02 + (index * 0.003);
        const yOffset = window.scrollY * speed;
        if (shape.style) {
          shape.style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes drift {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(-10px, 30px); }
        75% { transform: translate(15px, 15px); }
      }
      
      @keyframes float-particle {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
        25% { transform: translateY(-30px) translateX(15px); opacity: 1; }
        50% { transform: translateY(20px) translateX(-10px); opacity: 0.4; }
        75% { transform: translateY(-10px) translateX(20px); opacity: 0.8; }
      }
      
      @keyframes spin-very-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 relative min-h-screen overflow-x-hidden">

      {/* Hero Section - Light Blue with Objects */}
      <section className="relative pt-66 pb-66 md:pt-70 md:pb-66 bg-blue-50 overflow-hidden z-10">

        {/* Background Shapes - Visible but professional */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="float-shape absolute top-10 left-[5%] w-64 h-64 bg-blue-200/50 rounded-full blur-xl"
            style={{ animation: 'drift 20s ease-in-out infinite' }} />
          <div className="float-shape absolute bottom-10 right-[8%] w-80 h-80 bg-indigo-200/50 rounded-full blur-xl"
            style={{ animation: 'drift 25s ease-in-out infinite reverse' }} />
          <div className="absolute top-1/3 left-[15%] w-40 h-40 bg-blue-300/40 rounded-full blur-lg"
            style={{ animation: 'drift 18s ease-in-out infinite' }} />
          <div className="absolute top-[30%] right-[15%] w-16 h-16 border-2 border-blue-300/40 rotate-12" />
          <div className="absolute bottom-[20%] left-[20%] w-24 h-24 border-2 border-indigo-300/40 rounded-lg rotate-45" />
          {PAYROLL_PAGE_HERO_PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                animation: `float-particle ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/payroll-hero-bg.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Outsourced Payroll Services
          </h1>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section - Light Blue with Objects */}
      <section className="relative py-16 bg-blue-100 overflow-hidden z-10">
        {/* Background Shapes - Visible but professional */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[30%] w-32 h-32 border-2 border-dashed border-blue-300/50 rounded-full"
            style={{ animation: 'spin-very-slow 30s linear infinite' }} />
          <div className="absolute top-[70%] right-[25%] w-40 h-40 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-lg" />
          {PAYROLL_PAGE_SERVICES_PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-indigo-400/60 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                animation: `float-particle ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-2 leading-tight">
              Payroll Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end payroll solutions designed to keep your business compliant,
              efficient, and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PAYROLL_PAGE_SERVICES.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section - Dark Background (No Objects) */}
      <section className="relative py-24 overflow-hidden z-10">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/payroll-forms-bg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Some Forms We Offer
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Essential payroll forms prepared accurately to keep your business compliant and organized.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PAYROLL_PAGE_FORMS.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden
                rounded-3xl p-8
                bg-gradient-to-br ${item.bg}
                backdrop-blur-xl
                border border-white/20
                shadow-2xl
                hover:scale-[1.04]
                hover:-translate-y-2
                transition-all duration-500`}
              >
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Glow */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-3xl" />

                {/* Large Faded Number */}
                <div className="absolute bottom-3 right-5 text-[72px] font-black text-white/10">
                  {item.number}
                </div>

                {/* Number Badge */}
                <div
                  className={`relative z-20 w-14 h-14 rounded-full
                  bg-gradient-to-br ${item.accent}
                  flex items-center justify-center
                  text-white font-bold shadow-xl mb-6`}
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="relative z-20 text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Accent Line */}
                <div
                  className={`relative z-20 h-1 w-16 rounded-full mb-5
                  bg-gradient-to-r ${item.accent}`}
                />

                {/* Description */}
                <p className="relative z-20 text-white/90 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Blue with Objects */}
      <section className="relative py-20 bg-blue-100 overflow-hidden z-10">
        {/* Background Shapes - Visible but professional */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PAYROLL_PAGE_WHY_CHOOSE_PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                animation: `float-particle ${11 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-3">
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Value Proposition
          </h2>

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

          <div className="relative mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {BOOKKEEPING_PAGE_VALUE_PROPS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-44 h-44 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Light Blue with Objects */}
      <section className="py-20 relative bg-blue-100 overflow-hidden z-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-10">
            <span className="text-sm font-medium text-gray-400 tracking-[0.3em] uppercase block mb-3">
              How it works
            </span>
            <h2 className="text-5xl font-bold text-gray-900">
              Our Payroll<span className="text-blue-600 block text-6xl mt-2">Process</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300" />

            <div className="space-y-1">
              {PAYROLL_PAGE_PROCESS_STEPS.map((item, i) => (
                <div key={i} className={`relative flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10" />

                  <div className={`w-full md:w-1/2 ${item.align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <span className={`inline-block px-4 py-1 rounded-full bg-${item.color}-50 text-${item.color}-600 text-sm font-semibold mb-4`}>
                        Step {item.step}
                      </span>
                      <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${item.align === 'right' ? '' : 'md:text-right'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-gray-600 text-lg leading-relaxed ${item.align === 'right' ? '' : 'md:text-right'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background (No Objects) */}
      <section className="py-24 relative z-10">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bookkeeping-cta-bg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Payroll?
            </h2>
            <p className="text-gray-200 mb-8">
              Join hundreds of businesses who trust us with their financial
              management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-3 w-5 h-5" />
                <span>Schedule Call</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-gray-300 text-sm mt-6">
              Get a free consultation within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}