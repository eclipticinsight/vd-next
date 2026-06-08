import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Software Setup & Migration",
  description:
    "Expert setup, configuration, and migration for QuickBooks, Xero, FreshBooks, and more. We handle data migration, chart of accounts, and team training so you're up and running fast.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/software-setup" },
  openGraph: {
    title: "Accounting Software Setup & Migration | Visionary Dynamics",
    description:
      "Get QuickBooks, Xero, or FreshBooks set up and configured correctly. We handle migration, chart of accounts, and training.",
    url: "https://www.visionarydynamicsas.com/accounting/software-setup",
  },
};

export default function SoftwareSetupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
