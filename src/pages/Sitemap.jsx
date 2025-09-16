import { Container, Typography, Box, Grid, Link } from "@mui/material";

export default function Sitemap() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Sitemap
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Quick links to navigate through the website.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {links.map((link, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Link href={link.url} underline="hover" variant="body1">
              {link.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
