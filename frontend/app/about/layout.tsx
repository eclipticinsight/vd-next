import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Visionary Dynamics Consulting Inc. — a team of seasoned professionals delivering innovative accounting, IT, and marketing solutions with over 6 years of experience.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/about" },
  openGraph: {
    title: "About Us | Visionary Dynamics",
    description:
      "Discover who we are, our mission, values, and the journey behind Visionary Dynamics Consulting Inc.",
    url: "https://www.visionarydynamicsas.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
