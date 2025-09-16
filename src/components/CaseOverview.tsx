import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function CaseOverview() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4">Case Studies Overview</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Explore projects where we delivered measurable value through engineering & IT services.
        </Typography>
      </Container>
    </Box>
  );
}
