import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Services Pricing",
  description:
    "Transparent website and application development pricing. Custom website design, frontend, backend, and mobile-optimized development packages from Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/development" },
  openGraph: {
    title: "Development Pricing | Visionary Dynamics",
    description:
      "Website and app development pricing — custom designs, frontend, backend, and full-stack packages.",
    url: "https://www.visionarydynamicsas.com/pricing/development",
  },
};

export default function DevelopmentPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
