import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions",
  description:
    "Scalable cloud infrastructure, migration, and management services. Migrate to AWS, Azure, or Google Cloud with confidence. Visionary Dynamics handles planning, migration, and ongoing optimization.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/cloud" },
  openGraph: {
    title: "Cloud Solutions | Visionary Dynamics",
    description:
      "Cloud migration, infrastructure management, and optimization for AWS, Azure, and Google Cloud platforms.",
    url: "https://www.visionarydynamicsas.com/cloud",
  },
};

export default function CloudLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
