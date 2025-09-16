import React from "react";
import EngineeringIntro from "../components/EngineeringIntro";
import ServiceCardList from "../components/ServiceCardList";
import ITIntro from "../components/ITIntro";
import ITServiceCardList from "../components/ITServiceCardList";
import ToolsUsed from "../components/ToolsUsed";
import OurSolution from "../components/OurSolution";
import Outcome from "../components/Outcome";

export default function Services() {
  return (
    <>
      <EngineeringIntro />
      <ServiceCardList />
      <ITIntro />
      <ITServiceCardList />
      <ToolsUsed />
      <OurSolution />
      <Outcome />
    </>
  );
}
