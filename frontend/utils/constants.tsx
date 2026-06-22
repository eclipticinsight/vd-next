import React from "react";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Target,
  Users,
  TrendingUp,
  Star,
  BarChart3,
  Percent,
  Shield,
  Clock,
  Headphones,
  GraduationCap,
  Home,
  Heart,
  PiggyBank,
  Scale,
  FileCheck,
  Calculator,
  FileText,
  Lightbulb,
  CheckCircle,
  Award,
  Zap,
  Globe,
  Search,
  MessageSquare,
  Calendar,
  Building2,
  Globe2,
  Settings,
  Lock,
  Database,
  Mail,
  HardDrive,
  Smartphone,
  Layers,
  Activity,
  Download,
  BookOpen,
  Eye,
  DollarSign,
  AlertCircle,
  RefreshCw,
  MessageCircle,
  UserPlus,
  PieChart,
  Bell,
  BarChart,
  Cpu,
  Workflow,
  Sparkles,
  Server,
  Cloud,
  GitBranch,
  Brain,
  ShoppingCart,
  Rocket,
  Code,
  CloudUpload,
  HeartHandshake,
  ShieldCheck,
  Wallet,
  Building,
} from "lucide-react";

/* ================= CONTACT & SOCIALS ================= */
export const CONTACT_INFO = {
  phone: "+1(727) 564-9476",
  phoneClean: "+17275649476",
  email: "connect@visionarydynamicsas.com",
  address: "7901 4th St N STE 300 St. Petersburg, Florida-33702 USA",
  officeHours: "Mon-Fri 9am-6pm EST",
};

export const SOCIAL_LINKS = {
  linkedin: "https://in.linkedin.com/company/visionarydynamicsas",
  twitter: "https://x.com/VisionaryD64371",
  facebook: "https://www.facebook.com/visionarydynamicsas/",
  instagram: "https://www.instagram.com/visionary.dynamics/",
};

/* ================= HEADER MENU & ROUTES ================= */
export const MENU_DATA = {
  "Who We Are": {
    "About Us": [],
    "Our Locations": [],
    "Industries we Serve": [],
    "What Our Clients Say": [],
  },
  "What We Do": {
    "Accounting": ["Bookkeeping", "Payroll", "Financial Reporting and Analysis", "Software Setup & Migration"],
    "Taxation": ["Cooperative Tax", "Individual Tax"],
    "Business Analytics": [],
    "Marketing": [
      "Website Design & Development",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Email Marketing",
      "LinkedIn Marketing",
    ],
    "RPO": [],
    "IT Asset Management": [
      "MS 365 Management",
      "Mobile Device Management",
      "Managed Network Services",
    ],
  },
  "How We Do": {
    "Tools we use": ["AI", "Automation", "Cloud"],
    "Blog": [],
  },
  "Pricing": {
    "Accounting Pricing": [],
    "Marketing Pricing": [],
    "Development Pricing": [],
  },
};

export const ROUTES: Record<string, string> = {
  "About Us": "/about",
  "Our Locations": "/location",
  "Industries we Serve": "/industries",
  "What Our Clients Say": "/clients",
  "Bookkeeping": "/accounting/bookkeeping",
  "Payroll": "/accounting/payroll",
  "Financial Reporting and Analysis": "/accounting/financial-reporting-analysis",
  "Software Setup & Migration": "/accounting/software-setup-migration",
  "Cooperative Tax": "/taxation/cooperative-tax",
  "Individual Tax": "/taxation/individual",
  "Business Analytics": "/business-analytics",
  "Website Design & Development": "/webdesign-development",
  "Search Engine Optimization": "/seo",
  "Social Media Marketing": "/social-media-marketing",
  "Email Marketing": "/email-marketing",
  "LinkedIn Marketing": "/linkedin-marketing",
  "AI": "/ai",
  "Automation": "/automation",
  "Cloud": "/cloud",
  "MS 365 Management": "/ms365-management",
  "Mobile Device Management": "/mobile-device-management",
  "Managed Network Services": "/managed-network-services",
  "Development Pricing": "/pricing/development",
  "Marketing Pricing": "/pricing/marketing",
  "Accounting Pricing": "/pricing/accounting",
  "Blog": "/blog",
  "VirtualAssistance": "/virtualassistance",
  "RPO": "/rpo",
};

/* ================= FOOTER LINKS ================= */
export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Accounting", href: "/accounting" },
  { label: "Marketing", href: "/webdesign-development" },
  { label: "I.T", href: "/mobile-device-management" },
];

export const FOOTER_POLICIES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Data Security Policy", href: "/datasecurity" },
  { label: "Intellectual Property Policy", href: "/intellectual" },
  { label: "Complaint & Grievance Policy", href: "/complaint" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/* ================= SOCIAL MARKETING PAGE ================= */
export const SOCIAL_PAGE_SERVICES = [
  {
    icon: <FaFacebook className="w-8 h-8" />,
    title: "Facebook Marketing",
    description: "Targeted campaigns that reach your ideal audience and drive engagement.",
    color: "bg-blue-100 text-blue-600",
    features: ["Audience Targeting", "Engagement Boost", "Lead Generation"]
  },
  {
    icon: <FaInstagram className="w-8 h-8" />,
    title: "Instagram Growth",
    description: "Creative visual strategies to build your brand presence and following.",
    color: "bg-pink-100 text-pink-600",
    features: ["Visual Storytelling", "Hashtag Strategy", "Reel Optimization"]
  },
  {
    icon: <FaXTwitter className="w-8 h-8" />,
    title: "Twitter Marketing",
    description: "Build brand conversations and grow your audience on X.",
    color: "bg-gray-100 text-black",
    features: ["Trend Analysis", "Engagement Strategy", "Brand Voice"]
  },
  {
    icon: <FaTiktok className="w-8 h-8" />,
    title: "TikTok Marketing",
    description: "Viral video content and trends to capture the attention of Gen Z and millennials.",
    color: "bg-black text-white",
    features: ["Viral Trends", "Creator Collabs", "Hashtag Challenges"]
  },
  {
    icon: <FaYoutube className="w-8 h-8" />,
    title: "Video Marketing",
    description: "Compelling video content that tells your story and converts viewers.",
    color: "bg-red-100 text-red-600",
    features: ["Video Production", "YouTube SEO", "Channel Growth"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Targeted Advertising",
    description: "Data-driven ad campaigns across all major social platforms.",
    color: "bg-purple-100 text-purple-600",
    features: ["Precise Targeting", "A/B Testing", "ROI Optimization"]
  }
];

export const SOCIAL_PAGE_STATS = [
  { value: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { value: "10M+", label: "People Reached", icon: <TrendingUp className="w-6 h-6" /> },
  { value: "98%", label: "Client Retention", icon: <Star className="w-6 h-6" /> },
  { value: "24/7", label: "Support Available", icon: <BarChart3 className="w-6 h-6" /> }
];

export const SOCIAL_PAGE_TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Their social media strategy increased our engagement by 300% in just 3 months. Absolutely phenomenal work!",
    rating: 5,
    image: "/images/user-woman-1.webp"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The team understands our brand perfectly. Our social presence has never been stronger.",
    rating: 5,
    image: "/images/user-man-1.webp"
  },
  {
    name: "Emma Davis",
    role: "Small Business Owner",
    content: "Finally found a social media partner that delivers real results. Highly recommended!",
    rating: 5,
    image: "/images/user-woman-2.webp"
  }
];

export const SOCIAL_PAGE_PLATFORMS = [
  {
    name: 'Facebook',
    icon: <FaFacebook className="w-5 h-5 text-blue-400" />,
    growth: '+156%'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="w-5 h-5 text-pink-400" />,
    growth: '+189%'
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter className="w-5 h-5 text-sky-400" />,
    growth: '+124%'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-5 h-5 text-blue-400" />,
    growth: '+142%'
  }
];

/* ================= INDIVIDUAL TAXATION PAGE ================= */
export const INDIVIDUAL_TAX_BENEFITS = [
  {
    icon: <Percent className="w-8 h-8" />,
    title: "Maximum Refunds",
    description: "We identify every deduction and credit you qualify for to maximize your tax refund."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Audit Protection",
    description: "Complete audit support and representation if the IRS has questions about your return."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fast Processing",
    description: "Average 3-5 day turnaround with electronic filing and direct deposit options."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Year-Round Support",
    description: "Access to tax professionals whenever you have questions, not just during tax season."
  }
];

export const INDIVIDUAL_TAX_FILING_STATUSES = [
  { status: "Single", description: "Unmarried individuals", percentage: "35%" },
  { status: "Married Filing Jointly", description: "Married couples filing together", percentage: "45%" },
  { status: "Married Filing Separately", description: "Married couples filing separately", percentage: "5%" },
  { status: "Head of Household", description: "Unmarried with dependents", percentage: "12%" },
  { status: "Qualifying Widow(er)", description: "With dependent child", percentage: "3%" }
];

export const INDIVIDUAL_TAX_DEDUCTIONS = [
  { name: "Standard Deduction 2024", amount: "$14,600", type: "Single" },
  { name: "Standard Deduction 2024", amount: "$29,200", type: "Married Joint" },
  { name: "Standard Deduction 2024", amount: "$21,900", type: "Head of Household" },
  { name: "Medical Expenses", amount: "7.5% of AGI", type: "Itemized" },
  { name: "State & Local Taxes", amount: "$10,000 limit", type: "Itemized" },
  { name: "Mortgage Interest", amount: "Up to $750,000", type: "Itemized" }
];

export const INDIVIDUAL_TAX_CREDITS = [
  {
    icon: <Users className="w-6 h-6" />,
    name: "Child Tax Credit",
    amount: "Up to $2,000 per child",
    description: "For qualifying children under 17"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    name: "Education Credits",
    amount: "Up to $2,500",
    description: "American Opportunity & Lifetime Learning"
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Earned Income Credit",
    amount: "Up to $7,430",
    description: "For low to moderate income workers"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    name: "Child & Dependent Care",
    amount: "Up to $3,000",
    description: "For care expenses while working"
  }
];

export const INDIVIDUAL_TAX_DOCUMENTS = [
  {
    category: "Income Documents",
    items: [
      "W-2 forms from all employers",
      "1099-NEC for freelance work",
      "1099-INT for interest income",
      "1099-DIV for dividends",
      "K-1 forms for partnerships",
      "Social Security benefits statement"
    ]
  },
  {
    category: "Deduction Documents",
    items: [
      "Mortgage interest statement (1098)",
      "Property tax receipts",
      "Charitable donation receipts",
      "Medical expense records",
      "Student loan interest statement",
      "IRA contribution records"
    ]
  },
  {
    category: "Personal Documents",
    items: [
      "Social Security cards",
      "Driver's licenses/ID",
      "Previous year's tax return",
      "Identity Protection PIN",
      "Bank account/routing numbers",
      "Health insurance statements"
    ]
  }
];

export const INDIVIDUAL_TAX_FAQS = [
  {
    question: "When is the tax filing deadline for 2024?",
    answer: "The tax filing deadline for 2023 returns is April 15, 2024. You can request an automatic 6-month extension to October 15, 2024, but any taxes owed are still due by April 15."
  },
  {
    question: "What's the difference between a tax credit and a tax deduction?",
    answer: "A tax credit directly reduces your tax bill dollar-for-dollar, while a tax deduction reduces your taxable income. For example, a $1,000 tax credit saves you $1,000 in taxes, while a $1,000 deduction saves you $220-370 depending on your tax bracket."
  },
  {
    question: "How long should I keep my tax records?",
    answer: "Generally, keep tax records for 3-7 years. The IRS can audit returns for up to 3 years, or 6 years if you underreport income by more than 25%. Keep records related to property indefinitely until you sell it."
  },
  {
    question: "What if I can't pay my tax bill?",
    answer: "The IRS offers payment plans including short-term extensions (up to 120 days) and long-term installment agreements. You can also apply for an Offer in Compromise if you qualify based on your financial situation."
  },
  {
    question: "Do I need to file if I didn't earn much income?",
    answer: "Filing requirements depend on your age, filing status, and income type. For 2023, single filers under 65 generally need to file if gross income exceeds $13,850. Even if not required, you may want to file to claim refundable credits."
  }
];

export const INDIVIDUAL_TAX_BRACKETS = [
  { rate: "10%", single: "$0 - $11,000", married: "$0 - $22,000", head: "$0 - $15,700" },
  { rate: "12%", single: "$11,001 - $44,725", married: "$22,001 - $89,450", head: "$15,701 - $59,850" },
  { rate: "22%", single: "$44,726 - $95,375", married: "$89,451 - $190,750", head: "$59,851 - $95,350" },
  { rate: "24%", single: "$95,376 - $182,100", married: "$190,751 - $364,200", head: "$95,351 - $182,100" },
  { rate: "32%", single: "$182,101 - $231,250", married: "$364,201 - $462,500", head: "$182,101 - $231,250" },
  { rate: "35%", single: "$231,251 - $578,125", married: "$462,501 - $693,750", head: "$231,251 - $578,100" },
  { rate: "37%", single: "$578,126+", married: "$693,751+", head: "$578,101+" }
];

/* ================= COOPERATIVE TAXATION PAGE ================= */
export const COOPERATIVE_TAX_BENEFITS = [
  {
    icon: <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Reduced Tax Rates",
    description: "Cooperatives often qualify for special reduced corporate tax rates, typically 15-25% lower than standard rates."
  },
  {
    icon: <PiggyBank className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Exempt Income",
    description: "Patronage dividends and certain member transactions may be tax-exempt under specific conditions."
  },
  {
    icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Deductions",
    description: "Special deductions for member dividends, reserves, and operational expenses unique to cooperatives."
  },
  {
    icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Tax Credits",
    description: "Eligibility for various tax credits including renewable energy, low-income housing, and community development."
  }
];

export const COOPERATIVE_TAX_REQUIREMENTS = [
  {
    title: "Registration Documents",
    items: ["Cooperative Articles of Incorporation", "Bylaws and amendments", "Certificate of Registration", "Board resolutions"]
  },
  {
    title: "Financial Records",
    items: ["Audited financial statements", "Member transaction records", "Patronage dividend records", "Reserve fund statements"]
  },
  {
    title: "Tax Forms",
    items: ["Form 1120-C (U.S. Income Tax Return for Cooperatives)", "Form 1099-PATR (Patronage Dividends)", "Form 990 (if exempt)", "State-specific tax forms"]
  },
  {
    title: "Compliance Documents",
    items: ["Member meeting minutes", "Board meeting records", "Operational policies", "Compliance certificates"]
  }
];

export const COOPERATIVE_TAX_SERVICES = [
  {
    icon: <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Tax Planning",
    description: "Strategic tax planning to maximize benefits and minimize liabilities for your cooperative."
  },
  {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Return Preparation",
    description: "Comprehensive preparation and filing of all cooperative-specific tax forms."
  },
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Compliance Review",
    description: "Regular compliance checks to ensure adherence to cooperative tax regulations."
  },
  {
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Audit Support",
    description: "Expert representation and support during tax audits and inquiries."
  }
];

export const COOPERATIVE_TAX_FAQS = [
  {
    question: "What makes cooperative taxation different from regular corporations?",
    answer: "Cooperatives have unique tax treatment under Subchapter T of the Internal Revenue Code. They can exclude patronage dividends from taxable income and have special rules for calculating taxable income based on member transactions."
  },
  {
    question: "How are patronage dividends taxed?",
    answer: "Patronage dividends are generally tax-deductible for the cooperative when properly allocated to members. Members then report these dividends as income, creating a single level of taxation."
  },
  {
    question: "What tax forms do cooperatives need to file?",
    answer: "Most cooperatives file Form 1120-C, the special income tax return for cooperatives. Exempt cooperatives may file Form 990 series, and all cooperatives must file information returns for patronage dividends."
  },
  {
    question: "Are all cooperatives tax-exempt?",
    answer: "No, most cooperatives are taxable entities. However, certain types like rural electric cooperatives and some agricultural cooperatives may qualify for tax-exempt status under specific sections of the tax code."
  },
  {
    question: "What are the deadlines for cooperative tax filing?",
    answer: "Form 1120-C is generally due by the 15th day of the 4th month after the end of the tax year. For calendar year cooperatives, this is April 15th, with extensions available."
  }
];

export const COOPERATIVE_TAX_HIGHLIGHTS = [
  "15+ Years Industry Experience",
  "Cooperative Tax Specialists",
  "100% Compliance Focus",
  "Dedicated Expert Support",
  "Maximum Tax Optimization",
  "Fast & Accurate Filing"
];

/* ================= BUSINESS ANALYTICS PAGE ================= */
export const BUSINESS_ANALYTICS_SERVICES = [
  {
    icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with advanced analytics and visualization techniques."
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Market Research",
    description: "Comprehensive market analysis to identify opportunities and optimize business strategies."
  },
  {
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Stakeholder Management",
    description: "Bridge the gap between technical teams and business stakeholders for seamless communication."
  },
  {
    icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Process Optimization",
    description: "Streamline business processes to increase efficiency and reduce operational costs."
  },
  {
    icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Strategic Planning",
    description: "Develop data-driven strategies that align with your business goals and objectives."
  },
  {
    icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: "Requirements Analysis",
    description: "Gather and document precise business requirements for successful project delivery."
  }
];

export const BUSINESS_ANALYTICS_SKILLS = [
  { name: "Data Analysis", percentage: 95 },
  { name: "Business Strategy", percentage: 90 },
  { name: "Requirements Gathering", percentage: 92 },
  { name: "Process Modeling", percentage: 88 },
  { name: "Stakeholder Management", percentage: 94 }
];

export const BUSINESS_ANALYTICS_STATS = [
  { icon: <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "50+", label: "Projects Completed" },
  { icon: <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "30+", label: "Happy Clients" },
  { icon: <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "5+", label: "Years Experience" },
  { icon: <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />, value: "95%", label: "Success Rate" }
];

/* ================= CONTACT PAGE ================= */
export const CONTACT_PAGE_FEATURES = [
  {
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Lightning Fast',
    description: 'Average response time under 2 hours'
  },
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected'
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Expert Team',
    description: 'Dedicated account managers for business clients'
  },
  {
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Global Support',
    description: 'Multi-language support available 24/7'
  }
];

export const CONTACT_PAGE_STATS = [
  { value: '10K+', label: 'Happy Clients', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { value: '98%', label: 'Satisfaction', icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { value: '24/7', label: 'Support', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { value: '2h', label: 'Response', icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> }
];

/* ================= WEBDESIGN PAGE ================= */
export const WEBDESIGN_SERVICES = [
  {
    title: "Custom Website Design",
    desc: "Unique, brand-focused designs that captivate your audience and create lasting first impressions. We craft bespoke digital experiences that reflect your brand's personality, values, and vision while ensuring intuitive navigation and engaging user journeys.",
    image: "/images/web-design.webp",
    gradient: "from-pink-500 to-rose-500",
    features: ["UI/UX Design", "Branding", "Custom Layouts", "Wireframing", "Prototyping"],
    stats: { projects: 150, satisfaction: "99%" }
  },
  {
    title: "Frontend Development",
    desc: "Modern, fast and responsive UI development that brings designs to life with clean, maintainable code. We leverage the latest technologies to create lightning-fast, interactive applications that deliver exceptional user experiences across all browsers and devices.",
    image: "/images/frontend.webp",
    gradient: "from-blue-500 to-cyan-500",
    features: ["React", "Tailwind", "Animations", "Next.js", "TypeScript"],
    stats: { projects: 200, satisfaction: "98%" }
  },
  {
    title: "Mobile Optimization",
    desc: "Perfect experience across all devices with responsive designs that adapt seamlessly to any screen size. We ensure your website loads quickly, functions flawlessly, and provides an intuitive experience whether users are on smartphones, tablets, or desktops.",
    image: "/images/mobile.webp",
    gradient: "from-green-500 to-emerald-500",
    features: ["Responsive Design", "Speed Optimization", "SEO", "Touch Interactions", "Cross-Browser"],
    stats: { projects: 180, satisfaction: "97%" }
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend systems that power your applications with robust architecture and reliable performance. We build RESTful APIs, manage databases, and implement security protocols to ensure your data is protected and your applications run smoothly under any load.",
    image: "/images/backend.webp",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Node.js", "MongoDB", "API Development", "PostgreSQL", "Authentication"],
    stats: { projects: 120, satisfaction: "99%" }
  }
];

export const WEBDESIGN_STEPS = [
  {
    title: "Planning",
    icon: "📋",
    gradient: "from-blue-500 to-cyan-500",
    desc: "Strategic planning and goal setting",
    color: "blue"
  },
  {
    title: "Design",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    desc: "User-centered visual design",
    color: "purple"
  },
  {
    title: "Content Creation",
    icon: "✍️",
    gradient: "from-orange-500 to-red-500",
    desc: "Compelling copy and visuals",
    color: "orange"
  },
  {
    title: "Development",
    icon: "💻",
    gradient: "from-green-500 to-emerald-500",
    desc: "Clean, scalable code",
    color: "green"
  },
  {
    title: "Testing",
    icon: "🧪",
    gradient: "from-indigo-500 to-blue-500",
    desc: "Comprehensive QA",
    color: "indigo"
  },
  {
    title: "Launch",
    icon: "🚀",
    gradient: "from-yellow-500 to-amber-500",
    desc: "Seamless deployment",
    color: "yellow"
  },
  {
    title: "Maintenance",
    icon: "⚙️",
    gradient: "from-teal-500 to-cyan-500",
    desc: "Ongoing support",
    color: "teal"
  }
];

export const WEBDESIGN_REASONS = [
  {
    icon: Award,
    title: "Award‑Winning Team",
    desc: "Our designers and developers have been recognized for excellence.",
    stats: "15+ Industry Awards",
    gradient: "from-amber-500 to-orange-500",
    bgPattern: "🏆",
    bgImage: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Clock,
    title: "On‑Time Delivery",
    desc: "We respect your timeline and always deliver as promised.",
    stats: "98% On-Time Rate",
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "⏰",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "Client‑Centric Approach",
    desc: "You're a partner, not just a ticket. We communicate every step.",
    stats: "200+ Happy Clients",
    gradient: "from-purple-500 to-pink-500",
    bgPattern: "🤝",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Zap,
    title: "Cutting‑Edge Tech",
    desc: "We use the latest tools to build fast, secure, and future‑proof websites.",
    stats: "10+ Modern Technologies",
    gradient: "from-green-500 to-emerald-500",
    bgPattern: "⚡",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

export const WEBDESIGN_TECHS = [
  { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95, color: "from-cyan-500 to-blue-500" },
  { name: "Vue", icon: "🟢", category: "Frontend", proficiency: 90, color: "from-green-500 to-emerald-500" },
  { name: "Tailwind CSS", icon: "🌊", category: "Styling", proficiency: 98, color: "from-sky-500 to-indigo-500" },
  { name: "Node.js", icon: "📦", category: "Backend", proficiency: 92, color: "from-green-600 to-lime-500" },
  { name: "WordPress", icon: "🔵", category: "CMS", proficiency: 88, color: "from-blue-600 to-blue-400" },
  { name: "Figma", icon: "🎨", category: "Design", proficiency: 94, color: "from-purple-500 to-pink-500" },
  { name: "Next.js", icon: "▲", category: "Framework", proficiency: 93, color: "from-gray-800 to-gray-600" },
  { name: "MongoDB", icon: "🍃", category: "Database", proficiency: 86, color: "from-green-700 to-green-500" },
];

export const WEBDESIGN_FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Typical timelines range from 4–8 weeks for a custom website, depending on complexity. We'll give you a detailed estimate after our discovery call. Simple brochure sites can be ready in 3-4 weeks, while complex e-commerce platforms may take 8-12 weeks.",
    category: "timeline",
    popular: true
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Absolutely! We have flexible support packages to keep your site updated, secure, and performing at its best. Options range from basic security updates to comprehensive maintenance including content updates, performance optimization, and monthly backups.",
    category: "support",
    popular: true
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes, every site we build is fully responsive and tested on all major devices and browsers. We follow a 'mobile-first' approach, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops.",
    category: "technical",
    popular: false
  },
  {
    q: "What information do you need to start?",
    a: "We'll guide you through the process. Initially, we need your brand guidelines (logos, colors, fonts), content ideas, goals for the website, and any examples of sites you like. Don't worry if you don't have everything—we can help develop it together.",
    category: "process",
    popular: true
  },
  {
    q: "How much does a website cost?",
    a: "Every project is unique, so costs vary based on complexity, features, and timeline. Basic websites start around $3,000-$5,000, while more complex projects with custom functionality range from $10,000-$50,000+. We provide transparent pricing with detailed quotes.",
    category: "pricing",
    popular: false
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes, we build websites with SEO best practices from the ground up—clean code, fast loading, proper structure. We also offer ongoing SEO packages to help improve your search rankings and drive organic traffic.",
    category: "marketing",
    popular: false
  },
  {
    q: "What platforms do you build on?",
    a: "We're platform-agnostic and choose the best technology for your needs. Options include custom React/Vue sites, WordPress for content-heavy sites, Shopify for e-commerce, or Webflow for designer-friendly builds.",
    category: "technical",
    popular: true
  },
  {
    q: "Will I be able to update the site myself?",
    a: "Absolutely! We build with user-friendly content management systems and provide training. Whether it's WordPress, Sanity, or a custom CMS, you'll have control to update text, images, and blog posts without touching code.",
    category: "support",
    popular: false
  },
];

/* ================= SEO PAGE ================= */
export const SEO_SERVICES = [
  {
    icon: <MagnifyingGlassIcon className="h-8 w-8" />,
    title: "Keyword Research",
    description: "Identify high-value keywords that your target audience is searching for to drive qualified traffic."
  },
  {
    icon: <ChartBarIcon className="h-8 w-8" />,
    title: "On-Page SEO",
    description: "Optimize your website content, meta tags, and structure for better search engine visibility."
  },
  {
    icon: <LinkIcon className="h-8 w-8" />,
    title: "Link Building",
    description: "Build high-quality backlinks from authoritative websites to boost your domain authority."
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8" />,
    title: "Content Strategy",
    description: "Create engaging, SEO-optimized content that resonates with your audience and search engines."
  },
  {
    icon: <GlobeAltIcon className="h-8 w-8" />,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your geographical area."
  },
  {
    icon: <ArrowTrendingUpIcon className="h-8 w-8" />,
    title: "Technical SEO",
    description: "Optimize your website's technical aspects for better crawlability and user experience."
  }
];

export const SEO_STEPS = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We analyze your website, competitors, and target audience to create a customized SEO strategy.",
    shortDesc: "Initial research & planning"
  },
  {
    number: "02",
    title: "Keyword Research",
    description: "Identify high-value keywords and search terms that your ideal customers are using.",
    shortDesc: "Finding target keywords"
  },
  {
    number: "03",
    title: "On-Page Optimization",
    description: "Optimize your website content, meta tags, and structure for search engines.",
    shortDesc: "Optimizing content"
  },
  {
    number: "04",
    title: "Content Creation",
    description: "Develop engaging, SEO-optimized content that attracts and retains visitors.",
    shortDesc: "Creating valuable content"
  },
  {
    number: "05",
    title: "Link Building",
    description: "Build quality backlinks to improve your website authority and rankings.",
    shortDesc: "Building authority"
  },
  {
    number: "06",
    title: "Monitoring & Reporting",
    description: "Track progress, analyze results, and continuously optimize for better performance.",
    shortDesc: "Tracking & improving"
  }
];

export const SEO_REASONS = [
  {
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    title: "100% White Hat SEO",
    description: "We follow ethical SEO practices that deliver sustainable, long-term results."
  },
  {
    icon: <ChartBarIcon className="h-8 w-8" />,
    title: "Data-Driven Approach",
    description: "All our strategies are backed by thorough data analysis and research."
  },
  {
    icon: <UsersIcon className="h-8 w-8" />,
    title: "Expert Team",
    description: "Certified SEO professionals with years of industry experience."
  },
  {
    icon: <ClockIcon className="h-8 w-8" />,
    title: "Timely Delivery",
    description: "We respect your time and deliver results within agreed timelines."
  },
  {
    icon: <CurrencyDollarIcon className="h-8 w-8" />,
    title: "Transparent Pricing",
    description: "No hidden costs, clear pricing with detailed breakdowns."
  },
  {
    icon: <LifebuoyIcon className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock support for all your SEO queries and concerns."
  }
];

export const SEO_TECHNOLOGIES = [
  { name: "Google Analytics", category: "Analytics", icon: "📊" },
  { name: "Google Search Console", category: "Analytics", icon: "🔍" },
  { name: "SEMrush", category: "SEO Tools", icon: "📈" },
  { name: "Ahrefs", category: "SEO Tools", icon: "🔗" },
  { name: "Moz Pro", category: "SEO Tools", icon: "📉" },
  { name: "Yoast SEO", category: "CMS Tools", icon: "⚡" },
  { name: "Screaming Frog", category: "Technical SEO", icon: "🐸" },
  { name: "Majestic", category: "Link Building", icon: "🔗" },
  { name: "Google PageSpeed", category: "Performance", icon: "⚡" },
  { name: "GTmetrix", category: "Performance", icon: "📊" },
  { name: "Hotjar", category: "UX Analytics", icon: "🔥" },
  { name: "WordPress", category: "CMS", icon: "📝" }
];

export const SEO_FAQS = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. While some improvements can be seen in 3-6 months, significant results typically take 6-12 months depending on competition, industry, and current website status."
  },
  {
    question: "What is included in your SEO services?",
    answer: "Our comprehensive SEO services include keyword research, on-page optimization, content strategy, link building, technical SEO audits, local SEO optimization, and monthly performance reporting."
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "We cannot guarantee specific rankings as search engines use complex algorithms. However, we guarantee to implement proven strategies that improve your visibility and drive organic traffic."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track multiple metrics including organic traffic, keyword rankings, conversion rates, bounce rates, domain authority, and ROI through tools like Google Analytics and Search Console."
  },
  {
    question: "What is the cost of your SEO services?",
    answer: "Our pricing varies based on your specific needs, competition level, and goals. We offer customized packages starting from $X/month. Contact us for a personalized quote."
  },
  {
    question: "Do you work with local businesses?",
    answer: "Yes, we specialize in local SEO for businesses looking to attract customers in their geographical area. We optimize Google My Business profiles and local citations."
  }
];

/* ================= RPO PAGE ================= */
export const RPO_SERVICES = [
  {
    icon: Search,
    title: 'Sourcing & Screening',
    desc: 'AI-powered candidate matching and thorough vetting process',
    longDesc: 'Leverage advanced AI algorithms to find and screen the best candidates quickly and efficiently.',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    stats: '95% match rate',
    delay: 0
  },
  {
    icon: FileText,
    title: 'Talent Pipeline Management',
    desc: 'Build and nurture a robust talent pool for future needs',
    longDesc: 'Create and maintain a sustainable pipeline of qualified candidates for upcoming positions.',
    color: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-indigo-100',
    stats: '50k+ candidates',
    delay: 1
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Data-driven insights to optimize recruitment strategies',
    longDesc: 'Real-time analytics and customizable reports to track and improve your hiring metrics.',
    color: 'from-green-500 to-teal-500',
    iconBg: 'bg-green-100',
    stats: 'Real-time metrics',
    delay: 2
  },
  {
    icon: MessageSquare,
    title: 'Candidate Experience',
    desc: 'Seamless communication and engagement throughout',
    longDesc: 'Exceptional candidate journey with personalized communication and feedback at every stage.',
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-100',
    stats: '98% satisfaction',
    delay: 3
  },
  {
    icon: Calendar,
    title: 'Onboarding Support',
    desc: 'Smooth transition from offer acceptance to day one',
    longDesc: 'Comprehensive onboarding programs to ensure new hires integrate seamlessly into your team.',
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100',
    stats: '48hr turnaround',
    delay: 4
  },
  {
    icon: Building2,
    title: 'Employer Branding',
    desc: 'Enhance your company image to attract top talent',
    longDesc: 'Strategic employer branding solutions to position your company as an employer of choice.',
    color: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-100',
    stats: '3x more reach',
    delay: 5
  }
];

export const RPO_STATS = [
  { number: '40%', label: 'Faster Time-to-Hire', icon: Clock, trend: '+12%', color: 'from-blue-500 to-cyan-500' },
  { number: '95%', label: 'Client Retention', icon: Award, trend: '+8%', color: 'from-indigo-500 to-purple-500' },
  { number: '10k+', label: 'Qualified Candidates', icon: Users, trend: '+15k', color: 'from-green-500 to-teal-500' },
  { number: '85%', label: 'Cost Savings', icon: TrendingUp, trend: '+22%', color: 'from-orange-500 to-red-500' }
];

export const RPO_WHY_CHOOSE_US = [
  { icon: Users, title: 'Dedicated Teams', desc: 'Industry-specific recruitment experts who understand your domain', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, title: 'AI-Powered Matching', desc: 'Proprietary algorithm with 94% accuracy', color: 'from-indigo-500 to-purple-500' },
  { icon: Globe2, title: 'Global Network', desc: 'Access to top talent across 50+ countries', color: 'from-green-500 to-teal-500' },
  { icon: Building2, title: 'Scalable Solutions', desc: 'Flexible models that grow with you', color: 'from-orange-500 to-red-500' }
];

export const RPO_INDUSTRIES = [
  { name: 'Technology & IT', icon: '💻', color: 'from-blue-500 to-cyan-500', roles: ['Full-Stack', 'DevOps', 'Cloud', 'AI/ML'] },
  { name: 'Healthcare & Life Sciences', icon: '🏥', color: 'from-green-500 to-teal-500', roles: ['Physicians', 'Nurses', 'Researchers', 'Administration'] },
  { name: 'Finance & Banking', icon: '💰', color: 'from-purple-500 to-pink-500', roles: ['Analysts', 'Accountants', 'Compliance', 'Risk Mgmt'] },
  { name: 'Manufacturing & Engineering', icon: '🏭', color: 'from-orange-500 to-red-500', roles: ['Engineers', 'Production', 'QC', 'Supply Chain'] },
  { name: 'Retail & E-commerce', icon: '🛍️', color: 'from-pink-500 to-rose-500', roles: ['Store Mgmt', 'Merchandising', 'Digital', 'Logistics'] },
  { name: 'Energy & Utilities', icon: '⚡', color: 'from-emerald-500 to-green-500', roles: ['Renewable', 'Oil & Gas', 'Utilities', 'Sustainability'] }
];

/* ================= MARKETING PRICING PAGE ================= */
export const MARKETING_PRICING_SEO_PLANS = [
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
    guestPost: 10,
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

export const MARKETING_PRICING_SMO_PLANS = [
  {
    id: 'smo-starter',
    name: 'Starter SMO',
    price: 399,
    platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest', 'Whatsapp'],
    platformNote: 'any three',
    postsPerPlatformPerMonth: 8,
    engagement: 'Basic',
    icon: '📱',
    gradient: 'from-pink-50 to-rose-50',
    borderColor: 'border-pink-200',
    features: [
      'Profile Setup & Optimization',
      'Cover Photo & Branding Design',
      'Page & Username Optimization',
      '24 Engaging Posts',
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
    platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest', 'Whatsapp'],
    platformNote: 'any five',
    postsPerPlatformPerMonth: 12,
    engagement: 'Advanced',
    icon: '🚀',
    gradient: 'from-rose-50 to-red-50',
    borderColor: 'border-rose-300',
    features: [
      'Everything in Starter, plus:',
      '5 Social Platforms Management',
      '60 High-Quality Posts ',
      'Advanced Hashtag & SEO Research',
      'Content Calendar Strategy',
      'Daily Engagement & Community Management',
      'Bi-Weekly Performance & Insights Report',
      'Ad Campaign Management ',
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
    platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest', 'Whatsapp + YouTube'],
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
      'Influencer Outreach (3 per month)',
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

/* ================= DEVELOPMENT PRICING PAGE ================= */
export const DEVELOPMENT_PRICING_CMS_PLANS = [
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

export const DEVELOPMENT_PRICING_CODING_PLANS = [
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

/* ================= ACCOUNTING PRICING PAGE ================= */
export const ACCOUNTING_PRICING_SECTIONS = [
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

/* ================= MANAGED NETWORK SERVICES PAGE ================= */
export const NETWORK_SERVICE_ITEMS = [
  { icon: "fa-shield-halved", title: "Monitoring", color: "blue", desc: "Continuous oversight to detect issues", gradient: "from-blue-400 to-blue-600" },
  { icon: "fa-lock", title: "Security", color: "indigo", desc: "Protect against threats", gradient: "from-indigo-400 to-indigo-600" },
  { icon: "fa-gears", title: "Configuration", color: "green", desc: "Optimize network devices", gradient: "from-green-400 to-green-600" },
  { icon: "fa-cloud-arrow-up", title: "Disaster Recovery", color: "purple", desc: "Backup solutions", gradient: "from-purple-400 to-purple-600" },
  { icon: "fa-chart-line", title: "Performance", color: "orange", desc: "Enhance infrastructure", gradient: "from-orange-400 to-orange-600" },
  { icon: "fa-wifi", title: "VPN Services", color: "teal", desc: "Secure remote connections", gradient: "from-teal-400 to-teal-600" },
  { icon: "fa-diagram-project", title: "SDN", color: "cyan", desc: "Centralized control", gradient: "from-cyan-400 to-cyan-600" },
  { icon: "fa-scale-balanced", title: "Load Balancing", color: "amber", desc: "Traffic distribution", gradient: "from-amber-400 to-amber-600" },
  { icon: "fa-phone", title: "UC", color: "rose", desc: "Voice & video integration", gradient: "from-rose-400 to-rose-600" },
  { icon: "fa-network-wired", title: "Managed Wi-Fi", color: "violet", desc: "Wireless infrastructure", gradient: "from-violet-400 to-violet-600" },
  { icon: "fa-cloud", title: "Cloud Networking", color: "sky", desc: "Cloud resource management", gradient: "from-sky-400 to-sky-600" },
  { icon: "fa-clipboard-check", title: "Compliance", color: "emerald", desc: "Regulatory adherence", gradient: "from-emerald-400 to-emerald-600" },
];

export const NETWORK_BENEFITS = [
  { icon: "fa-shield-halved", title: "Enhanced Security", desc: "Continuous monitoring and proactive threat mitigation reduce the risk of data breaches and cyberattacks.", features: ["Real-time threat monitoring", "Automated incident response", "Compliance management"], gradient: "from-blue-600 to-purple-600" },
  { icon: "fa-coins", title: "Cost Efficiency", desc: "Outsourcing network management helps control expenses by reducing the need for in-house resources.", features: ["40% reduction in IT costs", "Predictable monthly pricing", "No hidden fees"], gradient: "from-green-600 to-teal-600" },
  { icon: "fa-gauge-high", title: "Improved Performance", desc: "Expert management optimizes network infrastructure, leading to faster, more reliable connectivity.", features: ["99.9% guaranteed uptime", "50% faster load times", "Global CDN integration"], gradient: "from-purple-600 to-pink-600" }
];

export const NETWORK_PRICING_PLANS = [
  {
    name: "Essential",
    price: "$2,499",
    period: "/month",
    description: "Perfect for small businesses",
    features: ["24/7 Network Monitoring", "Basic Security Suite", "Weekly Backups", "Email Support", "5 Devices Included"],
    gradient: "from-blue-400 to-blue-600",
    popular: false
  },
  {
    name: "Professional",
    price: "$4,999",
    period: "/month",
    description: "Ideal for growing companies",
    features: ["Everything in Essential", "Advanced Threat Protection", "Daily Backups", "24/7 Phone Support", "15 Devices Included", "Monthly Strategy Calls"],
    gradient: "from-purple-400 to-purple-600",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: ["Everything in Professional", "Dedicated Security Team", "Real-time Backup", "SLA Guarantee", "Unlimited Devices", "Quarterly Audits"],
    gradient: "from-orange-400 to-orange-600",
    popular: false
  }
];

export const NETWORK_WHY_OUTSOURCE = [
  { icon: "fa-brain", title: "Expert Insights", desc: "Access to expert insights and analysis", color: "blue" },
  { icon: "fa-coins", title: "Cost & Time Efficient", desc: "Reduces Cost & Saves Time", color: "blue" },
  { icon: "fa-shield", title: "Risk Mitigation", desc: "Mitigate the risk of errors and discrepancies", color: "purple" },
  { icon: "fa-bullseye", title: "Core Business Focus", desc: "Allows you to focus on core business functions", color: "green" },
  { icon: "fa-lightbulb", title: "Fresh Perspectives", desc: "Fresh perspectives and innovative approaches", color: "orange" },
  { icon: "fa-microchip", title: "Latest Technology", desc: "Leverage the latest software and technology", color: "indigo" }
];

/* ================= MS365 MANAGEMENT PAGE ================= */
export const MS365_SERVICES = [
  { icon: Users, name: "User Provisioning and Management", desc: "Oversee user accounts, permissions, and access controls to ensure secure onboarding and offboarding.", color: "from-blue-500 to-cyan-500" },
  { icon: Settings, name: "License Management", desc: "Align subscriptions with organizational needs, manage allocations, and ensure compliance with licensing agreements.", color: "from-purple-500 to-pink-500" },
  { icon: Shield, name: "Security Management", desc: "Implement features like multi-factor authentication, data loss prevention, and advanced threat protection.", color: "from-green-500 to-emerald-500" },
  { icon: Lock, name: "Identity and Access Management (IAM)", desc: "Administer user identities and authentication across Microsoft 365 services.", color: "from-orange-500 to-red-500" },
  { icon: Database, name: "Data Governance and Compliance", desc: "Establish policies for data retention, eDiscovery, and regulatory adherence.", color: "from-indigo-500 to-purple-500" },
  { icon: Mail, name: "Exchange Online Management", desc: "Configure email services, manage mailboxes, and set anti-spam and anti-malware protocols.", color: "from-blue-500 to-indigo-500" },
  { icon: FileText, name: "SharePoint Online Management", desc: "Oversee site configurations, permissions, and document management.", color: "from-teal-500 to-cyan-500" },
  { icon: HardDrive, name: "OneDrive for Business Management", desc: "Manage storage, access controls, and sharing policies.", color: "from-yellow-500 to-orange-500" },
  { icon: MessageSquare, name: "Teams and Skype for Business Management", desc: "Administer collaboration tools, user settings, and compliance features.", color: "from-purple-500 to-indigo-500" },
  { icon: Smartphone, name: "Endpoint Management", desc: "Utilize solutions like Microsoft Endpoint Manager for device enrollment and security.", color: "from-pink-500 to-rose-500" },
  { icon: Layers, name: "Power Platform Governance", desc: "Regulate the use of services like Power BI, Power Apps, and Power Automate.", color: "from-cyan-500 to-blue-500" },
  { icon: Activity, name: "Service Monitoring and Reporting", desc: "Track service health, generate reports, and analyze usage data.", color: "from-emerald-500 to-green-500" },
  { icon: Download, name: "Migration and Deployment Services", desc: "Plan and execute transitions to Microsoft 365, including email and file migrations.", color: "from-red-500 to-pink-500" },
  { icon: BookOpen, name: "Training and Support Services", desc: "Provide resources and guidance to ensure effective utilization.", color: "from-blue-500 to-purple-500" },
];

export const MS365_WHY_OUTSOURCE = [
  { text: "Access to expert insights and analysis", icon: Eye, color: "blue" },
  { text: "Reduces Cost & Saves Time", icon: DollarSign, color: "green" },
  { text: "Mitigate the risk of errors and discrepancies", icon: AlertCircle, color: "orange" },
  { text: "Allows you to focus on core business functions", icon: Target, color: "purple" },
  { text: "Fresh perspectives and innovative approaches", icon: RefreshCw, color: "indigo" },
  { text: "Leverage the latest software and technology", icon: Zap, color: "cyan" },

];

export const MS365_KEY_COMPONENTS = [
  {
    icon: Users,
    title: "User and License Administration",
    desc: "Efficiently manage user accounts, permissions, and licenses to ensure secure access and compliance.",
    stats: "99.9% Uptime",
    color: "blue",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  },
  {
    icon: Shield,
    title: "Security and Compliance Implementation",
    desc: "Deploy robust security measures and establish data governance policies to protect information.",
    stats: "100% Secure",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  },
  {
    icon: Activity,
    title: "Continuous Monitoring and Support",
    desc: "Regularly oversee system performance, provide user training, and adapt to evolving needs.",
    stats: "100% Support",
    color: "purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  }
];

/* ================= MOBILE DEVICE MANAGEMENT PAGE ================= */
export const MOBILE_FEATURES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "Enterprise-grade security with encryption and threat detection"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Multi-OS Support",
    description: "Manage iOS, Android, Windows, and macOS devices seamlessly"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Remote Lock & Wipe",
    description: "Remotely lock or wipe devices in case of loss or theft"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Management",
    description: "Centralized cloud-based console for easy management"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Management",
    description: "Role-based access control and user group management"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Policy Enforcement",
    description: "Automated policy deployment and compliance checking"
  }
];

export const MOBILE_BENEFITS = [
  "Reduce security risks by 85%",
  "Save 40% on IT management costs",
  "99.9% device compliance rate",
  "24/7 real-time monitoring"
];

export const MOBILE_STEPS = [
  {
    num: 1,
    title: "Define Objectives",
    desc: "Identify business goals, security requirements and choose the right MDM platform."
  },
  {
    num: 2,
    title: "Device Enrollment",
    desc: "Enroll devices automatically or manually within the MDM platform."
  },
  {
    num: 3,
    title: "Policy Deployment",
    desc: "Configure security rules and compliance policies."
  }
];

export const MOBILE_WHY_OUTSOURCE = [
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Expert Insights", desc: "Access to expert insights and analysis from industry veterans", color: "from-blue-400 to-blue-600" },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Cost Reduction", desc: "Reduces Cost & Saves Time with optimized resource allocation", color: "from-green-400 to-green-600" },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Risk Mitigation", desc: "Mitigate the risk of errors and discrepancies proactively", color: "from-purple-400 to-purple-600" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Core Focus", desc: "Allows you to focus on core business functions", color: "from-orange-400 to-orange-600" },
  { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Fresh Perspectives", desc: "Fresh perspectives and innovative approaches to problem-solving", color: "from-pink-400 to-pink-600" },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Latest Technology", desc: "Leverage the latest software and technology", color: "from-indigo-400 to-indigo-600" }
];

/* ================= LOCATIONS PAGE ================= */
export const LOCATION_PAGE_LOCATIONS = [
  {
    id: "florida",
    name: "Florida",
    country: "United States",
    city: "Saint Petersburg",
    address: CONTACT_INFO.address,
    lat: 27.7731,
    lng: -82.6403,
    zoom: 12,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our flagship headquarters with state-of-the-art facilities"
  },
  {
    id: "usa",
    name: "United States",
    city: "Dallas",
    address: "Dallas, Texas",
    lat: 32.7767,
    lng: -96.7970,
    zoom: 10,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Financial hub connecting global markets"
  },
  {
    id: "canada",
    name: "Canada",
    city: "Vancouver",
    address: "Vancouver, British Columbia",
    lat: 49.2827,
    lng: -123.1207,
    zoom: 10,
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "North American innovation center"
  },
  {
    id: "india",
    name: "India",
    city: "Noida",
    address: "Sector 16, Noida, UP",
    lat: 28.4595,
    lng: 77.0266,
    zoom: 12,
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Indian headquarters with modern facilities"
  },
];

export const LOCATION_PAGE_OFFICES = [
  {
    title: "USA",
    subtitle: "United States",
    text: "The United States is one of our core markets, where we partner with startups, enterprises, and global organizations to drive digital transformation, operational excellence, and sustainable growth.",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Security", "Conference Rooms", "Tech Hub"],
  },
  {
    title: "U.K",
    subtitle: "United Kingdom",
    text: "The United Kingdom is a strategic hub for our global operations, where we support organizations across finance, professional services, healthcare, retail, and technology.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Market Access", "Networking", "Research Center"],
  },
  {
    title: "Canada",
    subtitle: "Canada",
    text: "In Canada, we work closely with businesses to drive innovation, sustainability, and scalable growth across industries such as energy, financial services, healthcare, education, and technology.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Innovation Lab", "Sustainability", "Tech Integration"],
  },
  {
    title: "United Arab Emirates",
    subtitle: "UAE",
    text: "The UAE is a global business hub where we collaborate with enterprises, startups, and government organizations to drive digital innovation, smart infrastructure, and scalable growth solutions.",
    image: "https://dubai.savills.ae/_images/downtown-dubai-7-760.jpg",
    features: ["Global Business Hub", "Smart Infrastructure", "Strategic Location"],
  },
];

/* ================= LINKEDIN MARKETING PAGE ================= */
export const LINKEDIN_PREMIUM_SERVICES = [
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

export const LINKEDIN_SALES_NAV_SERVICES = [
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

export const LINKEDIN_FEATURE_COMPARISON = [
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

export const LINKEDIN_USE_CASES = [
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

export const LINKEDIN_FAQ_DATA = [
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

/* ================= INDUSTRIES WE SERVE PAGE ================= */
export const INDUSTRIES_PAGE_LIST = [
  {
    id: 1,
    name: "CPA Firms & Consultancy Agencies",
    description:
      "Empowering CPA firms and consultancy agencies with compliance-driven automation, financial intelligence, and strategic advisory platforms that streamline operations and drive sustainable growth.",
    category: "Professional Services",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&h=600&fit=crop",
    bgColor: "bg-sky-50",
    color: "text-sky-600",
    borderColor: "border-sky-200",
    gradient: "from-sky-400 to-cyan-400",
  },
  {
    id: 2,
    name: "Real Estate",
    description:
      "Driving property growth through market intelligence, digital platforms, and investment-focused advisory solutions.",
    category: "Property & Infrastructure",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    bgColor: "bg-amber-50",
    color: "text-amber-600",
    borderColor: "border-amber-200",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    id: 3,
    name: "Healthcare",
    description:
      "Advancing patient care and operational excellence through digital health, compliance, and data-driven solutions.",
    category: "Medical & Life Sciences",
    image:
      "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg",
    bgColor: "bg-emerald-50",
    color: "text-emerald-600",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    id: 4,
    name: "E-Commerce",
    description:
      "Scaling digital storefronts with performance marketing, automation, and customer-centric commerce strategies.",
    category: "Digital Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    bgColor: "bg-rose-50",
    color: "text-rose-600",
    borderColor: "border-rose-200",
    gradient: "from-rose-400 to-pink-400",
  },
  {
    id: 5,
    name: "Information Technology",
    description:
      "Building secure, scalable, and innovative digital ecosystems with cloud, AI, and enterprise IT solutions.",
    category: "Technology Services",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    borderColor: "border-blue-200",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 6,
    name: "Recruitment Agency",
    description:
      "Connecting organizations with top talent through strategic hiring, workforce planning, and digital recruitment platforms.",
    category: "Human Capital",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    bgColor: "bg-violet-50",
    color: "text-violet-600",
    borderColor: "border-violet-200",
    gradient: "from-violet-400 to-fuchsia-400",
  },
];

export const INDUSTRIES_APPROACH_STEPS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "Understand your business landscape, challenges, and opportunities.",
    icon: <ChartBarIcon className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Co-create tailored strategies with clear goals and milestones.",
    icon: <UsersIcon className="w-8 h-8" />,
    color: "from-indigo-400 to-purple-500",
  },
  {
    step: "03",
    title: "Implementation Support",
    description:
      "Execute solutions with hands-on support and optimization.",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500",
  },
  {
    step: "04",
    title: "Results Measurement",
    description:
      "Track KPIs, measure ROI, and ensure sustainable success.",
    icon: <CheckCircleIcon className="w-8 h-8" />,
    color: "from-violet-400 to-purple-500",
  },
];

/* ================= EMAIL MARKETING PAGE ================= */
export const EMAIL_PAGE_STATS = [
  { icon: <Users className="w-6 h-6" />, value: '10,000+', label: 'Active Subscribers', change: '+25% this month' },
  { icon: <Mail className="w-6 h-6" />, value: '45%', label: 'Average Open Rate', change: 'vs industry avg 21%' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '3.5x', label: 'ROI Average', change: 'For active readers' },
  { icon: <Globe className="w-6 h-6" />, value: '87+', label: 'Countries Reached', change: 'Global community' },
];

export const EMAIL_PAGE_FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Weekly Deep Dives',
    description: 'In-depth analysis of successful email campaigns with breakdowns of what made them work',
    benefits: ['Real campaign examples', 'Strategy breakdowns', 'ROI analysis']
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Segmentation Strategies',
    description: 'Learn how to effectively segment your audience for personalized messaging',
    benefits: ['Behavior-based segments', 'RFM analysis', 'Dynamic content tips']
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Automation Workflows',
    description: 'Step-by-step guides to building powerful email automation sequences',
    benefits: ['Welcome series', 'Abandoned cart flows', 'Re-engagement campaigns']
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Analytics & Testing',
    description: 'Master A/B testing and analytics to continuously improve your campaigns',
    benefits: ['Subject line testing', 'Send time optimization', 'Conversion tracking']
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: 'Deliverability Guide',
    description: 'Keep your emails out of spam folders and in the primary inbox',
    benefits: ['Authentication setup', 'List hygiene tips', 'ISP best practices']
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Exclusive Templates',
    description: 'Professionally designed email templates for various industries',
    benefits: ['Mobile-responsive', 'Customizable designs', 'Welcome emails']
  }
];

export const EMAIL_PAGE_BENEFITS = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Save 10+ Hours/Week',
    description: 'Stop guessing and start using proven strategies that work'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Increase Revenue',
    description: 'Subscribers report an average 40% increase in email revenue'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Stay Updated',
    description: 'Never miss important algorithm updates and industry changes'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community Access',
    description: 'Join private Slack group with 500+ fellow marketers'
  }
];

export const EMAIL_PAGE_TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Manager',
    company: 'Fashion Forward',
    image: 'SJ',
    rating: 5,
    text: 'This newsletter completely transformed our email strategy. Our open rates increased by 67% in just 3 months, and we\'ve seen a 156% boost in revenue from email campaigns.',
    result: '+156% Revenue',
    yearsSubscribed: 2
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'TechFlow Solutions',
    image: 'MC',
    rating: 5,
    text: 'The segmentation strategies alone are worth 10x the price. We reduced our unsubscribe rate by 73% while increasing engagement across all segments.',
    result: '-73% Unsubscribes',
    yearsSubscribed: 1.5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Email Marketing Specialist',
    company: 'Growth Hacks Inc',
    image: 'ER',
    rating: 5,
    text: 'The automation workflows provided saved us months of testing. Our welcome series now converts at 34% - nearly double what it was before.',
    result: '34% Conversion',
    yearsSubscribed: 3
  },
  {
    name: 'David Kim',
    role: 'Startup Founder',
    company: 'LaunchPad',
    image: 'DK',
    rating: 5,
    text: 'As a bootstrapped startup, every email counts. This newsletter helped us grow from 0 to 10k subscribers with practically zero ad spend.',
    result: '10k Subscribers',
    yearsSubscribed: 1
  }
];

export const EMAIL_PAGE_RECENT_POSTS = [
  {
    title: 'How to Recover Abandoned Carts with 3 Simple Emails',
    date: '2 days ago',
    readTime: '6 min read',
    category: 'Automation',
    author: 'Jessica Walsh',
    image: '🛒',
    excerpt: 'Discover the psychology behind cart abandonment and learn proven email sequences that recover up to 15% of lost sales.'
  },
  {
    title: 'The Ultimate Guide to Email Subject Lines (2024)',
    date: '5 days ago',
    readTime: '8 min read',
    category: 'Copywriting',
    author: 'Alex Thompson',
    image: '✍️',
    excerpt: '150+ proven subject line formulas, real-world examples, and A/B testing results to boost your open rates today.'
  },
  {
    title: 'GDPR & CCPA Compliance: What Changed in 2024',
    date: '1 week ago',
    readTime: '5 min read',
    category: 'Legal',
    author: 'Maria Garcia',
    image: '⚖️',
    excerpt: 'Stay compliant with the latest privacy regulations. Updated checklist and best practices for email marketers.'
  }
];

export const EMAIL_PAGE_FAQS = [
  {
    question: 'What exactly will I get in this newsletter?',
    answer: 'You\'ll receive a weekly email every Tuesday with actionable email marketing strategies, case studies, templates, and exclusive resources. We also send occasional special editions with urgent updates and bonus content.'
  },
  {
    question: 'How is this different from other newsletters?',
    answer: 'Unlike generic marketing newsletters, we focus exclusively on email marketing with practical, data-backed strategies. Every tip is tested and proven by our team of experts before we share it with you.'
  },
  {
    question: 'Can I unsubscribe anytime?',
    answer: 'Absolutely! You can unsubscribe with one click at any time, and we\'ll immediately remove you from our list. No questions asked, no hard feelings.'
  },
  {
    question: 'Is it really free?',
    answer: 'Yes, it\'s completely free! We offer premium courses and resources for those who want to go deeper, but the newsletter will always remain free.'
  },
  {
    question: 'What email service do you use?',
    answer: 'We use industry-leading email service providers to ensure deliverability and provide a great experience. All emails are mobile-optimized and include plain-text versions.'
  },
  {
    question: 'How often will you email me?',
    answer: 'You\'ll receive our main newsletter once per week (every Tuesday). Occasionally, we\'ll send special announcements about important updates or new resources, but we promise never to spam your inbox.'
  }
];

export const EMAIL_PAGE_RESOURCES = [
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Email Template Pack',
    description: '15 mobile-responsive templates',
    downloads: '5.2k',
    type: 'Free Download'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Content Calendar',
    description: '12-month planning template',
    downloads: '3.8k',
    type: 'Free Download'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'A/B Testing Calculator',
    description: 'Statistical significance tool',
    downloads: '2.9k',
    type: 'Interactive Tool'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Subject Line Generator',
    description: 'AI-powered suggestions',
    downloads: '4.1k',
    type: 'Interactive Tool'
  }
];

export const EMAIL_PAGE_EVENTS = [
  {
    title: 'Live Workshop: Email Automation Masterclass',
    date: 'March 25, 2024',
    time: '11:00 AM EST',
    speaker: 'Sarah Johnson',
    spots: '45 spots left'
  },
  {
    title: 'Q&A Session with Email Deliverability Experts',
    date: 'April 2, 2024',
    time: '1:00 PM EST',
    speaker: 'Panel Discussion',
    spots: '100 spots left'
  }
];

export const EMAIL_PAGE_SALES_SERVICES = [
  { text: "Promotional Campaigns", desc: "Announce offers, new products, and drive immediate sales" },
  { text: "Abandoned Cart Recovery", desc: "Reclaim lost sales with timely follow-up emails" },
  { text: "Upsell & Cross-sell", desc: "Increase order value with relevant product recommendations" },
  { text: "Seasonal Promotions", desc: "Capitalize on holidays and special events" }
];

export const EMAIL_PAGE_AUTOMATION_SERVICES = [
  { text: "Welcome Sequences", desc: "Automatically onboard new subscribers with a series of emails" },
  { text: "Drip Campaigns", desc: "Nurture leads over time with scheduled educational content" },
  { text: "Behavioral Triggers", desc: "Send emails based on user actions and engagement" },
  { text: "Re-engagement Campaigns", desc: "Win back inactive subscribers automatically" }
];

export const EMAIL_PAGE_PROCESS_STEPS = [
  {
    icon: "💰",
    title: "Prospect Sequencing",
    description: "Multi-touch cadences designed to nurture cold leads into sales-ready opportunities.",
    border: "border-blue-500",
    hoverText: "group-hover:text-blue-600",
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    bulletColor: "bg-blue-500",
    bullets: ['5-7 touch sequences', 'Personalized follow-ups', 'Optimal timing']
  },
  {
    icon: "🎯",
    title: "ICP Targeting",
    description: "Reach the right decision-makers with laser-focused Ideal Customer Profile targeting.",
    border: "border-purple-500",
    hoverText: "group-hover:text-purple-600",
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    bulletColor: "bg-purple-500",
    bullets: ['Role-based targeting', 'Company fit scoring', 'Intent data integration']
  },
  {
    icon: "📊",
    title: "A/B Testing",
    description: "Continuously optimize subject lines, copy, and CTAs for maximum conversion.",
    border: "border-pink-500",
    hoverText: "group-hover:text-pink-600",
    bg: "bg-pink-100",
    iconColor: "text-pink-600",
    bulletColor: "bg-pink-500",
    bullets: ['Subject line testing', 'Content variations', 'CTA optimization']
  },
  {
    icon: "🤖",
    title: "Automation Workflows",
    description: "Trigger-based sequences that engage leads based on their behavior and actions.",
    border: "border-orange-500",
    hoverText: "group-hover:text-orange-600",
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
    bulletColor: "bg-orange-500",
    bullets: ['Behavior triggers', 'Lead scoring', 'Automated follow-ups']
  },
  {
    icon: "📈",
    title: "Pipeline Analytics",
    description: "Real-time tracking of email performance and revenue impact on your sales pipeline.",
    border: "border-teal-500",
    hoverText: "group-hover:text-teal-600",
    bg: "bg-teal-100",
    iconColor: "text-teal-600",
    bulletColor: "bg-teal-500",
    bullets: ['Revenue attribution', 'Pipeline velocity', 'Conversion tracking']
  },
  {
    icon: "✍️",
    title: "Copywriting Templates",
    description: "Proven email templates for cold outreach, follow-ups, and closing deals.",
    border: "border-indigo-500",
    hoverText: "group-hover:text-indigo-600",
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    bulletColor: "bg-indigo-500",
    bullets: ['Cold outreach', 'Follow-up sequences', 'Meeting confirmations']
  }
];

export const EMAIL_PAGE_COMPARISON_ROWS = [
  { feature: "Primary Goal", automation: "Nurture & Educate leads automatically", sales: "Convert & Close deals directly" },
  { feature: "Target Audience", automation: "Existing subscribers, leads in funnel", sales: "Cold prospects, decision-makers" },
  { feature: "Send Timing", automation: "Trigger-based, scheduled sequences", sales: "Manual, strategic outreach" },
  { feature: "Personalization", automation: "Behavior-based, dynamic content", sales: "Research-based, 1:1 tailored" },
  { feature: "Content Style", automation: "Educational, value-first, soft CTAs", sales: "Persuasive, benefit-driven, direct CTAs" },
  { feature: "Key Metrics", automation: "Open rates, click rates, engagement", sales: "Reply rates, meetings booked, revenue" },
  { feature: "Email Volume", automation: "High volume, mass automation", sales: "Low volume, highly targeted" },
  { feature: "Setup Time", automation: "Initial setup, then runs automatically", sales: "Ongoing manual effort per campaign" },
  { feature: "Best For", automation: "Welcome series, onboarding, retention", sales: "Cold outreach, partnerships, enterprise" },
  { feature: "Common Tools", automation: "Mailchimp, Klaviyo, ActiveCampaign", sales: "Outreach, SalesLoft, Lemlist" }
];

export const EMAIL_PAGE_CHALLENGES = [
  { icon: "📉", title: "Low Engagement", desc: "Generic blasts often result in poor open rates and lack of audience interest.", color: "blue" },
  { icon: "👥", title: "One-Size-Fits-All", desc: "Inconsistent messaging without proper segmentation alienates diverse customer groups.", color: "pink" },
  { icon: "💰", title: "Unclear ROI", desc: "Difficulty tracking actual revenue impact makes it hard to justify marketing spend.", color: "orange" },
  { icon: "⏰", title: "Inefficient Processes", desc: "Manual nurturing is time-consuming and often misses critical engagement windows.", color: "fuchsia" }
];

export const EMAIL_PAGE_SOLUTIONS = [
  { icon: "🎯", title: "Strategic Planning", desc: "Lifecycle mapping ensures the right message reaches the right person at the right time." },
  { icon: "📊", title: "Smart Segmentation", desc: "Targeted lists and personalized content significantly boost relevance and engagement." },
  { icon: "📈", title: "Data-Driven Optimization", desc: "A/B testing and analytics refine performance to maximize open rates and conversions." },
  { icon: "🔄", title: "Seamless Integration", desc: "Connect with CRM & eCommerce platforms for full end-to-end tracking and automation." }
];

/* ================= CLOUD INTEGRATION PAGE ================= */
export const CLOUD_PAGE_STEPS = [
  {
    title: "Data Collection",
    desc: "Collect data from apps, CRM, websites, and tools in real-time with intelligent data aggregation.",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-100",
    stats: "100+ Data Sources",
    statIcon: <Database className="w-3 h-3" />
  },
  {
    title: "Processing & Automation",
    desc: "Automate workflows and process data instantly using advanced cloud computing systems and AI.",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    gradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-100",
    stats: "< 50ms Processing",
    statIcon: <Sparkles className="w-3 h-3" />
  },
  {
    title: "Secure Storage",
    desc: "Store data securely with automated backups, encryption, and controlled access management.",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    gradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-100",
    stats: "256-bit Encryption",
    statIcon: <Shield className="w-3 h-3" />
  },
  {
    title: "System Integration",
    desc: "Connect accounting, marketing, and business tools seamlessly with unified API architecture.",
    icon: <Workflow className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    gradient: "from-orange-50 to-red-50",
    borderColor: "border-orange-100",
    stats: "5000+ Integrations",
    statIcon: <Workflow className="w-3 h-3" />
  },
  {
    title: "Monitoring & Security",
    desc: "Track performance and secure systems using enterprise-grade cloud security standards.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    gradient: "from-indigo-50 to-violet-50",
    borderColor: "border-indigo-100",
    stats: "24/7 Monitoring",
    statIcon: <CheckCircle className="w-3 h-3" />
  }
];

export const CLOUD_PAGE_BENEFITS = [
  {
    title: "Faster Operations",
    desc: "Reduce manual work and speed up processes by up to 75%",
    icon: <Zap className="w-6 h-6" />,
    stat: "75%",
    statLabel: "Faster Processing"
  },
  {
    title: "Real-time Insights",
    desc: "Get live data and analytics for better decision-making",
    icon: <BarChart3 className="w-6 h-6" />,
    stat: "99.9%",
    statLabel: "Data Accuracy"
  },
  {
    title: "Data Security",
    desc: "Enterprise-level protection and automated backup systems",
    icon: <Lock className="w-6 h-6" />,
    stat: "256-bit",
    statLabel: "Encryption"
  },
  {
    title: "Scalability",
    desc: "Easily scale your systems as your business grows",
    icon: <RefreshCw className="w-6 h-6" />,
    stat: "∞",
    statLabel: "Unlimited Scale"
  }
];

export const CLOUD_PAGE_TOOLS = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🔷' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⚙️' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Jenkins', icon: '🤖' },
  { name: 'GitHub Actions', icon: '⚡' },
];

/* ================= OUR CLIENTS PAGE ================= */
import {
  StarIcon as HeroStarIcon,
  UserGroupIcon as HeroUserGroupIcon,
  LightBulbIcon as HeroLightBulbIcon,
} from "@heroicons/react/24/outline";

export const CLIENTS_PAGE_STATS = [
  {
    value: "100+",
    label: "Happy Clients",
    icon: <HeroUserGroupIcon className="w-8 h-8" />,
    color: "from-sky-400 to-cyan-500",
  },
  {
    value: "4.9/5",
    label: "Average Rating",
    icon: <HeroStarIcon className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    value: "98%",
    label: "Retention Rate",
    icon: <ChartBarIcon className="w-8 h-8" />,
    color: "from-emerald-400 to-green-500",
  },
  {
    value: "1+",
    label: "Years Experience",
    icon: <HeroLightBulbIcon className="w-8 h-8" />,
    color: "from-violet-400 to-purple-500",
  },
];

export const CLIENTS_PAGE_TESTIMONIALS = [
  {
    id: 1,
    name: "James Kneblik, Jr.",
    position: "Vice President",
    company: "Surgical Resources Group LLC",
    content:
      "Visionary Dynamics has been an outstanding partner—highly supportive, reliable, and dedicated to driving real efficiency and transformation in our business. Their professionalism, collaboration, and commitment to delivering results have made a significant impact. We truly value the work they've done and look forward to many more great achievements together.",
    rating: 5,
    date: "2 weeks ago",
    tags: ["Technology", "E-commerce"],
  },
  {
    id: 2,
    name: "Brad Coffman",
    position: "CEO",
    company: "Valorem Brokers",
    content:
      "Visionary Dynamics has been a truly reliable partner, consistently demonstrating exceptional professionalism and a strong commitment to delivering results. Their ability to execute on time and maintain high standards has made a meaningful impact on our business, clients, and referrals. We genuinely appreciate their dedication, growth, and the value they continue to bring.",
    rating: 5,
    date: "1 month ago",
    tags: ["Finance", "Consulting"],
  },
  {
    id: 3,
    name: "Saket Gunjan",
    position: "President",
    company: "Squegg",
    content:
      "Working with Visionary Dynamics has been an absolute pleasure. Their team brings exceptional energy, professionalism, and expertise, making the entire experience seamless and highly effective. We truly appreciate their dedication and look forward to expanding our collaboration into new areas",
    rating: 5,
    date: "3 weeks ago",
    tags: ["Healthcare", "Marketing"],
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO",
    company: "CloudSecure Systems",
    content:
      "They implemented top-tier cybersecurity with flawless execution. Zero breaches since deployment.",
    rating: 5,
    date: "2 months ago",
    tags: ["IT", "Cybersecurity"],
  },
];

export const CLIENTS_PAGE_FILTERS = [
  { id: "all", label: "All Testimonials" },
  { id: "technology", label: "Technology" },
  { id: "finance", label: "Finance" },
  { id: "healthcare", label: "Healthcare" },
  { id: "it", label: "IT" },
];

/* ================= AUTOMATION & INTEGRATION PAGE ================= */
export const AUTOMATION_PAGE_STEPS = [
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

export const AUTOMATION_PAGE_AREAS = [
  { icon: TrendingUp, title: "Sales & CRM", benefits: "Auto-lead scoring, email sequencing, pipeline updates", color: "from-blue-500 to-cyan-500" },
  { icon: ShoppingCart, title: "E-commerce & Order Mgmt", benefits: "Sync inventory, automated fulfillment, personalized cart recovery", color: "from-green-500 to-emerald-500" },
  { icon: Users, title: "HR & Onboarding", benefits: "Employee document collection, payroll sync, role-based access", color: "from-purple-500 to-violet-500" },
  { icon: FileText, title: "Finance & Accounting", benefits: "Invoicing automation, expense approvals, real-time reconciliation", color: "from-amber-500 to-orange-500" },
  { icon: MessageSquare, title: "Customer Support", benefits: "AI chatbots, ticket routing, sentiment analysis", color: "from-rose-500 to-pink-500" },
  { icon: Database, title: "Data & Analytics", benefits: "ETL pipelines, automated reporting, predictive dashboards", color: "from-indigo-500 to-purple-500" }
];

export const AUTOMATION_PAGE_TECH = [
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

/* ================= AI CONSULTING PAGE ================= */
export const AI_PAGE_NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Contact', href: '#contact' },
];

export const AI_PAGE_SERVICES = [
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable intelligence with AI-powered analytics that predict trends and optimize decision-making.",
    features: [
      "Predictive analytics & forecasting",
      "Real-time data visualization",
      "Automated reporting & dashboards",
      "Customer behavior analysis"
    ],
    color: "blue"
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Intelligent Customer Support",
    description: "Deliver exceptional customer experiences with AI-enhanced support systems that understand context and provide instant solutions.",
    features: [
      "AI-powered chatbots & virtual assistants",
      "Sentiment analysis & customer insights",
      "Automated ticket routing & prioritization",
      "24/7 multilingual support"
    ],
    color: "purple"
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Smart Automation Solutions",
    description: "Streamline operations and reduce manual effort with intelligent automation that learns and adapts to your workflows.",
    features: [
      "Robotic process automation (RPA)",
      "Intelligent document processing",
      "Workflow optimization",
      "Automated quality assurance"
    ],
    color: "green"
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Marketing Intelligence",
    description: "Supercharge your marketing efforts with AI-driven insights that optimize campaigns and maximize ROI.",
    features: [
      "Personalized content recommendations",
      "Campaign performance prediction",
      "Customer segmentation & targeting",
      "Social media sentiment analysis"
    ],
    color: "orange"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "AI-Enhanced Security",
    description: "Protect your digital assets with intelligent security systems that detect and respond to threats in real-time.",
    features: [
      "Threat detection & prevention",
      "Anomaly detection algorithms",
      "Automated incident response",
      "Compliance monitoring"
    ],
    color: "red"
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Smart Development",
    description: "Accelerate software development with AI-assisted coding, testing, and deployment tools that boost productivity.",
    features: [
      "AI-powered code assistance",
      "Automated testing & QA",
      "Intelligent deployment pipelines",
      "Performance optimization"
    ],
    color: "indigo"
  }
];

export const AI_PAGE_METHODOLOGY = [
  {
    phase: "1. Automation",
    icon: <Search className="w-8 h-8" />,
    description: "AI helps automate repetitive and time-consuming tasks like data entry, reports, and routine operations.",
    steps: [
      "Reduce manual effort",
      "Save time",
      "Automate routine tasks",
      "Improve workflow efficiency",
      "Focus on high-value work"
    ],
    duration: "Efficiency Boost"
  },
  {
    phase: "2. Data Analysis",
    icon: <Target className="w-8 h-8" />,
    description: "AI processes large amounts of data quickly and accurately to generate valuable insights.",
    steps: [
      "Fast data processing",
      "Identify patterns",
      "Generate insights",
      "Better decision-making",
      "Smart strategies"
    ],
    duration: "Smart Insights"
  },
  {
    phase: "3. Accuracy & Error Reduction",
    icon: <Rocket className="w-8 h-8" />,
    description: "AI minimizes human errors and ensures more reliable and consistent results across services.",
    steps: [
      "Reduce human errors",
      "Improve consistency",
      "Ensure accuracy",
      "Reliable outputs",
      "Quality improvement"
    ],
    duration: "High Accuracy"
  },
  {
    phase: "4. Speed & Efficiency",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "AI speeds up workflows and enhances productivity, enabling faster service delivery.",
    steps: [
      "Faster execution",
      "Boost productivity",
      "Optimize workflows",
      "Quick turnaround",
      "Maintain quality"
    ],
    duration: "Faster Delivery"
  }
];

export const AI_PAGE_EXPERTISE_AREAS = [
  {
    title: "Financial Services",
    description: "Using AI to automate financial processes, detect anomalies, and generate faster, data-driven insights for better decision-making.",
    icon: "💰",
  },
  {
    title: "Healthcare",
    description: "Applying AI to streamline patient data management, support clinical decisions, and improve operational efficiency.",
    icon: "🏥",
  },
  {
    title: "Retail & CPG",
    description: "Leveraging AI for demand forecasting, customer behavior analysis, and personalized experiences to boost sales and efficiency.",
    icon: "🛒",
  },
  {
    title: "Manufacturing",
    description: "Integrating AI to monitor production, predict maintenance needs, and enhance quality control processes.",
    icon: "🏭",
  },
  {
    title: "Technology",
    description: "Enhancing development workflows with AI-driven automation, faster debugging, and smarter product optimization.",
    icon: "💻",
  },
  {
    title: "Energy & Utilities",
    description: "Utilizing AI for system monitoring, demand prediction, and efficient resource management to support sustainable operations.",
    icon: "⚡",
  }
];

/* ================= BOOKKEEPING PAGE ================= */
export const BOOKKEEPING_PAGE_SERVICES = [
  {
    title: "Bank Reconciliation",
    icon: "💰",
    color: "from-blue-500 to-cyan-400",
    description: "We match your bank and credit card transactions to ensure accurate, error-free financial records."
  },
  {
    title: "Accounts Payable/Receivable",
    icon: "📊",
    color: "from-emerald-500 to-teal-400",
    description: "Track invoices, manage payments, and maintain healthy cash flow with organized AR and AP processes."
  },
  {
    title: "Day to Day Transaction Records",
    icon: "📈",
    color: "from-amber-500 to-orange-400",
    description: "We record and organize your daily financial transactions accurately, ensuring your books stay updated and error-free"
  },
  {
    title: "Data Migration",
    icon: "📋",
    color: "from-red-500 to-rose-400",
    description: "We securely transfer your financial data from legacy systems or spreadsheets into modern accounting platforms without data loss."
  },
  {
    title: "Backlog Cleanup",
    icon: "🧹",
    color: "from-gray-500 to-gray-400",
    description: "We organize and update your past transactions so your books are accurate and up to date."
  },
  {
    title: "Reliable Month-End and Fiscal Year-End Closing Support",
    icon: "📅",
    color: "from-blue-600 to-blue-400",
    description: "Comprehensive year-end adjustments and reports to prepare your business for tax season and planning."
  }
];

export const BOOKKEEPING_PAGE_BENEFITS = [
  {
    title: "Time Savings",
    description: "Focus on your core business while we handle the books",
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    stats: "Save 15+ hrs/month",
  },
  {
    title: "Improved Cash Flow",
    description: "Real-time tracking and better financial management",
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    stats: "Up to 30% improvement",
  },
  {
    title: "Expert Team",
    description: "Certified bookkeepers with industry experience",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    stats: "5+ years experience",
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security and confidentiality",
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    stats: "256-bit encryption",
  },
];

export const BOOKKEEPING_PAGE_FEATURES = [
  {
    title: "Precise Accounting",
    desc:
      "Rely on our outsourced accounting services and let us take care of your finances with ease.",
    image: "/images/precise-accounting.webp",
    reverse: false,
    bg: "bg-blue-100",
    darkOverlay: false,
    imageBg: false,
  },
  {
    title: "Time-Consuming Bookkeeping Tasks",
    desc:
      "Manual data entry and reconciliations take valuable time away from your core business operations.",
    image: "/images/financial-reporting.webp",
    reverse: true,
    bg: "bg-blue-100",
    darkOverlay: false,
    imageBg: false,
  },
  {
    title: "Lack of Real-Time Financial Insights",
    desc:
      "Delayed or outdated financial reports make it difficult to make informed decisions.",
    image: "/images/tax-support.webp",
    reverse: false,
    bg: "bg-blue-100",
    darkOverlay: false,
    imageBg: false,
  },
];

export const BOOKKEEPING_PAGE_VALUE_PROPS = [
  { img: "/animations/help-desk.png", title: "PERSONAL SUPPORT", desc: "You get your own expert no bots, no confusion." },
  { img: "/animations/increase.png", title: "BETTER VALUE", desc: "Quality accounting without the big price tag." },
  { img: "/animations/dashboard.png", title: "YOUR DASHBOARD", desc: "See your numbers anytime, anywhere." },
  { img: "/animations/update.png", title: "LIVE UPDATE", desc: "Stay in the loop with real-time financial info." }
];

/* ================= PAYROLL PAGE ================= */
export const PAYROLL_PAGE_HERO_PARTICLES = [
  { top: "10%", left: "20%" },
  { top: "25%", left: "80%" },
  { top: "40%", left: "15%" },
  { top: "60%", left: "70%" },
  { top: "80%", left: "35%" },
  { top: "15%", left: "60%" },
  { top: "70%", left: "90%" },
  { top: "50%", left: "45%" },
];

export const PAYROLL_PAGE_SERVICES_PARTICLES = [
  { top: "15%", left: "10%" },
  { top: "30%", left: "25%" },
  { top: "45%", left: "60%" },
  { top: "65%", left: "80%" },
  { top: "80%", left: "20%" },
  { top: "20%", left: "90%" },
  { top: "55%", left: "40%" },
  { top: "75%", left: "55%" },
  { top: "35%", left: "75%" },
  { top: "90%", left: "35%" },
];

export const PAYROLL_PAGE_WHY_CHOOSE_PARTICLES = [
  { top: "10%", left: "15%" },
  { top: "20%", left: "70%" },
  { top: "35%", left: "30%" },
  { top: "50%", left: "85%" },
  { top: "65%", left: "25%" },
  { top: "75%", left: "60%" },
  { top: "85%", left: "45%" },
  { top: "40%", left: "10%" },
  { top: "25%", left: "90%" },
];

export const PAYROLL_PAGE_SERVICES = [
  {
    title: "Seamless Salary Processing",
    desc: "Accurate payroll processing tailored to your business. We calculate salaries, bonuses, and deductions so employees are paid correctly every time.",
    icon: "💰",
  },
  {
    title: "Smart Tax Management",
    desc: "We handle tax deductions and filings, ensuring full compliance and fewer risks.",
    icon: "📊",
  },
  {
    title: "Professional Payslips",
    desc: "We send clear and secure digital payslips so employees can easily understand their salary details.",
    icon: "🧾",
  },
  {
    title: "Statutory Compliance",
    desc: "We handle provident fund, taxes, and legal requirements to keep your business compliant.",
    icon: "⚖️",
  },
  {
    title: "Employee Benefits",
    desc: "We manage insurance, bonuses, reimbursements, leave, and retirement benefits.",
    icon: "🎁",
  },
  {
    title: "Payroll Reports",
    desc: "Access accurate payroll data and reports whenever you need them.",
    icon: "📈",
  },
];

export const PAYROLL_PAGE_FORMS = [
  {
    number: "01",
    title: "Form W-2",
    desc: "Annual form showing employee wages and taxes withheld.",
    bg: "from-blue-600/70 to-cyan-500/60",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Form W-3",
    desc: "Summary form submitted with all W-2 copies.",
    bg: "from-purple-600/70 to-pink-500/60",
    accent: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    title: "Form W-4",
    desc: "Used to determine federal tax withholding from employee pay.",
    bg: "from-emerald-600/70 to-teal-500/60",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    title: "Form 1099-NEC",
    desc: "Reports payments made to independent contractors.",
    bg: "from-orange-600/70 to-red-500/60",
    accent: "from-orange-500 to-red-400",
  },
];

export const PAYROLL_PAGE_PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understand your payroll needs and requirements.",
    color: "blue",
    align: "left"
  },
  {
    step: "02",
    title: "Setup",
    desc: "Configure payroll systems and data securely.",
    color: "indigo",
    align: "right"
  },
  {
    step: "03",
    title: "Processing",
    desc: "Run payroll accurately with full compliance.",
    color: "purple",
    align: "left"
  },
  {
    step: "04",
    title: "Reporting",
    desc: "Deliver payroll reports and ongoing support.",
    color: "pink",
    align: "right"
  },
];

/* ================= FINANCIAL REPORTING PAGE ================= */
export const FINANCIAL_REPORTING_PAGE_FEATURES = [
  {
    icon: BarChart3,
    title: "Revenue Analysis",
    color: "from-blue-500 to-indigo-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    points: [
      "Total revenue growth tracking",
      "Revenue by product or service",
      "Regional revenue performance"
    ]
  },
  {
    icon: DollarSign,
    title: "Cost Analysis",
    color: "from-emerald-500 to-teal-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    points: [
      "Cost of goods sold (COGS)",
      "Operating expense breakdown",
      "Fixed vs variable cost insights"
    ]
  },
  {
    icon: TrendingUp,
    title: "Profitability Analysis",
    color: "from-purple-500 to-pink-500",
    light: "bg-purple-50",
    text: "text-purple-600",
    points: [
      "Gross profit margin",
      "Operating margin tracking",
      "Net profit performance"
    ]
  },
  {
    icon: Activity,
    title: "Efficiency Analysis",
    color: "from-orange-500 to-amber-500",
    light: "bg-orange-50",
    text: "text-orange-600",
    points: [
      "Inventory turnover ratio",
      "Debtors turnover tracking",
      "Asset utilization metrics"
    ]
  },
  {
    icon: Wallet,
    title: "Cash Flow Analysis",
    color: "from-rose-500 to-red-500",
    light: "bg-rose-50",
    text: "text-rose-600",
    points: [
      "Operating cash flow",
      "Investing cash flow",
      "Financing cash flow"
    ]
  },
  {
    icon: Target,
    title: "Comparative & Trend Analysis",
    color: "from-cyan-500 to-sky-500",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    points: [
      "Year-over-year growth",
      "Industry benchmarking",
      "Competitor comparison"
    ]
  }
];

export const FINANCIAL_REPORTING_PAGE_REPORTS = [
  {
    title: "Profit & Loss",
    description: "Track revenue, expenses, and profitability over any period",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Balance Sheet",
    description: "Get a complete picture of assets, liabilities, and equity",
    image: "https://tse1.mm.bing.net/th/id/OIP.lRdtLjpAjMcnkblM8T7vegHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Cash Flow",
    description: "Monitor cash inflows and outflows in real-time",
    image: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
  },
  {
    title: "AR/AP Aging",
    description: "Track outstanding receivables and payables",
    image: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
  }
];

/* ================= SOFTWARE SETUP & MIGRATION PAGE ================= */
export const SOFTWARE_MIGRATION_PAGE_SERVICES = [
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "QuickBooks Online",
    description: "Seamless migration, cleanup, and optimization of your QuickBooks Online environment.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: <FileCheck className="w-6 h-6 text-white" />,
    title: "Bill.com",
    description: "AP/AR automation setup with approval workflows and clean payment integrations.",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Microsoft SharePoint",
    description: "Structured financial document management and secure collaboration setup.",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "QuickBooks Desktop",
    description: "Version upgrades, file repair, hosting migration, and cloud transition support.",
    gradient: "from-orange-500 to-amber-600"
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "Gusto & ADP Payroll",
    description: "Payroll system setup, tax compliance configuration, and HR integrations.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Stripe",
    description: "Payment gateway integration with automated reconciliation and reporting sync.",
    gradient: "from-indigo-600 to-purple-700"
  }
];

export const SOFTWARE_MIGRATION_PAGE_STEPS = [
  {
    step: "01",
    title: "QuickBooks Desktop → QuickBooks Online (QBD → QBO)",
    description: "Full historical data migration from QuickBooks Desktop to QuickBooks Online with account mapping, payroll alignment, and reconciliation validation.",
    icon: <Database className="w-8 h-8 text-indigo-600" />
  },
  {
    step: "02",
    title: "QuickBooks Online → QuickBooks Desktop (QBO → QBD)",
    description: "Structured downgrade or enterprise transition with secure data export, file rebuild, and balance verification.",
    icon: <CloudUpload className="w-8 h-8 text-indigo-600" />
  },
  {
    step: "03",
    title: "Xero ↔ QuickBooks Online (Xero → QBO / QBO → Xero)",
    description: "Seamless platform switching with chart-of-accounts restructuring, bank feed setup, and clean opening balance adjustments.",
    icon: <BarChart className="w-8 h-8 text-indigo-600" />
  },
  {
    step: "04",
    title: "Wave / Sage → QuickBooks Online",
    description: "Complete migration from Wave or Sage to QBO including customer/vendor data, open invoices, payroll history, and tax configuration.",
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />
  }
];

/* ================= ABOUT US PAGE ================= */
export const ABOUT_PAGE_MISSION_DATA = {
  title: "Our Mission",
  icon: <Target className="w-10 h-10" />,
  gradient: "from-blue-600 via-cyan-500 to-teal-500",
  text: "To empower businesses with secure, scalable and innovative technology solutions that accelerate growth, enhance efficiency, and drive meaningful digital transformation across industries.",
  pillars: [
    { icon: <Zap className="w-6 h-6" />, title: "Innovation Excellence", stat: "50+ Innovative Projects", description: "Pioneering cutting-edge solutions" },
    { icon: <HeartHandshake className="w-6 h-6" />, title: "Client Partnership", stat: "98% Satisfaction Rate", description: "Building lasting relationships" },
    { icon: <Cpu className="w-6 h-6" />, title: "Technical Mastery", stat: "500+ Solutions Built", description: "Engineering excellence" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Security First", stat: "Zero Major Breaches", description: "Enterprise-grade protection" },
  ],
  stats: [
    { value: "1+", label: "Years Excellence", icon: <Award className="w-5 h-5" /> },
    { value: "50+", label: "Global Clients", icon: <Globe className="w-5 h-5" /> },
    { value: "99.9%", label: "Uptime SLA", icon: <Server className="w-5 h-5" /> },
    { value: "Team", label: "Support Coverage", icon: <Clock className="w-5 h-5" /> },
  ],
};

export const ABOUT_PAGE_VISION_DATA = {
  title: "Our Vision",
  icon: <Brain className="w-10 h-10" />,
  gradient: "from-purple-600 via-pink-500 to-rose-500",
  text: "To become the world's most trusted technology partner, recognized for transforming businesses through innovation, strategic leadership, and sustainable technological advancement that shapes the digital future.",
  pillars: [
    { icon: <Globe className="w-6 h-6" />, title: "Global Leadership", stat: "25+ Countries Served", description: "Worldwide impact" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Sustainable Growth", stat: "50+ Industry Awards", description: "Responsible innovation" },
    { icon: <Brain className="w-6 h-6" />, title: "AI-First Future", stat: "Future Ready Solutions", description: "Intelligent automation" },
    { icon: <Users className="w-6 h-6" />, title: "Strategic Partnerships", stat: "92% Client Retention", description: "Long-term collaboration" },
  ],
  stats: [
    { value: "2028", label: "Growth Target", icon: <Target className="w-5 h-5" /> },
    { value: "80+", label: "Tech Experts", icon: <Users className="w-5 h-5" /> },
    { value: "1M+", label: "Lives Impacted", icon: <HeartHandshake className="w-5 h-5" /> },
    { value: "AI/ML", label: "Core Focus", icon: <Lightbulb className="w-5 h-5" /> },
  ],
};

export const ABOUT_PAGE_JOURNEY_DATA = [
  { year: "2023", title: "Idealisation", desc: "The vision was born - conceptualizing innovative solutions for businesses." },
  { year: "2024", title: "Founded", desc: "Visionary Dynamics was officially established with a mission to transform businesses." },
  { year: "Jan 2025", title: "First Office", desc: "Opened our first corporate office, marking the beginning of our physical presence." },
  { year: "March 2025", title: "Reached 10 Clients", desc: "Achieved milestone of 10 satisfied clients across diverse industries." },
  { year: "May 2025", title: "Expanded to Global Presence", desc: "Extended our operations internationally, serving clients worldwide." },
  { year: "Jun 2025", title: "Launched Marketing Services", desc: "Introduced comprehensive digital marketing solutions to our portfolio." },
  { year: "Jul 2025", title: "First Development Team", desc: "Assembled our core development team, enhancing technical capabilities." },
  { year: "Oct 2025", title: "Launched Virtual Assistant Services", desc: "Added AI-powered virtual assistant services to streamline operations." },
  { year: "Nov 2025", title: "Reached 50+ Clients", desc: "Crossed 50 client milestone, demonstrating rapid growth and trust." },
  { year: "Dec 2025", title: "Launched RPO Services", desc: "Expanded into Recruitment Process Outsourcing services." },
];