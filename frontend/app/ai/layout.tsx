import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Visionary Dynamics offers AI tools to automate workflows, enhance productivity, and drive smarter, data‑driven business decisions.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/ai" },
  openGraph: {
    title: "AI Tools for Business | Visionary Dynamics",
    description:
      "Visionary Dynamics offers AI tools to automate workflows, enhance productivity, and drive smarter, data‑driven business decisions.",
    url: "https://www.visionarydynamicsas.com/ai",
  },
};

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
