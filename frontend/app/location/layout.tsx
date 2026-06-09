import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Visionary Dynamics is headquartered at 7901 4th St N STE 300, St. Petersburg, Florida 33702. Serving clients locally and globally with professional consulting services.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/location" },
  openGraph: {
    title: "Our Locations | Visionary Dynamics",
    description:
      "Find Visionary Dynamics office locations. Headquartered in St. Petersburg, Florida, serving businesses nationwide and internationally.",
    url: "https://www.visionarydynamicsas.com/location",
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
