import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visionary Dynamics | Email Marketing Solutions",
  description:
    "Strengthen customer communication with Visionary Dynamics’ email marketing services focused on automation and performance.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/email-marketing" },
  openGraph: {
    title: "Visionary Dynamics | Email Marketing Solutions",
    description:
      "Strengthen customer communication with Visionary Dynamics’ email marketing services focused on automation and performance.",
    url: "https://www.visionarydynamicsas.com/email-marketing",
  },
};

export default function EmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
