import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft 365 Services | Visionary Dynamics",
  description:
    "Visionary Dynamics provides Microsoft 365 solutions to enhance collaboration, productivity, and secure cloud‑based business operations.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/ms365-management" },
  openGraph: {
    title: "Microsoft 365 Services | Visionary Dynamics",
    description:
      "Visionary Dynamics provides Microsoft 365 solutions to enhance collaboration, productivity, and secure cloud‑based business operations.",
    url: "https://www.visionarydynamicsas.com/ms365-management",
  },
};

export default function Ms365Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
