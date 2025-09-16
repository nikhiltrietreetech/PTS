import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function ITIntro() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4">IT & Cloud Services</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Virtualization, cloud migration, backup & disaster recovery, security & monitoring.
        </Typography>
      </Container>
    </Box>
  );
}
