import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Network Services",
  description:
    "Reliable managed network services including infrastructure design, monitoring, troubleshooting, and 24/7 support. Keep your business connected and secure with Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/network" },
  openGraph: {
    title: "Managed Network Services | Visionary Dynamics",
    description:
      "24/7 network monitoring, infrastructure design, and support to keep your business connected and secure.",
    url: "https://www.visionarydynamicsas.com/network",
  },
};

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
