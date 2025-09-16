import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function DraftingDetailing() {
  const services = [
    {
      title: "2D Drafting",
      desc: "Accurate 2D drafting services for architectural, structural, and MEP projects.",
      img: "/assets/2d-drafting.jpg"
    },
    {
      title: "3D Modeling",
      desc: "High-quality 3D models for better visualization and detailed project execution.",
      img: "/assets/3d-modeling.jpg"
    },
    {
      title: "Shop Drawings",
      desc: "Detailed shop drawings ensuring fabrication accuracy and compliance.",
      img: "/assets/shop-drawings.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Drafting & Detailing Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Delivering precise drafting and detailing solutions for every stage of your project.
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
          Why Choose PTS?
        </Typography>
        <Typography variant="body1">
          Our team ensures compliance with international standards, delivering accurate and detailed
          drafting for architecture, structural steel, HVAC, and more. We combine precision and efficiency
          to help you complete projects faster.
        </Typography>
      </Box>
    </Container>
  );
}
