import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Empowering industries like CPA firms, real estate, healthcare, IT, e-commerce, and recruitment with expert business solutions by Visionary Dynamics.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/industries" },
  openGraph: {
    title: "Industries We Serve | Visionary Dynamics Solutions",
    description:
      "Empowering industries like CPA firms, real estate, healthcare, IT, e-commerce, and recruitment with expert business solutions by Visionary Dynamics.",
    url: "https://www.visionarydynamicsas.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
