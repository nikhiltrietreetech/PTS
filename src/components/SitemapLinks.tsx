import React from "react";
import { Box, Link } from "@mui/material";

export default function SitemapLinks() {
  return (
    <Box>
      <Link href="/" color="inherit" display="block">Home</Link>
      <Link href="/services" color="inherit" display="block">Services</Link>
      <Link href="/case-studies" color="inherit" display="block">Case Studies</Link>
      <Link href="/about" color="inherit" display="block">About</Link>
      <Link href="/careers" color="inherit" display="block">Careers</Link>
    </Box>
  );
}
