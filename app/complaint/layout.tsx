import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaint & Grievance Policy",
  description:
    "Visionary Dynamics Complaint & Grievance Policy — how to raise concerns and the steps we take to resolve them fairly and promptly.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/complaint" },
  robots: { index: false, follow: false },
};

export default function ComplaintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
