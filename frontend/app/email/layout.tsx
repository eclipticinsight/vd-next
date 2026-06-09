import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing",
  description:
    "High-converting email marketing campaigns that nurture leads, retain customers, and grow revenue. Strategy, design, copywriting, automation, and analytics — all handled for you.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/email" },
  openGraph: {
    title: "Email Marketing | Visionary Dynamics",
    description:
      "Professional email marketing campaigns — strategy, design, automation, and analytics to grow and retain your customer base.",
    url: "https://www.visionarydynamicsas.com/email",
  },
};

export default function EmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
