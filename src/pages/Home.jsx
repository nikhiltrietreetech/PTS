import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import ServicesOverview from '../components/home/ServicesOverview';
import PartnersSection from '../components/home/PartnersSection';
import { Container } from '@mui/material';
export default function Home(){ return (<div><HeroBanner/><Container sx={{py:6}}><ServicesOverview/></Container><PartnersSection/></div>); }
