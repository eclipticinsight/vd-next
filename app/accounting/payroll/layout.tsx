import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Services",
  description:
    "Accurate and timely payroll processing for businesses of all sizes. Tax filings, direct deposit, benefits administration, and full compliance — handled by Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/payroll" },
  openGraph: {
    title: "Payroll Services | Visionary Dynamics",
    description:
      "Hassle-free payroll processing with tax filings, direct deposit, and compliance management for your business.",
    url: "https://www.visionarydynamicsas.com/accounting/payroll",
  },
};

export default function PayrollLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
