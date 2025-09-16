import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const itServices = [
  "Cloud Infrastructure",
  "Server Virtualization",
  "Endpoint Security & Firewalls",
  "Backup & Archival",
];

export default function ITServiceCardList() {
  return (
    <Grid container spacing={2}>
      {itServices.map((s, i) => (
        <Grid item xs={12} md={3} key={i}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">{s}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
