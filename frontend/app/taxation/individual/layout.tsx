import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Tax Services",
  description:
    "Maximize your refund with expert individual tax preparation and filing. We identify every deduction, provide audit protection, and offer year-round support. Fast 3–5 day turnaround.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/taxation/individual" },
  openGraph: {
    title: "Individual Tax Services | Visionary Dynamics",
    description:
      "Expert individual tax preparation — maximize refunds, audit protection, and year-round support from certified tax professionals.",
    url: "https://www.visionarydynamicsas.com/taxation/individual",
  },
};

export default function IndividualTaxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
