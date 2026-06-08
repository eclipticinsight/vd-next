"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_QUICK_LINKS, FOOTER_POLICIES } from "../../utils/constants";

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
              {FOOTER_QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES / POLICIES */}
          <div className="space-y-4">
            <h4 className="font-semibold mb-5 text-white">Policies</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {FOOTER_POLICIES.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-white/70 text-sm mb-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400 flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400 flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phoneClean}`} 
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <div className="relative group flex flex-col items-center">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-sky-600 hover:text-white text-slate-300 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-sky-500"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <span className="absolute bottom-full mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-lg bg-slate-900 text-white text-xs font-medium px-2.5 py-1 select-none pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
                  LinkedIn
                </span>
              </div>

              {/* Twitter */}
              <div className="relative group flex flex-col items-center">
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-black hover:text-white text-slate-300 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-white/25"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <span className="absolute bottom-full mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-lg bg-slate-900 text-white text-xs font-medium px-2.5 py-1 select-none pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
                  X (Twitter)
                </span>
              </div>

              {/* Facebook */}
              <div className="relative group flex flex-col items-center">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white text-slate-300 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-blue-500"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <span className="absolute bottom-full mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-lg bg-slate-900 text-white text-xs font-medium px-2.5 py-1 select-none pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
                  Facebook
                </span>
              </div>

              {/* Instagram */}
              <div className="relative group flex flex-col items-center">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-pink-600 hover:text-white text-slate-300 hover:shadow-lg hover:shadow-pink-600/30 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-pink-500"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <span className="absolute bottom-full mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-lg bg-slate-900 text-white text-xs font-medium px-2.5 py-1 select-none pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
                  Instagram
                </span>
              </div>
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