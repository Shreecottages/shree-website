import React from "react";
import { Box, Stack, Typography, Button, ListItemButton, ListItemText,useMediaQuery,Divider } from "@mui/material";
import { Link, Outlet,NavLink, useLocation } from "react-router-dom";

// IMPORTING STYLES
import "./ImageGallery.css";

// IMPORTING IMAGE
import AboutUsTop from "../../assets/AboutTopImg.png";
import AboutFLowerRight from "../../assets/AboutFlowersRight.png";
import AboutFlowerLeft from "../../assets/AboutFlowerLeft.png";
import  AboutUsTopM from "../../images/TopImage.png"
import { Helmet } from "react-helmet";
import Decoration2 from "../../assets/Decoration2.webp";
import  ShreeGallery from "../../images/shree-gallery.jpg"

const ImageGallery = () => {

  var currentUrl = useLocation().pathname;

  if(currentUrl == "/gallery/videos")
  {
    currentUrl = "/gallery/images/all"
  }
  
  
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  return (
    <div>
      <Box
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Helmet>
                <title>Gallery - Shree Cottages</title>
                <meta name="description" content="Explore our captivating gallery of images and videos showcasing the scenic beauty of our resort and unforgettable events at Sasan Gir"/>
                <meta name="keywords"content="shree cottages, shree Party Plot, hotel, resort , destination wedding"/>
                <meta name="robots" content="index, follow"/>
                <meta name="canonical" content="https://shreecottages.com/gallery/images/all"/>
                <meta name="image" content={ShreeGallery} />

                <meta name="og:title" content="Gallery - Shree Cottages"/>
                <meta property="og:site_name" content="Shree Cottgaes" />
                <meta name="og:description" content="Explore our captivating gallery of images and videos showcasing the scenic beauty of our resort and unforgettable events at Sasan Gir"/>
                <meta name="og:image" content={ShreeGallery} />
        </Helmet>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            // height:{xs:"210px", sm:"20 0px", md:"330px"},
            justifyContent: "space-between",
            background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? AboutUsTopM : AboutUsTop})`,
            boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
            textAlign: "center",
            padding: { xs: "0vw", md: "0vw 10vw" },
            position:"relative",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height:{xs:"75vw",sm:"40vw",md:"30vw",lg:"25vw",xl:"20vw"},
            '@media(max-width:300px)':{
                height:"100vw"
            }
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${AboutFlowerLeft})`,
                backgroundRepeat: "no-repeat",
                width: { xs: "25vw", md: "200px", lg: "250px" },
                backgroundSize: "contain",
                backgroundPosition: "bottom",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              width:{xs:"30vw",sm:"100%"},
              m: { xs: " 0vw -20vw", sm: "0vw" } 
            }}
          >
            <Typography
              variant="h2"
              sx={{
                // padding: { xs: "60px 0 20px 0", md: "100px 0 10px 0" },
                fontFamily: "Bona Nova",
                // fontSize: { xs: "2.5em", md: "2.5em" },
                fontWeight: "400",
                lineHeight: "48px",
                letterSpacing: "0.07em",
                color: "#FFBB70",
              }}
            >
              Gallery
            </Typography>
            {/* <Box
              sx={{
                margin: "0px auto",
                height: "30px",
                width: "0px",
                border: "1px solid #FFBB70",
              }}
            ></Box> */}
            <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"warning.main", alignSelf:"center", m:'1.1rem'}}/>
            <Box
              sx={{
                width: { xs: "120%", sm: "60%" },
                display: "flex",
                justifyContent: "space-between",
                alignSelf:"center",
                m: { xs: " 0vw -20vw", sm: "0vw" }, 
                // gap: { xs: "20vw", md: "0" },
              }}
            >
              <NavLink to={currentUrl} className={({ isActive }) => (isActive ? "resortLink-active" : "resortLink")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: "#FFBB70"}}><ListItemButton disableGutters><ListItemText disableTypography className="list" sx={{fontSize:{xs:"1.25rem",md:"2rem"},mr:{xs:"4vw",md:"0vw"}}}>Image</ListItemText></ListItemButton></NavLink>
              <NavLink to="/gallery/videos" className={({ isActive }) => (isActive ? "resortLink-active" : "resortLink")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: "#FFBB70", fontSize:"30px"}}><ListItemButton disableGutters><ListItemText disableTypography className="list" sx={{fontSize:"30px"}}>Videos</ListItemText></ListItemButton></NavLink>
            </Box>
          </Box>

          <Box
          sx={{
            // marginRight: { sx: "50px", lg: "200px" },
            backgroundImage: `url(${AboutFLowerRight})`,
            backgroundRepeat: "no-repeat",
            width: { xs: "25vw", md: "200px", lg: "250px" },
            backgroundSize: "contain",
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

      {/* <Box
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
              fontSize: { xs: "16px", sm: "24px", md: "30px" },
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
      </Box> */}
      <Outlet />  
      {/* {data.all.map((item, index) => (
        <img className={index} src={item} key={index} alt="First slide" />
      ))} */}

      {/* <CarouselSlider /> */}
    </div>
  );
};

export default ImageGallery;
