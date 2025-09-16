import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const posts = [
  { title: "Why BIM Matters", excerpt: "BIM delivers efficiency in plant design." },
  { title: "Cloud Backup Strategies", excerpt: "Approaches to consistent backups for enterprises." },
];

export default function BlogPostPreviewList() {
  return (
    <Grid container spacing={2}>
      {posts.map((p, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography variant="body2">{p.excerpt}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
