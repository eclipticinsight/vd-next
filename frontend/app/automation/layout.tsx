import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Services",
  description:
    "Visionary Dynamics offers powerful automation tools to streamline workflows, boost efficiency, and drive smarter business operations.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/automation" },
  openGraph: {
    title: "Automation Tools for Business | Visionary Dynamics",
    description:
      "Visionary Dynamics offers powerful automation tools to streamline workflows, boost efficiency, and drive smarter business operations.",
    url: "https://www.visionarydynamicsas.com/automation",
  },
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
