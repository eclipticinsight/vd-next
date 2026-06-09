import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Business, Accounting & Tech Insights",
  description:
    "Read the latest articles on accounting, digital marketing, IT management, business analytics, and industry trends from the Visionary Dynamics expert team.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/blog" },
  openGraph: {
    title: "Blog | Visionary Dynamics",
    description:
      "Expert insights on accounting, digital marketing, IT management, and business strategy from Visionary Dynamics.",
    url: "https://www.visionarydynamicsas.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
