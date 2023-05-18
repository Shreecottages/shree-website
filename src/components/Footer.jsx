import React from "react";
import { Avatar, Container, Grid, Typography, Box, Stack, Divider } from "@mui/material";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import '../styles/Footer.css'

export default function Footer(){
    
    return(
        <Box flexDirection="column" className="footer" sx={{position:"absolute", bottom:'0',right:'0',left:'0', p:"5vw 10vw 0vw 10vw", display:"flex" }}>
        <Stack justifyContent="space-between" flexDirection="row">
            <Grid container direction={"column"}>
                <img src="../images/logo-white.png" alt="" width={'55%'}/>
                <Typography variant="body2" sx={{fontSize:'0.8vw', mb:'1vw', mt:'1.5vw'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </Typography>
                <Grid direction='row' sx={{m:'0.5vw 0vw'}}>
                    <img src="../images/fb.png" href="/" alt="Facebook" className="sns"/>
                    <img src="../images/insta.png" href="/" alt="Instagram" className="sns"/>
                    <img src="../images/yt.png" href="/" alt="Youtube" className="sns"/>
                    {/* <Avatar variant="circular" src="../images/fb.png" href="/" alt="Facebook" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/insta.png" href="/" alt="Instagram" sx={{mr:'1vw'}}/>
                    <Avatar src="../images/yt.png" href="/" alt="Youtube" sx={{mr:'1vw'}}/> */}
                </Grid>
            </Grid>
            <Grid container direction={"column"} sx={{p:'2vw 0 0 3vw'}}>
                <Typography variant="h4" className="ft" sx={{fontSize:{xs:"1.5vw",md:"1.5rem"}}}>Quick Links</Typography>
                <Box display="flex" flexDirection={"row"}>
                    <Box display="flex" flexDirection={"column"} sx={{mr:'5vw'}}>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Home</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>About</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Rooms</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Events</Typography>
                    </Box>
                    <Box display="flex" flexDirection={"column"}>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Gallery</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Experience</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Resrvation Policy</Typography>
                        <Typography variant="h6" component={'a'} href="/" sx={{color:'warning.main',mt:'1.2vw'}}>Contac Us</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid container direction={"column"} sx={{pt:'2vw',pb:'3vw'}}>
                <Typography variant="h4" className="ft" sx={{fontSize:{xs:"1.5vw",md:"1.5rem"}}}>Reach Us</Typography>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'0.5vw',md:'1.2vw'}}}>
                    <CallOutlinedIcon sx={{
                        width:"6%", 
                        mt:{xs:'-2vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'},
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-3vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-4vw"
                        }
                    
                    }}/>
                    <Typography variant="h6" sx={{lineHeight:"1.5vw"}}>+91 9427424157</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'0.5vw',md:'1.2vw'}}}>
                    <MailOutlineOutlinedIcon sx={{
                        width:"6%", 
                        mt:{xs:'-2vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'}, 
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-3vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-4vw"
                        }   
                    }} />
                    <Typography variant="h6" sx={{lineHeight:"1.5vw"}}>shreecottages57@gmail.com</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{mt:{xs:'0.5vw',md:'1.2vw'}}}>
                    <PlaceOutlinedIcon sx={{
                        width:"6%", 
                        mt:{xs:'-2vw',sm:"-0.75vw",md:'0vw',lg:'0.3vw'}, 
                        mr:'5px',
                        '@media(max-width: 350px)':{
                            marginTop:"-3vw"
                        },
                        '@media(max-width: 250px)':{
                            marginTop:"-4vw"
                        }    
                    }} />
                    <Typography variant="h6" sx={{lineHeight: '1.5vw'}}>Veraval Road ,Near Essar Petrol Pump Talala(Gir), Gir Somnath, Gujarat, India Pincode : 362150</Typography>
                </Box>
            </Grid>
        </Stack>
        <Box display="flex" justifyContent="space-between" flexDirection="row" className="footnote">
            <Typography variant="subtitle2">Copyrights@ 2023 • www.shreecottages.com</Typography>
            <Box display="flex" flexDirection="row">
            <Typography variant="subtitle2">Privacy Policy</Typography>
            <Divider orientation="vertical" sx={{height:"1.2vw", backgroundColor: "warning.main", m:"0 0.5vw 1vw 0.5vw"}}/>
            <Typography variant="subtitle2">Terms & Condition</Typography>
            <Divider orientation="vertical" sx={{height:"1.2vw", backgroundColor: "warning.main", m:"0 0.5vw 1vw 0.5vw"}}/>
            <Typography variant="subtitle2">Site map</Typography>
            </Box>
        </Box>
        </Box>
    );
}