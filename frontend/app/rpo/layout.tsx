import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPO — Recruitment Process Outsourcing",
  description:
    "End-to-end recruitment process outsourcing (RPO) services. From sourcing to onboarding, Visionary Dynamics helps you build high-performing teams faster and more cost-effectively.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/rpo" },
  openGraph: {
    title: "Recruitment Process Outsourcing (RPO) | Visionary Dynamics",
    description:
      "Full-cycle RPO services — talent sourcing, screening, interviewing, and onboarding to build your dream team.",
    url: "https://www.visionarydynamicsas.com/rpo",
  },
};

export default function RpoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
