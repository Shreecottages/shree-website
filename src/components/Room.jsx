import React from "react";
import '../styles/Room.css';
import { Box, Typography, Divider, Paper, Button, MobileStepper, Stack, IconButton, Grid, List, ListItem, useMediaQuery } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Helmet } from "react-helmet";
import ShreeRooms from "../images/Rooms_Images/RoomT3/T3(2).jpg";
const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");


const steps = [
    {
        label: 'Room T1',
        description: `Indulge in the comfort and convenience of Room T1 at Shree Cottages. Located on the ground floor of our cottages, this room offers a perfect blend of relaxation and necessary amenities. Immerse yourself in the serene ambiance and enjoy a restful stay. Whether it's the cozy interiors or the well-appointed facilities, Room T1 ensures a delightful experience. Unwind and make the most of your time in this inviting space, designed to provide utmost comfort during your stay at Shree Cottages.`,
        image: ['RoomT1/T1(1).jpg', 'RoomT1/T1(2).jpg', 'RoomT1/T1(3).jpg','RoomT1/T1(4).jpg'],
        amenities: ['24/7 Generator Power-Backup', 'Mineral Water', 'Makeup / Shaving Mirror',
            'Complimentary Wi-Fi', 'Housekeeping', 'Curtains/Shades',
            'Wardrobe', 'Complete Bedding',
            'Independent Cottage', 'Daily Room Cleaning',
            '24/7 Hot Water', 'Dustbins',
            '24/7 Room Service', 'Ceiling Fan', 'Western Toilet Seat']
    },
    {
        label: 'Room T2',
        description: `Experience luxury and elegance in Room T2 at Shree Cottages. Situated on the first floor of our cottages, this room offers a gallery with a breathtaking garden view, providing a tranquil and picturesque atmosphere. Indulge in the spaciousness and enjoy the comfort of well-appointed amenities.  Whether it's admiring the scenic beauty or relaxing in the cozy interiors, Room T2 promises a memorable stay. Immerse yourself in the charm of this room and create lasting memories at Shree Cottages.`,
        image: ['RoomT2/T2(1).jpg', 'RoomT2/T2(2).jpg', 'RoomT2/T2(3).jpg','RoomT2/T2(4).jpg'],
        amenities: ['24/7 Generator Power-Backup', 'Mineral Water', 'Makeup / Shaving Mirror',
            'Complimentary Wi-Fi', 'Housekeeping', 'Curtains/Shades',
            'Wardrobe', 'Complete Bedding',
            'Independent Cottage', 'Daily Room Cleaning',
            '24/7 Hot Water', 'Dustbins',
            '24/7 Room Service', 'Ceiling Fan', 'Western Toilet Seat']
    },
    {
        label: 'Room T3',
        description: `Discover the serenity and convenience of Room T3 at Shree Cottages. Located near the garden, this room offers a peaceful retreat amidst lush surroundings. Unwind and relax in the comfortable ambiance while enjoying the amenities provided. Whether it's enjoying the scenic views, immersing in nature, or simply rejuvenating in the well-appointed space, Room T3 ensures a memorable stay. Experience tranquility and comfort in this delightful room, designed to enhance your stay at Shree Cottages.`,
        image: ['RoomT3/T3(1).jpg', 'RoomT3/T3(2).jpg', 'RoomT3/T3(3).jpg','RoomT3/T3(4).jpg'],
        amenities: ['24/7 Generator Power-Backup', 'Mineral Water', 'Makeup / Shaving Mirror',
            'Complimentary Wi-Fi', 'Housekeeping', 'Curtains/Shades',
            'Wardrobe', 'Complete Bedding',
            'Independent Cottage', 'Daily Room Cleaning',
            '24/7 Hot Water', 'Dustbins',
            '24/7 Room Service', 'Ceiling Fan', 'Western Toilet Seat']
    },
];

export default function Room() {

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    const maxImg = steps[activeStep].image.length;

    const [activeImg, setActiveImg] = React.useState(0);
    const handleNext = () => {
        setActiveImg((prevActiveImg) => prevActiveImg + 1);
        console.log(`next=${activeImg}`);
    };
    const handleBack = () => {
        setActiveImg((prevActiveImg) => prevActiveImg - 1);
        console.log(`back=${activeImg}`);
    };
    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
    
    return (
        <Stack>
            <Helmet>
                <title>Sasan Gir Resort Booking At Best Price - Shree Cottages</title>
                <meta name="description" content="Resorts price range starts from Rs.1500 to 3000 per night in Sasan Gir. ✓Free WiFi ✓AC Rooms With Garden View ✓Swimming Pool ✓Free Cancellation."/>
                <meta name="keywords"content="shree Cottage, shree Party Plot, resort, hotel ,rooms , hotel rooms,sasan gir ,talala gir ,gir ,gujarat"/>
                <meta name="robots" content="index, follow"/>
                <meta name="canonical" content="https://shreecottages.com/rooms"/>
                <meta name="image" content={ShreeRooms} />

                <meta name="og:title" content="Sasan Gir Resort Booking At Best Price - Shree Cottages"/>
                <meta property="og:site_name" content="Shree Cottgaes" />
                <meta name="og:description" content="Resorts price range starts from Rs.1500 to 3000 per night in Sasan Gir. ✓Free WiFi ✓AC Rooms With Garden View ✓Swimming Pool ✓Free Cancellation."/>
                <meta name="og:image" content={ShreeRooms} />
            </Helmet>
            <Box sx={{
                width: "100vw",
                display: "flex",
                justifyContent: "space-between",
                background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? AboutUsTopM : AboutUsTop})`,
                boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
                height:{xs:"75vw",sm:"40vw",md:"30vw",lg:"25vw",xl:"20vw"},
                textAlign: "center",
                padding: { xs: "0vw", md: "0vw 10vw" },
                // backgroundSize:"100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                '@media(max-width:300px)':{
                    height:"100vw"
                }
            }}>
                <Box
                    sx={{
                        // marginLeft: { xs: "-30px", lg: "200px" },
                        backgroundImage: `url(${AboutFlowerLeft})`,
                        backgroundRepeat: "no-repeat",
                        width: {xs: "25vw", md: "200px", lg: "250px"},
                        backgroundSize: "contain",
                        // marginTop: "160px",
                        backgroundPosition: "bottom",
                        // backgroundPositionX:"left",
                    }}
                ></Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center",alignItems:"center", p: "5vw 0vw",width:{xs:"60%",sm:"80vw"} }}>
                    <Typography variant="h2" sx={{ color: "warning.main" }}>Rooms</Typography>
                    <Divider orientation="vertical" variant="middle" sx={{ height: "1.55rem", width: "1px", backgroundColor: "warning.main", alignSelf: "center", m: '1.1rem' }} />
                    <Box sx={{ display: "flex", m: { xs: " 0vw -10vw", sm: "0vw" } }}>
                        <Button variant="text" className={`room ${activeStep === 0 && "active"}`} sx={{ color: "warning.main", textTransform: 'none', padding: '0', mr: { xs: "2.5vw", sm: "2vw", lg: '4vw' }}} onClick={() => { setActiveStep(0); setActiveImg(0); }}><Typography variant="h4" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", lg: '1.7rem' }, cursor: 'pointer','@media(max-width:300px)':{fontSize:"1rem"}}}>{steps[0].label}</Typography></Button>
                        <Button variant="text" className={`room ${activeStep === 1 && "active"}`} sx={{ color: "warning.main", textTransform: 'none', padding: '0', mr: { xs: "2.5vw", sm: "2vw", lg: '4vw' } }} onClick={() => { setActiveStep(1); setActiveImg(0); }}><Typography variant="h4" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", lg: '1.7rem' }, cursor: 'pointer','@media(max-width:300px)':{fontSize:"1rem"} }}>{steps[1].label}</Typography></Button>
                        <Button variant="text" className={`room ${activeStep === 2 && "active"}`} sx={{ color: "warning.main", textTransform: 'none', padding: '0' }} onClick={() => { setActiveStep(2); setActiveImg(0); }}><Typography variant="h4" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", lg: '1.7rem' }, cursor: 'pointer','@media(max-width:300px)':{fontSize:"1rem"} }}>{steps[2].label}</Typography></Button>
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
                        width: { xs: "25vw", md: "200px", lg: "250px" },
                        backgroundSize: "contain",
                    }}
                ></Box>
            </Box>

            {/* ---------------------Slider for different room -Content --------------------------------------------------------------------------------------------------------------------*/}
            <Box sx={{ backgroundColor: "primary.main", padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>
                <Paper square elevation={0} sx={{ display: "flex", flexDirection: "column", bgcolor: 'common.white', borderRadius: { xs: "10px", md: "20px" },overflow:"clip" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                        <Box display="flex" className="image" sx={{position:"relative", width: "100%", borderRadius: { xs: "10px 10px 0px 0px", md: "0px" }, overflow: "hidden" }}>
                            <img style={{ width: "100%" }} src={require(`../images/Rooms_Images/${steps[activeStep].image[activeImg]}`)} />
                        </Box>
                            <Box sx={{
                                position: 'absolute',
                                // marginTop: { xs: '25%', md: '27%', xl: "37%" },
                                bottom: { xs: '43%', md: '43%', xl: "47%" },
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: '0 2.5vw',
                                width: "100%"
                            }}>
                                <IconButton onTouchStart={handleBack} onClick={isSmallScreen?null:handleBack} disabled={activeImg === 0}
                                    sx={{
                                        backgroundColor: "common.black",
                                        border: "1px solid",
                                        borderColor: "common.black",
                                        "&.Mui-disabled": { backgroundColor: "common.black", opacity: 0.2 },
                                        width: { xs: '2rem', md: '2.5rem', xl: "3.5rem" },
                                        height: { xs: '2rem', md: '2.5rem', xl: "3.5rem" },
                                        borderRadius: { xs: "4px", md: "0px" },
                                        padding: "0.5vw",
                                        opacity: "0.7",
                                        "&:hover": {
                                            opacity: "0.9",
                                            backgroundColor: "common.black",
                                        }
                                    }}>
                                    <ArrowForwardIcon
                                        sx={{
                                            transform: 'rotate(180deg)',
                                            backgroundColor: "common.black",
                                            color: 'common.white',
                                            width: { xs: '1rem', md: '1.2rem', xl: "1.5rem" },
                                        }}
                                    />
                                </IconButton>
                                <IconButton onTouchStart={handleNext} onClick={isSmallScreen?null:handleNext} disabled={activeImg === maxImg - 1}
                                    sx={{
                                        backgroundColor: "common.black",
                                        border: "1px solid",
                                        borderColor: "common.black",
                                        "&.Mui-disabled": { backgroundColor: "common.black", opacity: 0.2 },
                                        width: { xs: '2rem', md: '2.5rem', xl: "3.5rem" },
                                        height: { xs: '2rem', md: '2.5rem', xl: "3.5rem" },
                                        borderRadius: { xs: "4px", md: "0px" },
                                        padding: "0.5vw",
                                        opacity: "0.7",
                                        "&:hover": {
                                            opacity: "0.9",
                                            backgroundColor: "common.black",
                                        }
                                    }}>
                                    <ArrowForwardIcon
                                        sx={{
                                            backgroundColor: "common.black",
                                            color: 'common.white',
                                            width: { xs: '1rem', md: '1.2rem', xl: "1.5rem" },
                                        }}
                                    />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <MobileStepper
                                    variant="dots"
                                    steps={maxImg}
                                    position="static"
                                    activeStep={activeImg}
                                    sx={{
                                        position: "absolute",
                                        // marginBottom: { xs: "45%", md: "50%", lg: "12%" },
                                        bottom:{ xs: "2%", md: "4%", lg: "4%" },
                                        background: 'none',
                                        justifyContent: 'center',
                                        "& .MuiMobileStepper-dot": {
                                            backgroundColor: "transparent",
                                            border: "1px solid #FFFFFF",
                                            width: { xs: "4vw", md: "2.5vw", lg: "1.5vw" },
                                            height: { xs: "4vw", md: "2.5vw", lg: "1.5vw" },
                                            borderRadius: "0px",
                                            margin: "1px"
                                        },
                                        "& .MuiMobileStepper-dotActive": {
                                            backgroundColor: "#FFFFFF"
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                        
                    </Box>


                    {/* ---------------Textual content------------------------------------------------------------------------------ */}

                    <Box sx={{ padding: "3vw 2.5vw" }}>
                        <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: { xs: "2vw", md: "0vw" } }}>
                            <Typography variant="h2">{steps[activeStep].label}</Typography>
                            <Typography variant="body1" sx={{ m: '2.5vw 0vw', fontSize: { md: '1.2vw' } }}>{steps[activeStep].description}</Typography>

                            {/* -----------------Amenities content--------------------------------------------------------------------------- */}
                            <Typography variant="h2" sx={{ mt: { xs: "5vw", md: "0vw" } }}>Amenities</Typography>
                        </Box>
                        <Box sx={{ padding: "2vw 0vw" }}>
                            <List sx={{ listStyle: "none", pl: 2 }} disablePadding>
                                <Grid container columns={{ xs: 2, md: 8, lg: 12 }}>
                                    {(steps[activeStep].amenities).map((_, index) => (
                                        <Grid xs={2} sm={4} key={index}>
                                            <ListItem sx={{ display: 'list-item' }} disablePadding>• {steps[activeStep].amenities[index]}</ListItem>
                                        </Grid>
                                    ))}
                                </Grid>
                            </List>
                        </Box>
                        <Button variant="contained" sx={{ m: { xs: "2vw 0vw 4vw 1vw", md: "0vw" } }} onClick={() => window.open("https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA", "_blank")}>Book now</Button>
                    </Box>
                </Paper>
            </Box>

        </Stack>
    );
}