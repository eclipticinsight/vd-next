"use client";

import Hero from "../components/sections/Hero";
import ServicesOverview from "../components/sections/ServicesOverview";
import QuickBooksAnnouncement from "../components/sections/QuickBooksAnnouncement";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import SlideUp from "../components/ui/SlideUp";
import AboutUsSection from "../components/sections/AboutUsSection";
import StatsSection from "../components/sections/StatsSection";

import dynamic from "next/dynamic";

const ServicesShowcase = dynamic(
  () => import("../components/sections/ServicesShowcase"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Hero — no slide animation, it's the first visible section */}
      <Hero />

      {/* Each section below slides up as it enters the viewport */}
      <SlideUp delay={0}>
        <ServicesOverview />
      </SlideUp>

      <SlideUp delay={0.1}>
        <QuickBooksAnnouncement />
      </SlideUp>

      <SlideUp delay={0}>
        <ServicesShowcase />
      </SlideUp>

      {/* <SlideUp delay={0.1}>
        <StatsSection />
      </SlideUp> */}

      {/* Premium Stacking Cards Section */}
      <AboutUsSection />

      <SlideUp delay={0.1}>
        <WhyChooseUs />
      </SlideUp>

      <SlideUp delay={0.1}>
        <Testimonials />
      </SlideUp>
    </>
  );
}