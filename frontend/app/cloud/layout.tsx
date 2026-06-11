import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions",
  description:
    "Leverage powerful cloud tools by Visionary Dynamics to streamline workflows, enhance collaboration, and boost efficiency.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/cloud" },
  openGraph: {
    title: "Cloud Tools for Business | Visionary Dynamics",
    description:
      "Leverage powerful cloud tools by Visionary Dynamics to streamline workflows, enhance collaboration, and boost efficiency.",
    url: "https://www.visionarydynamicsas.com/cloud",
  },
};

export default function CloudLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
