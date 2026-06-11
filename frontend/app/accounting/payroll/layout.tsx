import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Services",
  description:
    "Streamline payroll operations with Visionary Dynamics’ expert payroll services designed for accuracy, compliance, and efficiency.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/payroll" },
  openGraph: {
    title: "Visionary Dynamics | Payroll Processing Services",
    description:
      "Streamline payroll operations with Visionary Dynamics’ expert payroll services designed for accuracy, compliance, and efficiency.",
    url: "https://www.visionarydynamicsas.com/accounting/payroll",
  },
};

export default function PayrollLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
