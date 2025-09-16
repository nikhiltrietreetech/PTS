import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const items = [
  { title: "Plant Upgrade", desc: "Full engineering retrofit for hydrocarbon plant" },
  { title: "Backup Implementation", desc: "Enterprise backup for data center" },
];

export default function CaseStudyGrid() {
  return (
    <Grid container spacing={2}>
      {items.map((c, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{c.title}</Typography>
              <Typography variant="body2">{c.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
