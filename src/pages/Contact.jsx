import { Container, Typography, Box, Grid, TextField, Button, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Get in touch with us for project inquiries, partnerships, or support.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, borderRadius: 2 }} elevation={3}>
            <Typography variant="h5" gutterBottom>
              Send us a message
            </Typography>
            <Box component="form" sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField fullWidth label="Full Name" variant="outlined" />
              <TextField fullWidth label="Email" type="email" variant="outlined" />
              <TextField fullWidth label="Phone" type="tel" variant="outlined" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button variant="contained" color="primary" size="large">
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Details & Map */}
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <Typography variant="h6">Our Office</Typography>
            <Typography variant="body1" color="textSecondary">
              123 Tech Park, Hyderabad, India
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Email: contact@pts.com | Phone: +91 98765 43210
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 300,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <iframe
              title="PTS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.435539067914!2d78.38574561539663!3d17.4422982880494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3c19a0e7b%3A0xe7f5a5167c228d89!2sHITEC%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1617342146009!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
