'use client';

import { useState, useEffect } from "react";
import {
  Cloud,
  Database,
  Cpu,
  Shield,
  Workflow,
  ArrowRight,
  Zap,
  BarChart3,
  Lock,
  RefreshCw,
  CheckCircle,
  Globe,
  Server,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";
import WaveTransition from '@/components/sections/WaveTransition';
import { CLOUD_PAGE_STEPS, CLOUD_PAGE_BENEFITS, CLOUD_PAGE_TOOLS } from "@/utils/constants";

export default function CloudPage() {
  const [animated, setAnimated] = useState(false);
const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  useEffect(() => {
    setAnimated(true);
  }, []);

  const steps = CLOUD_PAGE_STEPS;
  const benefits = CLOUD_PAGE_BENEFITS;
  const tools = CLOUD_PAGE_TOOLS;

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200 to-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* HERO Section */}
      <div className="relative w-full overflow-hidden min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://kripeshadwani.com/wp-content/uploads/2021/05/cloud-storage-1.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div
          className={`relative z-10 text-center px-6 py-28 transition-all duration-1000 transform ${
            animated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Cloud Integration in
            <br />
            <span className="text-blue-400">Our Process</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We harness cloud technology to automate workflows, connect systems,
            and deliver speed, accuracy, and scalability across your business.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>

      {/* Cloud Integration Process Section */}
      <div className="mb-24 mt-4 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative max-w-7xl mx-auto">
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Cloud Integration
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              A systematic approach to transforming your business operations with cutting-edge 
              cloud technology and intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group relative transform transition-all duration-700 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:duration-200`}></div>
                
                <div className={`relative bg-gradient-to-br ${step.gradient} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${step.borderColor} h-full group-hover:border-transparent`}>
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative ${step.bgColor} rounded-xl w-16 h-16 flex items-center justify-center`}>
                      <div className={`${step.iconColor} transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - Timeline */}
      <div className="mb-12 mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-100 to-blue-100 rounded-2xl pt-0 pb-2 px-8 shadow-sm">
          <div className="text-center mb-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-0">How It Works</h2>
            <p className="text-gray-600">End-to-end cloud integration workflow</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>
            
            <div className="flex flex-wrap justify-center items-start gap-4 relative">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[120px] group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mb-3 shadow-lg transform transition-transform group-hover:scale-110 z-10`}>
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="relative mb-24 mt-16 px-6 py-20 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.stockcake.com/public/8/d/4/8d46f9f6-9e60-44c8-83b7-fa199a51e409_large/team-meeting-discussion-stockcake.jpg')`
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Why leading businesses choose our cloud integration solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-3 hover:scale-105
                  ${
                    i === 0 ? "from-blue-500 via-cyan-500 to-indigo-600" :
                    i === 1 ? "from-purple-500 via-pink-500 to-rose-500" :
                    i === 2 ? "from-emerald-500 via-green-500 to-teal-600" :
                    "from-orange-500 via-amber-500 to-red-500"
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20 pointer-events-none"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 border border-white/20 shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <div className="text-white">{item.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </div>

      {/* Technologies We Use */}
      <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging industry-leading cloud platforms and integration tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-center cursor-pointer
                ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              
              <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                <div className="text-blue-600 group-hover:scale-125 group-hover:text-purple-600 transition-all duration-300">
                  <span className="text-3xl">{tool.icon}</span>
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/bookkeeping-cta-bg.webp')`
          }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative px-8 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Business with Cloud?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's help you automate, integrate, and scale your operations with our cutting-edge cloud solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}