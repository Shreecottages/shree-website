import React from "react";
import { Box, Divider, Typography, Button, useMediaQuery} from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/Homepage.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const a1 = require('../images/Abt-us/a1.png');
const a2 = require('../images/Abt-us/a2.png');
const a3 = require('../images/Abt-us/a3.png');
const a4 = require('../images/Abt-us/a4.png');
const logoTransparent = require('../images/logo-transparent.png');

export default function Aboutus(){
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:{xs:"10vw 5vw",lg:"5vw 10vw"}, backgroundColor:"primary.main",maxWidth:"100vw",overflowX:"clip"}}>
        <Typography variant="h2">About Us</Typography>
        <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
        <Box display='flex' sx={{flexDirection:{xs: "column", lg:"row-reverse"}, width: "100%",justifyContent:"space-between"}}>
            <Box sx={{width:{xs:"100%",lg:"50%"},display:"flex",flexDirection:"row",justifyContent:"center", alignItems:"center",p:{xs:'0vh', sm: '5vw',lg:'0vw'}}}>
                {/* <img src={isSmallScreen?AboutImgM:AboutImg} style={{width:"100%"}}/> */}
                <Box sx={{display:"flex", flexDirection:"column",alignItems:"flex-end",mr:{xs:"0.5rem",sm:"0.75rem"}}}>
                    <img src={require('../images/Abt-us/a1.svg').default} style={{width:"70%",margin:isSmallScreen?"1rem 0rem":"1.5rem 0rem"}}/>
                    <img src={a2} style={{width:"100%"}}/>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-start",ml:{xs:"0.5rem",sm:"0.75rem"}}}>
                    <img src={a3} style={{width:"100%"}}/>
                    <img src={require('../images/Abt-us/a4.svg').default} style={{width:"70%",margin:isSmallScreen?"1rem 0rem":"1.5rem 0rem"}}/>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" sx={{width:{xs:"100%",lg:"50%"},mt:"-5vw",mr:{xs:"0px",lg:"5vw"}, backgroundImage:`url(${logoTransparent})`,backgroundRepeat:'no-repeat',backgroundSize:"contain", backgroundPositionX:"center"}}>
                {/* <img src="../images/logo-transparent.png" style={{width:"100%",height:"100%"}}/> */}
                <Box sx={{
                    textAlign:{xs:"center",lg:"left"},
                    m:"5vw 0vw"
                }}>
                <Typography variant="body1" sx={{m:"5vw 0vw"}}>
                    Shree Cottages is a remarkable destination wedding resort situated in the heart of Gir
                    National Park. Surrounded by lush greenery and vibrant gardens, it provides a magical
                    backdrop for any occasion. As guests enter, they are embraced by a tranquil ambiance that
                    evokes a sense of peace, comfort, and happiness. With a track record of hosting over 70
                    events annually and attracting more than 20,000 visitors, Shree Cottages has become the
                    preferred choice for unforgettable celebrations. Whether it's a wedding, corporate event, or
                    special gathering, our dedicated team ensures an extraordinary experience, leaving
                    cherished memories to last a lifetime.
                </Typography>    
                <Link to="/AboutUsMain" style={{textDecoration:"none", color: '#3D2521'}}><Button variant="contained">Read more <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}} /></Button></Link>
                </Box>
            </Box>
        </Box>
    </Box>
    );
}