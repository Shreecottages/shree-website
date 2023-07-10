import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {useMediaQuery} from "@mui/material"
import logo1 from "../eventImg/content-1.png";
import logo2 from "../eventImg/content-2.png";
import logo3 from "../eventImg/content-3.png";
import logo1Mobile from "../assets/logo1Mobile.png"
import logo2Mobile from "../assets/logo2Mobile.png"
import logo3Mobile from "../assets/logo3Mobile.png"

import Button from "@mui/material/Button";
// import "../styles/Content.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

function MyComponent() {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Box sx={{ background: "#FFE2D8", paddingBottom: "4rem" }}>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            // className="box"
            sx={{
              display: "flex",
              // justifyContent:"center",
              alignItems:"center",
              flexDirection: { xs: "column", md: "row" },
              mt: {xs:"2rem", md:"13vh"},
              height: "23vw",
              marginBottom:{xs:"500px",sm:"550px", md:"0px"},
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius:{xs: "20px 20px 0px 0px", md: "20px 0px 0px 20px"},
                  width: {xs:"90vw", md:"41vw"},
                  height: {xs:"24vh", sm:"36vh",md:"51.20vh"},
                  background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? logo1Mobile : logo1})`,
                  // backgroundImage: `url(${logo1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
            <Box
              // className="desc1"
              sx={{
                background: "#FFFFFF",
                borderRadius: {xs:"0px 0px 10px 10px", md:"0px 20px 20px 0px"},
                width: {xs:"90vw", md:"37vw"},
                height: {xs:"auto", md:"51.20vh"},
                padding: {xs:"20px 15px", sm:"30px 4rem", md:"6vh 5vw"},
              }}
            >
              <Typography
                // className="desc1-head"
                sx={{
                  fontSize: {xs:"6vw", md:"1.5vw"},
                  color: "#3D2521",
                  fontFamily: "Bona Nova",
                  textAlign:{xs:"center", md:"start"}
                }}
              >
                Wedding
              </Typography>
              <Typography
                // className="desc1-desc"
                sx={{
                  color: "#484848",
                  fontFamily: "Poppins",
                  fontSize: {xs:"4vw", md:"1vw"},
                  textAlign: {xs:"center", md:"justify"},
                  marginTop: {xs:"1rem", md:"3vh"},
                }}
              >
                we offer a spacious 6000 sq. ft. banquet hall and a stunning
                20,000 sq. ft. garden lawn, perfect for any occasion. Located in
                a serene natural setting, it is an ideal getaway. With 29
                comfortable rooms, we provide excellent accommodation for
                wedding guests. Shree Cottages is known as the top choice for
                destination weddings in Gir, offering unmatched beauty and
                outstanding service.
              </Typography>
            </Box>
          </Box>

          <Box
            // className="box"
            sx={{
              display: "flex",
              // justifyContent:"center",
              alignItems:"center",
              flexDirection: { xs: "column", md: "row" },
              mt: {xs:"50px", md:"16vh"},
              height: "23vw",
              marginBottom:{xs:"550px", sm:"610px", md:"0px"},
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius:{xs: "10px 10px 0px 0px"},
                  width: {xs:"90vw", md:"41vw"},
                  height: {xs:"24vh", sm:"36vh",md:"51.20vh"},
                  background: `url(${logo2Mobile})`,
                  display:{xs:"flex", md:"none"},
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
            <Box
              // className="desc1"
              sx={{
                background: "#FFFFFF",
                borderRadius: {xs:"0px 0px 10px 10px", md:"20px 0px 0px 20px"},
                width: {xs:"90vw", md:"37vw"},
                height: {xs:"auto", md:"51.20vh"},
                padding: {xs:"20px 15px", sm:"30px 4rem", md:"6vh 5vw"},
              }}
            >
              <Typography
                // className="desc1-head"
                sx={{
                  fontSize: {xs:"6vw", md:"1.5vw"},
                  color: "#3D2521",
                  fontFamily: "Bona Nova",
                  textAlign:{xs:"center", md:"start"}
                }}
              >
                Conference
              </Typography>
              <Typography
                // className="desc1-desc"
                sx={{
                  color: "#484848",
                  fontFamily: "Poppins",
                  fontSize: {xs:"4vw", md:"1vw"},
                  textAlign: {xs:"center", md:"justify"},
                  marginTop: {xs:"1rem", md:"3vh"},
                }}
              >
                 Experience the finest conference facilities at Shree Cottages.
                Our resort offers the best hall in the region, perfect for
                conferences, meetings, and corporate events. Immerse yourself in
                the tranquility of the surrounding jungle while conducting your
                next team-building or corporate gathering. With a proven track
                record of organizing successful events for groups of all sizes,
                Shree Cottages is becoming the preferred corporate offsite
                destination in and around Gujarat.
              </Typography>
            </Box>
            <Box
                sx={{
                  borderRadius:{xs: "10px 10px 0px 0px", md: "0px 20px 20px 0px"},
                  width: {xs:"90vw", md:"41vw"},
                  height: {xs:"24vh", sm:"36vh",md:"51.20vh"},
                  background: `url(${logo2})`,
                  display:{xs:"none", md:"flex"},
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
          </Box>

          <Box
            // className="box"
            sx={{
              display: "flex",
              // justifyContent:"center",
              alignItems:"center",
              flexDirection: { xs: "column", md: "row" },
              mt: {xs:"50px", md:"16.4vh"},
              height: "23vw",
              marginBottom:{xs:"500px", md:"0px"},
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius:{xs: "20px 20px 0px 0px", md: "20px 0px 0px 20px"},
                  width: {xs:"90vw", md:"41vw"},
                  height: {xs:"24vh", sm:"36vh",md:"51.20vh"},
                  background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? logo3Mobile : logo3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
            <Box
              // className="desc1"
              sx={{
                background: "#FFFFFF",
                borderRadius: {xs:"0px 0px 10px 10px", md:"0px 20px 20px 0px"},
                width: {xs:"90vw", md:"37vw"},
                height: {xs:"auto", md:"51.20vh"},
                padding: {xs:"20px 15px", sm:"30px 4rem", md:"6vh 5vw"},
              }}
            >
              <Typography
                // className="desc1-head"
                sx={{
                  fontSize: {xs:"6vw", md:"1.5vw"},
                  color: "#3D2521",
                  fontFamily: "Bona Nova",
                  textAlign:{xs:"center", md:"start"}
                }}
              >
                Event Planning
              </Typography>
              <Typography
                // className="desc1-desc"
                sx={{
                  color: "#484848",
                  fontFamily: "Poppins",
                  fontSize: {xs:"4vw", md:"1vw"},
                  textAlign: {xs:"center", md:"justify"},
                  marginTop: {xs:"1rem", md:"3vh"},
                }}
              >
                Let us handle every detail of your special event at Shree
                Cottages. Our dedicated team excels in event planning, ensuring
                a seamless and unforgettable experience. From weddings to
                birthdays, corporate gatherings to social celebrations, we have
                you covered. With our expertise and attention to detail, we will
                bring your vision to life and create a truly memorable occasion.
                Trust Shree Cottages for exceptional event planning services
                that will exceed your expectations.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
            borderRadius: "5px",
            color: "#3D2521",
            padding: "10px 40px",
            textAlign: "center",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: {xs:"100px",md:"8rem"},
            mb:{xs:"-1rem",md:"2rem"}
          }}
        >
          Call us{" "}
          <svg
            style={{ marginLeft: "10px" }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.333008 7.76666L0.333008 6.09999L10.333 6.09999L5.74967 1.51666L6.93301 0.333325L13.533 6.93333L6.93301 13.5333L5.74967 12.35L10.333 7.76666L0.333008 7.76666Z"
              fill="#3D2521"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
}

export default MyComponent;
