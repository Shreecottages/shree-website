import React from "react";
import { Box, Typography, Divider, Paper, Button, MobileStepper } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import '../styles/Homepage.css';

const steps = [
    {
      label: 'Room T1',
      description: 'Located on the ground floor of our charming cottages, Room T1 offers comfortable accommodation with all necessary amenities. Enjoy a convenient and delightful stay surrounded by the natural beauty of our resort.',
      image: ['room1.png','room1.png','room1.png']
    },
    {
        label: 'Room T2',
        description: 'Situated on the first floor of our cottages, Room T2 provides a gallery with a picturesque garden view. Immerse yourself in tranquility while enjoying top-notch amenities, creating a perfect retreat for relaxation and rejuvenation.',
        image: ['room1.png','room1.png']
    },
    {
        label: 'Room T3',
        description: 'Nestled near our serene garden, Room T3 offers a peaceful and idyllic setting for your stay. Experience ultimate comfort and convenience with all amenities provided, ensuring a delightful and memorable stay at Shree Cottages.',
        image: ['room1.png','room1.png','room1.png','room1.png']
    },
  ];

const CSlider = () =>{
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeImg, setActiveImg] = React.useState(0);
    const maxSteps = steps.length;
    const maxImg = steps[activeStep].image.length;
    
    const handleNext = () => {
        setActiveImg((prevActiveImg) => prevActiveImg + 1);
        console.log("Img = ${}",activeImg);
    };

    const handleBack = () => {
        setActiveImg((prevActiveImg) => prevActiveImg - 1);
        console.log(activeImg);
    };

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
    };
    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log(activeStep);
    };


    return(
        <>
            <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:{xs:"10vw 5vw",md:"5vw 10vw"}, backgroundColor: "primary.main",maxWidth:"100vw",overflowX:"clip"}}>
                <Typography variant="h2">The Stay</Typography>
                <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
                <Box display='flex' flexDirection="column" sx={{alignItems: 'center'}}>
                    <Box sx={{display:{xs:"none",md:"flex"}}}>
                    <Button variant="text" className={`label ${activeStep===0 && "active"}`} sx={{color:'rgba(61, 37, 33, 0.6)', textTransform: 'none', padding:'0', mr: '3vw'}} onClick={()=>{setActiveStep(0); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{md:'1.7rem'}, cursor:'pointer'}}>{steps[0].label}</Typography></Button>
                    <Button variant="text" className={`label ${activeStep===1 && "active"}`} sx={{color:'rgba(61, 37, 33, 0.6)', textTransform: 'none', padding:'0', mr: '3vw'}} onClick={()=>{setActiveStep(1); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{md:'1.7rem'}, cursor:'pointer'}}>{steps[1].label}</Typography></Button>
                    <Button variant="text" className={`label ${activeStep===2 && "active"}`} sx={{color:'rgba(61, 37, 33, 0.6)', textTransform: 'none', padding:'0'}} onClick={()=>{setActiveStep(2); setActiveImg(0);}}><Typography variant="h4" sx={{fontSize:{md:'1.7rem'}, cursor:'pointer'}}>{steps[2].label}</Typography></Button>
                    </Box>
                    <Box sx={{display:{md:"none",xs:"flex"},alignItems:"center",mb:"1vw"}}>
                        <Button variant="text" onClick={handleBackStep} disabled={activeStep === 0} sx={{ "&.Mui-disabled": { opacity: 0.5 }}}>
                            <ArrowBackIosRoundedIcon sx={{color:"#3D2521"}} />
                        </Button>
                        <Typography variant="h4" sx={{}}>{steps[activeStep].label}</Typography>
                        <Button variant="text" onClick={handleNextStep} disabled={activeStep === maxSteps - 1} sx={{ "&.Mui-disabled": { opacity: 0.5 }}}>
                            <ArrowForwardIosRoundedIcon sx={{color:"#3D2521"}} />
                        </Button>
                    </Box>
                    <Paper
                        square
                        elevation={1}
                        sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column',md:'row'},
                        alignItems: 'center',
                        // height: '50vw',
                        // pl: 2,
                        bgcolor: 'common.white',
                        borderRadius: '20px',
                        m: '2vw 0vw'
                        }}
                    >
                        <Box sx={{
                            // backgroundImage: `url(../images/Rooms/${steps[activeStep].image})`,
                            // backgroundRepeat: 'no-repeat',
                            // backgroundSize: '100%',
                            position: 'relative',
                            // height:'150%',
                            width: {xs: '100%',md:'60%'},
                            display: "flex",
                            
                            }}>
                            <Box className="room-img" display="flex">
                                <img  src={require(`../images/Rooms/${steps[activeStep].image[activeImg]}`)} />
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                top: {xs:'40%',md:'47%'},
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: '0 2.5vw',
                                width: "100%"
                            }}>
                                <Button variant="text" onClick={handleBack} disabled={activeImg === 0} sx={{ "&.Mui-disabled": { opacity: 0.4 } }}>
                                <ExpandCircleDownIcon 
                                    sx={{
                                        transform: 'rotate(90deg)',
                                        color: 'common.white',
                                        width: '2.5rem',
                                        height: '2.5rem',
                                    }}
                                    
                                /></Button>
                                <Button variant="text" onClick={handleNext} disabled={activeImg === maxImg - 1} sx={{ "&.Mui-disabled": { opacity: 0.4 } }}>
                                <ExpandCircleDownIcon
                                    sx={{
                                        transform: 'rotate(-90deg)',
                                        color: 'common.white',
                                        width: '2.5rem',
                                        height: '2.5rem'
                                    }}
                                /></Button>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" sx={{width: {xs: '100%',md:'40%'}, p:{xs:'5vw 1rem', md:'2vw 3vw'},textAlign:{xs:"center",md:"left"},alignItems:{xs:"center",md:"normal"}}}>
                            <Typography variant="h4" sx={{fontSize:{md:'2vw',lg:"1.7rem"}}}>{steps[activeStep].label}</Typography>
                            <Typography variant="body1" sx={{m:'2.5vw 0vw',fontSize:{md:'1.2vw'}}}>{steps[activeStep].description}</Typography>
                            <Button variant="contained" sx={{fontSize:{md:'1.1vw'}, width: {xs:'6rem',sm:'7.5rem',md:'8.5vw',lg:'8.15vw'}}} onClick={()=> window.open("https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA", "_blank")}>Book now</Button>
                        </Box>
                    </Paper>
                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            background: 'none',
                            justifyContent: 'center',
                        }}      
                    />
                </Box>
            </Box>
        </>
    );
}

export default CSlider;