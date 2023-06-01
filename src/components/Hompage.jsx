import React from "react";
import { Box, Divider, Stack, Typography, Card, Button, useMediaQuery } from "@mui/material";
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CSlider from './CSlider';
import Ecard from './Ecard';
import Review from './Review';
import Attractions from "./Attractions";
import Aboutus from "./Aboutus";
import '../styles/Homepage.css';
// import { Router } from "react-router-dom";
const asset3_1 = require('../images/Asset 3 1.png');

const Homepage =()=>{

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

    const buttonProps = {
        variant: isSmallScreen ? "contained2" : "outlined",
    };

    return(
        <Stack sx={{width:"100vw",overflowX:"hidden"}}>
            <Box className="hero">
            {/* instead of height put marginTop to solve the click issue in Ecard */}
                <svg width="100vw" viewBox="0 0 1920 447" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute",top:"32vw"}}> 
                    <path d="M523.333 93.4543C322.275 112.504 268 15.6415 0 15.6415V447H1920V93.4543C1866 57.5005 1712.95 39.5266 1591.33 70.9831C1350 133.403 1267 68.5658 1070 16.5747C852.711 -40.7709 802.667 66.9883 523.333 93.4543Z" fill="#FFE2D8"/>
                </svg>
                <Box className="hero-info">
                    <img src={asset3_1}/>
                    <Box display="flex" flexDirection="column" sx={{padding:"0 10vw 4vw 10vw", backgroundColor: '#FFE2D8'}}>
                        <Typography variant="h2" sx={{fontSize:{xs:"1.25rem",md:"2.25rem"}}}>Shree Cottages</Typography>
                        <Divider orientation="vertical" variant="middle" sx={{height:{xs:"1rem",md:"1.55rem"},width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:{xs:"0.5rem",md:"1.1rem"}}}/>
                        <Typography variant="h5" sx={{fontSize:{xs:"0.9rem",md:"1.35rem"}}}>Shree Cottages is a destination wedding resort that offers a unique and memorable experience for your special day. Nestled in the heart of the Gir Jungle, the resort provides a stunning backdrop for your wedding photos and ceremony. With its luxurious accommodations and world-class amenities, Shree Cottages is the perfect place to celebrate your love.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{width:"100vw",paddingTop:{xs:"20vh",sm:"10vh",md:"15vh",lg:"0vh",'@media(max-height:500px)':{paddingTop:"40vh"},'@media(max-height:400px)':{paddingTop:"50vh"}}}}>
            <Ecard />
            <CSlider />
            <Attractions />
            <Aboutus />
            <Review />
            </Box>
        </Stack>
    );
}
export default Homepage;