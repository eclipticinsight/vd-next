import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft 365 Management",
  description:
    "Complete Microsoft 365 setup, migration, administration, and support. Email, Teams, SharePoint, OneDrive, and security management for your organization.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/ms365" },
  openGraph: {
    title: "Microsoft 365 Management | Visionary Dynamics",
    description:
      "Expert Microsoft 365 setup, migration, and ongoing management — email, Teams, SharePoint, OneDrive, and security.",
    url: "https://www.visionarydynamicsas.com/ms365",
  },
};

export default function Ms365Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
