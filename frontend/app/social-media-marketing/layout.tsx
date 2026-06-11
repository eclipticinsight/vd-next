import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management Services | Visionary Dynamics",
  description:
    "Boost your online presence with Visionary Dynamics’ social media marketing services designed to increase visibility and engagement.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/social-media-marketing" },
  openGraph: {
    title: "Social Media Management Services | Visionary Dynamics",
    description:
      "Boost your online presence with Visionary Dynamics’ social media marketing services designed to increase visibility and engagement.",
    url: "https://www.visionarydynamicsas.com/social-media-marketing",
  },
};

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
