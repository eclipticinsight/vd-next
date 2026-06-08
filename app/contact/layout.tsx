import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Visionary Dynamics. Reach our expert team for accounting, IT management, digital marketing, or business consulting. Fast response within 2 hours.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/contact" },
  openGraph: {
    title: "Contact Us | Visionary Dynamics",
    description:
      "Contact our team for accounting, IT management, marketing, or business consulting services. Response within 2 hours.",
    url: "https://www.visionarydynamicsas.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
