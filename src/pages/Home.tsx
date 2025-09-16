import React from "react";
import HeroBanner from "../components/HeroBanner";
import ServicesOverview from "../components/ServicesOverview";
import IndustriesSection from "../components/IndustriesSection";
import CaseStudyPreview from "../components/CaseStudyPreview";
import PartnersSection from "../components/PartnersSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <ServicesOverview />
      <IndustriesSection />
      <CaseStudyPreview />
      <PartnersSection />
      <ContactCTA />
    </>
  );
}
