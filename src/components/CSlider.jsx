import React from "react";
import { Box, Typography, Divider, Paper, Button, MobileStepper } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import '../styles/Homepage.css';

const steps = [
    {
      label: 'Room T1',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
      image: 'room1.png'
    },
    {
        label: 'Room T2',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
        image: 'room1.png'
    },
    {
        label: 'Room T3',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
        image: 'room1.png'
    },
  ];

const CSlider = () =>{
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
        <>
            <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:"5vw 10vw", backgroundColor: "primary.main"}}>
                <Typography variant="h2">The Stay</Typography>
                <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
                <Box display='flex' flexDirection="column" sx={{alignItems: 'center'}}>
                    <Box display="flex">
                    <Button variant="text" sx={{color:'secondary.main', textTransform: 'none', padding:'0', mr: '3vw'}} disabled={activeStep!=0}><Typography variant="h4" sx={{fontSize:{md:'1.7vw'}, cursor:'default'}}>{steps[0].label}</Typography></Button>
                    <Button variant="text" sx={{color:'secondary.main', textTransform: 'none', padding:'0', mr: '3vw'}} disabled={activeStep!=1}><Typography variant="h4" sx={{fontSize:{md:'1.7vw'}, cursor:'default'}}>{steps[1].label}</Typography></Button>
                    <Button variant="text" sx={{color:'secondary.main', textTransform: 'none', padding:'0'}} disabled={activeStep!=2}><Typography variant="h4" sx={{fontSize:{md:'1.7vw'}, cursor:'default'}}>{steps[2].label}</Typography></Button>
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
                                <img  src={`../images/Rooms/${steps[activeStep].image}`} />
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
                                <Button variant="text" onClick={handleBack} disabled={activeStep === 0} sx={{ "&.Mui-disabled": { opacity: 0.4 } }}>
                                <ExpandCircleDownIcon 
                                    sx={{
                                        transform: 'rotate(90deg)',
                                        color: 'common.white',
                                        width: '2.5rem',
                                        height: '2.5rem',
                                    }}
                                    
                                /></Button>
                                <Button variant="text" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ "&.Mui-disabled": { opacity: 0.4 } }}>
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
                        <Box display="flex" flexDirection="column" textAlign="left" sx={{width: {xs: '100%',md:'40%'}, p:{xs:'5vw 10vw', md:'2vw 3vw'}}}>
                            <Typography variant="h4" sx={{fontSize:{md:'1.7vw'}}}>{steps[activeStep].label}</Typography>
                            <Typography variant="body1" sx={{m:'2.5vw 0vw',fontSize:{md:'1.2vw'}}}>{steps[activeStep].description}</Typography>
                            <Button variant="contained" sx={{fontSize:{md:'1.05vw'}, width: {xs:'6rem',sm:'7.5rem',md:'8.15vw'}}}>Book now</Button>
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