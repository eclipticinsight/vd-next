import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Visionary Dynamics for inquiries, consultations, or support related to our digital and business services.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/contact" },
  openGraph: {
    title: "Visionary Dynamics Contact | Business Inquiries",
    description:
      "Reach out to Visionary Dynamics for inquiries, consultations, or support related to our digital and business services.",
    url: "https://www.visionarydynamicsas.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
