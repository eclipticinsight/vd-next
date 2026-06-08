import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property Policy",
  description:
    "Visionary Dynamics Intellectual Property Policy — our policies regarding trademarks, copyrights, and proprietary content.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/intellectual" },
  robots: { index: false, follow: false },
};

export default function IntellectualLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
