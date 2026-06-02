"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      {/* TOP FOOTER */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
{/* LOGO */}
<div className="space-y-4">

  <div className="space-y-4">

  <Link
    href="/"
    className="inline-flex items-center"
  >

    <Image
  src="/VD-Logo-e1737873827576.png"
  alt="Logo"
  width={180}
  height={80}
  style={{ width: "160px", height: "auto" }}
/>

  </Link>

</div>

  <p className="text-white/70 text-sm leading-relaxed">
    Smart solutions and scalable IT services helping businesses grow
    through innovation and technology.
  </p>

  <p className="text-white/70 text-sm leading-relaxed">
    Providing reliable and future-ready technology services that help
    organizations adapt, compete, and succeed through innovation and efficiency.
  </p>

  <p className="text-white/70 text-sm leading-relaxed">
    Transforming ideas into powerful digital solutions that enable businesses
    to innovate faster, scale seamlessly, and stay ahead in a competitive landscape.
  </p>

</div>
          {/* QUICK LINKS */}
          <div className="lg:ml-36">
            <h4 className="font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="hover:text-white transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/webdesign" className="hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-white transition-colors">
                  I.T
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES / POLICIES */}
          <div className="space-y-4">
            <h4 className="font-semibold mb-5 text-white">Policies</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a 
                  href="/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="/datasecurity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Data Security Policy
                </a>
              </li>
              <li>
                <a 
                  href="/intellectual" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Intellectual Property Policy
                </a>
              </li>
              <li>
                <a 
                  href="/complaint" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Complaint & Grievance Policy
                </a>
              </li>
              <li>
                <a 
                  href="/disclaimer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-white/70 text-sm mb-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400 flex-shrink-0" />
                <a 
                  href="mailto:connect@visionarydynamicsas.com" 
                  className="hover:text-white transition-colors break-all"
                >
                  connect@visionarydynamicsas.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400 flex-shrink-0" />
                <a 
                  href="tel:+17275649476" 
                  className="hover:text-white transition-colors"
                >
                  +1(727) 564-9476
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  7901 4th St N STE 300 St. Petersburg, Florida-33702 USA
                </p>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="https://in.linkedin.com/company/visionarydynamicsas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                 <span className="text-white">LinkedIn</span>
              </a>
              <a
                href="https://x.com/VisionaryD64371"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
                aria-label="Twitter"
              >
                 <span className="text-white">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/visionarydynamicsas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <span className="text-[18px] font-bold">f</span>
              </a>
              <a
                href="https://www.instagram.com/visionary.dynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <span className="text-[18px] font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 text-center py-4 text-white/60 text-sm">
        © 2026 Visionary Dynamics. All rights reserved.
      </div>
    </footer>
  );
}