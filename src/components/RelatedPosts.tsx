import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

export default function RelatedPosts() {
  const items = ["BIM ROI", "Virtual Data Center Best Practices"];
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1">Related Posts</Typography>
      <List>
        {items.map((i) => <ListItem key={i}>{i}</ListItem>)}
      </List>
    </Box>
  );
}
