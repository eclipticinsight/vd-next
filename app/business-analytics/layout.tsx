import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analytics",
  description:
    "Transform raw data into actionable business insights. Visionary Dynamics offers data analysis, market research, process optimization, and strategic planning to drive growth.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/business-analytics" },
  openGraph: {
    title: "Business Analytics | Visionary Dynamics",
    description:
      "Data-driven insights, market research, process optimization, and strategic planning services for growing businesses.",
    url: "https://www.visionarydynamicsas.com/business-analytics",
  },
};

export default function BusinessAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
