import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

export default function Privacy() {
  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your privacy is important to us. This page explains how we handle your information.
        </Typography>
      </Box>

      {/* Content */}
      <Box>
        <Typography variant="body1" paragraph>
          We value your trust and are committed to protecting your personal data. This policy describes how we
          collect, use, and safeguard your information when you interact with our services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Personal information such as name, email, and contact details." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Usage data to improve our services and user experience." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your data is used for communication, improving services, and ensuring security. We do not share your
          information with third parties without your consent, except as required by law.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          If you have any questions regarding our privacy policy, please contact us at:
          <br />
          <strong>Email:</strong> support@pts.com
        </Typography>
      </Box>
    </Container>
  );
}
