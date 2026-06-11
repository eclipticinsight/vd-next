import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Tax Services",
  description:
    "Manage your personal taxes confidently with Visionary Dynamics’ reliable individual tax services focused on accuracy and compliance.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/taxation/individual" },
  openGraph: {
    title: "Individual Tax Services | Visionary Dynamics",
    description:
      "Manage your personal taxes confidently with Visionary Dynamics’ reliable individual tax services focused on accuracy and compliance.",
    url: "https://www.visionarydynamicsas.com/taxation/individual",
  },
};

export default function IndividualTaxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
