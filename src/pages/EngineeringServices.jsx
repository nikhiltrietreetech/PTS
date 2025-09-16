import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import escs from "../assets/images/Engineering/escs.jpg";
import hvca from "../assets/images/Engineering/hvac.jpg";
import drafting from "../assets/images/Engineering/drafting.jpg";
import bim from "../assets/images/Engineering/bmi.jpg";
import Electrical from "../assets/images/Engineering/Electrical.jpg";
import Plumbing from "../assets/images/Engineering/Plumbing.jpeg";
import ProjectManagement from "../assets/images/Engineering/Project Management.jpeg";
export default function EngineeringServices() {
  const services = [
    {
      title: "Civil & Structural Engineering",
      desc: "Comprehensive solutions for civil, architectural, and structural steel projects.",
      img: escs
    },
    {
      title: "HVAC & MEP",
      desc: "Design and implementation of HVAC and MEP systems for all building types.",
      img: hvca
    },
    {
      title: "Drafting & Detailing",
      desc: "Accurate drafting and detailing for precise execution and compliance.",
      img: drafting
    },
    {
      title: "BIM Modeling & Coordination",
      desc: "3D BIM modeling, clash detection, and multi-discipline coordination for seamless delivery.",
      img: bim
    },
    {
      title: "Electrical Systems Design",
      desc: "Power distribution, lighting, and low-voltage systems engineered for safety and efficiency.",
      img: Electrical
    },
    {
      title: "Plumbing & Fire Protection",
      desc: "Water supply, drainage, fire suppression designs adhering to international codes.",
      img: Plumbing
    },
    {
      title: "Project Management & QA/QC",
      desc: "End-to-end project controls, documentation, and quality assurance for on-time delivery.",
      img: ProjectManagement
    },
    
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Engineering Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Innovative, reliable, and cost-effective engineering solutions tailored for your needs.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} alignItems="stretch">
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
       
      

      {/* Additional Info */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="body1">
          We combine advanced technologies, industry standards, and expert teams to deliver top-notch
          engineering services for civil, mechanical, and electrical domains. From design to implementation,
          PTS ensures efficiency and accuracy in every project.
        </Typography>
      </Box>
    </Container>
  );
}
