import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooperative Tax Services",
  description:
    "Specialized cooperative tax planning, Form 1120-C preparation, patronage dividend compliance, and audit support. Visionary Dynamics helps cooperatives maximize tax benefits while staying fully compliant.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/taxation/cooperative" },
  openGraph: {
    title: "Cooperative Tax Services | Visionary Dynamics",
    description:
      "Expert cooperative tax services — Form 1120-C, patronage dividends, tax planning, and audit support for cooperatives.",
    url: "https://www.visionarydynamicsas.com/taxation/cooperative",
  },
};

export default function CooperativeTaxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
