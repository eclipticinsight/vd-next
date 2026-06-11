import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Visionary Dynamics",
  description:
    "Read Visionary Dynamics’ terms of service to understand usage policies, legal obligations, and conditions of access.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/terms" },
  robots: { index: false, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
