import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
const header1 = require('../images/exp/header1.png');
const gir_jungle = require('../images/exp/gir_jungle.png');
const devaliya = require('../images/exp/devaliya.png');
const header2 = require('../images/exp/header2.png');
const jamjir = require('../images/exp/jamjir.png');
const k_b = require('../images/exp/k&b.png');
const somnath = require('../images/exp/somnath.png');
const tulsiShyam = require('../images/exp/tulsiShyam.png');
const map_spot = require('../images/map-spot.png');

export default function Experience(){
    return(
        <Stack>
            <Box sx={{
                width:"100vw",
                display: "flex",
                justifyContent: "space-between",
                background:`rgba(61, 37, 33, 0.5) url(${AboutUsTop})`,
                boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
                textAlign:"center",
                padding:{xs:"0vw",md:"0vw 10vw"},
                backgroundSize:"100%",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}>
                <Box
                    sx={{
                        // marginLeft: { xs: "-30px", lg: "200px" },
                        backgroundImage: `url(${AboutFlowerLeft})`,
                        backgroundRepeat: "no-repeat",
                        width: { xs: "25vw", md: "250px" },
                        backgroundSize:"contain",
                        // marginTop: "160px",
                        backgroundPosition:"bottom",
                        // backgroundPositionX:"left",
                    }}
                ></Box>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",p:"5vw 0vw" }}>
                    <Typography variant="h2" sx={{color:"warning.main"}}>Experience</Typography>
                    <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"warning.main", alignSelf:"center", m:'1.1rem'}}/>
                    <Typography variant="body1" sx={{fontFamily:"Bona Nova", color:"warning.main", textAlign:"left"}}>ગાજે મેહુલિયો ને સાવજની દહાડ🦁 <br />જાણજો એજ વનરાવન ગીર🏕️....</Typography>
                </Box>
                <Box
                    sx={{
                        // marginRight: { sx: "50px", lg: "200px" },
                        backgroundImage: `url(${AboutFLowerRight})`,
                        backgroundRepeat: "no-repeat",
                        width: { xs: "25vw", md: "250px" },
                        backgroundSize:"contain",
                    }}
                ></Box>
            </Box>

{/* ---------------------------------------------------Content---------------------------------------------------------- */}

            <Box sx={{padding:"5vw 10vw"}}>
                {/* --------Header :1------------------ */}
                <Box sx={{
                    width:"100%",
                    justifyContent:"center",
                }}>
                    <Box><img src={header1} style={{width:"100%"}}/></Box>
                    <Box sx={{padding:"0vw 10vw", position:"relative", top:{xs:"-2rem",md:"-3.55rem"}}}>
                        <Typography variant="h2" sx={{
                                                    alignSelf:"center", 
                                                    textAlign:"center", 
                                                    background:"linear-gradient(180deg, #FFE2D8 0%, #F2D0CD 100%, #E6C2C2 100%)",
                                                    padding:"2vw", 
                                                    borderRadius:"20px", 
                                                    fontSize:{xs:"1.25rem",md:"2rem",xl:"2.25rem"},
                                                    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                }}>To catch a glimpse of the king of the jungle</Typography>
                    </Box>
                </Box>

                {/* --------Content for Header :1------------------ */}

                <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}}>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                        margin:{xs:"0vw",md:"0vw 2vw 0vw 0vw"}
                    }}>
                        <Box><img src={gir_jungle} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>Gir Jungle Safari</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>15 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                            </Box>
                    </Box>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                    }}>
                        <Box><img src={devaliya} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>Devaliya Safari Park</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>26 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                        </Box>
                    </Box>
                </Box>

                {/* --------Header :2------------------ */}
                <Box sx={{
                    width:"100%",
                    justifyContent:"center",
                }}>
                    <Box><img src={header2} style={{width:"100%"}}/></Box>
                    <Box sx={{padding:"0vw 10vw", position:"relative", top:{xs:"-2rem",md:"-3.55rem"}}}>
                        <Typography variant="h2" sx={{
                                                    alignSelf:"center", 
                                                    textAlign:"center", 
                                                    background:"linear-gradient(180deg, #FFE2D8 0%, #F2D0CD 100%, #E6C2C2 100%)",
                                                    padding:"2vw", 
                                                    borderRadius:"20px", 
                                                    fontSize:{xs:"1.25rem",md:"2rem",xl:"2.25rem"},
                                                    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                }}>To feel the nature of gir</Typography>
                    </Box>
                </Box>
                {/* --------Content for Header :2------------------ */}

                <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}}>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                        margin:{xs:"0vw",md:"0vw 2vw 0vw 0vw"}
                    }}>
                        <Box><img src={jamjir} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>Jamjir Waterfall</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>15 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                        // margin:{xs:"0vw",md:"0vw 2vw"}
                    }}>
                        <Box><img src={k_b} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>Kankai & Banej</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>15 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}}>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                        margin:{xs:"0vw",md:"0vw 2vw 0vw 0vw"}
                    }}>
                        <Box><img src={somnath} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>Somnath Temple</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>15 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width:"100%",
                        justifyContent:"center",
                        // margin:{xs:"0vw",md:"0vw 2vw"}
                    }}>
                        <Box><img src={tulsiShyam} style={{width:"100%"}}/></Box>
                        <Box flexDirection="column" textAlign="left" sx={{
                                                                                m:'0vw 2vw', 
                                                                                // display: {xs:"block", md:"flex"}, 
                                                                                background:"linear-gradient(120.89deg, #FFE2D8 31.34%, #F2D0CD 100.05%, #E6C2C2 100.05%)",
                                                                                padding: {xs:"3vw 4vw",md:"2vw 3vw"},
                                                                                position: 'relative',
                                                                                top:{xs:"-4.5rem",sm:"-6rem",md:"-6rem",xl:"-8.55rem"},
                                                                                marginBottom:{xs:"-2.5rem",sm:"-4rem",md:"-4rem",xl:"-5.55rem"},
                                                                                borderRadius: '20px',
                                                                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'
                                                                                }}>
                                <Typography variant="h4" sx={{mb:"1.5vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>TulsiShyam</Typography>
                                <Typography variant="body1" sx={{textAlign: "left",fontSize:{xs:"0.8rem",md:"0.9rem",xl:"1.1rem"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Typography>
                                <Typography variant="h4" sx={{m:"1vw 0vw",fontSize:{xs:"1.3rem",md:"1.5rem",xl:"1.7rem"}}}>15 km far</Typography>
                                <Box>
                                    <Button variant="contained" sx={{mr:'1.5vw','@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Explore <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}}/></Button>
                                    <Button variant="contained" sx={{'@media(max-width:1150px) and (min-width:900px)':{fontSize:"1rem",padding:"2px 8px"}}}>Direction <img src={map_spot} alt="" style={{width:"1rem", marginLeft:'0.5vw'}} /></Button>
                                </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}