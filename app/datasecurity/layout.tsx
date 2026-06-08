import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Security Policy",
  description:
    "Visionary Dynamics Data Security Policy — how we protect your data and maintain compliance with international security standards.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/datasecurity" },
  robots: { index: false, follow: false },
};

export default function DataSecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
