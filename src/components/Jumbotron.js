import React from 'react';
import style from '../styles/Jumbotron.module.css';
import Box from '@mui/material/Box';
import logo from '../eventImg/jumbotron.png';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

// import LeftSvg from '../assets/Group 82.svg'; // Replace 'your-svg-file' with your own SVG file name

import LeftSvg from '../assets/AboutFlowerLeft.png';
import RightSvg from '../assets/AboutFlowersRight.png';

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
        <Box style={styles.root} sx={{ backgroundImage: logo, mt: '5.9rem', height: '38vh', background: 'rgba(61, 37, 33, 0.5);', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: '"Bona Nova", serif' }}>
            <Box sx={styles.container}>
                <Typography component='h3' variant='h4' className={style.heading}>
                    Events & Meetings
                </Typography>

                <Divider
                    orientation="vertical"
                    variant="middle"
                    sx={{
                        height: "1.55rem",
                        width: "1px",
                        backgroundColor: "#ffbb70",
                        alignSelf: "center",
                        my: '1.1rem'
                    }}
                />

                <Typography className={style.heading} sx={{ color: '#ffbb70' }}>
                    We give proper emphasis to every minor detail of your event to create something unique.
                </Typography>

                <img src={LeftSvg} sx={{ width: '150px' }} style={styles.svgBottomLeft} alt="" />
                <img src={RightSvg} sx={{ width: '150px' }} style={styles.svgTopRight} alt="" />

            </Box>
        </Box>
    );
};

export default Jumbotron;
