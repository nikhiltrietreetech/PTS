import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const partners = ["Microsoft", "VMware", "Cisco", "Dell", "NetApp", "SonicWall"];

export default function PartnersSection() {
  return (
    <Box sx={{ py: 6, bgcolor: "#f1f6fb" }}>
      <Container>
        <Typography variant="h5" align="center" gutterBottom>Our Partners</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {partners.map((p, i) => (
            <Grid item key={i}>
              <Box sx={{ bgcolor: "#fff", p: 2, boxShadow: 1, borderRadius: 1, minWidth: 120, textAlign: "center" }}>
                {p}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
