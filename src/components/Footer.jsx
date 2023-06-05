import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Container, Grid, Typography, Box, Stack, Divider } from "@mui/material";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import '../styles/Footer.css'
// importing images
const logo_white = require('../images/logo-white.png');
const fb = require('../images/fb.png');
const insta = require('../images/insta.png');
const yt = require('../images/yt.png');

export default function Footer(){
    
    return(
        <Box flexDirection="column" className="footer" sx={{bottom:'0',right:'0',left:'0', p:"5vw 10vw 0vw 10vw", display:"flex" }}>
        <Stack justifyContent="space-between" sx={{flexDirection:{xs:"column",md:"row"}}}>
            <Grid container direction={"column"}>
                <img src={logo_white} alt="" className="logo-white"/>
                <Typography variant="body2" sx={{fontSize:{xs:"1rem",md:'0.8vw'}, mb:'1vw', mt:'1.5vw'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </Typography>
                <Grid direction='row' sx={{m:'0.5vw 0vw'}}>
                    <img src={fb} href="/" alt="Facebook" className="sns"/>
                    <img src={insta} href="/" alt="Instagram" className="sns"/>
                    <img src={yt} href="/" alt="Youtube" className="sns"/>
                    {/* <Avatar variant="circular" src="../images/fb.png" href="/" alt="Facebook" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/insta.png" href="/" alt="Instagram" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/yt.png" href="/" alt="Youtube" sx={{mr:'1vw'}}/> */}
                </Grid>
            </Grid>
            <Grid container direction={"column"} sx={{p:{md:'2vw 0 0 3vw'}}}>
                <Typography variant="h4" className="ft" sx={{fontSize:{xs:"1.5rem",md:"1.5rem"},
                        '@media(max-width: 500px)':{
                            marginTop:"4vw"
                        }}}>Quick Links</Typography>
                <Box display="flex" flexDirection={{xs:"column",md:"row"}}>
                    <Box display="flex" flexDirection={"column"} sx={{mr:'5vw'}}>
                        <Link to="/"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Home</Typography></Link>
                        <Link to="/AboutUsMain"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>About</Typography></Link>
                        <Link to="/"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Rooms</Typography></Link>
                        <Link to="/Event"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Events</Typography></Link>
                    </Box>
                    <Box display="flex" flexDirection={"column"}>
                        <Link to="/gallery"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Gallery</Typography></Link>
                        <Link to="/Experience"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Experience</Typography></Link>
                        <Link to="/"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Resrvation Policy</Typography></Link>
                        <Link to="/contactPage/Contact"><Typography variant="h6" sx={{color:'warning.main',mt:'1.2vw',fontSize:{xs:"1rem",md:"1.3vw"}}}>Contact Us</Typography></Link>
                    </Box>
                </Box>
            </Grid>
            <Grid container direction={"column"} sx={{pt:'2vw',pb:'3vw'}}>
                <Typography variant="h4" className="ft" sx={{fontSize:{xs:"1.5rem",md:"1.5rem"},                        
                        '@media(max-width: 500px)':{
                            marginTop:"4vw",
                            marginBottom:"2vw"
                        }}}>Reach Us</Typography>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'2.5vw',sm:'2vw',md:'1.2vw'}}}>
                    <CallOutlinedIcon sx={{
                        width:{xs:"1rem",md:"6%"}, 
                        mt:{xs:'-1vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'},
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-3vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-4vw"
                        }
                    
                    }}/>
                    <Typography variant="h6" sx={{lineHeight:{xs:'1.2rem',md:'1.5vw'},fontSize:{xs:"1rem",md:"1.3vw"}}}>+91 9427424157</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'2.5vw',sm:'2vw',md:'1.2vw'}}}>
                    <MailOutlineOutlinedIcon sx={{
                        width:{xs:"1rem",md:"6%"}, 
                        mt:{xs:'-1vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'}, 
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-3vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-4vw"
                        }   
                    }} />
                    <Typography variant="h6" sx={{lineHeight:{xs:'1.2rem',md:'1.5vw'},fontSize:{xs:"1rem",md:"1.3vw"}}}>shreecottages57@gmail.com</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'2.5vw',sm:'2vw',md:'1.2vw'}}}>
                    <PlaceOutlinedIcon sx={{
                        width:{xs:"1rem",md:"6%"}, 
                        mt:{xs:'-1vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'}, 
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-1vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-2vw"
                        }    
                    }} />
                    <Typography variant="h6" sx={{lineHeight: {xs:'1.2rem',md:'1.5vw'},fontSize:{xs:"1rem",md:"1.3vw"}}}>Veraval Road ,Near Essar Petrol Pump Talala(Gir), Gir Somnath, Gujarat, India Pincode : 362150</Typography>
                </Box>
            </Grid>
        </Stack>
        <Box display="flex" justifyContent="space-between" flexDirection="row" className="footnote">
            <Typography variant="subtitle2">Copyrights@ 2023 • www.shreecottages.com</Typography>
            <Box display="flex" flexDirection="row">
            <Typography variant="subtitle2">Privacy Policy</Typography>
            <Divider orientation="vertical" sx={{height:{xs:"1.5vw",md:"1.2vw"}, backgroundColor: "warning.main", m:"0 0.5vw 1vw 0.5vw"}}/>
            <Typography variant="subtitle2">Terms & Condition</Typography>
            <Divider orientation="vertical" sx={{height:{xs:"1.5vw",md:"1.2vw"}, backgroundColor: "warning.main", m:"0 0.5vw 1vw 0.5vw"}}/>
            <Typography variant="subtitle2">Site map</Typography>
            </Box>
        </Box>
        </Box>
    );
}