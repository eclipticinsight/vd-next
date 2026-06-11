import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Visionary Dynamics",
  description:
    "Visionary Dynamics’ disclaimer explains legal information, limitations of liability, and usage terms for our website.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/disclaimer" },
  robots: { index: false, follow: false },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
