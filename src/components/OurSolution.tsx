import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function OurSolution() {
  return (
    <Box sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Our Solution</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          End-to-end engineering and IT solutions combining domain expertise and modern tooling to reduce TCO.
        </Typography>
      </Paper>
    </Box>
  );
}
