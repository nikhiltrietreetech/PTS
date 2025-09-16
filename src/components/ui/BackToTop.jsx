import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function BackToTop(){
  const [show,setShow]=useState(false);
  useEffect(()=>{ const onScroll=()=>setShow(window.scrollY>400); window.addEventListener('scroll',onScroll); return ()=>window.removeEventListener('scroll',onScroll); },[]);
  return (<Zoom in={show}><Fab color='secondary' size='medium' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} sx={{ position:'fixed', right:24, bottom:24, zIndex:1200 }}><KeyboardArrowUpIcon/></Fab></Zoom>);
}
