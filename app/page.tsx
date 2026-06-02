"use client";

import Hero from "../components/sections/Hero";
import ServicesOverview from "../components/sections/ServicesOverview";
import QuickBooksAnnouncement from "../components/sections/QuickBooksAnnouncement";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";

import dynamic from "next/dynamic";

const ServicesShowcase = dynamic(
  () => import("../components/sections/ServicesShowcase"),
  { ssr: false }
);

export default function Home() {
  return (
    <>

      <Hero />
      <ServicesOverview />
      <QuickBooksAnnouncement />
      <ServicesShowcase />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}