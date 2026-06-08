import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "See what our clients say about Visionary Dynamics. Real testimonials from businesses and individuals who trust us for accounting, IT, marketing, and consulting services.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/clients" },
  openGraph: {
    title: "Client Testimonials | Visionary Dynamics",
    description:
      "Read real testimonials from satisfied clients who rely on Visionary Dynamics for professional business services.",
    url: "https://www.visionarydynamicsas.com/clients",
  },
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
