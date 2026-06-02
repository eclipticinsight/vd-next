"use client";
 
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
 
type Plan = {
  name: string;
  price: number | string;
  features: string[];
  popular?: boolean;
};
 
type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  gradient: string;
  bgLight: string;
  iconColor: string;
  plans: Plan[];
};
 
type CartItem = Plan & {
  service: string;
  id: string;
};
 
const heroBg =
  "https://img.freepik.com/premium-photo/business-people-handshake-collaboration-thank-you-contract-meeting-with-diversity-teamwork-collaboration-happy-manager-b2b-partnership-investment-company-growth-staff-applause_590464-82212.jpg";
 
const startPayment = async (plan: Plan) => {
  try {

    const response = await fetch(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",

        body: JSON.stringify({
          plans: [
            {
              name: plan.name,
              price: Number(plan.price),
            },
          ],

          userId: null,
        }),
      }
    );

    const data = await response.json();

    console.log("PAYMENT RESPONSE:", data);

    if (data.url) {
      window.location.href = data.url;
    } else {
      toast.error(data.error || "Checkout URL not received");
    }

  } catch (error) {

    console.error(error);

    toast.error("Payment failed");
  }
};
 
const addToCart = (item: CartItem) => {
  // Get existing cart from localStorage
  const existingCart = JSON.parse(localStorage.getItem("cart") ?? "[]") as CartItem[];
 
  // Check if item already exists in cart
  const itemExists = existingCart.some(
    (cartItem) => cartItem.id === item.id
  );
 
  if (!itemExists) {
    existingCart.push(item);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  }
 
  return existingCart;
};
 
const PricingPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
 
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
 
  const handleAddToCart = (
  plan: Plan,
  sectionId: string
) => {

  const item: CartItem = {
    ...plan,
    service: sectionId,
    id: `${sectionId}-${plan.name}-${Date.now()}`
  };

  addToCart(item);

  // INSTANT HEADER/CART UPDATE
  window.dispatchEvent(
    new Event("cartUpdated")
  );

  toast.success(
    `${plan.name} (${sectionId}) added 🛒`
  );
};
 
  const handlePlanClick = (plan: Plan) => {
    const storedUser = localStorage.getItem("user");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
 
    if (!currentUser) {
      // Save selected plan before login
      localStorage.setItem("selectedPlan", JSON.stringify(plan));
      router.push("/login");
    } else {
      startPayment(plan);
    }
  };
 
  const sections: Section[] = [
    {
      id: "accounting",
      title: "Accounting Services",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-6 3v-3m-6 3h18M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
      bgLight: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
      plans: [
        {
          name: "Starter Pack",
          price: 499,
          features: [
            "Basic Bookkeeping (40 hrs)",
            "Monthly Reports",
            "Bank Reconciliation",
            "Payroll Support",
          ],
        },
        {
          name: "Pro Pack",
          price: 899,
          popular: true,
          features: [
            "Bookkeeping (80 hrs)",
            "Full Payroll",
            "Bank Reconciliation",
            "Financial Reports",
          ],
        },
        {
          name: "Enterprise Pack",
          price: 1599,
          features: [
            "Complete Bookkeeping (160 hrs)",
            "Payroll + Compliance",
            "Reports + Advisory",
            "Dedicated Accountant",
          ],
        },
      ],
    },
    {
      id: "taxation",
      title: "Taxation Services",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-blue-600 to-indigo-600",
      bgLight: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      plans: [
        {
          name: "Initial Pack",
          price: 299,
          features: [
            "Basic Tax Filing",
            "GST Filing",
            "Tax Reports",
            "Email Support",
          ],
        },
        {
          name: "Boost Pack",
          price: 599,
          popular: true,
          features: [
            "Tax Planning",
            "Quarterly Filing",
            "Compliance",
            "Priority Support",
          ],
        },
        {
          name: "Elite Pack",
          price: 999,
          features: [
            "Advanced Tax Strategy",
            "Audit Support",
            "Full Compliance",
            "Dedicated Consultant",
          ],
        },
      ],
    },
    {
      id: "business-analyst",
      title: "Business Analyst Services",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      bgLight: "from-amber-50 to-orange-50",
      iconColor: "text-amber-600",
      plans: [
        {
          name: "First Pack",
          price: 999,
          features: [
            "Basic KPI Tracking",
            "Monthly Insights",
            "Reports",
            "Email Support",
          ],
        },
        {
          name: "Growth Pack",
          price: 1999,
          popular: true,
          features: [
            "Forecasting",
            "Profit Analysis",
            "Dashboards",
            "Strategy Calls",
          ],
        },
        {
          name: "Ultimate Pack",
          price: "Contact Us",
          features: [
            "Advanced Analytics",
            "Custom Dashboards",
            "Business Strategy",
            "Dedicated Analyst",
          ],
        },
      ],
    },
  ];
 
  
 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100">
      {/* Hero Section */}
      <div className="relative w-full pt-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Smart Pricing for
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Financial Success
            </span>
          </h1>
        </div>
      </div>
 
      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-20">

        {sections.map((section, sIndex) => (
          <div key={sIndex} className="mb-24 last:mb-0">
            <div className="text-center mb-12">
              {/* Icon + Title in SAME ROW */}
              <div className="flex items-center justify-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${section.bgLight}`}>
                  {section.icon}
                </div>
 
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  {section.title}
                </h2>
              </div>
 
              {/* Underline */}
              <div className={`w-20 h-1 bg-gradient-to-r ${section.gradient} mx-auto mt-4 rounded-full`} />
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {section.plans.map((plan, index) => {
                const displayPrice = plan.price;
                const isPopular = plan.popular;
                
 
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                      isPopular
                        ? "bg-white shadow-xl ring-2 ring-offset-2 ring-slate-200"
                        : "bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span
                          className={`bg-gradient-to-r ${section.gradient} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md`}
                        >
                          ⚡ MOST POPULAR
                        </span>
                      </div>
                    )}
 
                    <div className="p-6 lg:p-8">
                      <div
                        className={`text-center p-4 -mt-2 -mx-2 rounded-xl bg-gradient-to-br ${section.bgLight}`}
                      >
                        <h3 className="text-xl font-bold text-slate-800">
                          {plan.name}
                        </h3>
                      </div>
 
                      <div className="text-center mt-6">
                        <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">
                          {typeof displayPrice === "number"
                            ? `$${displayPrice.toLocaleString()}`
                            : displayPrice}
                        </h2>
<p className="text-slate-500 text-sm mt-1">
  per month
</p>
                        
                      </div>
 
                      <div className="mt-6 space-y-3">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          What's included
                        </p>
                        <ul className="space-y-2.5">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-600"
                            >
                              <svg
                                className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
 
                      <div className="mt-8 flex gap-3">
                        {typeof plan.price === "number" ? (
                          <>
                            {/* ADD TO CART */}
                            <button
                              onClick={() => handleAddToCart(plan, section.id)}
                              className="w-1/2 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition"
                            >
                              Add to Cart
                            </button>
 
                            {/* BUY NOW */}
                            <button
                              onClick={() => handlePlanClick(plan)}
                              className={`w-1/2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${section.gradient} hover:opacity-90 transition`}
                            >
                              Buy Now
                            </button>
                          </>
                        ) : (
                          /* CONTACT BUTTON */
                          <button
                            onClick={() => router.push("/contact")}
                            className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${section.gradient} hover:opacity-90 transition`}
                          >
                            Contact Us
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default PricingPage;
 
