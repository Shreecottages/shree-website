import React, { useState } from "react";
import { Box, Grid, Button, Typography, ListItemButton, ListItemText} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

// IMPORTING ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CurrencyBitcoin } from "@mui/icons-material";

const ImageGalleryView = () => {


  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  //IMAGE ARRAY TO TEST
  const images = ["https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5rZ9QLNlL2XDOWkFfM80-HgdZxIdeV6jJT_u71WtztMlxcWJ37GrBtWou8OdOb4C0qo&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrBissl4uSSQNpsPF8fpynZA2z-pNn2x2n9JW5mMFlq3Tu5doUCXHxnOMeZfZKeUOZpo&usqp=CAU",  ];

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
  var currentIndex
  const showNext = (e) => {
    e.stopPropagation();
      currentIndex = images.indexOf(imageToShow);
     
     console.log(currentIndex)
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
    console.log(currentIndex)
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

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
          margin: "100px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "100%", md: "80%" },
            textDecoration: "none",
            gap: { sx: "20px", sm: "18px", md: "30px" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <NavLink to="/gallery/images/all" className={({ isActive }) => (isActive ? "resortLink-active" : "resortLink")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">All</ListItemText></ListItemButton></NavLink>

          <NavLink to="/gallery/images/resort" className={({ isActive }) => (isActive ? "resortLink-active" : "resortLink")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Resort</ListItemText></ListItemButton></NavLink>

          <NavLink to="/gallery/images/decoration" className={({ isActive }) => (isActive ? "resortLink-active" : "resortLink")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Decoration</ListItemText></ListItemButton></NavLink>
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
          </Link> */}
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
                sx={
                  {
                    // width: { xs: "300px", sm: "300px", md: "480px" },
                    height: { xs: "180px", sm: "200px", md: "270px" },
                  }
                }
              >
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
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
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                },
              }}
              onClick={hideLightBox}
            >
              <Button
                sx={{
                  width: "20px",
                  height: "60px",
                  backgroundColor: "rgba(0,0,0,0.7)",
                   "&:hover":{
                    backgroundColor:"rgba(0,0,0,0.7)",
                    color:"white"
                  }
                }}
                onClick={showPrev}
              >
                <ArrowBackIcon />
              </Button>

              <Box
                sx={{
                  width: { xs: "80%", sm: "80%", md: "60%" },
                  height: { xs: "30%", sm: "40%", md: "70%" },
                  alignItems:"center",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center"

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

                <Box sx={{width:"100px", height:"50px", backgroundColor:"#FFF"}}><Typography sx={{fontSize:"20px", color:"black"}}>{currentIndex}/{totalImage}</Typography></Box>
              </Box>
              <Button
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
              </Button>
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
