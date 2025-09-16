import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";

export default function CloudMigration() {
  const benefits = [
    {
      title: "Seamless Migration",
      desc: "Ensure a smooth transition from on-premises infrastructure to the cloud without downtime.",
      img: "/assets/migration.jpg"
    },
    {
      title: "Cost Optimization",
      desc: "Leverage cost-effective strategies for cloud resources to maximize ROI.",
      img: "/assets/cost.jpg"
    },
    {
      title: "Enhanced Security",
      desc: "Adopt advanced security protocols for data integrity and compliance.",
      img: "/assets/security.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Cloud Migration Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Move your workloads to the cloud securely and efficiently with PTS.
        </Typography>
      </Box>

      {/* Benefits Grid */}
      <Grid container spacing={4}>
        {benefits.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="200" image={item.img} alt={item.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Why Choose PTS for Cloud Migration?
        </Typography>
        <Typography variant="body1" paragraph>
          Our experts ensure zero data loss, high availability, and complete security during your migration journey.
          We work with AWS, Azure, and Google Cloud to provide tailored solutions that meet your business needs.
        </Typography>
      </Box>
    </Container>
  );
}
