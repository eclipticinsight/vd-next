import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Financial Reporting",
  description:
    "Visionary Dynamics provides expert financial reporting solutions that enable accurate analysis, risk management, and informed business decisions.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/financial-reporting-analysis" },
  openGraph: {
    title: "Business Financial Reporting| Visionary Dynamics",
    description:
      "Visionary Dynamics provides expert financial reporting solutions that enable accurate analysis, risk management, and informed business decisions.",
    url: "https://www.visionarydynamicsas.com/accounting/financial-reporting-analysis",
  },
};

export default function FinancialReportingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
