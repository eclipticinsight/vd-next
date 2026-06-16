'use client';

import { useState } from 'react';
import {
  Brain,
  Zap,
  Shield,
  Globe,
  BarChart3,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  Headphones,
  FileText,
  Settings,
  Play,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Lightbulb,
  Rocket,
  LineChart,
  Puzzle,
  Coffee,
  Briefcase,
  GraduationCap,
  Network,
  MessageSquare,
  PieChart,
  Download,
  Calendar,
  ThumbsUp,
  Check,
  Search,
  Smartphone,
  Code
} from "lucide-react";

import WaveTransition from '@/components/sections/WaveTransition';
import {
  AI_PAGE_NAVIGATION,
  AI_PAGE_SERVICES,
  AI_PAGE_METHODOLOGY,
  AI_PAGE_EXPERTISE_AREAS
} from "@/utils/constants";

export default function AIConsultingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  const handleScheduleClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-[680px] pt-16 lg:pt-12 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/922/756/original/artificial-intelligence-landing-page-ai-banner-website-template-for-deep-learning-concept-stock-illustration-vector.jpg" 
            alt="Business strategy meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center">
          <div className="w-full">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl">
                Strategic AI Consulting for 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Business Transformation</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleScheduleClick}
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Contact Us 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100 py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">What Our AI Can Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_PAGE_SERVICES.map((service, index) => {
              const iconStyles = {
                purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', light: 'bg-purple-50' },
                blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600', light: 'bg-blue-50' },
                green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600', light: 'bg-green-50' },
                orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600', light: 'bg-orange-50' },
                red: { bg: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-600', light: 'bg-red-50' },
                indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600', light: 'bg-indigo-50' }
              };

              const style =
  iconStyles[service.color as keyof typeof iconStyles] || iconStyles.purple;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${style.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl`}></div>
                  
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 ${style.bg} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 ${style.bg} rounded-2xl flex items-center justify-center ${style.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-5 h-5 ${style.light} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <div className={`w-2 h-2 ${style.bg} rounded-full`}></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${style.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rejolut.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-20-12.37.13-Design-a-professional-and-futuristic-banner-image-illustrating-the-theme-_Top-10-Artificial-Intelligence-Technologies-In-2024._-The-image-should-visua.webp" 
            alt="Team working on strategy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transforming Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> with AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven approach to deliver measurable results for your business
            </p>
            <div className="flex justify-center gap-1 mt-6">
              <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-4 h-1 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_PAGE_METHODOLOGY.map((phase, index) => {
              const colors = [
                { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'bg-purple-500', text: 'text-purple-300', gradient: 'from-purple-500 to-purple-600', iconBg: 'bg-purple-500/20' },
                { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'bg-blue-500', text: 'text-blue-300', gradient: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-500/20' },
                { bg: 'bg-green-500/10', border: 'border-green-500/20', icon: 'bg-green-500', text: 'text-green-300', gradient: 'from-green-500 to-green-600', iconBg: 'bg-green-500/20' },
                { bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: 'bg-orange-500', text: 'text-orange-300', gradient: 'from-orange-500 to-orange-600', iconBg: 'bg-orange-500/20' }
              ];
              
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="group relative">
                  <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border ${color.border} hover:-translate-y-2 h-full flex flex-col hover:bg-white/10`}>
                    <div className={`w-16 h-16 ${color.iconBg} rounded-xl flex items-center justify-center ${color.text} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 backdrop-blur-sm`}>
                      {phase.icon}
                    </div>
                    
                    <div className="mb-2">
                      <span className={`text-xs font-semibold ${color.text} bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border ${color.border}`}>
                        {phase.phase}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {phase.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {phase.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`flex-shrink-0 w-5 h-5 ${color.iconBg} rounded-full flex items-center justify-center mr-2 mt-0.5 backdrop-blur-sm`}>
                            <Check className={`w-3 h-3 ${color.text}`} />
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`flex items-center text-sm ${color.text} border-t ${color.border} pt-4 mt-2`}>
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{phase.duration}</span>
                    </div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                  
                  {index < AI_PAGE_METHODOLOGY.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <div className="relative">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                        <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep domain knowledge across key sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_PAGE_EXPERTISE_AREAS.map((area, index) => {
              const colors = [
                { bg: 'bg-purple-100', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200', hover: 'hover:border-purple-300', gradient: 'from-purple-600 to-purple-700' },
                { bg: 'bg-blue-100', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:border-blue-300', gradient: 'from-blue-600 to-blue-700' },
                { bg: 'bg-green-100', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200', hover: 'hover:border-green-300', gradient: 'from-green-600 to-green-700' },
                { bg: 'bg-orange-100', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200', hover: 'hover:border-orange-300', gradient: 'from-orange-600 to-orange-700' },
                { bg: 'bg-pink-100', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200', hover: 'hover:border-pink-300', gradient: 'from-pink-600 to-pink-700' },
                { bg: 'bg-indigo-100', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', hover: 'hover:border-indigo-300', gradient: 'from-indigo-600 to-indigo-700' }
              ];
              
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color.gradient} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${color.bg} rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {area.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${color.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bookkeeping-cta-bg.webp"
            alt="AI concept - neural network visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Transform Your Business with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> AI?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you navigate the AI landscape and achieve measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleScheduleClick}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center cursor-pointer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}