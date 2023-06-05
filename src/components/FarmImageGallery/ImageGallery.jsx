import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

// IMPORTING STYLES
import "./ImageGallery.css";

// IMPORTING IMAGE
import AboutUsTop from "../../assets/AboutTopImg.png";
import AboutFLowerRight from "../../assets/AboutFlowersRight.png";
import AboutFlowerLeft from "../../assets/AboutFlowerLeft.png";

const ImageGallery = () => {
  return (
    <div>
      <Box
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { sm: "100%" },
            height: { xs: "300px", lg: "300px", xl: "326px" },
            backgroundImage: `url(${AboutUsTop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(61, 37, 33, 0.5)",
            boxShadow:
              "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
          }}
        >
          <Box
            sx={{
              marginLeft: { sx: "-30px", lg: "200px" },
              backgroundImage: `url(${AboutFlowerLeft})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "250px", md: "250px" },
              marginTop: "160px",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                padding: { xs: "60px 0 20px 0", md: "100px 0 10px 0" },
                fontFamily: "Bona Nova",
                fontSize: { xs: "2.5em", md: "2.5em" },
                fontWeight: "400",
                lineHeight: "48px",
                letterSpacing: "0.07em",
                color: "#FFBB70",
              }}
            >
              Gallery
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                height: "30px",
                width: "0px",
                border: "1px solid #FFBB70",
              }}
            ></Box>

            <Box
              sx={{
                width: { xs: "90%", md: "60%" },
                display: "flex",
                justifyContent: "space-between",
                gap: { xs: "40px", md: "200px" },
              }}
            >
              <Link className="ResortPartsLink" to="/gallery/images/all">
                <Typography
                  sx={{
                    fontFamily: "Bona Nova",
                    color: "#FFFFFF",
                    fontSize: "30px",
                    "&:hover": {
                      color: "#FFBB70",
                    },
                  }}
                >
                  Images
                </Typography>
              </Link>

              <Link className="ResortPartsLink" to="/gallery/videos">
                <Typography
                  sx={{
                    fontFamily: "Bona Nova",
                    color: "#FFFFFF",
                    fontSize: "30px",
                    "&:hover": {
                      color: "#FFBB70",
                    },
                  }}
                >
                  Videos
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              marginRight: { sx: "50px", lg: "200px" },
              backgroundImage: `url(${AboutFLowerRight})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "250px", md: "250px" },
            }}
          ></Box>

          {/* <Box sx={{ marginRight: { sx: "50px", lg: "200px" } }}>
            <img
              src={AboutFLowerRight}
              style={{ width: "250px", height: "164px" }}
              alt=""
            />
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "100%", md: "64%" },
            textDecoration: "none",
            gap: { sx: "20px", sm: "18px", md: "30px" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            className="ResortPartsLink"
            to="/gallery/images/all"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
              // fontSize: { xs: "14px", sm: "24px", md: "30px" },
            }}
          >
            All
          </Link>
          <Link
            className="ResortPartsLink"
            to="/gallery/resort"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
              // fontSize: "20px",
            }}
          >
            Resort
          </Link>
          <Link
            className="ResortPartsLink"
            to="/gallery/decoration"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
            }}
          >
            Decoration
          </Link>
          <Link
            className="ResortPartsLink"
            to="/gallery/banquethall"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
            }}
          >
            Banquet Hall
          </Link>
          <Link
            className="ResortPartsLink"
            to="/gallery/conferencehall"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
            }}
          >
            Conference Hall
          </Link>
          <Link
            className="ResortPartsLink"
            to="/gallery/swimmingpool"
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginBottom: "10px",
            }}
          >
            Swimming Pool
          </Link>
        </Box>
      </Box>
      <Outlet />
      {/* {data.all.map((item, index) => (
        <img className={index} src={item} key={index} alt="First slide" />
      ))} */}

      {/* <CarouselSlider /> */}
    </div>
  );
};

export default ImageGallery;
