import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";

export default function StructuralSteel() {
  const steelServices = [
    {
      title: "Steel Fabrication",
      desc: "High-quality steel fabrication for industrial and commercial projects.",
      img: "/assets/steel-fabrication.jpg"
    },
    {
      title: "Structural Engineering",
      desc: "Precision-engineered steel structures for durability and strength.",
      img: "/assets/structural-engineering.jpg"
    },
    {
      title: "Custom Steel Design",
      desc: "Tailored steel solutions to meet unique project specifications.",
      img: "/assets/custom-steel.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Structural Steel Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Reliable steel solutions for construction, engineering, and industrial needs.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {steelServices.map((service, index) => (
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
    </Container>
  );
}
