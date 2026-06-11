import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analytics",
  description:
    "Unlock data‑driven growth with Visionary Dynamics’ business analytics services designed for insights, performance, and strategy.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/business-analytics" },
  openGraph: {
    title: "Visionary Dynamics | Business Analytics Services",
    description:
      "Unlock data‑driven growth with Visionary Dynamics’ business analytics services designed for insights, performance, and strategy.",
    url: "https://www.visionarydynamicsas.com/business-analytics",
  },
};

export default function BusinessAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
