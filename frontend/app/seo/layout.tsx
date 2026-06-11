import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services — Search Engine Optimization",
  description:
    "Get effective SEO services from Visionary Dynamics to enhance online presence, increase traffic, and drive sustainable growth.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/seo" },
  openGraph: {
    title: "Visionary Dynamics | SEO & Digital Growth Services",
    description:
      "Get effective SEO services from Visionary Dynamics to enhance online presence, increase traffic, and drive sustainable growth.",
    url: "https://www.visionarydynamicsas.com/seo",
  },
};

export default function SeoPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
