import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Setup & Migration",
  description:
    "Expert software setup and migration services for QuickBooks, payroll, payments, and cloud tools with secure data transfer and optimization.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/software-setup-migration" },
  openGraph: {
    title: "Software Setup & Migration | Visionary Dynamics",
    description:
      "Expert software setup and migration services for QuickBooks, payroll, payments, and cloud tools with secure data transfer and optimization.",
    url: "https://www.visionarydynamicsas.com/accounting/software-setup-migration",
  },
};

export default function SoftwareSetupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
