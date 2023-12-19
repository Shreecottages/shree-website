import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box, Stack } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import "../styles/Footer.css";
// importing images
const logoWhite = require("../images/logo-white.png");
const fb = require("../images/fb.png");
const insta = require("../images/insta.png");
const yt = require("../images/yt.png");

const Footer = () => {
  return (
    <Box
      flexDirection="column"
      className="footer"
      sx={{
        bottom: "0",
        right: "0",
        left: "0",
        p: { xs: "10vw 5vw", md: "5vw 10vw 0vw 10vw" },
        display: "flex",
      }}
    >
      <Stack
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid container direction="column">
          <img
            src={logoWhite}
            alt="Shree Cottages Logo White"
            className="logo-white"
          />
          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: { md: "1.2vw", lg: "1vw" },
              mb: "1vw",
              mt: "1.5vw",
            }}
          >
            Shree Cottages & Party Plot offers a serene and enchanting getaway
            nestled in the heart of Gir National Park. With comfortable
            accommodations, lush gardens, and exceptional service, it is the
            perfect destination for weddings, events, and peaceful retreats.
          </Typography>
          <Grid direction="row" sx={{ m: "0.5vw 0vw" }}>
            <a
              href="https://www.facebook.com/ShreeCottages"
              target="_blank"
              rel="noopener noreferrer"
              className="sns"
            >
              <img
                src={fb}
                alt="Facebook Icon"
                className="sns"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.instagram.com/shreecottages"
              target="_blank"
              rel="noopener noreferrer"
              className="sns"
            >
              <img
                src={insta}
                alt="Instagram Icon"
                className="sns"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.youtube.com/@shreecottages"
              target="_blank"
              rel="noopener noreferrer"
              className="sns"
            >
              <img
                src={yt}
                alt="Youtube Icon"
                className="sns"
                style={{ cursor: "pointer" }}
              />
            </a>

            {/* <Avatar variant="circular" src="../images/fb.png" href="/" alt="Facebook" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/insta.png" href="/" alt="Instagram" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/yt.png" href="/" alt="Youtube" sx={{mr:'1vw'}}/> */}
          </Grid>
        </Grid>
        <Grid container direction="column" sx={{ p: { md: "2vw 0 0 3vw" } }}>
          <Typography
            variant="h4"
            className="ft"
            sx={{
              fontSize: { xs: "1.5rem", md: "1.5rem" },
              "@media(max-width: 500px)": {
                marginTop: "4vw",
              },
            }}
          >
            Quick Links
          </Typography>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box display="flex" flexDirection="column" sx={{ mr: "5vw" }}>
              <Link to="/">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="/about">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link to="/rooms">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Rooms
                </Typography>
              </Link>
              <Link to="/wedding-event-planning">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Events
                </Typography>
              </Link>
            </Box>
            <Box display="flex" flexDirection="column">
              <Link to="/gallery/images/all">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Gallery
                </Typography>
              </Link>
              <Link to="/best-places-to-visit-in-sasan-gir">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Experience
                </Typography>
              </Link>
              <Link to="/blogs">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Blogs
                </Typography>
              </Link>
              <Link to="/contact">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warning.main",
                    mt: "1.2vw",
                    fontSize: { xs: "1rem", md: "1.3vw" },
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid container direction="column" sx={{ pt: "2vw", pb: "3vw" }}>
          <Typography
            variant="h4"
            className="ft"
            sx={{
              fontSize: { xs: "1.5rem", md: "1.5rem" },
              "@media(max-width: 500px)": {
                marginTop: "4vw",
                marginBottom: "2vw",
              },
            }}
          >
            Reach Us
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ mt: { xs: "2.5vw", sm: "2vw", md: "1.2vw" } }}
          >
            <CallOutlinedIcon
              sx={{
                width: { xs: "1.5rem", md: "6%" },
                mt: { xs: "-1vw", sm: "-0.75vw", md: "0vw", lg: "0.3vw" },
                mr: "5px",
                "@media(max-width: 350px)": {
                  marginTop: "-3vw",
                },
                "@media(max-width: 250px)": {
                  marginTop: "-4vw",
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                lineHeight: { xs: "1.2rem", md: "1.5vw" },
                fontSize: { xs: "1rem", md: "1.3vw" },
              }}
            >
              <a
                href="tel:+919427424157"
                style={{ textDecoration: "none", color: "#FFBB70" }}
              >
                +91 9427424157
              </a>
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ mt: { xs: "2.5vw", sm: "2vw", md: "1.2vw" } }}
          >
            <MailOutlineOutlinedIcon
              sx={{
                width: { xs: "1.5rem", md: "6%" },
                mt: { xs: "-1vw", sm: "-0.75vw", md: "0vw", lg: "0.3vw" },
                mr: "5px",
                "@media(max-width: 350px)": {
                  marginTop: "-3vw",
                },
                "@media(max-width: 250px)": {
                  marginTop: "-4vw",
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                lineHeight: { xs: "1.2rem", md: "1.5vw" },
                fontSize: { xs: "1rem", md: "1.3vw" },
              }}
            >
              <a
                href="mailto:info@shreecottages.com"
                style={{ textDecoration: "none", color: "#FFBB70" }}
              >
                info@shreecottages.com
              </a>
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ mt: { xs: "2.5vw", sm: "2vw", md: "1.2vw" } }}
          >
            <PlaceOutlinedIcon
              sx={{
                width: { xs: "1.5rem", md: "6%" },
                mt: { xs: "-1vw", sm: "-0.75vw", md: "0vw", lg: "0.3vw" },
                mr: "5px",
                "@media(max-width: 350px)": {
                  marginTop: "-1vw",
                },
                "@media(max-width: 250px)": {
                  marginTop: "-2vw",
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                lineHeight: { xs: "1.2rem", md: "1.5vw" },
                fontSize: { xs: "1rem", md: "1.3vw" },
              }}
            >
              <a
                href="https://maps.app.goo.gl/drs3jkTeyFMY93v5A"
                target="_blank"
                style={{ textDecoration: "none", color: "#FFBB70" }}
                rel="noreferrer"
              >
                Veraval Road ,Near Essar Petrol Pump Talala(Gir), Gir Somnath,
                Gujarat, India <br />
                Pincode : 362150
              </a>
            </Typography>
          </Box>
        </Grid>
      </Stack>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        className="footnote"
      >
        <Box sx={{ mb: { xs: "1rem", md: "0rem" } }}>
          <Typography variant="subtitle2">
            © Copyrights️ 2023 , All rights reserved Shree Cottages
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "row-reverse", md: "row" },
            alignItems: { xs: "center", md: "normal" },
          }}
        >
          <a
            href=" https://howflyit.com"
            style={{ textDecoration: "none", color: "#FFBB70" }}
            target="_blank"
          >
            <Typography
              variant="subtitle2"
              sx={{
                m: { xs: "0 0.5rem", md: "0 0 1vw 0.5vw" },
              }}
            >
              Website crafted with 💛 by HowFly IT
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
