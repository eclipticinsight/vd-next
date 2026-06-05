"use client";

import React, { useEffect, useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';



export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
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

const BusinessAnalystPage = () => {
  const [mounted, setMounted] = useState(false);
  // Add animation styles

  useEffect(() => {
  setMounted(true);
}, []);

  useEffect(() => {
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(10px, -15px); }
        50% { transform: translate(20px, 0); }
        75% { transform: translate(10px, 15px); }
      }
      
      @keyframes float-medium {
        0%, 100% { transform: translate(0, 0); }
        33% { transform: translate(-15px, -10px); }
        66% { transform: translate(15px, 10px); }
      }
      
      @keyframes float-fast {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(-20px, 20px); }
        75% { transform: translate(20px, 20px); }
      }
      
      @keyframes float-particle {
        0% { transform: translateY(0px) translateX(0px); opacity: 0; }
        50% { opacity: 0.6; }
        100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-slow {
        animation: float-slow 15s ease-in-out infinite;
      }
      
      .animate-float-medium {
        animation: float-medium 12s ease-in-out infinite;
      }
      
      .animate-float-fast {
        animation: float-fast 10s ease-in-out infinite;
      }
      
      .animate-float-particle {
        animation: float-particle 8s ease-in-out infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with advanced analytics and visualization techniques."
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Market Research",
      description: "Comprehensive market analysis to identify opportunities and optimize business strategies."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Stakeholder Management",
      description: "Bridge the gap between technical teams and business stakeholders for seamless communication."
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Process Optimization",
      description: "Streamline business processes to increase efficiency and reduce operational costs."
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Strategic Planning",
      description: "Develop data-driven strategies that align with your business goals and objectives."
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Requirements Analysis",
      description: "Gather and document precise business requirements for successful project delivery."
    }
  ];

  const skills = [
    { name: "Data Analysis", percentage: 95 },
    { name: "Business Strategy", percentage: 90 },
    { name: "Requirements Gathering", percentage: 92 },
    { name: "Process Modeling", percentage: 88 },
    { name: "Stakeholder Management", percentage: 94 }
  ];

  const stats = [
    { icon: <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "30+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "5+", label: "Years Experience" },
    { icon: <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section - Responsive */}
<section className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden pt-20 lg:pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.GmzeuKcTXVM4aCBWFgbkRAHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Business Analytics Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
                Business Analyst
                <span className="block text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 md:mt-4 text-blue-200">
                  Turning Data into Decisions
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl text-gray-200 mx-auto lg:mx-0">
                Unlock your business potential with data-driven insights and strategic analysis. 
                Transform complex problems into actionable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative">
              <img 
                src="https://img.freepik.com/premium-vector/comprehensive-analytics-dashboard-ui-with-diverse-data-visualization-user-interface-analytics-dashboard-featuring-variety-graphs-charts-efficient-data-management-monitoring_924480-25.jpg" 
                alt="Business Analytics" 
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section - Responsive Grid */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        {/* Simplified moving objects for better mobile performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-sky-200/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-20 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-fast"></div>
          
          {/* Floating particles - reduced count for mobile */}
          {mounted &&
  [...Array(8)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-particle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 6}s`,
      }}
    />
  ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Comprehensive Business
              <span className="block text-blue-600">Analysis Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              I provide end-to-end business analysis solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {services.map((service, index) => {
              const iconGradients = [
                "from-purple-500 to-pink-500",
                "from-green-500 to-emerald-500",
                "from-orange-500 to-red-500",
                "from-yellow-500 to-amber-500",
                "from-indigo-500 to-purple-500",
                "from-pink-500 to-rose-500"
              ];
              const gradientClass = iconGradients[index % iconGradients.length];
              
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-sky-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-5 sm:p-6 md:p-7 lg:p-8">
                    <div className="relative mb-4 sm:mb-5 md:mb-6 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all`}></div>
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {mounted &&
  [...Array(12)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-particle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 6}s`,
      }}
    />
  ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Delivering measurable results for businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {stats.map((stat, index) => {
              const iconColors = [
                "from-purple-500 to-pink-500",
                "from-green-500 to-emerald-500",
                "from-orange-500 to-red-500",
                "from-yellow-500 to-amber-500"
              ];
              const gradientClass = iconColors[index % iconColors.length];
              
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-white/60 transform hover:-translate-y-1"
                >
                  <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
                    <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex justify-center">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-full blur-md opacity-30 group-hover:opacity-40 transition-all`}></div>
                      <div className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center text-white shadow-sm transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                        {stat.icon}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradientClass} transition-all duration-500`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm font-medium group-hover:text-gray-900 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-0 w-40 sm:w-52 md:w-64 lg:w-80 h-40 sm:h-52 md:h-64 lg:h-80 bg-sky-200/20 rounded-full blur-3xl animate-float-medium"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Technical & Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                Expertise
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              With years of experience across various industries, I bring a unique blend of 
              technical knowledge and business acumen to every project.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 min-h-[500px]">
            {/* Skills Column */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b from-blue-600 to-sky-600 rounded-full"></span>
                  Professional Skills
                </h3>
                
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="font-semibold text-gray-700 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 font-bold text-sm sm:text-base">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 relative"
                          style={{ 
                            width: `${skill.percentage}%`,
                            background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Core Competencies Column */}
            <div className="flex-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b from-blue-600 to-sky-600 rounded-full"></span>
                  Core Competencies
                </h3>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {[
                    { name: "Agile Methodologies", icon: "🔄", color: "from-purple-500 to-pink-500" },
                    { name: "SQL & Databases", icon: "🗄️", color: "from-blue-500 to-cyan-500" },
                    { name: "Data Visualization", icon: "📈", color: "from-green-500 to-emerald-500" },
                    { name: "Process Modeling", icon: "⚙️", color: "from-orange-500 to-red-500" },
                    { name: "Requirements Management", icon: "📋", color: "from-indigo-500 to-purple-500" },
                    { name: "Risk Analysis", icon: "⚠️", color: "from-yellow-500 to-amber-500" },
                    { name: "Cost-Benefit Analysis", icon: "💰", color: "from-teal-500 to-cyan-500" },
                    { name: "Stakeholder Management", icon: "🤝", color: "from-pink-500 to-rose-500" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-gray-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 hover:shadow-md transition-all duration-500 border border-gray-100 hover:border-blue-200"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-lg sm:rounded-xl transition-opacity`}></div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Responsive */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-0 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[950px] flex items-center">
          <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-10 lg:gap-12">
            <div className="flex-1 flex flex-col justify-center lg:pr-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
                Let's Discuss Your Business Needs
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Ready to take your business to the next level? Get in touch for a free consultation.
              </p>
              
              <div className="space-y-5 sm:space-y-6 text-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <a href="mailto:connect@visionarydynamicsas.com" className="text-sm sm:text-base hover:text-white break-all">
                    connect@visionarydynamicsas.com
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="tel:+17275649476"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    Call Now: +1(727) 564-9476
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps?q=7901+4th+St+N+STE+300+St+Petersburg+Florida+33702+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg hover:text-white"
                  >
                    7901 4th St N STE 300 St. Petersburg, Florida-33702 USA
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 min-h-[900px]">
                <iframe
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=yMabWpDCxEastsnhmE2W-mFI-VeFxbZOn60RulHW7UxURDIxMVlCQUg3WDhZMzZNSFU3Q09YVE45WC4u&embed=true"
                  style={{
                    width: "100%",
                    height: "850px",
                    border: "none",
                    borderRadius: "12px",
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                  allowFullScreen
                  title="Business Analyst Form"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAnalystPage;