import React from 'react';
import style from '../../styles/Jumbotron.module.css';
import Box from '@mui/material/Box';
import logo from '../../eventImg/jumbotron.png';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

import LeftSvg from '../../assets/AboutFlowerLeft.png';
import RightSvg from '../../assets/AboutFlowersRight.png';

const ContactJumbotron = () => {
    const styles = {
        root: {
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '',
            // with: '100vw',
            boxShadow: 'inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9);',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '38vh',
            width: '98.5vw',
            backgroundImage: logo,
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
            top: '1vh',
            right: '17vh',
            width: '200px',
            height: '150px'
        },
        svgBottomLeft: {
            position: 'absolute',
            top: '18vh',
            left: '4vw',
            width: '200px',
            height: '150px'
        }
    };

    return (
        <Box style={styles.root} sx={{ backgroundImage: logo, height: '38vh', background: 'rgba(61, 37, 33, 0.5);', boxShadow: 'inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9);', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: '"Bona Nova", serif' }}>
            <Box sx={styles.container}>
                <Typography component='h3' variant='h4' className={style.heading}>
                    Contact us
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
                    Connect with us, we're here to help!
                </Typography>

                <Typography className={style.heading} sx={{ color: '#ffbb70', display: {xs: 'none', sm: 'none', md: 'block' } }}>

                    <img src={LeftSvg} sx={{ width: '150px' }} style={styles.svgBottomLeft} alt="" />
                    <img src={RightSvg} sx={{ width: '150px' }} style={styles.svgTopRight} alt="" />
                </Typography>

            </Box>
        </Box>
    );
};

export default ContactJumbotron;
