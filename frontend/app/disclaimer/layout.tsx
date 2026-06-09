import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Visionary Dynamics Disclaimer — important notices regarding the information and content provided on our website and services.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/disclaimer" },
  robots: { index: false, follow: false },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
