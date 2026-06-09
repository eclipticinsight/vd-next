import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development",
  description:
    "Custom, mobile-first website design and development using React, Next.js, Tailwind CSS, and Node.js. From stunning UI/UX to robust backends — we build websites that convert.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/webdesign" },
  openGraph: {
    title: "Website Design & Development | Visionary Dynamics",
    description:
      "Award-winning custom website design and development. Fast, responsive, SEO-optimized websites built with modern technology.",
    url: "https://www.visionarydynamicsas.com/webdesign",
  },
};

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
