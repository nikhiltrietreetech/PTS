import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";

const tools = ["Revit", "Tekla", "AutoCAD", "ANSYS", "Abaqus", "VMware"];

export default function ToolsUsed() {
  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {tools.map((t) => (
          <Grid item key={t}>
            <Paper sx={{ p: 1 }}>{t}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
