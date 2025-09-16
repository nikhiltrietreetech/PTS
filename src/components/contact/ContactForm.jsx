import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Paper, Typography } from '@mui/material';

export default function ContactForm(){
  const [form,setForm]=useState({name:'',email:'',message:''});
  const onChange=(e)=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit=(e)=>{e.preventDefault(); alert('Submitted (demo)');};
  return (<Paper sx={{ p:3 }}><Typography variant='h6' sx={{ mb:2 }}>Send us a message</Typography><Box component='form' onSubmit={submit}><Grid container spacing={2}><Grid item xs={12} md={6}><TextField fullWidth label='Name' name='name' onChange={onChange} /></Grid><Grid item xs={12} md={6}><TextField fullWidth label='Email' name='email' onChange={onChange} /></Grid><Grid item xs={12}><TextField fullWidth multiline rows={4} label='Message' name='message' onChange={onChange} /></Grid><Grid item xs={12}><Button type='submit' size='large'>Submit</Button></Grid></Grid></Box></Paper>);
}
