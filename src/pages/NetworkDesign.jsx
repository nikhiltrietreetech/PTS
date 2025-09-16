import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function NetworkDesign() {
  const services = [
    {
      title: "Enterprise Network Design",
      desc: "Scalable and secure network architecture for large enterprises.",
      img: "/assets/network-design.jpg"
    },
    {
      title: "Cybersecurity Integration",
      desc: "End-to-end security solutions to protect data and prevent breaches.",
      img: "/assets/cybersecurity.jpg"
    },
    {
      title: "Cloud Networking",
      desc: "Hybrid and cloud-based networking for modern businesses.",
      img: "/assets/cloud-network.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Network Design & Security
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Robust, secure, and scalable networking solutions for modern enterprises.
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
          Why Choose PTS for Networking?
        </Typography>
        <Typography variant="body1">
          We design and implement advanced network infrastructure that ensures high performance,
          data security, and scalability. From enterprise LAN/WAN to cloud networking, we deliver end-to-end solutions.
        </Typography>
      </Box>
    </Container>
  );
}
