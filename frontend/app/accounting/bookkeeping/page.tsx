"use client";

import React, { useEffect, useRef } from "react";
import {
  Users,
  Shield,
  BarChart3,
  Clock,
  MessageSquare,
  Phone,
  ChevronRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BOOKKEEPING_PAGE_SERVICES,
  BOOKKEEPING_PAGE_BENEFITS,
  BOOKKEEPING_PAGE_FEATURES,
  BOOKKEEPING_PAGE_VALUE_PROPS
} from "@/utils/constants";

// Wave Transition Component
interface WaveProps {
  direction?: "top" | "bottom";
}

export const WaveTransition = ({
  direction = "bottom",
}: WaveProps) => {  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const BookkeepingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;

if (!canvas) return;

const ctx = canvas.getContext("2d")!;

if (!ctx) return;
    const particleCount = 25;
    const colors = [
      'rgba(59, 130, 246, 0.25)',
      'rgba(34, 197, 94, 0.25)',
      'rgba(139, 92, 246, 0.25)',
      'rgba(14, 165, 233, 0.25)',
      'rgba(168, 85, 247, 0.25)',
    ];

    const resizeCanvas = () => {
      canvas.width =
  canvas.parentElement?.clientWidth || window.innerWidth;

canvas.height =
  canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

     const safeCanvas = canvas!;

    class Particle {
  x:number;
  y:number;
  size:number;
  speedX:number;
  speedY:number;
  color:string;
  shape:string;
  rotation:number;
  rotationSpeed:number;

  constructor() {
this.x = Math.random() * safeCanvas.width;
this.y = Math.random() * safeCanvas.height;
    this.size = Math.random() * 15 + 3;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.shape = Math.random() > 0.5 ? "circle" : "triangle";
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = Math.random() * 0.01 - 0.005;
  }

  update() {
  this.x += this.speedX;
  this.y += this.speedY;
  this.rotation += this.rotationSpeed;
}

draw() {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation);

  ctx.fillStyle = this.color;
  ctx.globalAlpha = 0.06;

  ctx.beginPath();
  ctx.arc(0,0,this.size,0,Math.PI*2);
  ctx.fill();

  ctx.restore();
}
}

const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle: Particle) => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);


  const overlay = "absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/75 to-[#0a2540]/85";

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50/30 via-sky-50/20 to-cyan-50/30 overflow-x-hidden">

      {/* Animated Background Canvas */}
      <div className="absolute top-0 left-0 right-0 bottom-[400px] z-0 pointer-events-none">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-cyan-50/20" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[650px] flex items-center justify-center text-center z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bookkeeping-hero-bg-v3.png')",
          }}
        />
        <div className={overlay} />
        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-24 flex justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-blue-400">Bookkeeping</span> Services
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full bg-blue-100 py-16 sm:py-20 md:py-24 lg:py-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Comprehensive Bookkeeping Services
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Everything you need for accurate financial management in one place
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {BOOKKEEPING_PAGE_SERVICES.map((service, index) => (
              <div key={index} className="group relative bg-white/90 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-xl`} />
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl sm:text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-blue-100 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-center px-4">
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
            Accounting Challenges
          </span>
        </h2>

        {BOOKKEEPING_PAGE_FEATURES.map((item: any, index) => (
          <div key={index} className="relative py-12 sm:py-16 md:py-20">
            {item.bgImage && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />
            )}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col ${
                  item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 ${
                      item?.darkOverlay ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`leading-relaxed text-sm sm:text-base md:text-lg ${
                      item.darkOverlay ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className={`relative ${item?.imageBg ? "p-4 sm:p-6 md:p-8 bg-blue-100 rounded-2xl sm:rounded-3xl" : ""}`}>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        delay: index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full -mt-2 sm:-mt-5 z-20">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bookkeeping-benefits-bg.webp')",
          }}
        />
        <div className={overlay} />

        <div className="relative z-30 max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              The Advantages of Our Bookkeeping Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Experience the difference with our professional approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            {BOOKKEEPING_PAGE_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30"
              >
                <div className="relative mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm whitespace-nowrap">
                    {benefit.stats}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full mt-6 sm:mt-8 z-20">
          <WaveTransition />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative w-full bg-blue-100 py-16 sm:py-20 md:py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative">
          <div className="mb-3">
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Value Proposition
          </h2>

          {/* Connection lines */}
          <svg
            className="absolute left-1/2 top-24 sm:top-28 md:top-32 -translate-x-1/2 hidden lg:block"
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

          <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {BOOKKEEPING_PAGE_VALUE_PROPS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 max-w-xs text-center group-hover:text-gray-900 transition-colors px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bookkeeping-cta-bg.webp')",
          }}
        />
        <div className={overlay} />

        <div className="relative z-30 max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16 text-center text-white">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10">
              Join hundreds of businesses who trust us with their financial management.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                <span>Schedule Call</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm mt-5 sm:mt-6 md:mt-8">
              Get a free consultation within 24 hours
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 6s;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-float {
            animation-duration: 8s;
          }
        }
      `}</style>
    </div>
  );
};

export default BookkeepingPage;