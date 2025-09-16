import React from 'react';
import CompanyIntro from '../components/about/CompanyIntro';
import MissionVision from '../components/about/MissionVision';
import LeadershipTeam from '../components/about/LeadershipTeam';
import CompanyCulture from '../components/about/CompanyCulture';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Certifications from '../components/certifications/Certifications';
export default function About()
{
     return (
<div>
    <CompanyIntro/>
<MissionVision/>
<LeadershipTeam/>
<CompanyCulture/>
<WhyChooseUs/>
<Certifications/>
</div>
);
 }
