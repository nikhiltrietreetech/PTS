import { Container, Typography, Box, Grid, Card, CardContent, Button } from "@mui/material";

export default function Careers() {
  const jobs = [
    {
      title: "BIM Engineer",
      location: "Hyderabad, India",
      type: "Full-Time",
      desc: "Looking for experienced BIM engineers with expertise in Revit and Navisworks."
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote",
      type: "Full-Time",
      desc: "Responsible for designing and implementing secure cloud migration strategies."
    },
    {
      title: "IT Security Specialist",
      location: "Hyderabad, India",
      type: "Full-Time",
      desc: "Expert in cybersecurity frameworks, firewalls, and endpoint protection."
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Careers at PTS
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Join our team of innovators shaping the future of Engineering & IT Services.
        </Typography>
      </Box>

      {/* Open Positions */}
      <Grid container spacing={4}>
        {jobs.map((job, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">{job.location} • {job.type}</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>{job.desc}</Typography>
              </CardContent>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button variant="contained" color="primary">Apply Now</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Didn’t find a role that fits you? Send us your resume at <strong>careers@pts.com</strong>
        </Typography>
        <Button variant="outlined" color="primary">Submit Resume</Button>
      </Box>
    </Container>
  );
}
