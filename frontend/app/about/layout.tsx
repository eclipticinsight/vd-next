import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Visionary Dynamics’ mission, vision, and expert team delivering tailored financial, IT, and analytics solutions for business growth.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/about" },
  openGraph: {
    title: "About Us | Visionary Dynamics Consulting & Services",
    description:
      "Discover Visionary Dynamics’ mission, vision, and expert team delivering tailored financial, IT, and analytics solutions for business growth.",
    url: "https://www.visionarydynamicsas.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
