import React from "react";
import '../styles/Room.css';
import { Box, Typography, Divider, Paper, Button, MobileStepper, Stack, IconButton, Grid, List, ListItem, useMediaQuery } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");


const steps = [
    {
      label: 'Room T1',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
      image: ['room1.png','room1.png','room1.png'],
      amenities: ['24/7 Generator Power-Backup','Mineral Water','Makeup / Shaving Mirror',
      'Complimentary Wi-Fi','Housekeeping','Curtains/Shades',
      'Television','Wardrobe','Complete Bedding',
      'Complimentary Breakfast','Independent Cottage','Daily Room Cleaning',
      'Complimentary Bottled Water','24/7 Hot Water','Dustbins',
      '24/7 Room Service','Ceiling Fan','Western Toilet Seat']
    },
    {
        label: 'Room T2',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
        image: ['room1.png','room1.png'],
        amenities: ['24/7 Generator Power-Backup','Mineral Water','Makeup / Shaving Mirror',
      'Complimentary Wi-Fi','Housekeeping','Curtains/Shades',
      'Television','Wardrobe','Complete Bedding',
      'Complimentary Breakfast','Independent Cottage','Daily Room Cleaning',
      'Complimentary Bottled Water','24/7 Hot Water','Dustbins',
      '24/7 Room Service','Ceiling Fan','Western Toilet Seat']
    },
    {
        label: 'Room T3',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
        image: ['room1.png','room1.png','room1.png','room1.png'],
        amenities: ['24/7 Generator Power-Backup','Mineral Water','Makeup / Shaving Mirror',
      'Complimentary Wi-Fi','Housekeeping','Curtains/Shades',
      'Television','Wardrobe','Complete Bedding',
      'Complimentary Breakfast','Independent Cottage','Daily Room Cleaning',
      'Complimentary Bottled Water','24/7 Hot Water','Dustbins',
      '24/7 Room Service','Ceiling Fan','Western Toilet Seat']
    },
];

export default function Room(){

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    const maxImg = steps[activeStep].image.length;
    
    const [activeImg, setActiveImg] = React.useState(0);
    const handleNext = () => {
        setActiveImg((prevActiveImg) => prevActiveImg + 1);
    };
    const handleBack = () => {
        setActiveImg((prevActiveImg) => prevActiveImg - 1);
    };
    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
    return(
        <Stack>
            <Box sx={{
                width:"100vw",
                display: "flex",
                justifyContent: "space-between",
                background:`rgba(61, 37, 33, 0.5) url(${isSmallScreen? AboutUsTopM :AboutUsTop})`,
                boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
                textAlign:"center",
                padding:{xs:"0vw",md:"0vw 10vw"},
                // backgroundSize:"100%",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}>
                <Box
                    sx={{
                        // marginLeft: { xs: "-30px", lg: "200px" },
                        backgroundImage: `url(${AboutFlowerLeft})`,
                        backgroundRepeat: "no-repeat",
                        width: { xs: "25vw", md: "200px", lg:"250px" },
                        backgroundSize:"contain",
                        // marginTop: "160px",
                        backgroundPosition:"bottom",
                        // backgroundPositionX:"left",
                    }}
                ></Box>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",p:"5vw 0vw" }}>
                    <Typography variant="h2" sx={{color:"warning.main"}}>Rooms</Typography>
                    <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"warning.main", alignSelf:"center", m:'1.1rem'}}/>
                    <Box sx={{display:"flex",m:{xs:" 0vw -10vw",sm:"0vw"}}}>
                        <Button variant="text" className={`room ${activeStep===0 && "active"}`} sx={{color:"warning.main", textTransform: 'none', padding:'0', mr: {xs:"2vw",sm:"2vw",lg:'4vw'}}} onClick={()=>{setActiveStep(0); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{xs:"1.1rem",sm:"1.5rem",lg:'1.7rem'}, cursor:'pointer'}}>{steps[0].label}</Typography></Button>
                        <Button variant="text" className={`room ${activeStep===1 && "active"}`} sx={{color:"warning.main", textTransform: 'none', padding:'0', mr: {xs:"2vw",sm:"2vw",lg:'4vw'}}} onClick={()=>{setActiveStep(1); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{xs:"1.1rem",sm:"1.5rem",lg:'1.7rem'}, cursor:'pointer'}}>{steps[1].label}</Typography></Button>
                        <Button variant="text" className={`room ${activeStep===2 && "active"}`} sx={{color:"warning.main", textTransform: 'none', padding:'0'}} onClick={()=>{setActiveStep(2); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{xs:"1.1rem",sm:"1.5rem",lg:'1.7rem'}, cursor:'pointer'}}>{steps[2].label}</Typography></Button>
                    </Box>
                    {/* <Box sx={{display:{md:"none",xs:"flex"}}}>
                        <IconButton onClick={handleBackStep} disabled={activeStep === 0} sx={{ padding:"0","&.Mui-disabled": { opacity: 0.5 }}}>
                            <ArrowBackIosRoundedIcon sx={{color:"warning.main","@media(max-width: 500px)":{fontSize:"1.2rem"}}} />
                        </IconButton>
                        <Typography variant="h4" sx={{m:"0px 5px",color:"warning.main","@media(max-width: 500px)":{fontSize:"1.2rem"}}}>{steps[activeStep].label}</Typography>
                        <IconButton onClick={handleNextStep} disabled={activeStep === maxSteps - 1} sx={{padding:"0", "&.Mui-disabled": { opacity: 0.5 }}}>
                            <ArrowForwardIosRoundedIcon sx={{color:"warning.main","@media(max-width: 500px)":{fontSize:"1.2rem"}}} />
                        </IconButton>
                    </Box> */}
                </Box>
                <Box
                    sx={{
                        // marginRight: { sx: "50px", lg: "200px" },
                        backgroundImage: `url(${AboutFLowerRight})`,
                        backgroundRepeat: "no-repeat",
                        width: { xs: "25vw", md: "200px",lg:"250px" },
                        backgroundSize:"contain",
                    }}
                ></Box>
            </Box>

            {/* ---------------------Slider for different room -Content --------------------------------------------------------------------------------------------------------------------*/}
            <Box sx={{backgroundColor:"primary.main",padding:{xs:"10vw 5vw",md:"5vw 10vw"}}}>
                <Paper square elevation={0} sx={{display:"flex", flexDirection:"column",bgcolor: 'common.white',borderRadius:{xs:"10px",md:"0px"}}}>
                    <Box sx={{display:"flex", flexDirection:"column",width:"100%"}}>
                        <Box sx={{
                                    position: 'relative',
                                    // top: {xs:'40%',md:'47%'},
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    // padding: '0 2.5vw',
                                    width: "100%",
                                    // alignItems:"center"
                                }}>
                            <Box sx={{
                                        position: 'absolute',
                                        marginTop: {xs:'25%',md:'27%',xl:"27%"},
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        padding: '0 2.5vw',
                                        width: "100%"
                                    }}>
                                    <IconButton onClick={handleBack} disabled={activeImg === 0} 
                                    sx={{ 
                                            backgroundColor:"common.black",
                                            border:"1px solid",
                                            borderColor:"common.black",
                                            "&.Mui-disabled": { backgroundColor:"common.black",opacity: 0.2 },
                                            width:{xs:'2rem',md:'2.5rem',xl:"3.5rem"},
                                            height: {xs:'2rem',md:'2.5rem',xl:"3.5rem"},
                                            borderRadius:{xs:"4px",md:"0px"},
                                            padding:"0.5vw",
                                            opacity:"0.7",
                                            "&:hover":{
                                                opacity:"0.9",
                                                backgroundColor:"common.black",
                                            }
                                        }}>
                                        <ArrowForwardIcon 
                                        sx={{
                                            transform: 'rotate(180deg)',
                                            backgroundColor:"common.black",
                                            color: 'common.white',
                                            width: {xs:'1rem',md:'1.2rem',xl:"1.5rem"},
                                        }}
                                        />
                                    </IconButton>
                                    <IconButton onClick={handleNext} disabled={activeImg === maxImg - 1}
                                    sx={{ 
                                            backgroundColor:"common.black",
                                            border:"1px solid",
                                            borderColor:"common.black",
                                            "&.Mui-disabled": { backgroundColor:"common.black",opacity: 0.2 },
                                            width:{xs:'2rem',md:'2.5rem',xl:"3.5rem"},
                                            height: {xs:'2rem',md:'2.5rem',xl:"3.5rem"},
                                            borderRadius:{xs:"4px",md:"0px"},
                                            padding:"0.5vw",
                                            opacity:"0.7",
                                            "&:hover":{
                                                opacity:"0.9",
                                                backgroundColor:"common.black",
                                            }
                                        }}>
                                        <ArrowForwardIcon 
                                        sx={{
                                            backgroundColor:"common.black",
                                            color: 'common.white',
                                            width: {xs:'1rem',md:'1.2rem',xl:"1.5rem"},
                                        }}
                                        />
                                    </IconButton>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
                                    <MobileStepper
                                        variant="dots"
                                        steps={maxImg}
                                        position="static"
                                        activeStep={activeImg}
                                        sx={{
                                            position:"absolute",
                                            marginTop:{xs:"45%",md:"50%",lg:"52%"},
                                            background: 'none',
                                            justifyContent: 'center',
                                            "& .MuiMobileStepper-dot": {
                                                backgroundColor: "transparent",
                                                border:"1px solid #FFFFFF",
                                                width:{xs:"4vw",md:"2.5vw",lg:"1.5vw"},
                                                height:{xs:"4vw",md:"2.5vw",lg:"1.5vw"},
                                                borderRadius: "0px",
                                                margin:"1px"
                                            },
                                            "& .MuiMobileStepper-dotActive": {
                                                backgroundColor: "#FFFFFF"
                                            }
                                        }}      
                                    />
                                    </Box>
                            </Box>
                            <Box display="flex" className="image" sx={{width:"100%",borderRadius:{xs:"10px 10px 0px 0px",md:"0px"},overflow:"hidden"}}>
                                <img  style={{width:"100%"}} src={require(`../images/Rooms/${steps[activeStep].image[activeImg]}`)} />
                            </Box>
                    </Box>
    

                    {/* ---------------Textual content------------------------------------------------------------------------------ */}
                    
                    <Box sx={{padding:"3vw 2.5vw"}}>
                        <Box sx={{textAlign:{xs:"center",md:"left"},mt:{xs:"2vw",md:"0vw"}}}>
                        <Typography variant="h2">{steps[activeStep].label}</Typography>
                        <Typography variant="body1" sx={{m:'2.5vw 0vw',fontSize:{md:'1.2vw'}}}>{steps[activeStep].description}</Typography>
            
                    {/* -----------------Amenities content--------------------------------------------------------------------------- */}
                        <Typography variant="h2" sx={{mt:{xs:"5vw",md:"0vw"}}}>Amenities</Typography>
                        </Box>
                        <Box sx={{padding:"2vw 0vw"}}>
                            <List sx = {{listStyle: "none",pl: 2}} disablePadding>
                                <Grid container columns={{ xs: 2, md: 8, lg: 12 }}>
                                    {(steps[activeStep].amenities).map((_, index) => (
                                        <Grid xs={2} sm={4} key={index}>
                                            <ListItem sx = {{display: 'list-item'}} disablePadding>• {steps[activeStep].amenities[index]}</ListItem>
                                        </Grid>
                                    ))}
                                </Grid>
                            </List>
                        </Box>
                        <Button variant="contained" sx={{m:{xs:"2vw 0vw 4vw 1vw",md:"0vw"}}} onClick={()=> window.open("https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA", "_blank")}>Book now</Button>
                    </Box>
                </Paper>
            </Box>        
       
        </Stack>
    );
}