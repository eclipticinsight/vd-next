import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visionary Dynamics Data Security Policy",
  description:
    "Read Visionary Dynamics’ Data Security Policy outlining how we protect personal data using encryption, access controls, and compliance standards.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/datasecurity" },
  robots: { index: false, follow: false },
};

export default function DataSecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
