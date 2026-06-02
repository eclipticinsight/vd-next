// app/pricing/page.tsx
'use client';
 
import { useEffect, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
 
type PricingType = 'seo' | 'smo';
 
type Plan = {
  id: string;
  name: string;
  price: number;
  icon: string;
  gradient: string;
  borderColor: string;
  features: string[];
  support: string[];
  buttonText: string;
  popular: boolean;
  keywordLimit?: number;
  backlinks?: number;
  gmb?: number;
  guestPost?: number;
  pressRelease?: number;
  platforms?: string[];
  postsPerMonth?: number;
  engagement?: string;
};
 
type CartItem = Plan & {
  service: PricingType;
};
 
type PricingCardProps = {
  plan: Plan;
  type: PricingType;
  isHovered: boolean;
  onHover: (id: string | null) => void;
};
 
type SectionHeaderProps = {
  title: string;
  description: string;
  badge: string;
  icon: string;
};
 
const PricingPage = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();
 
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
 
  // ========== SECTION 1: SEO PRICING (3 tiers) ==========
  const seoPlans = [
    {
      id: 'seo-growth',
      name: 'Growth',
      price: 599,
      keywordLimit: 150,
      backlinks: 500,
      gmb: 12,
      guestPost: 4,
      pressRelease: 2,
      icon: '📈',
      gradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      features: [
        'Website Review & Analysis',
        'Competitor Analysis',
        'Keyword Research & Analysis',
        'Title & META Tags Optimization',
        'Heading & Image Alt Tags Optimization',
        'Content Optimization',
        'SEO Friendly URL Setup',
        '404 Page & Broken Links Check',
        'Website Speed Check',
        'Robots.txt & XML Sitemap Creation',
        'Google Webmasters & Analytics Setup',
        'Structured Data & Schema Implementation',
        'Monthly Keyword Ranking Report',
        'Monthly Website Analytics Report',
        '6 Article Postings',
        '60 Social Bookmarking',
        'Facebook, Instagram, Twitter Setup'
      ],
      support: ['Email Support', 'Chat Support'],
      buttonText: 'Get Growth SEO',
      popular: false
    },
    {
      id: 'seo-turbo',
      name: 'Turbo',
      price: 899,
      keywordLimit: 200,
      backlinks: 650,
      gmb: 14,
      guestPost: 6,
      pressRelease: 3,
      icon: '⚡',
      gradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-300',
      features: [
        'Everything in Growth, plus:',
        'Video Marketing',
        'Press Release Writing & Distribution',
        'Quora Answering',
        'PPT Submissions',
        '8 Article Postings & Bookmarkings',
        '80 Social Bookmarking',
        '16 Facebook/Instagram/Twitter Posts',
        'Priority Support',
        'Quarterly Competitor Conquest Reports'
      ],
      support: ['Email Support', 'Chat Support', 'Phone Support'],
      buttonText: 'Get Turbo SEO',
      popular: true
    },
    {
      id: 'seo-custom',
      name: 'Custom',
      price: 1299,
      keywordLimit: 250,
      backlinks: 800,
      gmb: 16,
      guestPost: 8,
      pressRelease: 4,
      icon: '👑',
      gradient: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      features: [
        'Everything in Turbo, plus:',
        '10 Article Postings & Bookmarkings',
        '25 Image & PDF Sharing',
        '100+ Social Bookmarking',
        'Video Submissions',
        'Premium Guest Blog',
        'Advanced Schema Tags',
        'Open Graph & Twitter Tags',
        'Site Navigation Analysis',
        'Ongoing UX Reporting'
      ],
      support: ['24/7 Email', 'Priority Phone', 'Dedicated Chat', 'WhatsApp'],
      buttonText: 'Get Custom SEO',
      popular: false
    }
  ];
 
  // ========== SECTION 2: SMO PRICING (3 tiers) ==========
  const smoPlans = [
    {
      id: 'smo-starter',
      name: 'Starter SMO',
      price: 399,
      platforms: ['Facebook', 'Instagram', 'Twitter'],
      postsPerMonth: 30,
      engagement: 'Basic',
      icon: '📱',
      gradient: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      features: [
        'Profile Setup & Optimization',
        'Cover Photo & Branding Design',
        'Page & Username Optimization',
        '30 Engaging Posts (images + captions)',
        'Hashtag Research & Strategy',
        'Competitor Analysis (Basic)',
        'Weekly Engagement (comments, likes)',
        'Monthly Performance Report',
        'Basic Ad Campaign Setup (1 platform)'
      ],
      support: ['Email Support', 'Chat Support'],
      buttonText: 'Start SMO Starter',
      popular: false
    },
    {
      id: 'smo-professional',
      name: 'Professional SMO',
      price: 699,
      platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest'],
      postsPerMonth: 60,
      engagement: 'Advanced',
      icon: '🚀',
      gradient: 'from-rose-50 to-red-50',
      borderColor: 'border-rose-300',
      features: [
        'Everything in Starter, plus:',
        '5 Social Platforms Management',
        '60 High-Quality Posts (carousels + videos)',
        'Advanced Hashtag & SEO Research',
        'Content Calendar Strategy',
        'Daily Engagement & Community Management',
        'Influencer Outreach (3 per month)',
        'Bi-Weekly Performance & Insights Report',
        'Ad Campaign Management (up to $500 ad spend)',
        'Social Listening & Brand Mentions',
        'Custom Graphics & Video Editing (5 videos)'
      ],
      support: ['Priority Email', 'Chat', 'Phone Support'],
      buttonText: 'Start Professional SMO',
      popular: true
    },
    {
      id: 'smo-enterprise',
      name: 'Enterprise SMO',
      price: 1199,
      platforms: ['All Major Platforms + YouTube'],
      postsPerMonth: 120,
      engagement: 'Full-Service',
      icon: '👑',
      gradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      features: [
        'Everything in Professional, plus:',
        'All Platforms + YouTube Optimization',
        '120 Premium Posts (stories + reels + long-form)',
        'Full-Service Community Management',
        'Paid Social Strategy & Ad Management',
        'Monthly Influencer & Partnership Campaigns',
        'Viral Content Strategy & A/B Testing',
        'Custom Animations & Motion Graphics',
        'Weekly In-Depth Analytics & ROI Tracking',
        'Dedicated Social Media Manager',
        'Crisis Management & 24/7 Monitoring'
      ],
      support: ['24/7 Priority Support', 'Dedicated Account Manager', 'SLA Agreement'],
      buttonText: 'Start Enterprise SMO',
      popular: false
    }
  ];
 
  const handleBuyNow = async (plan: Plan) => {

  const storedUser = localStorage.getItem("user");
  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  if (!user) {

    localStorage.setItem(
      "pendingPlan",
      JSON.stringify(plan)
    );

    toast.error(
      "Please login first"
    );

    window.location.href = "/login";

    return;
  }

  try {

    const res = await fetch(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        credentials: "include",

        body: JSON.stringify({
          plans: [
            {
              name: plan.name,
              price: Number(plan.price),
            },
          ],

          userId: user?._id || null,
        }),
      }
    );

    const data = await res.json();

    console.log(
      "PAYMENT RESPONSE:",
      data
    );

    if (data.url) {

      window.location.href =
        data.url;

    } else {

      toast.error(
        data.error ||
        "Checkout URL not received"
      );

    }

  } catch (error) {

    console.error(error);

    toast.error(
      "Payment failed"
    );

  }
};
 
  const handleAddToCart = (plan: Plan, type: PricingType) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') ?? '[]') as CartItem[];
    const updatedCart: CartItem[] = [
      ...existingCart,
      {
        ...plan,
        service: type,
      },
    ];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

window.dispatchEvent(
  new Event("cartUpdated")
);

setCart(updatedCart);

toast.success(`${plan.name} added 🛒`);
  };
 
  // Helper component for pricing cards
  const PricingCard = ({ plan, type, isHovered, onHover }: PricingCardProps) => {
    const getPriceDisplay = () => {
      return `$${plan.price.toLocaleString()}/month`;
    };
 
    const getPriceNote = () => {
      return 'billed monthly';
    };
 
    return (
      <div
        className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 flex flex-col h-full transform ${
          isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'
        } ${plan.popular ? 'ring-2 ring-orange-400 shadow-xl' : 'border border-gray-100'}`}
        onMouseEnter={() => onHover(plan.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />
 
        {plan.popular && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
              ⭐ Most Popular
            </div>
          </div>
        )}
 
        <div className="relative z-10 p-8">
          {/* Icon and Name */}
          <div className="flex items-center justify-between mb-4">
            <div className={`text-5xl transition-transform duration-500 ${isHovered ? 'rotate-6' : ''}`}>
              {plan.icon}
            </div>
          </div>
 
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
 
          <div className="mt-4">
            <span className="text-5xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {getPriceDisplay()}
            </span>
            <p className="text-sm text-gray-500 mt-1">{getPriceNote()}</p>
          </div>
 
          {/* SEO-specific metrics */}
          {type === 'seo' && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105">
                <p className="text-2xl font-bold text-blue-700">{plan.keywordLimit}+</p>
                <p className="text-gray-600 text-xs font-medium">Keywords</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105">
                <p className="text-2xl font-bold text-green-700">{plan.backlinks}</p>
                <p className="text-gray-600 text-xs font-medium">Backlinks/mo</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105">
                <p className="text-2xl font-bold text-purple-700">{plan.gmb}</p>
                <p className="text-gray-600 text-xs font-medium">GMB</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105">
                <p className="text-2xl font-bold text-orange-700">{plan.guestPost}</p>
                <p className="text-gray-600 text-xs font-medium">Guest Posts</p>
              </div>
            </div>
          )}
 
          {/* SMO-specific metrics */}
          {type === 'smo' && (
            <div className="mt-6 space-y-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <span className="text-gray-600 font-medium min-w-[110px]">Platforms:</span>
                <span className="font-bold text-gray-900 leading-relaxed">
                  {Array.isArray(plan.platforms) ? plan.platforms.join(', ') : plan.platforms}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Posts/Month:</span>
                <span className="font-bold text-gray-900">{plan.postsPerMonth}+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Engagement:</span>
                <span className="font-bold text-gray-900">{plan.engagement}</span>
              </div>
            </div>
          )}
        </div>
 
        <div className="border-t border-gray-200 relative z-10"></div>
 
        <div className="p-8 flex-grow relative z-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">What's included:</p>
          <ul className="space-y-3">
            {plan.features.slice(0, 8).map((feature, idx) => (
              <li key={idx} className="flex items-start group">
                <svg
                  className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
 
        <div className="p-8 pt-0 relative z-10 space-y-3">
          {/* Add to Cart */}
          <button
            onClick={() => handleAddToCart(plan, type)}
            className="w-full py-3 rounded-xl font-semibold border border-gray-300 text-gray-800 hover:bg-gray-100 transition cursor-pointer"
          >
            🛒 Add to Cart
          </button>
 
          {/* Buy Now */}
          <button
            onClick={() => handleBuyNow(plan)}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform ${
              plan.popular
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:scale-105'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            ⚡ Buy Now
          </button>
        </div>
      </div>
    );
  };
 
  const SectionHeader = ({ title, description, badge, icon }: SectionHeaderProps) => (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text px-6 py-2 rounded-full text-sm font-bold mb-4 border border-blue-200">
        <span className="text-2xl">{icon}</span>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{badge}</span>
      </div>
      <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent sm:text-5xl">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
    </div>
  );
 
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative text-white overflow-hidden bg-cover bg-center pt-20 lg:pt-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/0"></div>
 
        {/* Optional gradient overlay (premium look) */}
        <div className="absolute inset-0 bg-black/80"></div>
 
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Digital Growth Starts Here</h1>
 
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
             Powerful SEO, SMO, and web development solutions designed to increase traffic, boost engagement, and grow your business online.
 
          </p>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ========== SECTION 1: SEO PLANS ========== */}
        <section className="mb-32">
          <SectionHeader
            badge="Search Engine Optimization"
            icon="🔍"
            title="Enterprise SEO Plans"
            description="Data-driven SEO strategies to boost your rankings, traffic, and conversions. Choose the plan that fits your business goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                type="seo"
                isHovered={hoveredCard === plan.id}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </section>
 
        {/* ========== SECTION 2: SMO PLANS ========== */}
        <section className="mb-32">
          <SectionHeader
            badge="Social Media Optimization"
            icon="📱"
            title="Social Media Marketing Packages"
            description="Boost engagement, grow your following, and build a powerful brand presence across all major social platforms with our data-driven SMO strategies."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smoPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                type="smo"
                isHovered={hoveredCard === plan.id}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </section>
      </div>
 
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};
 
export default PricingPage;
 