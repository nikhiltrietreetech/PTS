import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function BackButton({ to }) {
  const nav = useNavigate();
  return (
    <IconButton color="primary" onClick={() => (to ? nav(to) : nav(-1))}>
      <ArrowBackIcon />
    </IconButton>
  );
}
