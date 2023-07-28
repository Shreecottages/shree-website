import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

// IMPORTING ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import { CurrencyBitcoin } from "@mui/icons-material";

//IMPORTING IMAGES
import Resort1 from "../../assets/Resort1.png";
import Resort2 from "../../assets/Resort2.png";
import Resort3 from "../../assets/Resort3.png";
import Resort4 from "../../assets/Resort4.png";
import Resort5 from "../../assets/Resort5.png";
import Resort6 from "../../assets/Resort6.png";

import Decoration1 from "../../assets/Decoration1.png";
import Decoration2 from "../../assets/Decoration2.webp";

import SwimmingPool from "../../assets/SwimmingPool1.png";

const ImageGalleryView = () => {
  //IMAGE ARRAY TO TEST

  const resort = [Resort1, Resort2, Resort3, Resort4, Resort5, Resort6];

  const decoration = [Decoration1, Decoration2];

  const banquestHall = [
    //"https://cdn0.weddingwire.in/vendor/6819/3_2/960/jpg/nik-6742_15_146819.jpeg",
    //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUa799jyCfoeBHbfiwLViaztPcduA6a--Ld8tDdh-a5Vdpb2PM4gZnrYjLv2Dx8Q9ViM&usqp=CAU",
  ];

  const conferenceRoom = [
    //"https://www.coalesse.com/wp-content/uploads/2019/05/16-0041815.gif",
  ];
  const swimmingPool = [SwimmingPool];

  const all = [
    Resort1,
    Resort2,
    Resort3,
    Resort4,
    Resort5,
    Resort6,
    Decoration1,
    Decoration2,
    //"https://cdn0.weddingwire.in/vendor/6819/3_2/960/jpg/nik-6742_15_146819.jpeg",
    //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUa799jyCfoeBHbfiwLViaztPcduA6a--Ld8tDdh-a5Vdpb2PM4gZnrYjLv2Dx8Q9ViM&usqp=CAU",
    //"https://www.coalesse.com/wp-content/uploads/2019/05/16-0041815.gif",
    SwimmingPool,
  ];
  const newImages = [
    all,
    resort,
    decoration,
    banquestHall,
    conferenceRoom,
    swimmingPool,
  ];

  var images = all;

  const currentUrl = useLocation().pathname;
  // console.log(currentUrl)
  const num = currentUrl.length;
  // useEffect(() => {
  var part;

  for (var i = num; i > num - 17; i--) {
    if (currentUrl[i] !== "/") {
      part = currentUrl.slice(i + 1);
    } else {
      part = currentUrl.slice(i + 1);
      break;
    }
  }

  if (part === "all") {
    images = newImages[0];
  } else if (part === "resort") {
    images = newImages[1];
  } else if (part === "decoration") {
    images = newImages[2];
  } else if (part === "banquest-hall") {
    images = newImages[3];
  } else if (part === "conference-room") {
    images = newImages[4];
  } else if (part === "swimming-pool") {
    images = newImages[5];
  }

  // })

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const totalImage = images.length;
  let currentIndex;
  const showNext = (e) => {
    e.stopPropagation();
    currentIndex = images.indexOf(imageToShow);

    console.log(currentIndex);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox

  const showPrev = (e) => {
    e.stopPropagation();
    currentIndex = images.indexOf(imageToShow);
    //const currentIndexNo = isNaN(currentIndex) ? 0 : parseInt(currentIndex, 10) + 2;
    console.log(currentIndex);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  // To keep the all link active as default


  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", sm: "80%" },
          margin: "80px auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            marginBottom: { xs: "20px", md: "50px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%" },
              textDecoration: "none",
              gap: { sx: "0px", sm: "0px", md: "0px" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <NavLink
              to="/gallery/images/all"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{
                padding: "0",
                textDecoration: "none",
                color: "#3D2521",
                width: "auto",
              }}
              
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  All
                </ListItemText>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/gallery/images/resort"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{ padding: "0", textDecoration: "none", color: "#3D2521" }}
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  Resort
                </ListItemText>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/gallery/images/decoration"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{ padding: "0", textDecoration: "none", color: "#3D2521" }}
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  Decoration
                </ListItemText>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/gallery/images/banquest-hall"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{ padding: "0", textDecoration: "none", color: "#3D2521" }}
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  Banquest Hall
                </ListItemText>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/gallery/images/conference-room"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{ padding: "0", textDecoration: "none", color: "#3D2521" }}
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  Conference Room
                </ListItemText>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/gallery/images/swimming-pool"
              className={({ isActive }) =>
                isActive ? "resortLink-active" : "resortLink"
              }
              style={{ padding: "0", textDecoration: "none", color: "#3D2521" }}
            >
              <ListItemButton>
                <ListItemText disableTypography className="resortPartList">
                  Swimming Pool
                </ListItemText>
              </ListItemButton>
            </NavLink>
            {/* <Link
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
          */}
          </Box>
        </Box>
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={{ xs: 2, sm: 2, md: 2 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          // columnSpacing={{ xs: 1, sm: 4, md: 6 }}
        >
          {images.map((image, index) => (
            <Grid item xs={16} sm={4} md={4}>
              <Box
                sx={{
                  // width: { xs: "300px", sm: "300px", md: "480px" },
                  height: { xs: "180px", sm: "200px", md: "270px" },
                }}
              >
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  alt="Slow Network"
                  onClick={() => showImage(image)}
                />
              </Box>
            </Grid>
          ))}
          {lightboxDisplay ? (
            <Box
              sx={{
                zIndex: 1,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                display: "grid",
                placeItems: "center",
                // justifyContent: "center",
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                },
              }}
              onClick={hideLightBox}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "80%", md: "60%" },
                  height: { xs: "30%", sm: "40%", md: "70%" },
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "absolute",
                }}
              >
                <img
                  id="lightbox-img"
                  src={imageToShow}
                  style={{
                    width: "100%",
                    height: "90%",
                  }}
                  alt="Slow Network"
                />

                <Box
                  sx={{
                    width: "250px",
                    height: "50px",
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: { xs: "20px", sm: "0px" },
                  }}
                >
                  <Button
                    sx={{
                      // display:{xs:"flex", sm:"none"},
                      width: { xs: "40px", md: "60px" },
                      height: { xs: "40px", md: "60px" },
                      backgroundColor: "rgba(0,0,0,0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                      },
                    }}
                    onClick={showPrev}
                  >
                    <ArrowBackIcon sx={{ fontSize: "14px" }} />
                  </Button>
                  <Typography sx={{ fontSize: "20px", color: "white" }}>
                    {currentIndex}/{totalImage}
                  </Typography>

                  <Button
                    sx={{
                      // display:{xs:"flex", sm:"none"},
                      width: { xs: "40px", md: "60px" },
                      height: { xs: "40px", md: "60px" },
                      backgroundColor: "rgba(0,0,0,0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                      },
                    }}
                    onClick={showNext}
                  >
                    <ArrowForwardIcon sx={{ fontSize: "14px" }} />
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100vw",
                  padding: { xs: "", sm: "", lg: "200px" },
                  height: "100vh",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    width: { xs: "40px", md: "60px" },
                    height: { xs: "40px", md: "60px" },
                    backgroundColor: "rgba(0,0,0,0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                    },
                  }}
                  onClick={showPrev}
                >
                  <ArrowBackIcon sx={{ fontSize: "14px" }} />
                </Button>
                <Button
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    width: { xs: "40px", md: "60px" },
                    height: { xs: "40px", md: "60px" },
                    backgroundColor: "rgba(0,0,0,0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                    },
                  }}
                  onClick={showNext}
                >
                  <ArrowForwardIcon sx={{ fontSize: "14px" }} />
                </Button>
              </Box>
              {/* <Button
                sx={{
                  width: "20px",
                  height: "60px",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  "&:hover":{
                    backgroundColor:"rgba(0,0,0,0.7)",
                    color:"white"
                  }
                }}
                onClick={showNext}
              >
                <ArrowForwardIcon />
              </Button> */}
            </Box>
          ) : (
            ""
          )}
          {/* <Grid
            item
            xs={3}
            sm={4}
            md={4}
            // sx={{ marginTop: { xs: "-60px", sm: "0px" } }}
          >
            <ImageGalleryCard />
          </Grid>
          <Grid
            item
            xs={3}
            sm={4}
            md={4}
            // sx={{ marginTop: { xs: "-60px", sm: "-60px", md: "0px" } }}
          >
            <ImageGalleryCard />
          </Grid>
          */}
        </Grid>

        {/* {showImage && <CarouselSlider />} */}
      </Box>
    </div>
  );
};

export default ImageGalleryView;
