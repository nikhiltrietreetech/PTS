import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const services = [
  { title: "BIM Modelling", body: "Revit, Tekla modelling, 3D piping models" },
  { title: "Pipe Stress Analysis", body: "FEA, surge analysis, stress calculations" },
  { title: "CAD Drafting", body: "2D drafting, PID, Electrical & Instrumentation" },
];

export default function ServiceCardList() {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{s.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
