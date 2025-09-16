import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const loc = useLocation();
  return (
    <AppBar position="sticky" color="primary" elevation={6}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ color: "#fff", fontWeight: 700 }}>
            PTS
          </Typography>
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Pinnacle Technology Services
          </Typography>
        </Box>

        <Box>
          <Button color="inherit" component={Link} to="/" disabled={loc.pathname === "/"}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" disabled={loc.pathname === "/about"}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/services" disabled={loc.pathname === "/services"}>
            Services
          </Button>
          <Button color="inherit" component={Link} to="/case-studies" disabled={loc.pathname === "/case-studies"}>
            Case Studies
          </Button>
          <Button color="inherit" component={Link} to="/careers" disabled={loc.pathname === "/careers"}>
            Careers
          </Button>
          <Button color="inherit" component={Link} to="/contact" disabled={loc.pathname === "/contact"}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
