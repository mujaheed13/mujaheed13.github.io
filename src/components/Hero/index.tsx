import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="hero"
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "#fff" }}>
          {"< " + "Mohammad Mujaheed" + " />"}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#fff", textDecoration: "underline" }}
        >
          Software Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
