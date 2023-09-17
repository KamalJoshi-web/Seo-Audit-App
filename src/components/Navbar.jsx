import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Paper elevation={1}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        py={1.5}
        // bgcolor={"#B0E0E6"}
        sx={{
          background: "linear-gradient(to right, #FFA100, #FFA200, #FFA100)",
        }}
      >
        <Typography
          fontWeight={800}
          letterSpacing={2}
          color={"whitesmoke"}
          sx={{
            fontSize: { lg: "1.8rem", md: "1.5rem", sm: "1rem", xs: "0.9rem" },
          }}
          //   color={" #000080"}
        >
          PagePower
        </Typography>

        <Button
          color="secondary"
          //   variant="outlined"
          sx={{
            color: "white",
            ":hover": { backgroundColor: "White", color: "#FFA100" },
          }}
          LinkComponent={Link}
          to={"/"}
        >
          Home
        </Button>
      </Stack>
    </Paper>
  );
};

export default Navbar;
