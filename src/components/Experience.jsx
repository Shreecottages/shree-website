import {
  Box,
  Stack,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Helmet } from "react-helmet";

const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
const header1 = require("../images/exp/header1.webp");
const header1M = require("../images/exp/header1-mobile.png");
const girJungle = require("../images/exp/gir_jungle.png");
const devaliya = require("../images/exp/devaliya.png");
const header2 = require("../images/exp/header2.png");
const header2M = require("../images/exp/header2-mobile.png");
const jamjir = require("../images/exp/jamjir.png");
const KB = require("../images/exp/k&b.png");
const somnath = require("../images/exp/somnath.png");
const tulsiShyam = require("../images/exp/tulsiShyam.png");
const diu = require("../images/exp/diu.png");
const junagadh = require("../images/exp/junagadh.png");
const mapSpot = require("../images/map-spot.png");

/*
  // Function to preload images
  const useImagePreload = (urls) => {
      React.useEffect(() => {
          urls.forEach(url => {
              const img = new Image();
              img.src = url;
          });
      }, [urls]);
  };
  */

const Experience = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  /* const imageUrls = [
          AboutFLowerRight,
          AboutUsTop,
          AboutUsTopM,
          AboutFlowerLeft,
          header1,
          header1M,
          girJungle,
          devaliya,
          header2,
          header2M,
          jamjir,
          KB,
          somnath,
          tulsiShyam,
          diu,
          junagadh,
          mapSpot,
      ];
  
      
      // Call the preloadImages function with the array of image URLs
      useImagePreload(imageUrls); */

  return (
    <Stack>
      <Helmet>
        <title>
          Best Tourist Places Attractions to Visit In Sasan Gir with Family
        </title>
        <meta
          name="description"
          content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh"
        />
        <meta
          name="keywords"
          content="shree cottages,hotel,resort,tourist places,places to visit,attractions,gir national park,gir wildlife sanctuary,gir jungle safari, devaliya safari park, jamjir waterfall , kankai & banej, somnath temple, tulsishyam, diu, junagadh"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="canonical"
          content="https://shreecottages.com/best-places-to-visit-in-sasan-gir"
        />
        <meta name="image" content={girJungle} />

        <meta
          name="og:title"
          content="Best Tourist Places Attractions to Visit In Sasan Gir with Family"
        />
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta
          name="og:description"
          content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh"
        />
        <meta name="og:image" content={girJungle} />
      </Helmet>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          background: `rgba(61, 37, 33, 0.5) url(${
            isSmallScreen ? AboutUsTopM : AboutUsTop
          })`,
          boxShadow:
            "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
          textAlign: "center",
          padding: { xs: "0vw", md: "0vw 10vw" },
          backgroundSize: "100% cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: {
            xs: "75vw",
            sm: "40vw",
            md: "30vw",
            lg: "25vw",
            xl: "20vw",
          },
          "@media(max-width:300px)": {
            height: "100vw",
          },
        }}
      >
        <Box
          sx={{
            // marginLeft: { xs: "-30px", lg: "200px" },
            backgroundImage: `url(${AboutFlowerLeft})`,
            backgroundRepeat: "no-repeat",
            width: { xs: "25vw", md: "200px", lg: "250px" },
            backgroundSize: "contain",
            // marginTop: "160px",
            backgroundPosition: "bottom",
            // backgroundPositionX:"left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            p: "5vw 0vw",
            width: { xs: "30vw", sm: "100%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "warning.main",
              alignSelf: "center",
              m: { xs: " 0vw -10vw", sm: "0vw" },
            }}
          >
            Experience
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              height: "1.55rem",
              width: "1px",
              backgroundColor: "warning.main",
              alignSelf: "center",
              m: "1.1rem",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Bona Nova",
              color: "warning.main",
              textAlign: "left",
              alignSelf: "center",
              lineHeight: "19px",
              letterSpacing: "0.01rem",
              m: { xs: " 0vw -30vw", sm: "0vw" },
            }}
          >
            ગાજે મેહુલિયો ને સાવજની દહાડ🦁 <br />
            જાણજો એજ વનરાવન ગીર🏕️....
          </Typography>
        </Box>
        <Box
          sx={{
            // marginRight: { sx: "50px", lg: "200px" },
            backgroundImage: `url(${AboutFLowerRight})`,
            backgroundRepeat: "no-repeat",
            width: { xs: "25vw", md: "200px", lg: "250px" },
            backgroundSize: "contain",
          }}
        />
      </Box>

      {/* ---------------------------------------------------Content---------------------------------------------------------- */}

      <Box sx={{ padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>
        {/* --------Header :1------------------ */}
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={isSmallScreen ? header1M : header1}
              alt="Sasan Gir Lion and Lioness"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box
            sx={{
              padding: { xs: "0vw 4vw", md: "0vw 10vw" },
              position: "relative",
              top: { xs: "-3rem", md: "-3.55rem" },
              marginBottom: { xs: "-1rem", md: "0rem" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                alignSelf: "center",
                textAlign: "center",
                background:
                  "linear-gradient(180deg, #FFE2D8 0%, #F2D0CD 100%, #E6C2C2 100%)",
                padding: { xs: "4vw", md: "2vw" },
                borderRadius: { xs: "10px", md: "20px" },
                fontSize: { xs: "1.25rem", md: "2rem", xl: "2.25rem" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              To catch a glimpse of the king of the jungle
            </Typography>
          </Box>
        </Box>

        {/* --------Content for Header :1------------------ */}

        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              margin: { xs: "0vw", md: "0vw 2vw 0vw 0vw" },
            }}
          >
            <Box>
              <img
                src={girJungle}
                alt="Lion In Gir Jungle"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                height: { xs: "100%", md: "29vw", lg: "25vw", xl: "19vw" },
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Gir Jungle Safari
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: {
                    xs: "0.8rem",
                    md: "0.9rem",
                    lg: "1rem",
                    xl: "1.1rem",
                  },
                }}
              >
                Gir Jungle Safari is a fenced-off area within Gir National Park
                where visitors can see Asiatic lions in their natural habitat.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                17 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://girlion.gujarat.gov.in/Index.aspx",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/NSe7nZAwPA7V7Keo9",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box>
              <img
                src={devaliya}
                alt="Devaliya Safari Park"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                height: { xs: "100%", md: "29vw", lg: "25vw", xl: "19vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Devaliya Safari Park
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: {
                    xs: "0.8rem",
                    md: "0.9rem",
                    lg: "1rem",
                    xl: "1.1rem",
                  },
                }}
              >
                It is a small protected area of Gir Jungle Trail where visitors
                can see a variety of wildlife in their natural habitat.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                27 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open("https://girlionsafari.com/", "_blank")
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/YvZXTVX1YJMRQNaV9",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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

        {/* --------Header :2------------------ */}
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={isSmallScreen ? header2M : header2}
              alt="gir jungle scene"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box
            sx={{
              padding: { xs: "0vw 4vw", md: "0vw 10vw" },
              position: "relative",
              top: { xs: "-2rem", sm: "-6vw", md: "-3.55rem" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                alignSelf: "center",
                textAlign: "center",
                background:
                  "linear-gradient(180deg, #FFE2D8 0%, #F2D0CD 100%, #E6C2C2 100%)",
                padding: { xs: "4vw", md: "2vw" },
                borderRadius: { xs: "10px", md: "20px" },
                fontSize: { xs: "1.25rem", md: "2rem", xl: "2.25rem" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              To feel the nature of gir
            </Typography>
          </Box>
        </Box>
        {/* --------Content for Header :2------------------ */}

        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              margin: { xs: "0vw", md: "0vw 2vw 0vw 0vw" },
            }}
          >
            <Box>
              <img
                src={jamjir}
                alt="Jamjir Waterfall"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Jamjir Waterfall
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                Jamjir Waterfall is a 2-tiered waterfall in the Gir National
                Park, Gujarat, India. It is a popular tourist destination,
                especially during the monsoon season.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                34 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Jamzir+Waterfall/@20.9666822,70.7663831,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPtzBd_HCQIkye_2Vpci_0Xdir-T3N2SVgwyvPf!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPtzBd_HCQIkye_2Vpci_0Xdir-T3N2SVgwyvPf%3Dw397-h298-k-no!7i12032!8i9024!4m9!3m8!1s0x3be2c3d24294e4b3:0xb3d7deb5b1732aa0!8m2!3d20.9666822!4d70.7663831!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tvw3d8z?entry=ttu",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/NN4NnkX38q83MQpw7",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
            sx={{
              width: "100%",
              justifyContent: "center",
              // margin:{xs:"0vw",md:"0vw 2vw"}
            }}
          >
            <Box>
              <img src={KB} alt="kankai and banej" style={{ width: "100%" }} />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Kankai & Banej
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                Kankai and Banej are two villages in the Gir National Park,
                Gujarat, India. They are popular tourist destinations for their
                temples, wildlife, and scenic beauty.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                39 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://en.wikipedia.org/wiki/Kankai",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/ztMSavatz4sctPWe7",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              margin: { xs: "0vw", md: "0vw 2vw 0vw 0vw" },
            }}
          >
            <Box>
              <img
                src={somnath}
                alt="Somnath Temple Drone Img"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Somnath Temple
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                Somnath Temple is a Hindu temple dedicated to Lord Shiva,
                located in Prabhas Patan, Gujarat, India. It is one of the 12
                Jyotirlingas, the most sacred pilgrimage sites for Hindus.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                27 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => window.open("https://somnath.org/", "_blank")}
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/yBWpUtSZex5BvLUX9",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
            sx={{
              width: "100%",
              justifyContent: "center",
              // margin:{xs:"0vw",md:"0vw 2vw"}
            }}
          >
            <Box>
              <img
                src={tulsiShyam}
                alt="tulsishyam"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                TulsiShyam
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                Tulsishyam is a Hindu temple dedicated to Lord Vishnu, located
                in the Gir National Park, Gujarat, India. It is a tourist
                destination for its scenic beauty and hot water springs.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                85 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://en.wikipedia.org/wiki/Tulsishyam",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/zjyNibvhrPLyqLJJ9",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              margin: { xs: "0vw", md: "0vw 2vw 0vw 0vw" },
            }}
          >
            <Box>
              <img src={diu} alt="Diu Beach" style={{ width: "100%" }} />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Diu
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                Diu is a small island in the Gulf of Khambhat, Gujarat, India.
                It is a popular tourist destination for its beaches, forts, and
                Portuguese architecture.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                83 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open("https://diutourismgov.in", "_blank")
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/gzcRw5uYLoP43z1K6",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
            sx={{
              width: "100%",
              justifyContent: "center",
              // margin:{xs:"0vw",md:"0vw 2vw"}
            }}
          >
            <Box>
              <img
                src={junagadh}
                alt="mahabat maqbara junagadh"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              flexDirection="column"
              textAlign="left"
              sx={{
                m: { xs: "0vw 4vw", md: "0vw 2vw" },
                // display: {xs:"block", md:"flex"},
                background:
                  "linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                padding: { xs: "3vw 4vw", md: "2vw 3vw" },
                position: "relative",
                top: {
                  xs: "-4.5rem",
                  sm: "-6rem",
                  md: "-6rem",
                  xl: "-8.55rem",
                },
                marginBottom: {
                  xs: "-2.5rem",
                  sm: "-4rem",
                  md: "-4rem",
                  xl: "-5.55rem",
                },
                borderRadius: { xs: "10px", md: "20px" },
                boxShadow:
                  "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: "1.5vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                Heritage of Junagadh
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: { xs: "0.8rem", md: "0.9rem", xl: "1.1rem" },
                }}
              >
                This 3000-year-old fort is home to a number of historical sites,
                including the Adi Kadi Vav & Navghan Kuwo stepwells, the
                Buddhist caves, the Mahabat Maqbara.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  m: "1vw 0vw",
                  fontSize: { xs: "1.3rem", md: "1.5rem", xl: "1.7rem" },
                }}
              >
                67 km far
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "space-between", sm: "left" },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://en.wikipedia.org/wiki/Junagadh",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
                    mr: { xs: "4vw", md: "1.5vw" },
                    "@media(max-width:1150px) and (min-width:900px)": {
                      fontSize: "1rem",
                      padding: "2px 8px",
                    },
                  }}
                >
                  Explore{" "}
                  <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/NDLEvc39zte6bT9G7",
                      "_blank"
                    )
                  }
                  sx={{
                    width: { xs: "100%", sm: "35%" },
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
      </Box>
    </Stack>
  );
};

export default Experience;
