import React from "react";
import CaseOverview from "../components/CaseOverview";
import FilterByIndustry from "../components/FilterByIndustry";
import CaseStudyGrid from "../components/CaseStudyGrid";

export default function CaseStudies() {
  return (
    <>
      <CaseOverview />
      <FilterByIndustry onFilter={(f) => console.log("filter", f)} />
      <CaseStudyGrid />
    </>
  );
}
