import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const industries = ["Oil & Gas", "Petrochemical", "Power Plants", "Pharma", "Refineries", "Water Treatment"];

export default function IndustriesSection() {
  return (
    <Box sx={{ py: 6, bgcolor: "#f8f9fb" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>Industries We Serve</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {industries.map((i, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper sx={{ p: 3, textAlign: "center", fontWeight: 600 }}>{i}</Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
