import React,{useState} from 'react';
import { AppBar,Toolbar,Typography,IconButton,Button,Drawer,List,ListItemButton,Box } 
from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
const nav=[{to:'/',label:'Home'},{to:'/engineering-services',label:'Engineering'},
    {to:'/it-services',label:'IT'},
    {to:'/case-studies',label:'Case Studies'},{to:'/blog',label:'Blog'},
    {to:'/about',label:'About'},{to:'/contact',label:'Contact'}];
export default function Header(){ const [open,setOpen]=useState(false); const {pathname}=useLocation(); 
return (<AppBar position='sticky' elevation={6}><Toolbar sx={{gap:2}}> <IconButton 
    sx={{display:{xs:'inline-flex',md:'none'}}} color='inherit' onClick={()=>setOpen(true)}>
        <MenuIcon/></IconButton> <Typography component={Link} to='/' variant='h6' 
        sx={{color:'#fff',flexGrow:1,fontWeight:800,textDecoration:'none'}}>pinnacle technologies</Typography> 
        <Box sx={{display:{xs:'none',md:'flex'},gap:1}}>{nav.map(n=> 
        (<Button key={n.to} color='inherit' component={Link} to={n.to} 
            sx={{opacity: pathname===n.to?1:0.9}}>{n.label}</Button>))}</Box>
            </Toolbar> <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
                <List sx={{width:260}}>{nav.map(n=> (<ListItemButton key={n.to} 
                component={Link} to={n.to} onClick={()=>setOpen(false)}>{n.label}</ListItemButton>))}
                </List></Drawer></AppBar>); }
