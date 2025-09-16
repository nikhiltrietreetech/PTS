import React from "react";
import { Box, Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function CaseStudyPreview() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>Case Studies</Typography>

        <Card sx={{ maxWidth: 1000, mx: "auto", mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Plant Upgrade — Oil & Gas</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Detailed engineering, reverse engineering & plant validation delivered on time and under budget.
            </Typography>
            <Button sx={{ mt: 2 }} variant="outlined">Read Case Study</Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
