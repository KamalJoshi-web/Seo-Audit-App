import React from "react";
import { Badge, Box, Chip, CircularProgress, Typography } from "@mui/material";

const Score = ({ score, label }) => {
  return (
    <Badge badgeContent={score === 0 ? "0" : score} max={999} color="success">
      <Chip label={label} variant="outlined" />
    </Badge>
  );
};

export default Score;
