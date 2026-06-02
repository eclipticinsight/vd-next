'use client';

import { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Database, 
  MessageSquare, 
  Mail, 
  ShoppingCart, 
  FileText, 
  Settings2,
  Globe,
  PhoneCall,
  Calendar,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Activity,
  Target,
  Layers,
  GitBranch,
  Brain,
  Rocket,
  Workflow,
  Gauge,
  Link2,
  ShieldCheck,
} from 'lucide-react';
import WaveTransition from '@/components/sections/WaveTransition';

export default function AutomationIntegrationPage() {
  const [activeTab, setActiveTab] = useState('strategy');

  const integrationSteps = [
    {
      step: 1,
      title: "Identify Opportunities",
      desc: "Analyze workflows to find repetitive tasks and areas where AI can improve speed and efficiency.",
      icon: Target
    },
    {
      step: 2,
      title: "Apply Smart Tools",
      desc: "Integrate AI-powered tools that automate tasks, assist in data processing, and support daily operations.",
      icon: Layers
    },
    {
      step: 3,
      title: "Streamline Workflows",
      desc: "Connect systems and processes to enable smoother operations and faster data flow across teams.",
      icon: GitBranch
    },
    {
      step: 4,
      title: "Improve & Scale",
      desc: "Continuously refine processes using AI insights to enhance performance, accuracy, and overall efficiency.",
      icon: Brain
    }
  ];

  const automationAreas = [
    { icon: TrendingUp, title: "Sales & CRM", benefits: "Auto-lead scoring, email sequencing, pipeline updates", color: "from-blue-500 to-cyan-500" },
    { icon: ShoppingCart, title: "E-commerce & Order Mgmt", benefits: "Sync inventory, automated fulfillment, personalized cart recovery", color: "from-green-500 to-emerald-500" },
    { icon: Users, title: "HR & Onboarding", benefits: "Employee document collection, payroll sync, role-based access", color: "from-purple-500 to-violet-500" },
    { icon: FileText, title: "Finance & Accounting", benefits: "Invoicing automation, expense approvals, real-time reconciliation", color: "from-amber-500 to-orange-500" },
    { icon: MessageSquare, title: "Customer Support", benefits: "AI chatbots, ticket routing, sentiment analysis", color: "from-rose-500 to-pink-500" },
    { icon: Database, title: "Data & Analytics", benefits: "ETL pipelines, automated reporting, predictive dashboards", color: "from-indigo-500 to-purple-500" }
  ];

  const techTools = [
    { name: "Salesforce", icon: "SF", category: "CRM", color: "from-blue-600 to-blue-700" },
    { name: "HubSpot", icon: "H", category: "Marketing", color: "from-orange-500 to-orange-600" },
    { name: "Slack", icon: "S", category: "Communication", color: "from-purple-500 to-purple-600" },
    { name: "Shopify", icon: "SH", category: "E-commerce", color: "from-green-500 to-green-600" },
    { name: "Zapier", icon: "Z", category: "Automation", color: "from-amber-500 to-amber-600" },
    { name: "Stripe", icon: "$", category: "Payments", color: "from-indigo-500 to-indigo-600" },
    { name: "Microsoft 365", icon: "M", category: "Productivity", color: "from-blue-400 to-blue-500" },
    { name: "Google Workspace", icon: "G", category: "Collaboration", color: "from-emerald-500 to-emerald-600" },
    { name: "AWS", icon: "AWS", category: "Cloud", color: "from-orange-600 to-orange-700" },
    { name: "Snowflake", icon: "❄️", category: "Data", color: "from-cyan-500 to-cyan-600" }
  ];

  const handleContactClick = () => {
    window.open("https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100 font-sans">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-gray-200 min-h-[750px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/538/318/non_2x/increasing-automation-level-rpa-robotic-process-automation-innovation-technology-concept-wireframe-hand-is-pulling-up-to-the-maximum-position-circle-progress-bar-with-the-gears-icon-vector.jpg"
            alt="AI Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-slate-200 opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Automate smarter,{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  scale faster
                </span>
              </h1>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleContactClick}
                  className="relative z-10 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-900/40 transition-all duration-200"
                >
                  Contact Us 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 p-1 rounded-2xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 shadow-xl text-white">
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4 mb-4">
                    <Settings2 className="w-6 h-6 text-indigo-300" />
                    <h3 className="font-bold">Integration health score</h3>
                    <span className="ml-auto bg-emerald-400/20 text-emerald-300 text-xs font-semibold px-2 py-1 rounded-full">
                      Live sync
                    </span>
                  </div>

                  <div className="space-y-4">
                    {["CRM (Salesforce)", "ERP (SAP)", "Marketing Hub", "Support Desk"].map((sys, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm font-medium text-gray-200">
                          <span>{sys}</span>
                          <span>98%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                          <div className="bg-indigo-400 h-2 rounded-full w-[98%]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <WaveTransition />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-50/20 to-purple-50/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Your blueprint for{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  seamless automation
                </span>
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-indigo-200/50 -z-10 rounded-full" />
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Strategic integration framework to embed automation across your business DNA.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'strategy', label: 'Integration roadmap', icon: Calendar, description: '4-step methodology' },
              { id: 'areas', label: 'High-impact areas', icon: BarChart3, description: 'Key departments' },
              { id: 'tech', label: 'Tech stack connectors', icon: Globe, description: '150+ integrations' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-6 py-3 rounded-2xl transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <tab.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${activeTab === tab.id ? 'text-white' : 'text-indigo-500'}`} />
                  <span className="text-sm font-semibold">{tab.label}</span>
                </div>
                {activeTab !== tab.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-8 transition-all duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[520px] transition-all duration-500">
            {/* Strategy Tab */}
            {activeTab === 'strategy' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">4-step integration methodology</h3>
                    </div>
                    <div className="space-y-4">
                      {integrationSteps.map((item) => (
                        <div key={item.step} className="flex gap-4 p-3 rounded-xl">
                          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                            <span className="font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-indigo-500 rounded-xl">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Why integration-first matters</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        { text: "Break data silos → unified customer view", metric: "+47%", trend: "up" },
                        { text: "Automate cross-department triggers", metric: "3.2x", trend: "up" },
                        { text: "Real-time decision making with AI layer", metric: "89%", trend: "up" },
                        { text: "Reduce technical debt with API-led connectivity", metric: "-62%", trend: "down" }
                      ].map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/50 transition">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 flex-1">{point.text}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            point.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                          }`}>
                            {point.metric}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-semibold text-gray-700">Example workflow: Lead-to-cash</span>
                      </div>
                      <Gauge className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl">
                      <span className="px-2 py-1 bg-white rounded-md border">Form submit</span>
                      <ArrowRight className="w-3 h-3" />
                      <span className="px-2 py-1 bg-white rounded-md border">CRM contact</span>
                      <ArrowRight className="w-3 h-3" />
                      <span className="px-2 py-1 bg-white rounded-md border">ERP inventory</span>
                      <ArrowRight className="w-3 h-3" />
                      <span className="px-2 py-1 bg-white rounded-md border">Auto invoice</span>
                      <ArrowRight className="w-3 h-3" />
                      <span className="px-2 py-1 bg-white rounded-md border">Slack notify</span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Processing speed improvement</span>
                        <span className="font-bold text-indigo-600">78% faster</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[78%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative">
                          <div className="absolute inset-0 bg-white/30 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Areas Tab */}
            {activeTab === 'areas' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automationAreas.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${area.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-bold text-xl mt-4 text-gray-800">{area.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{area.benefits}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tab */}
            {activeTab === 'tech' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                      <Link2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Some Apps used in Automation Process</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {techTools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="group relative flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-110 transition-transform`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-gray-700 text-sm block">{tool.name}</span>
                        <span className="text-[10px] text-gray-400">{tool.category}</span>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative bg-gray-950 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
        
        <div className="absolute inset-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/538/318/non_2x/increasing-automation-level-rpa-robotic-process-automation-innovation-technology-concept-wireframe-hand-is-pulling-up-to-the-maximum-position-circle-progress-bar-with-the-gears-icon-vector.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              How automation{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                transforms your business
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Integration isn't just efficiency — it's your competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 mb-4 group-hover:scale-110 transition">
                  <TrendingUp className="text-indigo-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Revenue growth</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Automated lead nurturing + instant follow-ups increase conversion by up to 34%.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 mb-4 group-hover:scale-110 transition">
                  <Users className="text-purple-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Employee experience</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Free teams from repetitive work so they can focus on strategy and innovation.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 mb-4 group-hover:scale-110 transition">
                  <Shield className="text-emerald-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Risk & compliance</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Automated audit trails and secure workflows ensure compliance and reduce risks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <WaveTransition />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Start your <span className="text-indigo-600">AI-powered journey</span>
              </h3>
              <p className="text-gray-600 mt-3">
                Improve your workflows with smarter automation, better insights, and faster execution.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Automate key workflows",
                  "Improve accuracy and speed",
                  "Scale operations efficiently"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 lg:p-12 bg-gray-50">
              <h4 className="text-sm font-semibold text-indigo-600 mb-6">
                How We Improve Your Services
              </h4>
              <div className="space-y-6">
                {[
                  { title: "Identify Opportunities", desc: "We analyze your processes to find areas where automation can save time." },
                  { title: "Apply Smart Tools", desc: "We introduce AI-powered tools to streamline repetitive tasks." },
                  { title: "Optimize Workflows", desc: "We connect systems and improve data flow for better efficiency." },
                  { title: "Continuous Improvement", desc: "We refine processes using insights to boost performance over time." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{step.title}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}