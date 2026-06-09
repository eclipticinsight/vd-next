import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Reporting & Analysis",
  description:
    "Comprehensive financial statements, cash flow analysis, budget forecasting, and management reporting services from Visionary Dynamics. Make smarter decisions with data-driven insights.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/financial-reporting" },
  openGraph: {
    title: "Financial Reporting & Analysis | Visionary Dynamics",
    description:
      "Professional financial statements, budget forecasting, and cash flow analysis to power better business decisions.",
    url: "https://www.visionarydynamicsas.com/accounting/financial-reporting",
  },
};

export default function FinancialReportingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
