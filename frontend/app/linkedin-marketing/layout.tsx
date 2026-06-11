import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visionary Dynamics | LinkedIn Marketing Solutions",
  description:
    "Visionary Dynamics provides result‑driven LinkedIn marketing solutions to help businesses connect with decision‑makers effectively.",
  alternates: { canonical: "https://www.visionarydynamicsas.com/linkedin-marketing" },
  openGraph: {
    title: "Visionary Dynamics | LinkedIn Marketing Solutions",
    description:
      "Visionary Dynamics provides result‑driven LinkedIn marketing solutions to help businesses connect with decision‑makers effectively.",
    url: "https://www.visionarydynamicsas.com/linkedin-marketing",
  },
};

export default function LinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
