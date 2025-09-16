import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", py: 10 }}>
      <Box>
        <Typography variant="h1" color="error" sx={{ fontWeight: "bold" }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          The page you are looking for might have been removed or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}
