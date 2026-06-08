import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services — Search Engine Optimization",
  description:
    "Boost your organic search rankings with expert SEO services. Keyword research, on-page optimization, technical SEO, link building, local SEO, and monthly performance reporting.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/seo" },
  openGraph: {
    title: "SEO Services | Visionary Dynamics",
    description:
      "Expert search engine optimization — keyword research, on-page SEO, technical audits, link building, and local SEO to grow your organic traffic.",
    url: "https://www.visionarydynamicsas.com/seo",
  },
};

export default function SeoPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
