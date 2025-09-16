import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function ManagedServices() {
  const services = [
    {
      title: "Proactive Monitoring",
      desc: "24/7 system monitoring to detect and resolve issues before they impact operations.",
      img: "/assets/monitoring.jpg"
    },
    {
      title: "End-to-End IT Management",
      desc: "Comprehensive IT management including infrastructure, applications, and security.",
      img: "/assets/it-management.jpg"
    },
    {
      title: "Disaster Recovery",
      desc: "Robust backup and recovery solutions to safeguard your business from data loss.",
      img: "/assets/disaster-recovery.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Managed IT Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Reliable and scalable managed services designed to optimize your IT operations.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="200" image={service.img} alt={service.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{service.title}</Typography>
                <Typography variant="body2" color="textSecondary">{service.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Why Choose Our Managed Services?
        </Typography>
        <Typography variant="body1">
          Our team ensures continuous monitoring, security, and optimization of your IT systems. 
          We help businesses reduce downtime, improve productivity, and cut operational costs.
        </Typography>
      </Box>
    </Container>
  );
}
