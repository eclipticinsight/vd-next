import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Services",
  description:
    "Streamline your operations with intelligent business automation. Workflow automation, RPA, process mapping, and system integrations that eliminate manual work and boost productivity.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/automation" },
  openGraph: {
    title: "Business Automation Services | Visionary Dynamics",
    description:
      "Workflow automation, RPA, and process integrations to eliminate manual tasks and increase operational efficiency.",
    url: "https://www.visionarydynamicsas.com/automation",
  },
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
