"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  CheckCircle,
  BarChart3,
  Target,
  Shield,
  Calculator,
  Megaphone,
  Cpu,
} from "lucide-react";

const accountingBg = "/images/accounting-bg.webp";
const marketingBg = "/images/marketing-bg.webp";
const itBg = "/images/it-bg.webp";


export default function ServicesOverview() {

  const router = useRouter();

  const [activeService, setActiveService] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);

  useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const services = [
    {
      title: "Accounting Services",
      route: "/accounting",
      showButton: false,
      description:
        "Accurate financial reporting and strategic insights to manage cash flow and reduce costs.",

      icon: BarChart3,
      iconLarge: Calculator,

      features: [
        {
          title: "Bookkeeping & Accounting",
          route: "/accounting/bookkeeping",
        },
        {
          title: "AR, AP and Bank Reconciliations",
          route: "/accounting/bookkeeping",
        },
        {
          title: "Payroll",
          route: "/accounting/payroll",
        },
        {
          title: "Auditing",
          route: "/accounting/auditing",
        },
        {
          title: "Financial Reporting & Analysis",
          route: "/accounting/financial-reporting-analysis",
        },
      ],

      color: "from-blue-600 to-cyan-500",

      backgroundImage: accountingBg,
    },

    {
      title: "Marketing Services",

      route: "",

      showButton: false,

      description:
        "Data-driven marketing strategies to grow visibility, engagement, and ROI.",

      icon: Target,

      iconLarge: Megaphone,

      features: [
        {
          title: "SEO Optimization",
          route: "/seo",
        },
        {
          title: "Social Media Management",
          route: "/social-media-marketing",
        },
        {
          title: "Email Marketing",
          route: "/email-marketing",
        },
        {
          title: "LinkedIn Marketing",
          route: "/linkedin-marketing",
        },
        {
          title: "Web Design & Development",
          route: "/webdesign-development",
        },
      ],

      color: "from-purple-600 to-pink-500",

      backgroundImage: marketingBg,
    },

    {
      title: "IT Asset Management",

      route: "",

      showButton: false,

      description:
        "End-to-end IT asset lifecycle management for compliance and cost optimization.",

      icon: Shield,

      iconLarge: Cpu,

      features: [
        {
          title: "Microsoft 365 Management",
          route: "/ms365-management",
        },
        {
          title: "Managed Network Services",
          route: "/managed-network-services",
        },
        {
          title: "Microsoft Azure",
          route: "/it-asset-management/microsoft-azure",
        },
        {
          title: "Microsoft Intune",
          route: "/it-asset-management/microsoft-intune",
        },
        {
          title: "Mobile Device Management",
          route: "/mobile-device-management",
        },
      ],

      color: "from-emerald-600 to-green-500",

      backgroundImage: itBg,
    },
  ];

  const active = services[activeService];

  return (
    <section
      className="relative min-h-screen py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${active.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c] via-[#071b33]/60 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 transition-all duration-1000 z-[1]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${active.backgroundImage})`,
            opacity: 1,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.80) 50%, rgba(51, 65, 85, 0.85) 100%)",
          }}
        />
      </div>
      {/* CONTENT LAYER */}
      <div className="relative z-10">



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">

            Smart, Scalable{" "}

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              Business Solutions

            </span>

          </h1>

          <p className="text-slate-300">

            Tailored services designed to optimize operations.

          </p>
        </motion.div>

        <div className="flex justify-center gap-4 pb-10 flex-wrap">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`
    flex items-center gap-2 px-8 py-4 rounded-2xl
    font-semibold text-white
    border border-white/20
    backdrop-blur-md
    transition-all duration-300
    hover:scale-105 hover:-translate-y-1
    cursor-pointer

    ${isActive
                    ? `bg-gradient-to-r ${service.color} shadow-xl`
                    : "bg-white/10 hover:bg-white/20"
                  }
  `}
              >
                <service.icon className="w-5 h-5" />
                {service.title}
              </button>
            );
          })}
        </div>

        <div
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 pb-6"
        >
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F5F5F5] rounded-2xl md:rounded-[50px] px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-14 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-14 items-start">
              {/* LEFT */}
              <div>

                {/* ICON */}
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[105px] lg:h-[105px] rounded-2xl lg:rounded-[28px] bg-[#EEF8FF] flex items-center justify-center mb-6 lg:mb-8 shadow-md">

                  <active.iconLarge className="w-10 h-10 text-blue-500" />

                </div>

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-8 tracking-tight">
                  {active.title}
                </h2>

                {/* DESCRIPTION */}
                <div className="bg-[#F0ECE8] border border-[#E7DDD1] rounded-[24px] px-8 py-7 max-w-[620px]">

                  <p className="text-[#475467] text-[18px] leading-10">

                    {active.description}

                  </p>

                </div>



              </div>

              {/* RIGHT */}
              <div>

                {/* INCLUDED TITLE */}
                <div className="flex items-center gap-3 mb-8">

                  <CheckCircle className="w-7 h-7 text-emerald-500" />

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold text-[#071133]">

                    What's Included

                  </h3>

                </div>

                {/* LIST */}
                <div className="space-y-5">

                  {active.features.map((feature, idx) => (
                    <div
                      key={idx}
                      onClick={() => router.push(feature.route)}
                      className="
      flex items-center justify-between
      gap-4 bg-white border border-[#E2E8F0]
      rounded-[24px] px-8 py-5 shadow-sm w-full
      cursor-pointer
      hover:shadow-lg
      hover:-translate-y-1
      transition-all duration-300
    "
                    >
                      <div className="flex items-center gap-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />

                        <span className="text-[18px] text-slate-700 font-medium">
                          {feature.title}
                        </span>
                      </div>


                    </div>
                  ))}

                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}