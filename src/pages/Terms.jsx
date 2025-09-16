import { Container, Typography, Box, Grid, Card } from "@mui/material";

export default function Terms() {
  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Please read these terms and conditions carefully before using our services.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body2" paragraph>
          These Terms govern your use of our website and services. By accessing our site, you agree
          to comply with these terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Use of Services
        </Typography>
        <Typography variant="body2" paragraph>
          You agree to use our services only for lawful purposes and in accordance with these terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Changes to Terms
        </Typography>
        <Typography variant="body2" paragraph>
          We reserve the right to update these terms at any time. Please review them periodically.
        </Typography>
      </Box>
    </Container>
  );
}
