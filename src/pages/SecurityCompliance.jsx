import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";

export default function SecurityCompliance() {
  const complianceServices = [
    {
      title: "Data Protection",
      desc: "Implementing robust data protection measures to prevent unauthorized access.",
      img: "/assets/data-protection.jpg"
    },
    {
      title: "Regulatory Compliance",
      desc: "Ensuring compliance with industry regulations like GDPR, ISO, HIPAA.",
      img: "/assets/regulatory-compliance.jpg"
    },
    {
      title: "Security Audits",
      desc: "Regular security audits and vulnerability assessments for risk mitigation.",
      img: "/assets/security-audit.jpg"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Security & Compliance
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Advanced security solutions and compliance frameworks to safeguard your business.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {complianceServices.map((service, index) => (
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
          Why Security & Compliance Matters
        </Typography>
        <Typography variant="body1">
          We provide end-to-end security and compliance solutions to ensure your business meets
          all industry standards, protects sensitive data, and minimizes risks of cyber threats.
        </Typography>
      </Box>
    </Container>
  );
}
