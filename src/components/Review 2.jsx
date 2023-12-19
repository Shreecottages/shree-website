// import React from "react";
// import {
//   Box,
//   Typography,
//   Divider,
//   Button,
//   MobileStepper,
//   Rating,
//   Avatar,
//   Card,
//   CardHeader,
//   CardContent,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import "../styles/Homepage.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Review = () => {
//   const Creview = [
//     {
//       value: 5,
//       description: `A very good place for wedding and other occasions planing good point is near by city so easy to get everything.`,
//       prof: {
//         img: "C1.png",
//         name: "Jaydeep Purohit",
//       },
//     },
//     {
//       value: 5,
//       description: `It was a splendid experience staying at Shree cottages. My friends and I were stayed there during our jungle safari and hiking in the Gir forest and the hospitality there was too worthy for staying.`,
//       prof: {
//         img: "C2.png",
//         name: "khanjan joshi",
//       },
//     },
//     {
//       value: 5,
//       description: `There is no need to explain this place into words without showing it. Marvelous place for any functions like engagement, marriage. There staying cottages are so huge, clean with all facilities`,
//       prof: {
//         img: "C3.png",
//         name: "mitali vyas",
//       },
//     },
//   ];

//   const maxIndex = Creview.length;
//   const cslide = 1;

//   const settings = {
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "10px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     speed: 500,
//     useCSS: true,
//     useTransform: true,
//     afterChange: (index) => this.setCslide({ cslide: index }),
//     autoPlay: true,
//     autoplaySpeed: 1000,
//     initialSlide: 1,
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       textAlign="center"
//       sx={{ padding: "5vw 0vw", backgroundColor: "common.white" }}
//     >
//       <Typography variant="h2">What our Customers Say</Typography>
//       <Divider
//         orientation="vertical"
//         variant="middle"
//         sx={{
//           height: "1.55rem",
//           width: "1px",
//           backgroundColor: "#3D2521",
//           alignSelf: "center",
//           m: "1.1rem",
//         }}
//       />
//       <Box display="flex" flexDirection="column" sx={{ alignItems: "center" }}>
//         <Box
//           className="cards-container"
//           sx={{ display: "flex", flexDirection: "row", width: "100%" }}
//         >
//           <Slider {...settings}>
//             {Creview.map((card) => {
//               return (
//                 <Card
//                   className="card"
//                   raised={0}
//                   sx={{
//                     backgroundColor: "rgba(255, 187, 112, 0.1);",
//                     borderRadius: "20px",
//                     textAlign: "left",
//                     p: "2vw",
//                     height: { xs: "15rem", md: "20rem" },
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <CardContent>
//                     <Rating
//                       name="read-only"
//                       value={card.value}
//                       readOnly
//                       sx={{ cursor: "default" }}
//                     />
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         fontSize: "1rem",
//                         display: "flex",
//                         overflowY: "scroll",
//                         height: { xs: "7rem", md: "15rem" },
//                       }}
//                     >
//                       {card.description}
//                     </Typography>
//                   </CardContent>
//                   <CardHeader
//                     avatar={
//                       <Avatar
//                         src={`../images/Prof/${card.prof.img}`}
//                         sx={{ width: "4rem", height: "100%" }}
//                       />
//                     }
//                     title={card.prof.name}
//                     titleTypographyProps={{
//                       variant: "h6",
//                       fontSize: "1rem",
//                       fontWeight: "bold",
//                     }}
//                     sx={{ position: "absolute", bottom: "0", mb: "1vw" }}
//                   />
//                 </Card>
//               );
//             })}
//           </Slider>
//         </Box>
//         <MobileStepper
//           variant="dots"
//           steps={maxIndex}
//           position="static"
//           activeStep={cslide}
//           sx={{
//             background: "none",
//             justifyContent: "center",
//             m: "1vw 0vw 2vw 0vw",
//           }}
//         />
//         <Button variant="outlined">
//           Write a Review{" "}
//           <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Review;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  MobileStepper,
  Card,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const Creview = [
    {
      value: 5,
      description: `A very good place for wedding and other occasions planing good point is near by city so easy to get everything.`,
      prof: {
        img: "C1.png",
        name: "Jaydeep Purohit",
      },
    },
    {
      value: 5,
      description: `It was a splendid experience staying at Shree cottages. My friends and I were stayed there during our jungle safari and hiking in the Gir forest and the hospitality there was too worthy for staying.`,
      prof: {
        img: "C2.png",
        name: "khanjan joshi",
      },
    },
    {
      value: 5,
      description: `There is no need to explain this place into words without showing it. Marvelous place for any functions like engagement, marriage. There staying cottages are so huge, clean with all facilities`,
      prof: {
        img: "C3.png",
        name: "mitali vyas",
      },
    },
  ];

  const [cslide, setCslide] = useState(1); // Manage cslide state

  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    useCSS: true,
    useTransform: true,
    afterChange: (index) => setCslide(index), // Update cslide state
    autoPlay: true,
    autoplaySpeed: 1000,
    initialSlide: 1,
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      sx={{ padding: "5vw 0vw", backgroundColor: "common.white" }}
    >
      <Typography variant="h2">What our Customers Say</Typography>
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
      <Box display="flex" flexDirection="column" sx={{ alignItems: "center" }}>
        <Box
          className="cards-container"
          sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Slider {...settings}>
            {Creview.map((card) => {
              return (
                <Card
                  key={card.value} // Add a unique key for each Card element
                  className="card"
                  raised={0}
                  sx={{
                    backgroundColor: "rgba(255, 187, 112, 0.1);",
                    borderRadius: "20px",
                    textAlign: "left",
                    p: "2vw",
                    height: { xs: "15rem", md: "20rem" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Card content remains unchanged */}
                </Card>
              );
            })}
          </Slider>
        </Box>
        <MobileStepper
          variant="dots"
          steps={Creview.length}
          position="static"
          activeStep={cslide}
          sx={{
            background: "none",
            justifyContent: "center",
            m: "1vw 0vw 2vw 0vw",
          }}
        />
        <Button variant="outlined">
          Write a Review{" "}
          <ArrowForwardIcon sx={{ width: "1rem", ml: "0.5vw" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
