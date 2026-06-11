import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visionary Dynamics Privacy Policy",
  description:
    "The Visionary Dynamics privacy policy outlines how personal data is collected, used, and secured on our website.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
