import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Visionary Dynamics Terms & Conditions governing the use of our services and website.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/terms" },
  robots: { index: false, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
