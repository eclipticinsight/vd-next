"use client";

/**
 * DynamicSections — Client Component wrapper for below-fold sections.
 *
 * In Next.js App Router, `next/dynamic` with `{ ssr: false }` must be called
 * inside a Client Component. This wrapper lets page.tsx stay a Server Component
 * (so the Hero h1/h2 text is SSR-rendered in the initial HTML), while still
 * lazy-loading all the heavy Framer Motion sections only when needed.
 */

import dynamic from "next/dynamic";

const QuickBooksAnnouncement = dynamic(
  () => import("./QuickBooksAnnouncement"),
  { ssr: false }
);

const ServicesShowcase = dynamic(
  () => import("./ServicesShowcase"),
  { ssr: false }
);

const WhyChooseUs = dynamic(
  () => import("./WhyChooseUs"),
  { ssr: false }
);

const Testimonials = dynamic(
  () => import("./Testimonials"),
  { ssr: false }
);

export default function DynamicSections() {
  return (
    <>
      <QuickBooksAnnouncement />
      <ServicesShowcase />

      {/* <StatsSection />
      <AboutUsSection /> */}

      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
