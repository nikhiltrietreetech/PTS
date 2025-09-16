import React from 'react'; import { Box, Container, Typography, Grid, Card, CardContent }
 from '@mui/material'; 
 import EngineeringIcon from '@mui/icons-material/PrecisionManufacturing';
  import CloudIcon from '@mui/icons-material/Cloud'; 
  import SecurityIcon from '@mui/icons-material/Security'; 
  import { Link as RouterLink } from 'react-router-dom';
  const services = [{ icon:<EngineeringIcon fontSize='large'/>, 
    title:'Engineering Services', desc:'BIM, CAD Drafting, Structural Design', path:'/engineering-services' },
    { icon:<CloudIcon fontSize='large'/>,
         title:'IT Solutions', desc:'Cloud Migration, Virtualization, Data Centers', path:'/it-services' },
         { icon:<SecurityIcon fontSize='large'/>,
             title:'Cybersecurity', desc:'Firewalls, DLP, WAF, Endpoint Security', path:'/security-compliance' }]; 
             export default function ServicesOverview(){ return (<Box sx={{py:8}}><Container>
                <Typography variant='h4' align='center' gutterBottom>Our Services</Typography>
                <Grid container spacing={5} sx={{mt:10 }}>{services.map((s,i)=>(<Grid item xs={12} md={12} key={i}>
                    <Card sx={{textAlign:'center',py:10, paddingLeft:35}} component={RouterLink} to={s.path}>{s.icon}<CardContent>
                        <Typography variant='h6'>{s.title}</Typography>
                        <Typography variant='body2'>{s.desc}</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                        ))}
                        </Grid>
                        </Container>
                        </Box>
                        ); }

