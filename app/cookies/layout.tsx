import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Visionary Dynamics Cookie Policy — learn how we use cookies and similar technologies on our website.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/cookies" },
  robots: { index: false, follow: false },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
