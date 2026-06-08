import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Device Management (MDM)",
  description:
    "Secure and manage all mobile devices across your organization. Visionary Dynamics provides MDM solutions for iOS, Android, and Windows devices — enrollment, policies, and remote wipe.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/mobile" },
  openGraph: {
    title: "Mobile Device Management | Visionary Dynamics",
    description:
      "Enterprise MDM solutions for iOS, Android, and Windows — device enrollment, policy management, security, and remote wipe.",
    url: "https://www.visionarydynamicsas.com/mobile",
  },
};

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
