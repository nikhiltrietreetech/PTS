import React from 'react'; import { Box, Typography, Button } from '@mui/material'; import { Link } from 'react-router-dom';
export default function NotFoundMessage(){ return (<Box sx={{textAlign:'center',py:10}}><Typography variant='h3'>404</Typography><Typography variant='h6' sx={{mb:3}}>Page not found</Typography><Button variant='contained' component={Link} to='/'>Go Home</Button></Box>); }
