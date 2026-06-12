import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Network Services",
  description:
    "Protect and manage business devices with Visionary Dynamics’ mobile device management services focused on security and control.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/managed-network-services" },
  openGraph: {
    title: "Managed Network Services | Visionary Dynamics",
    description:
      "Protect and manage business devices with Visionary Dynamics’ mobile device management services focused on security and control.",
    url: "https://www.visionarydynamicsas.com/managed-network-services",
  },
};

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
