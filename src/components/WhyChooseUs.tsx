import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const reasons = [
  "25+ years domain expertise",
  "End-to-end engineering & IT services",
  "24/7 support & quick turnaround",
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 4, bgcolor: "#f4fbff" }}>
      <Container>
        <Typography variant="h5" align="center">Why Choose Us</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {reasons.map((r, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3 }}>{r}</Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
