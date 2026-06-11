import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services Pricing",
  description:
    "View Visionary Dynamics’ marketing service pricing plans built for SEO, social media, and growth‑driven strategies.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/marketing" },
  openGraph: {
    title: "Marketing Services Pricing | Visionary Dynamics",
    description:
      "View Visionary Dynamics’ marketing service pricing plans built for SEO, social media, and growth‑driven strategies.",
    url: "https://www.visionarydynamicsas.com/pricing/marketing",
  },
};

export default function MarketingPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
