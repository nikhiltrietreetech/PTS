import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const benefits = ["Competitive salary", "Health insurance", "Learning & development", "Paid leaves"];

export default function Benefits() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5">Employee Benefits</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {benefits.map((b, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Paper sx={{ p: 2 }}>{b}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
