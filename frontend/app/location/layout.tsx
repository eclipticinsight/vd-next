import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Visionary Dynamics serves businesses across the USA, U.K., Canada, and UAE with expert accounting, IT management, and consultancy solutions.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/location" },
  openGraph: {
    title: "Visionary Dynamics Locations | Offices Worldwide",
    description:
      "Visionary Dynamics serves businesses across the USA, U.K., Canada, and UAE with expert accounting, IT management, and consultancy solutions.",
    url: "https://www.visionarydynamicsas.com/location",
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
