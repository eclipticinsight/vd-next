import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description:
    "Simplify financial record‑keeping with Visionary Dynamics’ professional bookkeeping solutions designed for growing businesses.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/accounting/bookkeeping" },
  openGraph: {
    title: "Bookkeeping Services | Visionary Dynamics",
    description:
      "Simplify financial record‑keeping with Visionary Dynamics’ professional bookkeeping solutions designed for growing businesses.",
    url: "https://www.visionarydynamicsas.com/accounting/bookkeeping",
  },
};

export default function BookkeepingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
