import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Services Pricing",
  description:
    "Discover flexible development pricing from Visionary Dynamics with clear plans focused on performance and scalability.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/development" },
  openGraph: {
    title: "Web & Software Development Pricing | Visionary Dynamics",
    description:
      "Discover flexible development pricing from Visionary Dynamics with clear plans focused on performance and scalability.",
    url: "https://www.visionarydynamicsas.com/pricing/development",
  },
};

export default function DevelopmentPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
