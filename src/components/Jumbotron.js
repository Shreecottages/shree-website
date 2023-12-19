import React from "react";
// import style from '../styles/Jumbotron.module.css';
import Box from "@mui/material/Box";
// import logo from '../eventImg/jumbotron.png';
import Typography from "@mui/material/Typography";
import { Divider, useMediaQuery } from "@mui/material";

// import LeftSvg from '../assets/Group 82.svg'; // Replace 'your-svg-file' with your own SVG file name

const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");

const Jumbotron = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Box
            sx={{
                width: "100vw",
                display: "flex",
                justifyContent: "space-between",
                background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? AboutUsTopM : AboutUsTop
                    })`,
                boxShadow:
                    "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
                textAlign: "center",
                padding: { xs: "0vw", md: "0vw 10vw" },
                height: {
                    xs: "75vw",
                    sm: "40vw",
                    md: "30vw",
                    lg: "25vw",
                    xl: "20vw",
                },
                // backgroundSize:"100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                    m: { xs: " 0vw -10vw", sm: "0vw" },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ color: "warning.main", m: { xs: " 0vw -10vw", sm: "0vw" } }}
                >
                    {" "}
                    Wedding & Event{" "}
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
                        textAlign: "center",
                        m: { xs: " 0vw -30vw", sm: "0vw" },
                    }}
                >
                    {" "}
                    We give proper emphasis to every minor detail of your event to create
                    something unique.
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
    );
};

export default Jumbotron;
