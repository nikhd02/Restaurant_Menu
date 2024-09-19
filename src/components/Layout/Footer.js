import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";  // Import Email Icon
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Social media icons with links */}
          <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          {/* Email icon */}
          <a href="mailto:dubeyaadarsh221305@gmail.com">
            <EmailIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Nikhd02
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
