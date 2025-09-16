import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Pagination, Container } from "@mui/material";
import TrendsEngineeringServices from "../assets/images/Our Blog/Trends in Engineering Services.jpg";
import CloudMigration from "../assets/images/Our Blog/Cloud Migration.jpeg";
import TopCybersecurity from "../assets/images/Our Blog/Top Cybersecurity.jpg";
export default function BlogList() {
  const blogs = [
    {
      title: "Top Trends in Engineering Services",
      desc: "Explore how BIM, CAD, and automation are transforming engineering.",
      img: TrendsEngineeringServices
    },
    {
      title: "Cloud Migration Best Practices",
      desc: "Learn strategies for smooth and secure cloud migration.",
      img: CloudMigration
    },
    {
      title: "IT Security in 2025",
      desc: "Top security solutions for modern IT infrastructure.",
      img: TopCybersecurity
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        Our Blog
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        Insights, trends, and expert tips for Engineering & IT Services.
      </Typography>

      <Grid container spacing={3}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={blog.img} alt={blog.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{blog.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{blog.desc}</Typography>
                {/* <Button variant="contained" size="small">Read More</Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination count={3} color="primary" />
      </Box>
    </Container>
  );
}
