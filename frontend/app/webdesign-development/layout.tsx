import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description:
    "Expert website design and development services by Visionary Dynamics to deliver engaging, responsive, and result‑driven websites.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/webdesign-development" },
  openGraph: {
    title: "Web Design & Development Services | Visionary Dynamics",
    description:
      "Expert website design and development services by Visionary Dynamics to deliver engaging, responsive, and result‑driven websites.",
    url: "https://www.visionarydynamicsas.com/webdesign-development",
  },
};

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
