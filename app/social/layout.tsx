import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description:
    "Grow your brand with targeted social media marketing across Facebook, Instagram, Twitter/X, TikTok, YouTube, and LinkedIn. Data-driven campaigns that drive real engagement and ROI.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/social" },
  openGraph: {
    title: "Social Media Marketing | Visionary Dynamics",
    description:
      "Targeted social media campaigns on Facebook, Instagram, Twitter, TikTok, and LinkedIn to grow your brand and drive engagement.",
    url: "https://www.visionarydynamicsas.com/social",
  },
};

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
