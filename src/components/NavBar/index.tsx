import { Box, IconButton, Tooltip, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import TerminalIcon from "@mui/icons-material/Terminal";
import HtmlIcon from "@mui/icons-material/Html";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
};

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: "0",
        padding: "1rem",
        backgroundColor: grey[800],
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff" }}>
        {"< " + "MM" + " />"}
      </Typography>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link style={linkStyles} href="#hero">
          <Tooltip title="Home" arrow>
            <IconButton>
              <HomeIcon sx={{ color: "#fff" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link style={linkStyles} href="#about-me">
          <Tooltip title="About Me" arrow>
            <IconButton>
              <PersonIcon sx={{ color: "#fff" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link style={linkStyles} href="#skills">
          <Tooltip title="Skills" arrow>
            <IconButton>
              <TerminalIcon sx={{ color: "#fff" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link style={linkStyles} href="#projects">
          <Tooltip title="Projects" arrow>
            <IconButton>
              <HtmlIcon sx={{ color: "#fff" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link style={linkStyles} href="#contact">
          <Tooltip title="Contact" arrow>
            <IconButton>
              <ContactMailIcon sx={{ color: "#fff" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
