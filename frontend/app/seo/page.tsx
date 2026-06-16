"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LinkIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import {
  SEO_SERVICES as services,
  SEO_STEPS as steps,
  SEO_REASONS as reasons,
  SEO_TECHNOLOGIES as technologies,
  SEO_FAQS as faqs
} from "@/utils/constants";

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
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

const SEOPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        50% { transform: translate(30px, -20px) scale(1.1); }
      }
      
      @keyframes float-delay {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        50% { transform: translate(-20px, 30px) scale(1.1); }
      }
      
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(1.05); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-float-delay {
        animation: float-delay 10s ease-in-out infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }
      
      .floating-animation {
        animation: float 4s ease-in-out infinite;
      }
      
      .animation-delay-1000 {
        animation-delay: 1s;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);



  const categories = [...new Set(technologies.map(tech => tech.category))];

  // Floating objects component
  const FloatingObjects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Floating orbs with higher opacity and better colors */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
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
        className="absolute bottom-40 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"
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
        className="absolute top-60 right-20 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"
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
        className="absolute top-40 left-1/3 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
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
        className="absolute bottom-20 left-1/4 w-28 h-28 bg-green-400/20 rounded-full blur-xl"
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
      
      {/* Geometric shapes with better visibility */}
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
      
      {/* Floating dots - increased quantity and visibility */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, Math.random() * 100 - 50 + "%"],
            x: [null, Math.random() * 100 - 50 + "%"],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Animated particles with trails */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, Math.random() * 200 - 100 + "%"],
            x: [null, Math.random() * 200 - 100 + "%"],
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating waves */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30">
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

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden pt-28 md:pt-36 lg:pt-44 pb-[10px] md:pb-[12px] lg:pb-[14px]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/seo1img.webp"
            alt="Digital marketing analytics"
            fill
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Boost Your Online Presence with{" "}
              <span className="text-yellow-300">Expert SEO Services</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg"
              >
                Get Free SEO Audit
              </button> */}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section with Floating Objects */}
      <section className="relative py-24 bg-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SEO Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end SEO solutions tailored to your business needs
            </p>
          </div>

          {/* Services - Alternating image and text with floating images */}
          <div className="space-y-32">
            {/* Service 1 - Keyword Research */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation">
                  <Image 
                    src="/images/searchengine.webp"
                    alt="Keyword Research"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <MagnifyingGlassIcon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Keyword Research & Strategy
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Uncover high-value keywords that your target audience is actually searching for. We analyze search intent, competition, and volume to build a winning strategy.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">High-intent keyword targeting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Competitor keyword gap analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Long-tail keyword opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 - On-Page SEO */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation animation-delay-1000">
                  <Image 
                    src="/images/Onpageseo.webp"
                    alt="On-Page SEO"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <DocumentTextIcon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    On-Page SEO Optimization
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Optimize every element of your website to rank higher. From meta tags to content structure, we ensure search engines understand and value your pages.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Title tags & meta descriptions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Header structure optimization (H1-H6)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Content & image optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 - Technical SEO */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation animation-delay-2000">
                  <Image 
                    src="/images/Techincalseo.webp"
                    alt="Technical SEO"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-teal-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                    <GlobeAltIcon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Technical SEO Audit & Fixes
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Identify and resolve technical issues preventing search engines from properly crawling and indexing your site.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Site speed optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Mobile responsiveness</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Crawlability & indexation issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 - Link Building */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation">
                  <Image 
                    src="/images/Linkbuilding.webp"
                    alt="Link Building"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                    <LinkIcon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Link Building & Authority
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Build high-quality backlinks from authoritative websites to boost your domain authority and search rankings.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">High-authority backlink acquisition</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Guest posting opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Competitor backlink analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 5 - Local SEO */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation animation-delay-1000">
                  <Image 
                    src="/images/Localseo.webp"
                    alt="Local SEO"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
                    <GlobeAltIcon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Local SEO Optimization
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Dominate local search results and attract customers in your area with optimized Google Business Profile and local citations.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Google Business Profile optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Local citation building</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Review management & reputation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6 - Analytics & Reporting */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group floating-animation animation-delay-2000">
                  <Image 
                    src="/images/seoanalytics.webp"
                    alt="Analytics & Reporting"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                    <ChartBarIcon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Analytics & Performance Reporting
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Track, measure, and optimize your SEO performance with detailed analytics and transparent monthly reports.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Real-time ranking tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Custom monthly reports</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">ROI analysis & insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section with Floating Objects */}
      <section className="relative py-24 bg-gradient-to-br from-blue-100 via-blue to-blue-100 dark:from-blue-100 dark:via-blue-100 dark:to-blue-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Our Proven</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SEO Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to achieving sustainable SEO results
            </p>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative mt-16 md:mt-20">
            {/* Animated Gradient Center Line */}
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-500 -translate-y-1/2 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 dark:bg-gray-600 -translate-y-1/2"></div>

            <div className="flex flex-wrap md:flex-nowrap justify-between items-center relative z-10 gap-8 md:gap-0">
              {steps.map((step, index) => {
                const icons = [
                  <svg key="analysis" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>,
                  <svg key="keyword" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>,
                  <svg key="opt" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>,
                  <svg key="content" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>,
                  <svg key="link" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>,
                  <svg key="report" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ];

                const colors = [
                  "from-blue-500 to-cyan-500",
                  "from-purple-500 to-pink-500",
                  "from-green-500 to-emerald-500",
                  "from-orange-500 to-amber-500",
                  "from-red-500 to-rose-500",
                  "from-indigo-500 to-blue-500"
                ];

                return (
                  <div key={index} className="flex flex-col items-center w-full group relative">
                    {/* TOP TEXT */}
                    {index % 2 !== 0 && (
                      <div className="mb-6 text-center transform transition-all duration-500 group-hover:-translate-y-1">
                        <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {step.shortDesc}
                        </p>
                      </div>
                    )}

                    {/* CIRCLE */}
                    <div className="relative">
                      {/* Outer Glow Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors[index % colors.length]} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      
                      {/* Main Circle */}
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                        {/* Inner Gradient Circle */}
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${colors[index % colors.length]} flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-500`}>
                          {icons[index % icons.length]}
                        </div>
                      </div>

                      {/* Pulsing Dot */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full"></div>
                    </div>

                    {/* BOTTOM TEXT */}
                    {index % 2 === 0 && (
                      <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-1">
                        <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {step.shortDesc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
      
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img
            src="https://media.handwerk-magazin.de/uploads/2024/02/SEO.jpeg"
            alt="SEO analytics dashboard with charts and graphs"
            className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-10000"
          />
          {/* Overlay pattern for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
          
          {/* Grid overlay for tech feel */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-24 pb-24">
          {/* Section Header with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Main title with gradient */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Us
              </span>
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"
            ></motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              What sets us apart from other SEO agencies
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => {
              const colorSchemes = [
                { gradient: "from-blue-500 to-cyan-400", light: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", shadow: "shadow-blue-500/20", glow: "group-hover:shadow-blue-500/30" },
                { gradient: "from-purple-500 to-pink-400", light: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", shadow: "shadow-purple-500/20", glow: "group-hover:shadow-purple-500/30" },
                { gradient: "from-green-500 to-emerald-400", light: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400", shadow: "shadow-green-500/20", glow: "group-hover:shadow-green-500/30" },
                { gradient: "from-orange-500 to-amber-400", light: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", shadow: "shadow-orange-500/20", glow: "group-hover:shadow-orange-500/30" },
                { gradient: "from-red-500 to-rose-400", light: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400", shadow: "shadow-red-500/20", glow: "group-hover:shadow-red-500/30" },
                { gradient: "from-indigo-500 to-blue-400", light: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400", shadow: "shadow-indigo-500/20", glow: "group-hover:shadow-indigo-500/30" }
              ];
              const colors = colorSchemes[index % colorSchemes.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect behind card */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 ${colors.glow}`}></div>
                  
                  {/* Card with glassmorphism effect */}
                  <div className={`relative bg-white/5 backdrop-blur-md border ${colors.border} rounded-2xl p-8 shadow-xl transition-all duration-300 overflow-hidden`}>
                    {/* Animated background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Icon container with glow */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className={`relative w-20 h-20 ${colors.light} backdrop-blur-sm rounded-2xl flex items-center justify-center border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`${colors.text} w-10 h-10`}>
                          {reason.icon}
                        </div>
                      </div>
                      
                      {/* Floating particles */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping`}></div>
                      <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-300`}></div>
                    </div>
                    
                    {/* Content */}
                   <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300">
  {reason.title}
</h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {reason.description}
                    </p>

                    {/* Feature indicator */}
                    

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-bl-3xl transform rotate-12 translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Technologies Section with Floating Objects */}
      <section className="relative py-20 bg-gradient-to-b from-blue-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Tech Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">We Use</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry-leading tools and technologies for optimal SEO results
            </p>
          </motion.div>
          
          {/* Technology Cards */}
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 w-1 h-8 rounded-full mr-3"></span>
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      
                      {/* Icon with glow effect */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <span className="relative text-5xl block transform group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </span>
                      </div>
                      
                      {/* Technology name */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </h4>
                      
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-blue-100 dark:bg-gray-800 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Got questions? We've got answers about our SEO services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/bookkeeping-cta-bg.webp"
            alt="Digital marketing growth"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Grow Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Online Visibility?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Let our SEO experts help you increase rankings, drive organic traffic,
            and grow your business with data-driven strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-blue-500/40">
                Get Free SEO Audit
              </button>
            </a>

            <a href="/contact">
              <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
                Contact Our Experts
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SEOPage;