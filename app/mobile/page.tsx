'use client';

import React from 'react';
import {
  Shield,
  Smartphone,
  Lock,
  Cloud,
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  BarChart3,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import WaveTransition from '@/components/sections/WaveTransition';

export default function MDMPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption and threat detection"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Multi-OS Support",
      description: "Manage iOS, Android, Windows, and macOS devices seamlessly"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Remote Lock & Wipe",
      description: "Remotely lock or wipe devices in case of loss or theft"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Management",
      description: "Centralized cloud-based console for easy management"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Management",
      description: "Role-based access control and user group management"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Policy Enforcement",
      description: "Automated policy deployment and compliance checking"
    }
  ];

  const benefits = [
    "Reduce security risks by 85%",
    "Save 40% on IT management costs",
    "99.9% device compliance rate",
    "24/7 real-time monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <WaveTransition />
        </div>
        
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          </div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Secure Mobile Devices.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Smarter Business Management.
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section - Creative Modern Design */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-purple-50">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-md border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 mb-6 shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              VISIONARY DYNAMICS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mobile Device Management
              </span>
              <br />
              <span className="text-gray-900 text-4xl md:text-5xl">
                is more than managing devices
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Mobile Device Management (MDM) ensures seamless accessibility and
              optimal user experience across smartphones, tablets and modern
              mobile platforms. As mobile usage continues to grow, organizations
              must ensure that their digital infrastructure remains secure,
              responsive and scalable.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              By implementing responsive design, flexible layouts and advanced
              security protocols, businesses can deliver consistent performance
              across all devices while protecting their digital ecosystem.
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all"
              >
                Free Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="w-4 h-4 mr-2 text-blue-500"/>
                Trusted by 500+ businesses
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE DASHBOARD - with Phone Image */}
          <div className="relative flex flex-col items-center">
            {/* Main Phone Image */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="relative w-[320px] rounded-[3rem] bg-gradient-to-br from-gray-800 to-gray-900 p-3 shadow-2xl">
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner" style={{ height: '600px' }}>
                  {/* Status Bar */}
                  <div className="bg-white/90 backdrop-blur-sm px-5 pt-8 pb-2 flex items-center justify-between border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-800">Live MDM</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-800">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-5 space-y-4">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl">
                        <p className="text-xs text-blue-600 mb-1">Total Devices</p>
                        <h2 className="text-2xl font-bold text-gray-900">1,284</h2>
                        <p className="text-xs text-blue-500 mt-1">+12 this week</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl">
                        <p className="text-xs text-green-600 mb-1">Compliance</p>
                        <h2 className="text-2xl font-bold text-gray-900">98%</h2>
                        <p className="text-xs text-green-500 mt-1">↑ 2%</p>
                      </div>
                    </div>
                    
                    {/* Active Devices Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700">ACTIVE DEVICES</h3>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">4 online</span>
                    </div>
                    
                    {/* Device List */}
                    <div className="space-y-3">
                      {[
                        { name: "iPhone 14 Pro", status: "online", battery: "85%", statusColor: "green" },
                        { name: "Samsung S23", status: "online", battery: "62%", statusColor: "green" },
                        { name: "iPad Air", status: "syncing", battery: "94%", statusColor: "yellow" },
                        { name: "Surface Pro", status: "online", battery: "38%", statusColor: "green" }
                      ].map((device, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                                <span className="text-xl">📱</span>
                              </div>
                              <span className={`absolute -bottom-1 -right-1 w-3 h-3 bg-${device.statusColor}-500 border-2 border-white rounded-full`}></span>
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-gray-800">{device.name}</span>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs text-${device.statusColor}-600 font-medium`}>{device.status}</span>
                                <span className="text-xs text-gray-500">{device.battery}</span>
                              </div>
                            </div>
                          </div>
                          <span className={`text-xs bg-${device.statusColor === 'green' ? 'blue' : 'yellow'}-50 text-${device.statusColor === 'green' ? 'blue' : 'yellow'}-600 px-2 py-1 rounded-full`}>
                            {device.status === 'online' ? 'Active' : 'Syncing'}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Security Status */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl flex items-center justify-between border border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xl">🛡️</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-800">Security Status</span>
                          <p className="text-xs text-gray-500">All systems operational</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">Protected</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <button className="bg-blue-600 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg">
                        <span>🔒</span> Lock
                      </button>
                      <button className="bg-red-600 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg">
                        <span>🗑️</span> Wipe
                      </button>
                      <button className="bg-purple-600 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow-lg">
                        <span>🔄</span> Sync
                      </button>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="flex justify-center pt-2">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Side Buttons */}
                <div className="absolute -right-1 top-20 w-1 h-12 bg-gray-700 rounded-r"></div>
                <div className="absolute -right-1 top-36 w-1 h-12 bg-gray-700 rounded-r"></div>
                <div className="absolute -left-1 top-28 w-1 h-16 bg-gray-700 rounded-l"></div>
              </div>
            </div>
            
            {/* Floating Elements around Phone */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100 animate-pulse">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Real-time Sync</p>
                <p className="text-xs text-gray-500">3 devices online</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Battery Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">85%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 right-8 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">🛡️</span>
                </div>
                <span className="text-xs font-bold text-gray-800">Protected</span>
              </div>
            </div>
            
            <div className="absolute -top-4 left-4 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold shadow-lg">
              3
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Do Section - Glass Timeline */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">How We Do It</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Our proven process to implement secure and scalable MDM solutions
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/30 z-0"></div>
            
            <div className="space-y-16">
              {[
  {
    num:1,
    title:"Define Objectives",
    desc:"Identify business goals, security requirements and choose the right MDM platform."
  },
  {
    num:2,
    title:"Device Enrollment",
    desc:"Enroll devices automatically or manually within the MDM platform."
  },
  {
    num:3,
    title:"Policy Deployment",
    desc:"Configure security rules and compliance policies."
  }
].map((step, idx) => (

<div
  key={idx}
  className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
    idx % 2 === 1 ? "md:flex-row-reverse" : ""
  }`}
>

  {/* CARD */}
  <div className="md:w-5/12">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl hover:bg-white/20 transition">
      <h3 className="text-2xl font-bold mb-4 text-white">
        {step.title}
      </h3>

      <p className="text-gray-200 leading-relaxed">
        {step.desc}
      </p>
    </div>
  </div>

  {/* CENTER NUMBER */}
  <div className="hidden md:flex relative z-20 items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white font-bold shadow-lg ring-8 ring-black/70">
    {step.num}
  </div>

  {/* EMPTY SPACE */}
  <div className="hidden md:block md:w-5/12"></div>

</div>
))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>
      
      {/* Microsoft Intune & Azure IoT Section */}
      <section className="py-24 bg-blue-100 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Microsoft Intune & Azure IoT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive device management and IoT solutions for modern enterprises
            </p>
          </div>
          
          <div className="relative flex justify-center items-center min-h-[750px] lg:min-h-[850px] overflow-hidden">
            {/* Central Circle - Microsoft Intune */}
            <div className="relative z-20 flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-200 border-8 border-white">
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse"></div>
                
                <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="9" height="9" fill="white"/>
                  <rect x="13" y="2" width="9" height="9" fill="white"/>
                  <rect x="2" y="13" width="9" height="9" fill="white"/>
                  <rect x="13" y="13" width="9" height="9" fill="white"/>
                </svg>
                
                <h3 className="text-2xl font-bold text-center leading-tight">
                  Microsoft
                  <span className="block text-blue-100">Intune</span>
                </h3>
                
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-blue-700 shadow-xl border border-white/70 whitespace-nowrap z-20">
                  Unified Endpoint Management
                </div>
              </div>
            </div>
            
            {/* Orbiting Service Items - Left Side */}
            <div className="absolute left-4 lg:left-[8%] top-1/2 -translate-y-1/2 space-y-6">
              {[
                { name: "Microsoft Intune", type: "Device Management", color: "blue" },
                { name: "Microsoft Cloud Core Infrastructure", type: "Cloud Infrastructure", color: "purple" },
                { name: "Microsoft Azure IoT Hub", type: "IoT Connectivity", color: "green" }
              ].map((service, index) => (
                <div key={`left-${index}`} className="group relative flex items-center gap-3 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute right-full mr-4 w-16 h-0.5 bg-gradient-to-l from-blue-400 to-transparent"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all w-64 border border-gray-100 hover:border-blue-200 group">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${service.color}-100 flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full bg-${service.color}-500 animate-pulse`}></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{service.name}</h4>
                        <p className="text-xs text-gray-500">{service.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Orbiting Service Items - Right Side */}
            <div className="absolute right-4 lg:right-[8%] top-1/2 -translate-y-1/2 space-y-6">
              {[
                { name: "Microsoft Azure IoT Edge", type: "Edge Computing", color: "orange" },
                { name: "Microsoft Azure IoT Central", type: "IoT Platform", color: "pink" },
                { name: "Microsoft Azure IoT Portal", type: "Management Portal", color: "indigo" }
              ].map((service, index) => (
                <div key={`right-${index}`} className="group relative flex items-center gap-3 flex-row-reverse animate-slide-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-full ml-4 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all w-64 border border-gray-100 hover:border-blue-200 group">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${service.color}-100 flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full bg-${service.color}-500 animate-pulse`}></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{service.name}</h4>
                        <p className="text-xs text-gray-500">{service.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-100 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-50 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </section>
      
      {/* Why Outsource Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Outsource Managed Network Services to Visionaries?
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Transform your IT infrastructure with expert managed services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Expert Insights", desc: "Access to expert insights and analysis from industry veterans", color: "from-blue-400 to-blue-600" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Cost Reduction", desc: "Reduces Cost & Saves Time with optimized resource allocation", color: "from-green-400 to-green-600" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Risk Mitigation", desc: "Mitigate the risk of errors and discrepancies proactively", color: "from-purple-400 to-purple-600" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Core Focus", desc: "Allows you to focus on core business functions", color: "from-orange-400 to-orange-600" },
              { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Fresh Perspectives", desc: "Fresh perspectives and innovative approaches to problem-solving", color: "from-pink-400 to-pink-600" },
              { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Latest Technology", desc: "Leverage the latest software and technology", color: "from-indigo-400 to-indigo-600" }
            ].map((benefit, index) => (
              <div key={index} className={`group relative rounded-3xl p-6 border border-white/20 backdrop-blur-xl overflow-hidden bg-gradient-to-br ${benefit.color} shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:scale-105 hover:-translate-y-3 transition-all duration-500`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 shadow-xl border border-white/20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>
      
      {/* 360° Enterprise Mobility Support Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9d9ee] via-[#d7e4f5] to-[#c7d6eb]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              360° support for enterprise mobility
            </h2>
            <p className="text-lg text-gray-600">Enterprise mobile device management</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Features */}
            <div className="flex-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40">
                <Smartphone className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Quick Device Enrollment</h3>
                <p className="text-sm text-gray-600">Easy enrollment and authentication for BYOD and corporate devices.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40">
                <BarChart3 className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Intuitive Dashboard</h3>
                <p className="text-sm text-gray-600">Overview of entire device ecosystem in your organization.</p>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative w-64 h-[480px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] shadow-2xl border-4 border-gray-700 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                <div className="absolute inset-1 bg-white rounded-[32px] overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex gap-1 text-white text-xs">📶 📶 🔋</div>
                  </div>
                  
                  <div className="p-3 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <p className="text-[10px] text-blue-600">Total Devices</p>
                        <p className="text-lg font-bold text-gray-900">1,284</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded-lg">
                        <p className="text-[10px] text-green-600">Compliance</p>
                        <p className="text-lg font-bold text-gray-900">98%</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">ACTIVE DEVICES</p>
                      <div className="space-y-2">
                        {[
                          { name: "iPhone 14 Pro", status: "online", battery: "85%" },
                          { name: "Samsung S23", status: "online", battery: "62%" },
                          { name: "iPad Air", status: "syncing", battery: "94%" },
                          { name: "Surface Pro", status: "online", battery: "38%" }
                        ].map((device, i) => (
                          <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Smartphone className="w-3 h-3 text-gray-400" />
                              <span className="text-xs font-medium text-gray-700">{device.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] text-${device.status === 'online' ? 'green' : 'blue'}-600`}>{device.status}</span>
                              <span className="text-[10px] text-gray-400">{device.battery}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-2 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-700">Security Status</span>
                      </div>
                      <span className="text-xs font-semibold text-green-700">Protected</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-1 pt-2">
                      <div className="bg-gray-100 p-1 rounded text-center text-[8px] text-gray-600">Lock</div>
                      <div className="bg-gray-100 p-1 rounded text-center text-[8px] text-gray-600">Wipe</div>
                      <div className="bg-gray-100 p-1 rounded text-center text-[8px] text-gray-600">Sync</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-gray-600 rounded-full"></div>
              </div>
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                Live MDM Dashboard
              </div>
            </div>
            
            {/* Right Features */}
            <div className="flex-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40">
                <Shield className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Policy Compliance</h3>
                <p className="text-sm text-gray-600">Configure profiles for Wi-Fi, VPN and other parameters.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40">
                <Globe className="w-6 h-6 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Troubleshooting</h3>
                <p className="text-sm text-gray-600">Remotely control devices and troubleshoot issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Mobile device security and protection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Mobile Devices?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies that trust DeviceGuard for their mobile device management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Free Trial
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
            >
              Contact Sales
            </a>
          </div>
          <p className="text-white/80 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>
    </div>
  );
}