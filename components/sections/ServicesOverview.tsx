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
        "Bookkeeping & Accounting",
        "AR, AP and Bank Reconcilitions",
        "Payroll",
        "Auditing",
        "Financial Reporting & Analysis",
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
        "SEO Optimization",
        "Social Media Management",
        "Email Marketing",
        "Content Strategy",
        "Web Design & Development",
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
        "Microsoft 365 Management",
        "Managed Network Services",
        "Microsoft Azure",
        "Microsoft Intune",
        "Mobile Device Management",
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
<div className="absolute inset-0 bg-black/60" />

{/* CONTENT LAYER */}
<div className="relative z-10">



      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl font-bold text-white mb-6">

          Smart, Scalable{" "}

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

            Business Solutions

          </span>

        </h1>

        <p className="text-slate-300">

          Tailored services designed to optimize operations.

        </p>
      </motion.div>

      <div className="flex justify-center gap-4 pb-10">

        {services.map((service, index) => (

          <button
            key={index}
            onClick={() => setActiveService(index)}
            className="px-6 py-3 rounded-xl bg-white/10 text-white"
          >
            <service.icon className="w-5 h-5 inline mr-2" />

            {service.title}

          </button>

        ))}

      </div>

      <div
  ref={ref}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="max-w-[1800px] mx-auto px-10 pb-6"
>
  <motion.div
    key={active.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#F5F5F5] rounded-[50px] px-16 py-14 w-full"
  >
<div className="grid lg:grid-cols-[42%_58%] gap-14 items-start">
  {/* LEFT */}
  <div>

    {/* ICON */}
    <div className="w-[105px] h-[105px] rounded-[28px] bg-[#EEF8FF] flex items-center justify-center mb-8 shadow-md">

      <active.iconLarge className="w-10 h-10 text-blue-500" />

    </div>

    {/* TITLE */}
                      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
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

      <h3 className="text-[56px] font-bold text-[#071133]">

        What's Included

      </h3>

    </div>

    {/* LIST */}
    <div className="space-y-5">

      {active.features.map((feature, idx) => (

<div
 key={idx}
 className="flex items-center gap-4 bg-white border border-[#E2E8F0] rounded-[24px] px-8 py-5 shadow-sm w-full"
>

 <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />

 <span className="text-[18px] text-slate-700 font-medium">
   {feature}
 </span>

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