import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Marketing",
  description:
    "Professional LinkedIn marketing and lead generation for B2B businesses. Profile optimization, content strategy, LinkedIn Ads, and outreach campaigns that convert.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/linkedin" },
  openGraph: {
    title: "LinkedIn Marketing | Visionary Dynamics",
    description:
      "B2B LinkedIn marketing — profile optimization, content strategy, LinkedIn Ads, and lead generation campaigns.",
    url: "https://www.visionarydynamicsas.com/linkedin",
  },
};

export default function LinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
