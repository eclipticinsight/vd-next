import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services Pricing",
  description:
    "Flexible digital marketing pricing packages for SEO, social media, email marketing, LinkedIn, and web design. Find the right plan for your business goals and budget.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/marketing" },
  openGraph: {
    title: "Marketing Pricing | Visionary Dynamics",
    description:
      "Flexible marketing pricing for SEO, social media, email, LinkedIn, and web design — packages for every budget.",
    url: "https://www.visionarydynamicsas.com/pricing/marketing",
  },
};

export default function MarketingPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
