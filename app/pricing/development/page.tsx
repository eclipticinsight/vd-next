'use client';
 
import React, { useState } from 'react';
import toast from "react-hot-toast";

type PricingType = 'cms' | 'coding';
 
type Plan = {
  id: string;
  name: string;
  priceType: string;
  price: number;
  icon: string;
  gradient: string;
  borderColor: string;
  features: string[];
  support: string[];
  buttonText: string;
  popular: boolean;
  pages?: string;
  platform?: string;
  turnaround?: string;
  tech?: string;
  keywordLimit?: number;
  backlinks?: number;
  gmb?: number;
  guestPost?: number;
  pressRelease?: number;
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
 
  // ========== SECTION 2: CMS WEBSITE PRICING (3 tiers) ==========
  const cmsPlans = [
    {
      id: 'cms-basic',
      name: 'Basic CMS',
      priceType: 'one-time',
      price: 1499,
      pages: 'Up to 5',
      platform: 'WordPress / Webflow',
      turnaround: '7-10 days',
      icon: '🌱',
      gradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      features: [
        'Pre-built responsive theme',
        '5 pages (Home, About, Services, Blog, Contact)',
        'Basic contact form',
        'Mobile optimized design',
        'SEO-friendly URL structure',
        'Google Analytics integration',
        'Social media links',
        '1 month basic support',
        'Free SSL certificate',
      ],
      support: ['Email Support', 'Documentation'],
      buttonText: 'Start Basic CMS',
      popular: false,
    },
    {
      id: 'cms-business',
      name: 'Business CMS',
      priceType: 'one-time',
      price: 2999,
      pages: 'Up to 15',
      platform: 'WordPress / Webflow / Shopify',
      turnaround: '14-21 days',
      icon: '🚀',
      gradient: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-300',
      features: [
        'Everything in Basic, plus:',
        'Custom theme customization',
        '15 pages + blog section',
        '3 premium plugins/modules',
        'E-commerce ready (up to 50 products)',
        'Advanced contact forms',
        'Newsletter integration',
        'Speed optimization',
        '3 months priority support',
        '1 hour free training',
      ],
      support: ['Email', 'Chat', 'Phone Support'],
      buttonText: 'Start Business CMS',
      popular: true,
    },
    {
      id: 'cms-enterprise',
      name: 'Enterprise CMS',
      priceType: 'one-time',
      price: 4999,
      pages: 'Up to 25',
      platform: 'WordPress / Webflow / Custom CMS',
      turnaround: '21-30 days',
      icon: '🏢',
      gradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      features: [
        'Everything in Business, plus:',
        'Full e-commerce store (unlimited products)',
        'Payment gateway integration',
        'Inventory management',
        'Membership/user login system',
        'Custom post types & taxonomies',
        'Advanced security setup',
        'CDN integration',
        '6 months priority support',
        '2 hours training + video tutorials',
      ],
      support: ['24/7 Priority Support', 'Dedicated Account Manager'],
      buttonText: 'Start Enterprise CMS',
      popular: false,
    },
  ];
 
  // ========== SECTION 3: CODING WEBSITE PRICING (3 tiers) ==========
  const codingPlans = [
    {
      id: 'coding-static',
      name: 'Static Custom Site',
      priceType: 'one-time',
      price: 3999,
      tech: 'HTML5, CSS3, JavaScript',
      pages: 'Up to 10',
      turnaround: '14-21 days',
      icon: '🎨',
      gradient: 'from-gray-50 to-slate-50',
      borderColor: 'border-gray-300',
      features: [
        'Fully hand-coded, no CMS',
        'Responsive design (all devices)',
        '10 static pages',
        'Contact form with backend',
        'Basic animations & interactions',
        'Custom 404 page',
        'Performance optimized',
        '1 month technical support',
        '1 year hosting credit ($100 value)',
      ],
      support: ['Email Support', 'Ticket System'],
      buttonText: 'Get Static Site',
      popular: false,
    },
    {
      id: 'coding-dynamic',
      name: 'Dynamic Web App',
      priceType: 'one-time',
      price: 8999,
      tech: 'React / Next.js, Node.js / Python',
      pages: 'Dynamic + Up to 20 pages',
      turnaround: '30-45 days',
      icon: '⚙️',
      gradient: 'from-slate-50 to-gray-50',
      borderColor: 'border-slate-400',
      features: [
        'Full-stack custom web application',
        'User authentication (login/signup/roles)',
        'Database integration (PostgreSQL/MongoDB)',
        'Admin dashboard',
        'RESTful API endpoints',
        'Real-time features (optional)',
        'File upload capability',
        '3 months support',
        'Deployment assistance',
      ],
      support: ['Priority Email', 'Chat', 'Phone'],
      buttonText: 'Build Dynamic App',
      popular: true,
    },
    {
      id: 'coding-enterprise',
      name: 'Enterprise Solution',
      priceType: 'one-time',
      price: 19999,
      tech: 'React/Next.js, Python/Django, AWS/Azure',
      pages: 'Unlimited + Microservices',
      turnaround: '60-90 days',
      icon: '🏗️',
      gradient: 'from-zinc-50 to-stone-50',
      borderColor: 'border-zinc-400',
      features: [
        'Scalable, high-performance architecture',
        'Advanced security (SSL, encryption, rate limiting)',
        'Third-party API integrations (payment, CRM, etc.)',
        'WebSockets for real-time data',
        'Automated testing & CI/CD pipeline',
        'Multi-tenant support',
        'Analytics dashboard',
        '6 months priority support',
        '5 hours training + documentation',
      ],
      support: ['24/7 Dedicated Support', 'SLA Agreement'],
      buttonText: 'Contact Enterprise Sales',
      popular: false,
    },
  ];
 
  const PricingCard = ({ plan, type, isHovered, onHover }: PricingCardProps) => {
    const getPriceDisplay = () => {
      if (type === 'cms') {
        return `$${plan.price.toLocaleString()}`;
      } else {
        return `$${plan.price.toLocaleString()}`;
      }
    };
 
    const getPriceNote = () => {
      if (type === 'cms') {
        return 'one-time payment';
      } else {
        return 'one-time payment';
      }
    };
 
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
            <div
              className={`text-5xl transition-transform duration-500 ${
                isHovered ? 'rotate-6' : ''
              }`}
            >
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
 
          {/* CMS/Coding specific metrics */}
          {(type === 'cms' || type === 'coding') && (
            <div className="mt-6 space-y-3 bg-gray-50 rounded-xl p-4">
              {plan.pages && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium"> Pages:</span>
                  <span className="font-bold text-gray-900">{plan.pages}</span>
                </div>
              )}
              {plan.tech && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium"> Tech Stack:</span>
                  <span className="font-bold text-gray-900 text-sm">
                    {plan.tech}
                  </span>
                </div>
              )}
              {plan.platform && (
                <div className="flex items-start gap-4">
                  <span className="text-gray-600 font-medium min-w-[90px]">
                    Platform:
                  </span>
                  <span className="font-bold text-gray-900">
                    {plan.platform}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
 
        <div className="border-t border-gray-200 relative z-10"></div>
 
        <div className="p-8 flex-grow relative z-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            What's included:
          </p>
          <ul className="space-y-3">
            {plan.features.slice(0, 8).map((feature, idx) => (
              <li key={idx} className="flex items-start group">
                <svg
                  className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
 
        <div className="p-8 pt-0 relative z-10 space-y-3">
          {/* ADD TO CART */}
          <button
            onClick={() => {
              const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
 
              const updatedCart = [
                ...existingCart,
                {
                  ...plan,
                  service: type, // important for cart display
                },
              ];
 
localStorage.setItem('cart', JSON.stringify(updatedCart));

window.dispatchEvent(
  new Event("cartUpdated")
);

setCart(updatedCart);

toast.success(`${plan.name} added 🛒`);
            }}
            className="w-full py-3 rounded-xl font-semibold border border-gray-300 text-gray-800 hover:bg-gray-100 transition cursor-pointer"
          >
            🛒 Add to Cart
          </button>
 
          {/* BUY NOW */}
          <button
            onClick={() => handleBuyNow(plan)}
            className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition cursor-pointer"
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
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {badge}
        </span>
      </div>
      <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent sm:text-5xl">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
 
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative text-white overflow-hidden bg-cover bg-center pt-20 lg:pt-16"
        style={{
  backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/022/572/610/small_2x/web-development-coding-programming-internet-technology-business-concept-businessman-hand-holding-web-development-icon-on-virtual-screen-photo.jpg')`
}}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/0"></div>
 
        {/* Optional gradient overlay (premium look) */}
        <div className="absolute inset-0 bg-black/80"></div>
 
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Complete Digital Solutions
          </h1>
 
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for SEO, SMO, CMS websites, and custom-coded
            web applications. No hidden fees, no surprises.
          </p>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ========== SECTION 2: CMS WEBSITE PLANS ========== */}
        <section className="mb-32">
          <SectionHeader
            badge="Content Management System"
            icon="📝"
            title="CMS Website Packages"
            description="Powerful, easy-to-manage websites built on leading platforms like WordPress, Webflow, and Shopify."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cmsPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                type="cms"
                isHovered={hoveredCard === plan.id}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </section>
 
        {/* ========== SECTION 3: CODING WEBSITE PLANS ========== */}
        <section className="mb-32">
          <SectionHeader
            badge="Custom Development"
            icon="💻"
            title="Custom-Coded Website Solutions"
            description="Fully custom, high-performance web applications built from scratch with modern technologies."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                type="coding"
                isHovered={hoveredCard === plan.id}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
 
export default PricingPage;
 