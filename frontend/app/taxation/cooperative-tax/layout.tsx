import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Taxation Services",
  description:
    "Simplify cooperative tax compliance with Visionary Dynamics’ specialized services covering accurate reporting, regulatory requirements, and business tax returns.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/taxation/cooperative-tax" },
  openGraph: {
    title: "Business Taxation Services | Visionary Dynamics",
    description:
      "Simplify cooperative tax compliance with Visionary Dynamics’ specialized services covering accurate reporting, regulatory requirements, and business tax returns.",
    url: "https://www.visionarydynamicsas.com/taxation/cooperative-tax",
  },
};

export default function CooperativeTaxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
