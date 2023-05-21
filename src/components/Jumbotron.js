import React from 'react'
import style from '../styles/Jumbotron.module.css'
import Box from '@mui/material/Box';
import logo from '../eventImg/jumbotron.png'
import Typography from '@mui/material/Typography';

const Jumbotron = () => {
    const styles = {
        root: {
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: ''
        },
    };

    return (
        <Box style={styles.root} sx={{ backgroundImage: logo, mt: '5.9rem', height: '38vh', background: 'rgba(61, 37, 33, 0.5);', boxShadow: 'inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9);', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', fontFamily: '"Bona Nova", serif' }}>
            {/* <Typography > */}

            <Typography component='h3' variant='h4' className={style.heading}> Events & Meetings </Typography>

            <Typography className={style.heading} sx={{color: '#ffbb70'}}>
                We give proper emphasis to every minor detail of your event to create something unique.

            </Typography>
            {/* </Typography> */}

        </Box>
    )
}

export default Jumbotron
