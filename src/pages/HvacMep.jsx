import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function HvacMep() {
  const hvacServices = [
    {
      title: "HVAC System Design",
      desc: "Custom HVAC design for optimal performance and energy efficiency.",
      img: "/assets/hvac-design.jpg"
    },
    {
      title: "MEP Integration",
      desc: "Seamless integration of Mechanical, Electrical & Plumbing systems.",
      img: "/assets/mep.jpg"
    },
    {
      title: "Maintenance & Support",
      desc: "Reliable maintenance services to ensure uninterrupted operations.",
      img: "/assets/maintenance.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          HVAC & MEP Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Comprehensive HVAC and MEP solutions for efficient building management.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {hvacServices.map((service, index) => (
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
          Why Choose Our HVAC & MEP Solutions?
        </Typography>
        <Typography variant="body1">
          Our team ensures energy efficiency, high performance, and compliance with global standards.
          From initial design to installation and ongoing maintenance, we provide end-to-end solutions.
        </Typography>
      </Box>
    </Container>
  );
}
