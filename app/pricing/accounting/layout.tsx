import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Services Pricing",
  description:
    "Transparent and flexible accounting service pricing plans. Compare bookkeeping, payroll, financial reporting, and software setup packages from Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/accounting" },
  openGraph: {
    title: "Accounting Pricing | Visionary Dynamics",
    description:
      "Compare our accounting service pricing plans — bookkeeping, payroll, financial reporting, and more.",
    url: "https://www.visionarydynamicsas.com/pricing/accounting",
  },
};

export default function AccountingPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
