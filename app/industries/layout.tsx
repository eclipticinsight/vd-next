import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Visionary Dynamics delivers specialized accounting, IT, marketing, and business analytics solutions across healthcare, retail, real estate, manufacturing, non-profit, and more.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/industries" },
  openGraph: {
    title: "Industries We Serve | Visionary Dynamics",
    description:
      "Explore our industry-specific solutions for healthcare, retail, real estate, non-profit, and more.",
    url: "https://www.visionarydynamicsas.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
