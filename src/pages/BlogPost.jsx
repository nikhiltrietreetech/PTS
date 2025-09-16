import { Container, Typography, Box, Divider, Avatar } from "@mui/material";

export default function BlogPost() {
  return (
    <Container sx={{ py: 8 }}>
      {/* Blog Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Top Trends in Engineering Services
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Published on February 28, 2025 • By Admin
        </Typography>
      </Box>

      {/* Blog Image */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          backgroundImage: "url(/assets/blog-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          mb: 4
        }}
      />

      {/* Blog Content */}
      <Typography variant="body1" paragraph>
        The engineering landscape is undergoing a major transformation with the adoption of advanced tools like
        Building Information Modeling (BIM), automation, and AI-driven design processes.
        Businesses are moving toward integrated workflows that ensure efficiency, accuracy, and cost savings.
      </Typography>

      <Typography variant="body1" paragraph>
        At PTS, we provide state-of-the-art BIM modeling services, IT infrastructure solutions, and cloud
        migration strategies that empower organizations to stay ahead of the curve.
      </Typography>

      <Typography variant="body1" paragraph>
        Future trends indicate the increased use of AR/VR in construction planning, sustainability-focused
        designs, and real-time data integration for predictive maintenance.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Author Section */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <Avatar sx={{ width: 56, height: 56, mr: 2 }} src="/assets/author.jpg" alt="Author" />
        <Box>
          <Typography variant="subtitle1">Admin</Typography>
          <Typography variant="body2" color="textSecondary">PTS Content Team</Typography>
        </Box>
      </Box>
    </Container>
  );
}
