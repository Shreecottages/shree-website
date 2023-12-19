import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const gir = require("../images/gir.png");
const diu = require("../images/diu.png");
const mapSpot = require("../images/map-spot.png");

const Attractions = () => {
  const buttonProps = {
    variant: "outlined",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      sx={{
        padding: { xs: "10vw 5vw", md: "5vw 10vw" },
        maxWidth: "100vw",
        overflowX: "clip",
      }}
    >
      <Typography variant="h2">Nearby Attraction</Typography>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          height: "1.55rem",
          width: "1px",
          backgroundColor: "#3D2521",
          alignSelf: "center",
          m: "1.1rem",
        }}
      />
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row" }, mb: "4vw" }}
        >
          <Box sx={{ width: { xs: "100%", md: "220vw" } }}>
            <img
              src={gir}
              alt="Scenic View of Gir Forest With Lion"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            flexDirection="column"
            textAlign="left"
            sx={{
              m: "2vw 3vw",
              display: { xs: "block", md: "flex" },
              // backgroundColor: {xs: "primary.main", md: "white"},
              padding: { xs: "0rem", md: "0rem" },
              position: "relative",
              // top: {xs: '-20vw', md: '0'},
              // borderRadius: '20px'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: "1.5vw",
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "1.8rem",
                },
              }}
            >
              Gir Jungle Safari
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "left", md: "justify" },
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              Embark on a thrilling 3-hour ride through the magnificent Gir
              National Park aboard an open Jeep. Witness the awe-inspiring
              wildlife in their natural habitat, as this safari offers an
              incredible opportunity to observe and connect with the mesmerizing
              fauna of the Gir Jungle.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                m: { xs: "2vw 0vw 4vw 0vw", md: "1vw 0vw" },
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              15 km far
            </Typography>
            <Box>
              <Button
                {...buttonProps}
                onClick={() =>
                  window.open(
                    "https://girlion.gujarat.gov.in/Index.aspx",
                    "_blank"
                  )
                }
                sx={{
                  mr: { xs: "2vw", md: "1.5vw" },
                  "@media(max-width:1150px) and (min-width:900px)": {
                    fontSize: "1rem",
                    padding: "2px 8px",
                  },
                }}
              >
                Explore <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
              </Button>
              <Button
                {...buttonProps}
                onClick={() =>
                  window.open("https://goo.gl/maps/NSe7nZAwPA7V7Keo9", "_blank")
                }
                sx={{
                  "@media(max-width:1150px) and (min-width:900px)": {
                    fontSize: "1rem",
                    padding: "2px 8px",
                  },
                }}
              >
                Direction{" "}
                <img
                  src={mapSpot}
                  alt=""
                  style={{ width: "1rem", marginLeft: "0.5vw" }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}
        >
          <Box sx={{ width: { xs: "100%", md: "220vw" } }}>
            <img
              src={diu}
              alt="Diu Beach Children Playing"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="left"
            sx={{
              m: "2vw 3vw",
              display: { xs: "block", md: "flex" },
              // backgroundColor: {xs: "primary.main", md: "white"},
              padding: { xs: "0rem", md: "0rem" },
              position: "relative",
              // top: {xs: '-20vw', md: '0'},
              // borderRadius: '20px'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: "1.5vw",
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "1.8rem",
                },
              }}
            >
              Diu
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "left", md: "justify" },
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              Diu Island, connected by a bridge to Gujarat&apos;s southern
              coast, resonates with Portuguese heritage. Its notable
              architectural gems encompass three churches and a seafront fort.
              Beyond the bustling tourist-filled waterfront, the town streets
              offer a serene and immaculate atmosphere. Notably, alcohol is
              permissible on this charming island.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                m: { xs: "2vw 0vw 4vw 0vw", md: "1vw 0vw" },
                "@media(max-width:1150px) and (min-width:900px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              83 km far
            </Typography>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "row", md: "row-reverse" },
                justifyContent: "left",
              }}
            >
              <Button
                {...buttonProps}
                onClick={() =>
                  window.open("https://diutourismgov.in", "_blank")
                }
                sx={{
                  mr: { xs: "2vw", md: "1.5vw" },
                  "@media(max-width:1150px) and (min-width:900px)": {
                    fontSize: "1rem",
                    padding: "2px 8px",
                  },
                }}
              >
                Explore <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
              </Button>
              <Button
                {...buttonProps}
                onClick={() =>
                  window.open("https://goo.gl/maps/gzcRw5uYLoP43z1K6", "_blank")
                }
                sx={{
                  mr: { xs: "2vw", md: "1.5vw" },
                  "@media(max-width:1150px) and (min-width:900px)": {
                    fontSize: "1rem",
                    padding: "2px 8px",
                  },
                }}
              >
                Direction{" "}
                <img
                  src={mapSpot}
                  alt=""
                  style={{ width: "1rem", marginLeft: "0.5vw" }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: "8vw", md: "4vw" } }}>
        <Link
          to="/best-places-to-visit-in-sasan-gir"
          style={{ textDecoration: "none", color: "#3D2521" }}
        >
          <Button variant="outlined" sx={{ alignSelf: "center" }}>
            Read more <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Attractions;
