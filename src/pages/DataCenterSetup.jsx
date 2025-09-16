import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function DataCenterSetup() {
  const features = [
    {
      title: "High Availability",
      desc: "Ensure maximum uptime with redundant power, cooling, and networking.",
      img: "/assets/high-availability.jpg"
    },
    {
      title: "Scalable Infrastructure",
      desc: "Easily scale your data center to meet growing business demands.",
      img: "/assets/scalable.jpg"
    },
    {
      title: "Advanced Security",
      desc: "Robust security measures including biometric access and CCTV monitoring.",
      img: "/assets/security.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Data Center Setup
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Enterprise-grade data center design and deployment for maximum efficiency and security.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="200" image={feature.img} alt={feature.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                <Typography variant="body2" color="textSecondary">{feature.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Section */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Why PTS for Data Center Setup?
        </Typography>
        <Typography variant="body1">
          We deliver end-to-end data center solutions including site planning, power design, cooling systems,
          fire protection, and monitoring solutions to ensure your infrastructure is secure and scalable.
        </Typography>
      </Box>
    </Container>
  );
}
