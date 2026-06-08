import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Visionary Dynamics Privacy Policy to understand how we collect, use, and protect your personal data in compliance with international data protection regulations.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
