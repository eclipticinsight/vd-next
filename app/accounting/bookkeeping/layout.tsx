import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description:
    "Professional bookkeeping services for small and mid-size businesses. Accurate financial records, bank reconciliation, accounts payable/receivable, and monthly reporting from Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/bookkeeping" },
  openGraph: {
    title: "Bookkeeping Services | Visionary Dynamics",
    description:
      "Expert bookkeeping to keep your finances in order — bank reconciliation, ledger management, and detailed monthly reporting.",
    url: "https://www.visionarydynamicsas.com/accounting/bookkeeping",
  },
};

export default function BookkeepingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
