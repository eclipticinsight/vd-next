"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import {
  Users,
  Headphones,
  Calculator,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export const WaveTransition = ({ direction = "bottom" }: { direction?: "top" | "bottom" }) => {
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
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" fillOpacity="0.5" />
      </svg>
    </div>
  );
};

/* ================= CINEMATIC CROSSFADE PRESET ================= */
const crossfade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.6 as number,
    ease: "easeInOut" as const,
  },
};

// Type definitions
interface Process {
  step: string;
  title: string;
  route: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  features: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ServicesShowcase: React.FC = () => {
  const [active, setActive] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_URL}/api/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          type: formData.service || "Accounting",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setShowContactForm(false);
      } else {
        alert(data.error || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const processes: Process[] = [
    {
      step: "01",
      title: "Accounting & Compliance Process",
      route: "/contact", 
      category: "Finance Process",
      description:
        "A compliance-driven financial process that captures transactions, validates records, prepares reports, and ensures regulatory adherence with audit-ready documentation.",
      icon: Calculator,
      color: "#10b981",
      features: [
        "Transaction capture & reconciliation",
        "AR, AP and Bank Reconcilitions",
        "Financial statement preparation",
        "Adhoc Repoting & Analysis",
      ],
    },
    {
      step: "02",
      title: "Recruitment Process Outsourcing",
      category: "RPO Process",
      route: "/contact",
      description:
        "A structured hiring process that defines role requirements, sources qualified candidates, evaluates talent, and ensures seamless onboarding with measurable outcomes.",
      icon: Users,
      color: "#3b82f6",
      features: [
        "Requirement mapping & role definition",
        "Candidate sourcing & screening workflow",
        "Interview & selection framework",
        "Onboarding & performance tracking",
      ],
    },
    {
      step: "03",
      title: "Virtual Assistance Process",
      route: "/virtualassistance",
      category: "VA Process",
      description:
        "A standardized operational process that manages daily tasks, customer communication, and data handling through clearly defined workflows and service-level benchmarks.",
      icon: Headphones,
      color: "#8b5cf6",
      features: [
        "Task intake & prioritization flow",
        "Customer interaction protocols",
        "CRM & data processing pipeline",
        "Quality assurance & reporting",
      ],
    },
  ];

  const current = processes[active];

  const handleProcessClick = (index: number) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActive(index);
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowContactForm(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showContactForm]);

  return (
    <section className="w-full pt-4 pb-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full -mt-1 z-10">
        <WaveTransition direction="top" />
      </div>
 
      {/* ================= IMAGE BACKGROUND ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
style={{
  backgroundImage: "url('/images/business-analytics.avif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <div className="absolute inset-0 pointer-events-none bg-[#0a192f]/45" />

        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {typeof window !== "undefined" && [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#020b1c]/60 via-[#071b33]/50 to-[#020b1c]/70" />

      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-50 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mt-10 mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            A Smarter Way to Scale Your Business
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            From hiring the right talent to managing operations and finances —
            our proven processes are designed to guide your business through every stage of growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* MOBILE TOP HORIZONTAL SIDEBAR */}
          <div className="sm:hidden w-full flex justify-center mb-6 relative z-50">
            <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 shadow-2xl">
              {processes.map((process, index) => (
                <div key={index} className="flex items-center">
                  {/* ICON + TOOLTIP */}
                  <div className="relative group">
                    {/* TOOLTIP */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl bg-slate-900/95 text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl z-50 backdrop-blur-xl">
                      {process.title}
                      {/* TOOLTIP ARROW */}
                      <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-slate-900 rotate-45 -translate-x-1/2"></div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => handleProcessClick(index)}
                      className={`
                        relative w-14 h-14 rounded-2xl
                        flex flex-col items-center justify-center
                        transition-all duration-300
                        border
                        ${
                          active === index
                            ? "bg-white border-white shadow-[0_8px_25px_rgba(255,255,255,0.25)] scale-105"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }
                      `}
                    >
                      <process.icon
                        className={`w-5 h-5 ${
                          active === index ? "opacity-100" : "opacity-70"
                        }`}
                        style={{ color: process.color }}
                      />

                      <span
                        className="text-[10px] font-bold mt-1"
                        style={{ color: process.color }}
                      >
                        {process.step}
                      </span>

                      {/* ACTIVE INDICATOR */}
                      {active === index && (
                        <div
                          className="absolute -bottom-1 w-7 h-1 rounded-full"
                          style={{ backgroundColor: process.color }}
                        />
                      )}
                    </button>
                  </div>

                  {/* CONNECTOR */}
                  {index !== processes.length - 1 && (
                    <div className="w-5 h-[1px] bg-white/20 mx-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="block lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* LEFT — Timeline */}
            <div className="hidden sm:block space-y-4 sm:space-y-6 col-span-3">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  whileHover={{ opacity: active !== index ? 0.85 : 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleProcessClick(index)}
                  className={`cursor-pointer min-h-[220px] lg:min-h-[230px] p-6 lg:p-8 rounded-3xl border transition-all backdrop-blur-xl flex items-center ${
                    active === index
                      ? "bg-white/20 shadow-2xl border-white/30"
                      : "bg-white/10 border-white/20 hover:bg-white/20 hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-8">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: process.color }}
                    >
                      {process.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <process.icon
                          className="w-6 h-6"
                          style={{ color: process.color }}
                        />
                        <span
                          className="text-sm font-semibold uppercase tracking-wide"
                          style={{ color: process.color }}
                        >
                          {process.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {process.title}
                      </h3>

                      <p className="text-blue-100 text-base leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {active === index && (
                      <ChevronRight className="w-6 h-6 mt-2 text-white" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT — Preview */}
            <AnimatePresence mode="wait">
  <motion.div
    key={current.title}
    initial={crossfade.initial}
    animate={crossfade.animate}
    exit={crossfade.exit}
    transition={crossfade.transition}
    className="relative z-50 w-full sm:ml-0 bg-white/[0.96] backdrop-blur-3xl rounded-[32px] border border-white/40 shadow-[0_25px_80px_rgba(0,0,0,0.35)] overflow-hidden p-5 sm:p-6 lg:p-8 sticky top-24 lg:col-span-2"
  >
                <div className="relative mb-5">
                  {/* Glow */}
                  <div
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-10"
                    style={{ backgroundColor: current.color }}
                  />

                  <div className="flex items-center gap-4 relative z-10 mb-4">
                  </div>
                  
                  {/* ICON */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-md border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100" style={{ backgroundColor: `${current.color}20` }}>
                    <current.icon
                      className="w-10 h-10"
                      style={{ color: current.color }}
                    />
                  </div>

                  {/* TEXT */}
                  <span
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: current.color }}
                  >
                    {current.category}
                  </span>
                </div>

                <h3 className="text-[34px] leading-[1.1] font-black tracking-[-1px] text-slate-900 mb-4">
                  {current.title}
                </h3>

                <p className="text-[15px] leading-7 text-slate-600 mb-8 font-medium">
                  {current.description}
                </p>

                <div className="space-y-4 mb-10">
                  {current.features.map((feature, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-[0_6px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: current.color }}
                      />
                      <span className="font-semibold text-[15px] text-slate-800 leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
                  style={{ backgroundColor: current.color }}
                >
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <span>Start This Process</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-white/40 skew-x-12 animate-[shine_3s_infinite]" />
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-5 sm:mb-6 md:mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Start Your Transformation</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
                </div>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                      required
                    />
                  </div>  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="financial-reporting">Financial Reporting</option>
                    <option value="payroll">Payroll Processing</option>
                    <option value="tax">Rpo</option>
                    <option value="all">V.A</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    placeholder="Tell us about your business and financial needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request Consultation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 w-full z-30">
        <WaveTransition />
      </div>
    </section>
  );
};

export default ServicesShowcase;