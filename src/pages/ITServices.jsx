import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import cloud from "../assets/images/IT/cloud.jpg";
import managedServices from "../assets/images/IT/managed services.jpg";
import network from "../assets/images/IT/network.jpg";
export default function ITServices() {
  const services = [
    {
      title: "Cloud Migration",
      desc: "Seamlessly migrate applications and data to secure cloud platforms.",
      img: cloud
    },
    {
      title: "Managed Services",
      desc: "24/7 monitoring and IT support for your critical systems and infrastructure.",
      img: managedServices
    },
    {
      title: "Network Design & Security",
      desc: "Advanced network architecture with top-notch security and compliance.",
      img: network
    }
    
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          IT Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Comprehensive IT solutions to accelerate your digital transformation journey.
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
          Why Choose PTS IT Services?
        </Typography>
        <Typography variant="body1">
          We deliver cutting-edge IT services tailored to your business needs. From cloud computing
          to cybersecurity and managed services, our solutions ensure scalability, security, and performance.
        </Typography>
      </Box>
    </Container>
  );
}
