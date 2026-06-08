'use client';

import React from 'react';
import {
  Shield,
  Smartphone,
  Lock,
  Cloud,
  Users,
  Settings,
  ArrowRight,
  Globe,
  ChevronRight
} from 'lucide-react';
import WaveTransition from '@/components/sections/WaveTransition';
import { NETWORK_SERVICE_ITEMS, NETWORK_BENEFITS, NETWORK_PRICING_PLANS, NETWORK_WHY_OUTSOURCE } from '@/utils/constants';

export default function MDMPage() {
  const serviceItems = NETWORK_SERVICE_ITEMS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     
      {/* Hero Section */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <WaveTransition />
        </div>
        
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=2000&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ccff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-40 h-40 border-2 border-blue-400/30 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-teal-400/20 rounded-full"></div>
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Managed Network{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              24/7 proactive monitoring, enterprise-grade security, and seamless connectivity
              for businesses of all sizes.
            </p>
            
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
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
      
      {/* Hero Section 2 */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-purple-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide">
              VISIONARY DYNAMICS
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Empowering businesses with seamless connectivity and peace of mind, one
              network at a time.
            </h1>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Managed network services encompass a spectrum of offerings tailored to
              meet the specific needs of website owners. From proactive monitoring and
              maintenance to swift troubleshooting and resolution, these services
              provide a comprehensive solution to ensure optimal performance and
              security for websites of all sizes.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With experts vigilantly monitoring network activity and swiftly
              addressing any issues that arise, website owners can rest assured knowing
              that their online presence is in capable hands. Managed services often
              include advanced security measures like intrusion detection, firewalls
              and malware protection.
            </p>
            
            <a
              href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all"
            >
              Free Consultation
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>
          
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-800">Device Management</h3>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-blue-600">Total Devices</p>
                  <h2 className="text-2xl font-bold text-gray-900">1,284</h2>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-sm text-green-600">Compliance</p>
                  <h2 className="text-2xl font-bold text-gray-900">98%</h2>
                </div>
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center">
                      <Smartphone className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">iPhone 13 Pro</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 mt-6 border-t">
                <div className="flex items-center text-sm text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Secured Devices
                </div>
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-semibold text-gray-700">Real-time Sync</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Benefits That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Matter</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive solutions that transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {NETWORK_BENEFITS.map((card, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur`}></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 group-hover:border-transparent h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform`}>
                      <i className={`fas ${card.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/20 rounded-2xl -z-10 animate-ping-slow"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{card.desc}</p>
                  
                  <ul className="space-y-3 text-sm mt-auto">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <i className="fas fa-check-circle text-green-400 w-5 mr-3 text-sm"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>
      
      {/* Microsoft Intune Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Microsoft Intune
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient"> Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
              Comprehensive device and application management solutions for the modern workplace.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-auto-slide">
                {[...serviceItems, ...serviceItems].map((item, index) => (
                  <div
                    key={`service-${index}`}
                    className="flex-none w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group/card"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6`}>
                        <i className={`fas ${item.icon} text-white text-2xl`}></i>
                      </div>
                      <div className={`absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl blur-lg opacity-0 group-hover/card:opacity-50 transition-opacity duration-500`}></div>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-600 group-hover/card:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${item.gradient} text-white rounded-full transform transition-all duration-300 group-hover/card:scale-105`}>
                        Active
                      </span>
                     
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                      <div className={`h-full bg-gradient-to-r ${item.gradient} rounded-b-2xl w-0 group-hover/card:w-full transition-all duration-1000`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Managed Services & Packages */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {NETWORK_PRICING_PLANS.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-blue-400/60 scale-105 lg:scale-110'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-blue-100/70 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-blue-100/60">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
         
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>
      
      {/* Why Outsource to Visionaries Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9d9ee] via-[#d7e4f5] to-[#c7d6eb]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why outsource Managed Network Services <br className="hidden md:block" />
              <span className="text-blue-600">to Visionaries?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the strategic advantages of entrusting your IT infrastructure to experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {NETWORK_WHY_OUTSOURCE.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${item.icon} w-6 h-6 text-${item.color}-600 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-sliders-h text-white text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Tailored Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tailored services to suit your business objectives and budget constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
              <p className="text-xl font-semibold text-white">
                Focus on core business activities while Visionaries handles your IT assets with professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Network infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Network Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies that trust Visionaries for their Managed Network Services
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