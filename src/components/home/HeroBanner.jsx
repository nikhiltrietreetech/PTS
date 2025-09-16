import React from 'react'; import { Box, Container, Typography, Button, Stack } 
from '@mui/material'; import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import ConstructionIcon from '@mui/icons-material/Construction'; 
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.jpg'; //make sure the image is in the public folder and name is hero.jpg
export default function HeroBanner(){ 
    return (<Box sx={{position:'relative',color:'#fff',
        backgroundImage: `url('${hero}')`,backgroundSize:'cover',backgroundPosition:'center',
        minHeight:{xs:420,md:560}}}><Box sx={{position:'absolute',inset:0,bgcolor:'rgba(0,0,0,.45)'}}/>
        <Container sx={{position:'relative',zIndex:1,py:10}}>
            <Typography variant='overline'>Pinnacle Technology Services</Typography>
            <Typography variant='h2' sx={{fontWeight:900,maxWidth:900}}>
                Engineering & IT, Delivered with Precision</Typography>
                <Typography variant='h6' sx={{opacity:0.95,maxWidth:720,mt:2}}>
        From BIM & plant design to cloud migration and managed security — we help you build, run,
         and scale.</Typography><Stack direction={{xs:'column',sm:'row'}} spacing={2} sx={{mt:4}}>
            <Button size='large' color='secondary' endIcon={<ArrowForwardIcon/>} 
            component={Link} to='/engineering-services'>Explore Engineering</Button>
            <Button size='large' color='inherit' variant='outlined' startIcon={<CloudQueueIcon/>}
             component={Link} to='/it-services'>IT & Cloud</Button><Button size='large' color='inherit'
              variant='outlined' startIcon={<ConstructionIcon/>}
               component={Link} to='/case-studies'>Case Studies</Button></Stack></Container></Box>); }
