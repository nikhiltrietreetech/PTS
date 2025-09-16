import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <Box sx={{ py: 6, bgcolor: "#0d47a1", color: "#fff" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h4">Ready to Work With Us?</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>Let's discuss your project and deliver value.</Typography>
        <Button component={Link} to="/contact" variant="contained" sx={{ mt: 2 }} color="secondary">
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
}
