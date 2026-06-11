import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Meet the clients who rely on Visionary Dynamics for impactful digital solutions, strategic innovation, and long‑term business growth.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/clients" },
  openGraph: {
    title: "Client Testimonials & Reviews | Visionary Dynamics",
    description:
      "Meet the clients who rely on Visionary Dynamics for impactful digital solutions, strategic innovation, and long‑term business growth.",
    url: "https://www.visionarydynamicsas.com/clients",
  },
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
