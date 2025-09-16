import React from "react";
import { Box, Button } from "@mui/material";

const industries = ["All", "Oil & Gas", "Power", "Pharma"];

export default function FilterByIndustry({ onFilter }) {
  return (
    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
      {industries.map((i) => (
        <Button key={i} variant="outlined" onClick={() => onFilter && onFilter(i)}>{i}</Button>
      ))}
    </Box>
  );
}
