import React from "react";
import { Box, Typography } from "@mui/material";
import CertificationsList from "./CertificationsList";

export default function Certifications() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5">Certifications & Credentials</Typography>
      <CertificationsList />
    </Box>
  );
}
