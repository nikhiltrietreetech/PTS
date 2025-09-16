import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const jobs = [
  { id: 1, title: "Senior Mechanical Engineer", loc: "Hyderabad" },
  { id: 2, title: "BIM Modeler", loc: "Hyderabad" },
];

export default function OpenPositions() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center">Open Positions</Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {jobs.map((j) => (
          <Grid item xs={12} md={6} key={j.id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{j.title}</Typography>
              <Typography variant="body2">{j.loc}</Typography>
              <Button component={Link} to="/careers" sx={{ mt: 1 }}>Apply</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
