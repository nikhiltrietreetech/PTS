import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function BlogHeader() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4">Insights & Articles</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Technical articles, case studies, and company updates.
        </Typography>
      </Container>
    </Box>
  );
}
