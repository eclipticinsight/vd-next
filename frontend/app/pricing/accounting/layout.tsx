import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Services Pricing",
  description:
    "Visionary Dynamics offers flexible accounting pricing plans to help businesses manage finances efficiently and cost‑effectively.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/pricing/accounting" },
  openGraph: {
    title: "Accounting Pricing Plans | Visionary Dynamics",
    description:
      "Visionary Dynamics offers flexible accounting pricing plans to help businesses manage finances efficiently and cost‑effectively.",
    url: "https://www.visionarydynamicsas.com/pricing/accounting",
  },
};

export default function AccountingPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
