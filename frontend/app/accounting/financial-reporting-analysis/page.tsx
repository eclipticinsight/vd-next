"use client";

import React, { useRef, useEffect } from 'react';

import Image from 'next/image';
import {
  FINANCIAL_REPORTING_PAGE_FEATURES,
  FINANCIAL_REPORTING_PAGE_REPORTS,
  BOOKKEEPING_PAGE_VALUE_PROPS
} from '@/utils/constants';

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

const FinancialReportingPage = () => {
  const sectionRef = useRef(null);


  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative pt-28 pb-22 md:pb-28 lg:pb-36 px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/finance-graphs.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Financial Reporting &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Analytics
                </span>
              </h1>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Revenue</p>
                        <p className="text-xl font-bold">$245,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Profit</p>
                        <p className="text-xl font-bold text-green-600">$82,000</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-gray-100 rounded">
                        <p className="text-xs text-gray-500">Cash Flow</p>
                        <p className="font-semibold">$45K</p>
                      </div>
                      <div className="p-3 bg-gray-100 rounded">
                        <p className="text-xs text-gray-500">Expenses</p>
                        <p className="font-semibold">$18K</p>
                      </div>
                      <div className="p-3 bg-gray-100 rounded">
                        <p className="text-xs text-gray-500">Clients</p>
                        <p className="font-semibold">124</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* KPI Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-xs text-gray-500">Revenue</p>
                          <p className="text-lg font-bold text-blue-600">$245K</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-xs text-gray-500">Profit</p>
                          <p className="text-lg font-bold text-green-600">$82K</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="text-xs text-gray-500">Cash Flow</p>
                          <p className="text-lg font-bold text-purple-600">$45K</p>
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-end justify-between h-28 gap-2">
                          <div className="w-5 bg-blue-400 rounded" style={{ height: "40%" }}></div>
                          <div className="w-5 bg-blue-500 rounded" style={{ height: "60%" }}></div>
                          <div className="w-5 bg-blue-600 rounded" style={{ height: "75%" }}></div>
                          <div className="w-5 bg-blue-500 rounded" style={{ height: "55%" }}></div>
                          <div className="w-5 bg-blue-400 rounded" style={{ height: "70%" }}></div>
                          <div className="w-5 bg-blue-600 rounded" style={{ height: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-blue-100">
        <div className="container mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for financial success
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and features to manage, analyze, and grow your business finances.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FINANCIAL_REPORTING_PAGE_FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden p-8 rounded-3xl 
                             bg-white shadow-md 
                             border border-gray-100
                             hover:shadow-2xl 
                             hover:-translate-y-3
                             transition-all duration-500"
                >
                  {/* Full Top Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-2 
                                   bg-gradient-to-r ${feature.color}`}>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6 mt-6">
                    <div className={`p-4 rounded-2xl ${feature.light}
                                     group-hover:bg-gradient-to-r ${feature.color}
                                     transition-all duration-500`}>
                      <Icon className={`w-6 h-6 ${feature.text} 
                                       group-hover:text-white transition duration-500`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-2 h-2 mt-2 rounded-full ${feature.text}`}></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="relative w-full pt-16 pb-28 lg:pt-20 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-12 z-20">
          <WaveTransition direction="top" />
        </div>

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/financial-advisor.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10 mt-12 lg:mt-16">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful financial reports at your fingertips
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Generate professional reports instantly with customizable templates and real-time data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {FINANCIAL_REPORTING_PAGE_REPORTS.map((report, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 relative">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {report.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full mt-12 z-20">
          <WaveTransition />
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section ref={sectionRef} className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          {/* EXACT LABEL */}
          <div className="mb-3">
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Value Proposition
          </h2>

          {/* Connector lines */}
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

          {/* Cards */}
          <div className="relative mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {BOOKKEEPING_PAGE_VALUE_PROPS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-30 px-6 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bookkeeping-cta-bg.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative container mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your financial reporting?
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust us for their financial analytics needs.
          </p>

          <a href="/contact">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Free Trial Today
            </button>
          </a>

          <p className="text-blue-200 mt-4">
            No credit card required · 14-day free trial
          </p>
        </div>
      </section>
    </div>
  );
};

export default FinancialReportingPage;