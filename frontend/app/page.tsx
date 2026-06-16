// Server Component — intentionally no "use client".
// Next.js SSR-renders Hero + ServicesOverview as static HTML in the initial
// HTTP response, so the h1/h2 text paints at FCP (~300ms) rather than after
// React hydration (~2600ms). This is the primary LCP fix.
//
// All heavy Framer Motion sections are loaded lazily inside DynamicSections
// (a Client Component), which is the correct pattern for ssr:false in App Router.

import Hero from "../components/sections/Hero";
import ServicesOverview from "../components/sections/ServicesOverview";
import DynamicSections from "../components/sections/DynamicSections";

export default function Home() {
  return (
    <>
      {/* Hero — SSR-rendered, no animations, first visible section */}
      <Hero />

      {/* ServicesOverview — SSR-rendered shell, client-hydrated interactions */}
      <ServicesOverview />

      {/* All remaining sections lazy-loaded on the client (heavy Framer Motion) */}
      <DynamicSections />
    </>
  );
}