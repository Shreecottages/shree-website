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
// import { CurrencyBitcoin } from "@mui/icons-material";

// IMPORTING IMAGES
import r1 from "../../assets/gallery/Resort/r1.jpg";
import r2 from "../../assets/gallery/Resort/r2.jpg";
import r3 from "../../assets/gallery/Resort/r3.jpg";
import r4 from "../../assets/gallery/Resort/r4.jpg";
import r5 from "../../assets/gallery/Resort/r5.jpg";
import r6 from "../../assets/gallery/Resort/r6.jpg";
import r7 from "../../assets/gallery/Resort/r7.jpg";
import r8 from "../../assets/gallery/Resort/r8.jpg";
import r9 from "../../assets/gallery/Resort/r9.jpg";
import r10 from "../../assets/gallery/Resort/r10.jpg";
import r11 from "../../assets/gallery/Resort/r11.jpg";
import r12 from "../../assets/gallery/Resort/r12.jpg";
import r13 from "../../assets/gallery/Resort/r13.jpg";
import r14 from "../../assets/gallery/Resort/r14.jpg";
import r15 from "../../assets/gallery/Resort/r15.jpg";
import r16 from "../../assets/gallery/Resort/r16.jpg";

import d1 from "../../assets/gallery/Decoration/d1.jpg";
import d2 from "../../assets/gallery/Decoration/d2.jpg";
import d3 from "../../assets/gallery/Decoration/d3.jpg";
import d4 from "../../assets/gallery/Decoration/d4.jpg";
import d5 from "../../assets/gallery/Decoration/d5.jpg";
import d6 from "../../assets/gallery/Decoration/d6.jpg";
import d7 from "../../assets/gallery/Decoration/d7.jpg";
import d8 from "../../assets/gallery/Decoration/d8.jpg";
import d9 from "../../assets/gallery/Decoration/d9.jpg";
import d10 from "../../assets/gallery/Decoration/d10.jpg";
import d11 from "../../assets/gallery/Decoration/d11.jpg";
import d12 from "../../assets/gallery/Decoration/d12.jpg";
import d13 from "../../assets/gallery/Decoration/d13.jpg";
import d14 from "../../assets/gallery/Decoration/d14.jpg";
import d15 from "../../assets/gallery/Decoration/d15.jpg";
import d16 from "../../assets/gallery/Decoration/d16.jpg";
import d17 from "../../assets/gallery/Decoration/d17.jpg";
import d18 from "../../assets/gallery/Decoration/d18.jpg";
import d19 from "../../assets/gallery/Decoration/d19.jpg";
import d20 from "../../assets/gallery/Decoration/d20.jpg";

import b1 from "../../assets/gallery/Banquest Hall/b1.jpg";
import b2 from "../../assets/gallery/Banquest Hall/b2.jpg";

import s1 from "../../assets/gallery/Swimming Pool/s1.jpg";
import s2 from "../../assets/gallery/Swimming Pool/s2.jpg";
import s3 from "../../assets/gallery/Swimming Pool/s3.jpg";

import c1 from "../../assets/gallery/Conference Room/c1.jpg";
import c2 from "../../assets/gallery/Conference Room/c2.jpg";
import c3 from "../../assets/gallery/Conference Room/c3.jpg";
import c4 from "../../assets/gallery/Conference Room/c4.jpg";

const ImageGalleryView = () => {
  // IMAGE ARRAY TO TEST

  const resort = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16,
  ];

  const decoration = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d9,
    d10,
    d11,
    d12,
    d13,
    d14,
    d15,
    d16,
    d17,
    d18,
    d19,
    d20,
    d8,
  ];

  const banquestHall = [
    b1,
    b2,
    // "https://cdn0.weddingwire.in/vendor/6819/3_2/960/jpg/nik-6742_15_146819.jpeg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUa799jyCfoeBHbfiwLViaztPcduA6a--Ld8tDdh-a5Vdpb2PM4gZnrYjLv2Dx8Q9ViM&usqp=CAU",
  ];

  const conferenceRoom = [
    c1,
    c2,
    c3,
    c4,
    // "https://www.coalesse.com/wp-content/uploads/2019/05/16-0041815.gif",
  ];
  const swimmingPool = [s1, s2, s3];

  const all = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    s1,
    s2,
    s3,
    r4,
    r5,
    r7,
    r8,
    r9,
    r10,
    r11,
    d7,
    d9,
    d10,
    d11,
    d12,
    d13,
    d14,
    d15,
    d16,
    d17,
    d18,
    d19,
    d20,
    d8,
    r1,
    r2,
    r3,
    r6,
    r12,
    r13,
    r14,
    r15,
    r16,
    b1,
    b2,
    c1,
    c2,
    c3,
    c4,

    // "https://cdn0.weddingwire.in/vendor/6819/3_2/960/jpg/nik-6742_15_146819.jpeg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUa799jyCfoeBHbfiwLViaztPcduA6a--Ld8tDdh-a5Vdpb2PM4gZnrYjLv2Dx8Q9ViM&usqp=CAU",
    // "https://www.coalesse.com/wp-content/uploads/2019/05/16-0041815.gif",
  ];
  const newImages = [
    all,
    resort,
    decoration,
    banquestHall,
    conferenceRoom,
    swimmingPool,
  ];

  let images = all;

  const currentUrl = useLocation().pathname;
  // console.log(currentUrl)
  const num = currentUrl.length;
  // useEffect(() => {
  let part;

  for (let i = num; i > num - 17; i -= 1) {
    if (currentUrl[i] !== "/") {
      part = currentUrl.slice(i + 1);
    } else {
      part = currentUrl.slice(i + 1);
      break;
    }
  }

  // if (part === "all") {
  //   images = newImages[0];
  // } else if (part === "resort") {
  //   images = newImages[1];
  // } else if (part === "decoration") {
  //   images = newImages[2];
  // } else if (part === "banquest-hall") {
  //   images = newImages[3];
  // } else if (part === "conference-room") {
  //   images = newImages[4];
  // } else if (part === "swimming-pool") {
  //   images = newImages[5];
  // }

  const imageMap = {
    all: newImages[0],
    resort: newImages[1],
    decoration: newImages[2],
    "banquest-hall": newImages[3],
    "conference-room": newImages[4],
    "swimming-pool": newImages[5],
  };

  images = imageMap[part];

  // })

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  // hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  // show next image in lightbox
  const totalImage = images.length;
  let currentIndex;
  const showNext = (e) => {
    e.stopPropagation();
    currentIndex = images.indexOf(imageToShow);

    console.log(currentIndex);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      const nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  // show previous image in lightbox

  const showPrev = (e) => {
    e.stopPropagation();
    currentIndex = images.indexOf(imageToShow);
    // const currentIndexNo = isNaN(currentIndex) ? 0 : parseInt(currentIndex, 10) + 2;
    console.log(currentIndex);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      const nextImage = images[currentIndex - 1];
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
          {/* {images.map((image, index) => (
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
          ))} */}

          {images.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={16} sm={4} md={4} key={index}>
              <Box
                sx={{
                  height: { xs: "180px", sm: "200px", md: "270px" },
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => showImage(image)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      showImage(image);
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
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
                  />
                </div>
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
