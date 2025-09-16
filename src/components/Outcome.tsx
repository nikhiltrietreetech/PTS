import React from "react";
import { Box, Typography } from "@mui/material";

export default function Outcome() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h6">Outcome</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Faster delivery, cost-savings, and scalable solutions that grow with your business.
      </Typography>
    </Box>
  );
}
