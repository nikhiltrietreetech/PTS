import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Button, Chip } from "@mui/material";
import { useState } from "react";
import oilgas from "../assets/images/Case Studies/oilgas.jpg";
import cloud from "../assets/images/Case Studies/cloud.jpg";
import datacenter from "../assets/images/Case Studies/datacenter.jpg";
export default function CaseStudies() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Engineering", "IT Services", "Cloud"];
  const studies = [
    {
      title: "BIM Implementation for Oil & Gas",
      category: "Engineering",
      img: oilgas,
      desc: "Improved design efficiency with full BIM modeling and clash detection."
    },
    {
      title: "Cloud Migration for Manufacturing",
      category: "Cloud",
      img: cloud,
      desc: "Seamless migration of on-premise servers to secure cloud infrastructure."
    },
    {
      title: "Data Center Setup for Pharma",
      category: "IT Services",
      img: datacenter,
      desc: "Implemented high-availability data center with advanced security features."
    }
  ];

  const filteredStudies = filter === "All" ? studies : studies.filter(s => s.category === filter);

  return (
    <Container sx={{ py: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Case Studies
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Real-world examples of how PTS delivers excellence in Engineering & IT Solutions.
        </Typography>
      </Box>

      {/* Filter Chips */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, gap: 1 }}>
        {categories.map((cat, index) => (
          <Chip
            key={index}
            label={cat}
            color={filter === cat ? "primary" : "default"}
            onClick={() => setFilter(cat)}
            clickable
          />
        ))}
      </Box>

      {/* Case Study Grid */}
      <Grid container spacing={4}>
        {filteredStudies.map((study, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="200" image={study.img} alt={study.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{study.title}</Typography>
                <Typography variant="body2" color="textSecondary">{study.desc}</Typography>
              </CardContent>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button variant="outlined">Read More</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
