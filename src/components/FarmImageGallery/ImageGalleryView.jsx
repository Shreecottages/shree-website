import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";

// IMPORTING ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImageGalleryView = () => {
  const image1 =
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";

  const image2 =
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=";

  const image3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5rZ9QLNlL2XDOWkFfM80-HgdZxIdeV6jJT_u71WtztMlxcWJ37GrBtWou8OdOb4C0qo&usqp=CAU";

  const image4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrBissl4uSSQNpsPF8fpynZA2z-pNn2x2n9JW5mMFlq3Tu5doUCXHxnOMeZfZKeUOZpo&usqp=CAU";

  const image5 =
    "https://i.pinimg.com/236x/de/f1/9d/def19de19ac7fc4bbb11b7bc35b89d32--beautiful-sunset-beautiful-places.jpg";

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  //IMAGE ARRAY TO TEST
  const images = [image1, image2, image3, image4, image5];

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
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
    let currentIndex = images.indexOf(imageToShow);
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
          width: "80%",
          margin: "80px auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={{ xs: 4, sm: 2, md: 6 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          // columnSpacing={{ xs: 1, sm: 4, md: 6 }}
        >
          {images.map((image, index) => (
            <Grid item xs={3} sm={4} md={4}>
              <Box
                sx={{
                  width: { xs: "300px", sm: "300px", md: "480px" },
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
                }}
                onClick={showPrev}
              >
                <ArrowBackIcon />
              </Button>

              <Box
                sx={{
                  width: { xs: "80%", sm: "80%", md: "60%" },
                  height: { xs: "25%", sm: "40%", md: "70%" },
                }}
              >
                <img
                  id="lightbox-img"
                  src={imageToShow}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Slow Network"
                />
              </Box>
              <Button
                sx={{
                  width: "20px",
                  height: "60px",
                  backgroundColor: "rgba(0,0,0,0.7)",
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
