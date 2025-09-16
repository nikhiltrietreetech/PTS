import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BIMModeling from "./pages/BIMModeling";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CivilArchitectural from "./pages/CivilArchitectural";
import CloudMigration from "./pages/CloudMigration";
import Contact from "./pages/Contact";
import DataCenterSetup from "./pages/DataCenterSetup";
import DraftingDetailing from "./pages/DraftingDetailing";
import EngineeringServices from "./pages/EngineeringServices";
import HvacMep from "./pages/HvacMep";
import ITServices from "./pages/ITServices";
import ManagedServices from "./pages/ManagedServices";
import NetworkDesign from "./pages/NetworkDesign";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import SecurityCompliance from "./pages/SecurityCompliance";
import Sitemap from "./pages/Sitemap";
import StructuralSteel from "./pages/StructuralSteel";
import Terms from "./pages/Terms";

export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/engineering-services' element={<EngineeringServices/>} />
        <Route path='/bim-modeling' element={<BIMModeling/>} />
        <Route path='/drafting-detailing' element={<DraftingDetailing/>} />
        <Route path='/civil-architectural' element={<CivilArchitectural/>} />
        <Route path='/structural-steel' element={<StructuralSteel/>} />
        <Route path='/hvac-mep' element={<HvacMep/>} />
        <Route path='/it-services' element={<ITServices/>} />
        <Route path='/cloud-migration' element={<CloudMigration/>} />
        <Route path='/data-center-setup' element={<DataCenterSetup/>} />
        <Route path='/network-design' element={<NetworkDesign/>} />
        <Route path='/managed-services' element={<ManagedServices/>} />
        <Route path='/security-compliance' element={<SecurityCompliance/>} />
        <Route path='/case-studies' element={<CaseStudies/>} />
        <Route path='/case-studies/:id' element={<CaseStudyDetail/>} />
        <Route path='/blog' element={<BlogList/>} />
        <Route path='/blog/:slug' element={<BlogPost/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/sitemap' element={<Sitemap/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  )
}
