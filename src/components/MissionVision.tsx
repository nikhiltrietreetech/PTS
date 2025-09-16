import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

export default function MissionVision() {
  return (
    <Box sx={{ py: 4, bgcolor: "#f8f8ff" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Mission</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Exceed customer expectations with quality delivery, timelines and integrity.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Vision</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                To become the outsourcing partner of choice for engineering & IT services.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
