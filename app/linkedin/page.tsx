'use client';

import { useState } from 'react';
import { 
  ChevronRight, CheckCircle, X, Crown, Target, Building2, Users, 
  Eye, Search, MessageCircle, Database, UserPlus, PieChart, 
  Rocket, Bell, BookOpen, Mail, ChevronDown
} from 'lucide-react';
import WaveTransition from '@/components/sections/WaveTransition';
// Data
const premiumServices = [
  {
    category: "Profile & Visibility",
    icon: <Eye className="h-6 w-6" />,
    features: [
      { name: "Profile Views Analytics", description: "See who viewed your profile", premium: true, salesNav: true },
      { name: "Profile Badge", description: "Premium badge on your profile", premium: true, salesNav: true },
      { name: "Open Profile", description: "Message anyone on LinkedIn", premium: true, salesNav: true },
      { name: "Who's Followed You", description: "Track your follower growth", premium: true, salesNav: false }
    ]
  },
  {
    category: "Messaging & Communication",
    icon: <MessageCircle className="h-6 w-6" />,
    features: [
      { name: "InMail Credits", description: "Message people outside your network", premium: "15/month", salesNav: "50/month" },
      { name: "Message Templates", description: "Save and reuse message templates", premium: false, salesNav: true },
      { name: "InMail Analytics", description: "Track open and response rates", premium: false, salesNav: true },
      { name: "Smart Links", description: "Share content with tracking", premium: false, salesNav: true }
    ]
  },
  {
    category: "Search & Discovery",
    icon: <Search className="h-6 w-6" />,
    features: [
      { name: "Advanced Search Filters", description: "Filter by company, location", premium: "Basic (5 filters)", salesNav: "Advanced (40+ filters)" },
      { name: "Saved Searches", description: "Save search criteria", premium: "5 saved", salesNav: "Unlimited" },
      { name: "Search Alerts", description: "Get notified of new matches", premium: false, salesNav: true },
      { name: "Boolean Search", description: "Complex search queries", premium: false, salesNav: true }
    ]
  },
  {
    category: "Lead Management",
    icon: <Target className="h-6 w-6" />,
    features: [
      { name: "Lead Recommendations", description: "AI-powered lead suggestions", premium: "Basic", salesNav: "Advanced" },
      { name: "Saved Leads", description: "Save leads to track", premium: "500", salesNav: "Unlimited" },
      { name: "Lead Lists", description: "Organize leads into lists", premium: false, salesNav: true },
      { name: "Lead Alerts", description: "Real-time lead updates", premium: false, salesNav: true }
    ]
  },
  {
    category: "Company Intelligence",
    icon: <Building2 className="h-6 w-6" />,
    features: [
      { name: "Company Insights", description: "Company growth trends", premium: "Basic", salesNav: "Detailed" },
      { name: "Company Alerts", description: "Job changes, funding news", premium: false, salesNav: true },
      { name: "Org Charts", description: "View company hierarchy", premium: false, salesNav: true },
      { name: "Similar Companies", description: "Find similar target accounts", premium: false, salesNav: true }
    ]
  },
  {
    category: "Integration & Export",
    icon: <Database className="h-6 w-6" />,
    features: [
      { name: "Export to CRM", description: "Export lead data", premium: false, salesNav: true },
      { name: "CRM Integration", description: "Sync with Salesforce, HubSpot", premium: false, salesNav: true },
      { name: "API Access", description: "Programmatic access", premium: false, salesNav: "Limited" },
      { name: "Bulk Actions", description: "Manage leads in bulk", premium: false, salesNav: true }
    ]
  }
];

const salesNavServices = [
  {
    category: "Advanced Lead Building",
    icon: <UserPlus className="h-6 w-6" />,
    features: [
      { name: "Spotlight Leads", description: "Leads matching your ideal customer profile", available: true },
      { name: "TeamLink", description: "Leverage team connections", available: true },
      { name: "PointDrive", description: "Share presentations with tracking", available: true },
      { name: "Lead Builder", description: "Build targeted lead lists", available: true }
    ]
  },
  {
    category: "Account Targeting",
    icon: <Target className="h-6 w-6" />,
    features: [
      { name: "Account Lists", description: "Create and manage target accounts", available: true },
      { name: "Account Alerts", description: "Real-time account updates", available: true },
      { name: "Similar Accounts", description: "Find comparable companies", available: true },
      { name: "Account Hub", description: "Centralized account view", available: true }
    ]
  },
  {
    category: "Sales Insights",
    icon: <PieChart className="h-6 w-6" />,
    features: [
      { name: "Lead Recommendations", description: "AI-powered lead suggestions", available: true },
      { name: "Job Change Alerts", description: "Know when leads change jobs", available: true },
      { name: "Company News", description: "Real-time company updates", available: true },
      { name: "Sales Insights", description: "Key buying signals", available: true }
    ]
  },
  {
    category: "Team Collaboration",
    icon: <Users className="h-6 w-6" />,
    features: [
      { name: "Team Folders", description: "Shared lead lists", available: true },
      { name: "Deal Spotlight", description: "Collaborate on deals", available: true },
      { name: "Team Activity", description: "See team engagement", available: true },
      { name: "Admin Controls", description: "Manage team access", available: true }
    ]
  }
];

const featureComparison = [
  {
    category: "Profile Features",
    items: [
      { feature: "Premium Profile Badge", premium: "✅", salesNav: "✅" },
      { feature: "Profile Views (90 days)", premium: "✅", salesNav: "✅" },
      { feature: "Who's Followed You", premium: "✅", salesNav: "❌" },
      { feature: "Open Profile", premium: "✅", salesNav: "✅" }
    ]
  },
  {
    category: "Search & Filters",
    items: [
      { feature: "Basic Search Filters", premium: "15 filters", salesNav: "40+ filters" },
      { feature: "Boolean Search", premium: "❌", salesNav: "✅" },
      { feature: "Saved Searches", premium: "5", salesNav: "Unlimited" },
      { feature: "Search Alerts", premium: "❌", salesNav: "✅" }
    ]
  },
  {
    category: "Messaging",
    items: [
      { feature: "Monthly InMail Credits", premium: "15", salesNav: "50" },
      { feature: "Message Templates", premium: "❌", salesNav: "✅" },
      { feature: "InMail Analytics", premium: "❌", salesNav: "✅" },
      { feature: "Smart Links", premium: "❌", salesNav: "✅" }
    ]
  },
  {
    category: "Lead Management",
    items: [
      { feature: "Saved Leads", premium: "500", salesNav: "Unlimited" },
      { feature: "Lead Recommendations", premium: "Basic", salesNav: "AI-Powered" },
      { feature: "Lead Lists", premium: "❌", salesNav: "✅" },
      { feature: "Lead Alerts", premium: "❌", salesNav: "✅" }
    ]
  },
  {
    category: "Company Intelligence",
    items: [
      { feature: "Company Insights", premium: "Basic", salesNav: "Advanced" },
      { feature: "Company Alerts", premium: "❌", salesNav: "✅" },
      { feature: "Org Charts", premium: "❌", salesNav: "✅" },
      { feature: "Similar Companies", premium: "❌", salesNav: "✅" }
    ]
  },
  {
    category: "Integration",
    items: [
      { feature: "CRM Export", premium: "❌", salesNav: "✅" },
      { feature: "CRM Sync", premium: "❌", salesNav: "✅" },
      { feature: "API Access", premium: "❌", salesNav: "Limited" },
      { feature: "Bulk Actions", premium: "❌", salesNav: "✅" }
    ]
  }
];

const useCases = [
  {
    role: "Business Professional",
    icon: <Building2 className="h-6 w-6" />,
    description: "Grow your professional network",
    features: ["Advanced profile views", "15 InMail credits/month", "Company insights", "Open profile"],
    plan: "Business Pro",
    color: "purple"
  },
  {
    role: "Sales Professional",
    icon: <Target className="h-6 w-6" />,
    description: "Find and close more deals",
    features: ["40+ search filters", "50 InMail credits/month", "Lead recommendations", "CRM integration"],
    plan: "Sales Accelerator",
    color: "green"
  },
  {
    role: "Sales Manager",
    icon: <Users className="h-6 w-6" />,
    description: "Lead your team to success",
    features: ["Team collaboration", "Deal spotlight", "Team analytics", "Admin controls"],
    plan: "Sales Accelerator Team",
    color: "orange"
  }
];

const faqData = [
  {
    q: "What's the main difference between Business Pro and Sales Accelerator?",
    a: "Business Pro is designed for individual professionals to enhance their profile and career opportunities. Sales Accelerator is built for sales professionals with advanced search capabilities, lead recommendations, and CRM integration.",
    category: "general"
  },
  {
    q: "How many InMail messages do I get?",
    a: "Business Pro includes 15 InMail credits per month, while Sales Accelerator includes 50 credits per month.",
    category: "messaging"
  },
  {
    q: "What search filters does Sales Accelerator have?",
    a: "Sales Accelerator offers 40+ advanced filters including seniority level, years in position, company size, and boolean search capabilities.",
    category: "search"
  },
  {
    q: "Can I export data to my CRM?",
    a: "Yes, Sales Accelerator allows you to export leads and integrate with major CRMs like Salesforce and HubSpot.",
    category: "integration"
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, both plans offer a 30-day free trial with no credit card required.",
    category: "billing"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('premium');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleStartTrial = () => {
    window.open("https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="LinkedIn Professional Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Choose Your Path to{' '}
              <span className="text-blue-400">LinkedIn Success</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're building your career or closing deals, we have the perfect LinkedIn solution for your needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleStartTrial}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center font-semibold shadow-lg shadow-blue-500/30"
              >
                Start Free Trial 
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <WaveTransition />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful tools designed to supercharge your LinkedIn presence
            </p>

            <div className="flex justify-center mt-10">
              <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('premium')}
                    className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === 'premium' 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-200' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Crown className={`h-5 w-5 ${activeTab === 'premium' ? 'text-yellow-300' : 'text-purple-400'}`} />
                    Business Pro
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('salesnav')}
                    className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === 'salesnav' 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Target className={`h-5 w-5 ${activeTab === 'salesnav' ? 'text-yellow-300' : 'text-green-400'}`} />
                    Sales Accelerator
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'premium' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumServices.map((category, idx) => {
                const iconColors = [
                  { from: "from-purple-500", to: "to-pink-500", light: "from-purple-50", medium: "to-pink-50" },
                  { from: "from-blue-500", to: "to-cyan-500", light: "from-blue-50", medium: "to-cyan-50" },
                  { from: "from-amber-500", to: "to-orange-500", light: "from-amber-50", medium: "to-orange-50" },
                  { from: "from-emerald-500", to: "to-teal-500", light: "from-emerald-50", medium: "to-teal-50" },
                ];
                const color = iconColors[idx % iconColors.length];
                
                return (
                  <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${color.light} ${color.medium} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${color.from} ${color.to} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                        <div className={`relative w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                      <ul className="space-y-4">
                        {category.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm border-b border-gray-100 pb-3 last:border-0">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                {feature.premium ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-900">{feature.name}</span>
                                <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'salesnav' && (
            <div className="grid md:grid-cols-2 gap-8">
              {salesNavServices.map((category, idx) => {
                const iconColors = [
                  { from: "from-emerald-500", to: "to-teal-500", light: "from-emerald-50", medium: "to-teal-50" },
                  { from: "from-blue-500", to: "to-indigo-500", light: "from-blue-50", medium: "to-indigo-50" },
                  { from: "from-amber-500", to: "to-orange-500", light: "from-amber-50", medium: "to-orange-50" },
                ];
                const color = iconColors[idx % iconColors.length];
                
                return (
                  <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${color.light} ${color.medium} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${color.from} ${color.to} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                        <div className={`relative w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                      <ul className="space-y-4">
                        {category.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm border-b border-gray-100 pb-3 last:border-0">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-semibold text-gray-900">{feature.name}</span>
                                <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs">
                          <Rocket className="h-4 w-4 text-green-500" />
                          <span className="text-gray-500">Sales Accelerator Exclusive Features</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-blue-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Side-by-Side </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Comparison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what you get with each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {featureComparison.map((section, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0">
                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-4">
                  <h3 className="font-bold text-lg text-gray-900">{section.category}</h3>
                </div>
                <table className="w-full">
                  <tbody>
                    {section.items.map((item, iIdx) => (
                      <tr key={iIdx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-all">
                        <td className="px-8 py-4">
                          <span className="text-gray-700">{item.feature}</span>
                        </td>
                        <td className="px-8 py-4 w-1/4 text-center">
                          {typeof item.premium === 'string' && item.premium !== "✅" && item.premium !== "❌" ? (
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm">{item.premium}</span>
                          ) : item.premium === "✅" ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-8 py-4 w-1/4 text-center">
                          {typeof item.salesNav === 'string' && item.salesNav !== "✅" && item.salesNav !== "❌" ? (
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm">{item.salesNav}</span>
                          ) : item.salesNav === "✅" ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-blue-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Find Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Perfect Match</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect LinkedIn solution based on your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => {
              const colorSchemes = {
                purple: { light: "bg-purple-50", dark: "text-purple-600", gradient: "from-purple-500 to-purple-600", border: "border-purple-200" },
                green: { light: "bg-green-50", dark: "text-green-600", gradient: "from-green-500 to-green-600", border: "border-green-200" },
                orange: { light: "bg-orange-50", dark: "text-orange-600", gradient: "from-orange-500 to-orange-600", border: "border-orange-200" }
              };
              const scheme =
  colorSchemes[useCase.color as keyof typeof colorSchemes];
              
              return (
                <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${scheme.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {useCase.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.role}</h3>
                  <p className="text-sm text-gray-500 mb-4">{useCase.description}</p>
                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1.5 ${scheme.light} ${scheme.dark} rounded-full text-xs font-semibold border ${scheme.border}`}>
                      <Crown className="h-3 w-3" />
                      {useCase.plan}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 ${scheme.dark} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {idx === 1 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Key Differences <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">at a Glance</span>
      </h2>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Understand the core distinction between the two solutions
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Premium Business Card */}
      <div className="group relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-gray-900 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Crown className="h-8 w-8" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Business Pro</h3>
          <p className="text-gray-300 mb-6">Best for individual professionals focused on:</p>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <UserPlus className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Personal Brand Building</p>
                <p className="text-sm text-gray-400">Establish thought leadership and grow your network</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <Eye className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Profile Visibility</p>
                <p className="text-sm text-gray-400">See who's viewing your profile and track engagement</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <BookOpen className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Learning & Development</p>
                <p className="text-sm text-gray-400">Access to LinkedIn Learning courses</p>
              </div>
            </li>
          </ul>

          {/* Bottom accent */}
          
        </div>
      </div>

      {/* Sales Navigator Card */}
      <div className="group relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-gray-900 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Target className="h-8 w-8" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Sales Accelerator</h3>
          <p className="text-gray-300 mb-6">Designed for sales professionals focusing on:</p>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Search className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Advanced Prospect Discovery</p>
                <p className="text-sm text-gray-400">40+ search filters to find ideal leads</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Bell className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Real-time Lead Alerts</p>
                <p className="text-sm text-gray-400">Get notified when leads change jobs or roles</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Database className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">CRM Integration</p>
                <p className="text-sm text-gray-400">Seamless sync with Salesforce, HubSpot, and more</p>
              </div>
            </li>
          </ul>

          
        </div>
      </div>
    </div>   
  </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Frequently Asked </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80" alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to choose your LinkedIn solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 30-day free trial today
          </p>
          <button
            onClick={handleStartTrial}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Start Sales Accelerator Trial
          </button>
        </div>
      </section>
    </div>
  );
}