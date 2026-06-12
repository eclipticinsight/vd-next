import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Device Management",
  description:
    "Visionary Dynamics provides reliable mobile device management solutions to ensure secure access, compliance, and productivity.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/mobile-device-management" },
  openGraph: {
    title: "Mobile Device Management | Visionary Dynamics",
    description:
      "Visionary Dynamics provides reliable mobile device management solutions to ensure secure access, compliance, and productivity.",
    url: "https://www.visionarydynamicsas.com/mobile-device-management",
  },
};

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
