import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Harness the power of artificial intelligence for your business. Visionary Dynamics delivers AI-powered automation, predictive analytics, intelligent workflows, and custom AI integrations.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/ai" },
  openGraph: {
    title: "AI Solutions | Visionary Dynamics",
    description:
      "AI-powered business solutions — predictive analytics, intelligent automation, and custom AI integrations to transform your operations.",
    url: "https://www.visionarydynamicsas.com/ai",
  },
};

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
