import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Business, Accounting & Tech Insights",
  description:
    "Stay informed with the Visionary Dynamics blog featuring expert articles on business growth, technology, and digital transformation.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/blog" },
  openGraph: {
    title: "Visionary Dynamics Blog | Insights & Business Trends",
    description:
      "Stay informed with the Visionary Dynamics blog featuring expert articles on business growth, technology, and digital transformation.",
    url: "https://www.visionarydynamicsas.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
