import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo1 from '../eventImg/content-1.png';
import logo2 from '../eventImg/content-2.png';
import logo3 from '../eventImg/content-3.png';
import Button from '@mui/material/Button';

const Content = () => {
    return (

        <Box sx={{ background: '#FFE2D8;' }} style={{ paddingBottom: '4rem' }}>

            <Container >
                <Stack>

                    <Box sx={{ display: 'flex', mt: '4.2rem', height: '23vw' }}>
                        <Typography >
                            <img src={logo1} alt="Logo" style={{ borderRadius: '20px 0px 0px 20px;', width: '40vw', height: '23vw' }} />
                        </Typography>
                        <Typography sx={{ background: '#FFFFFF', borderRadius: '0px 20px 20px 0px' }}>
                            <Typography sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '1.5rem', ml: '4rem' }} > Wedding </Typography>
                            <Typography sx={{ color: '#484848', fontFamily: 'Poppins', mt: '2rem', ml: '4rem', mr: '4rem', fontSize: '17px' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.
                            </Typography>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', mt: '4.2rem', height: '23vw' }}>

                        <Typography sx={{ background: '#FFFFFF', borderRadius: '20px 0px 0px 20px' }}>
                            <Typography sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '1.5rem', ml: '4rem', borderRadius: '0px 20px 20px 0px' }} > Conferences </Typography>
                            <Typography sx={{ color: '#484848', fontFamily: 'Poppins', mt: '2rem', ml: '4rem', mr: '4rem', fontSize: '17px' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </Typography>

                        <Typography >
                            <img src={logo2} alt="Logo" style={{ borderRadius: '20px 0px 0px 20px;', width: '40vw', height: '23vw' }} />
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', mt: '4.2rem', height: '23vw' }}>
                        <Typography >
                            <img src={logo3} alt="Logo" style={{ borderRadius: '20px 0px 0px 20px;', width: '40vw', height: '23vw' }} />
                        </Typography>
                        <Typography sx={{ background: '#FFFFFF', borderRadius: '0px 20px 20px 0px' }}>
                            <Typography sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '1.5rem', ml: '4rem' }} > Event Planning </Typography>
                            <Typography sx={{ color: '#484848', fontFamily: 'Poppins', mt: '2rem', ml: '4rem', mr: '4rem', fontSize: '17px' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </Typography>
                    </Box>

                </Stack>

                <Button sx={{ background: 'linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)', borderRadius: '5px', color: '#3D2521', padding: '10px 30px', textAlign: 'center', margin: 'auto', display: 'flex', justifyContent: 'center', mt: '4.6rem' }}>
                    Call us
                </Button>
            </Container>
        </Box>
    )
}

export default Content
