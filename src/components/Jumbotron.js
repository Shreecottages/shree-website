import React from 'react';
import style from '../styles/Jumbotron.module.css';
import Box from '@mui/material/Box';
import logo from '../eventImg/jumbotron.png';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

// import LeftSvg from '../assets/Group 82.svg'; // Replace 'your-svg-file' with your own SVG file name

import LeftSvg from '../assets/AboutFlowerLeft.png';
import RightSvg from '../assets/AboutFlowersRight.png';

const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
const AboutFLowerRight = require("../assets/AboutFlowersRight.png");


const Jumbotron = () => {
    const styles = {
        root: {
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '',
            boxShadow: 'inset 0px -130px 250px rgba(61, 37, 33, 0.9), inset 0px 130px 250px rgba(61, 37, 33, 0.9);'
        },
        container: {
            display: 'flex',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98.5vw',
            height: '38vh',
            backgroundImage: logo,
            boxShadow: 'inset 0px -130px 250px rgba(61, 37, 33, 0.9), inset 0px 130px 250px rgba(61, 37, 33, 0.9);',
            background: 'rgba(61, 37, 33, 0.5);',
            fontFamily: '"Bona Nova", serif'
        },
        heading: {
            textAlign: 'center',
            marginBottom: '1.1rem',
            color: '#ffbb70'
        },
        svgTopRight: {
            position: 'absolute',
            top: '13vh',
            right: '17vh',
            width: '200px',
            height: '150px'
        },
        svgBottomLeft: {
            position: 'absolute',
            top: '30vh',
            left: '4vw',
            width: '200px',
            height: '150px'
        }
    };

    return (
        <Box sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            background: `rgba(61, 37, 33, 0.5) url(${AboutUsTop})`,
            boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
            textAlign: "center",
            padding: { xs: "0vw", md: "0vw 10vw" },
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Box
                sx={{
                    // marginLeft: { xs: "-30px", lg: "200px" },
                    backgroundImage: `url(${AboutFlowerLeft})`,
                    backgroundRepeat: "no-repeat",
                    width: { xs: "25vw", md: "250px" },
                    backgroundSize: "contain",
                    // marginTop: "160px",
                    backgroundPosition: "bottom",
                    // backgroundPositionX:"left",
                }}
            ></Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", p: "5vw 0vw" }}>
                <Typography variant="h2" sx={{ color: "warning.main" }}> Events & Meetings </Typography>
                <Divider orientation="vertical" variant="middle" sx={{ height: "1.55rem", width: "1px", backgroundColor: "warning.main", alignSelf: "center", m: '1.1rem' }} />
                <Typography variant="body1" sx={{ fontFamily: "Bona Nova", color: "warning.main", textAlign: "left" }}> We give proper emphasis to every minor detail of your event to create something unique.</Typography>
            </Box>
            <Box
                sx={{
                    // marginRight: { sx: "50px", lg: "200px" },
                    backgroundImage: `url(${AboutFLowerRight})`,
                    backgroundRepeat: "no-repeat",
                    width: { xs: "25vw", md: "250px" },
                    backgroundSize: "contain",
                }}
            ></Box>
        </Box>
    );
};

export default Jumbotron;