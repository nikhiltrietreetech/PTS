import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function BlogContent({ title, body }) {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>{body}</Typography>
      </Container>
    </Box>
  );
}
