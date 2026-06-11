import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPO — Recruitment Process Outsourcing",
  description:
    "Visionary Dynamics provides end‑to‑end RPO solutions to optimize recruitment processes and support workforce growth.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/rpo" },
  openGraph: {
    title: "Visionary Dynamics | RPO & Talent Solutions",
    description:
      "Visionary Dynamics provides end‑to‑end RPO solutions to optimize recruitment processes and support workforce growth.",
    url: "https://www.visionarydynamicsas.com/rpo",
  },
};

export default function RpoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
