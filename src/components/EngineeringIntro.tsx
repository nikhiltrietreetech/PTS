import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function EngineeringIntro() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4">Engineering Services</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Detailed and basic engineering across mechanical, piping, civil, structural and instrumentation.
        </Typography>
      </Container>
    </Box>
  );
}
