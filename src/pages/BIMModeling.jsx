import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";

export default function BIMModeling() {
  const features = [
    { title: "3D BIM Modeling", desc: "Comprehensive 3D BIM modeling for accurate design visualization." },
    { title: "Coordination & Clash Detection", desc: "Identify and resolve conflicts before construction." },
    { title: "BIM for Structural and MEP", desc: "Complete modeling solutions for all engineering disciplines." }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        BIM Modeling Services
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        Delivering accurate and efficient BIM solutions for various industries.
      </Typography>

      <Grid container spacing={3}>
        {features.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
