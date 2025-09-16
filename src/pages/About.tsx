import React from "react";
import CompanyIntro from "../components/CompanyIntro";
import MissionVision from "../components/MissionVision";
import LeadershipTeam from "../components/LeadershipTeam";
import CompanyCulture from "../components/CompanyCulture";
import WhyChooseUs from "../components/WhyChooseUs";
import Certifications from "../components/Certifications";

export default function About() {
  return (
    <>
      <CompanyIntro />
      <MissionVision />
      <LeadershipTeam />
      <CompanyCulture />
      <WhyChooseUs />
      <Certifications />
    </>
  );
}
