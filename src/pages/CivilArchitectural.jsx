import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";

export default function CivilArchitectural() {
  const services = [
    {
      title: "Structural Design",
      desc: "Comprehensive structural design services ensuring stability, safety, and compliance for civil and industrial projects.",
      img: "/assets/structural.jpg"
    },
    {
      title: "Architectural Planning",
      desc: "Innovative and sustainable architectural planning that balances aesthetics, functionality, and cost-effectiveness.",
      img: "/assets/architectural.jpg"
    },
    {
      title: "Drafting & Detailing",
      desc: "Precise drafting and detailing services for residential, commercial, and industrial structures including layouts and 3D visualization.",
      img: "/assets/drafting.jpg"
    },
    {
      title: "Civil & Structural Engineering",
      desc: "End-to-end civil and structural engineering solutions including design, validation, and execution for large-scale infrastructure projects.",
      img: "/assets/civil-structural.jpg"
    },
    {
      title: "BIM & CAD Modeling",
      desc: "Advanced Building Information Modeling (BIM) and CAD services for accurate planning, reducing errors, and improving efficiency.",
      img: "/assets/bim-cad.jpg"
    },
    {
      title: "Project Management & Documentation",
      desc: "Comprehensive project management, planning, and documentation to ensure smooth execution and timely delivery.",
      img: "/assets/project-management.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Civil & Architectural Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Delivering excellence in structural design, architectural planning, and execution for complex projects with innovation and precision.
        </Typography>
      </Box>

      {/* Service Grid */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%"
              }}
            >
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
