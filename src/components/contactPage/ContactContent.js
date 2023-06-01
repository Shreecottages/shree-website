import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import style from '../../styles/Contact.module.css'
import fbContact from "../../assets/fb-Contact.png";
import ytContact from "../../assets/yt-Contact.png";
import instaContact from "../../assets/insta-Contact.png";

const ContactContent = () => {
    return (
        <Box sx={{ background: '#FFE2D8', height: 'auto' }} mt={3} style={{ paddingBottom: '4rem' }}>
            <Container>
                <Grid container spacing={3} justifyContent="space-between">

                    <Grid item xs={12} md={12} lg={7}>
                        <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4} height={0.5}>
                            <Typography className="map-responsive" sx={{ borderRadius: '20px' }}>
                                <iframe className={style.map} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.609828612716!2d70.52531429999999!3d21.0482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2ca27bd28f1d1%3A0xe609e025f726b7c6!2sShree%20cottage!5e0!3m2!1sen!2sin!4v1653757676857!5m2!1sen!2sin" width="700" height="500" frameborder="0" style={{ border: 0, borderRadius: '20px' }} allowfullscreen></iframe>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12} lg={5}>
                        <Box ml={{ xs: 0, md: '2rem' }}>
                            <Typography variant="h4" sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', fontWeight: '400', mt: '2rem' }}>Get In Touch</Typography>

                            <Box mt={4}>
                                <input type="text" style={{ background: '#FFE2D8', width: '100%', height: '2rem', fontFamily: 'Poppins', fontSize: '20px', border: '1px solid #000000', boxShadow: 'inset 0px -4px 10px rgba(61, 37, 33, 0.2)', borderRadius: '5px' }} placeholder="  Enter text" />
                            </Box>

                            <Box mt={4}>
                                <input type="text" style={{ background: '#FFE2D8', width: '100%', height: '2rem', fontFamily: 'Poppins', fontSize: '20px', border: '1px solid #000000', boxShadow: 'inset 0px -4px 10px rgba(61, 37, 33, 0.2)', borderRadius: '5px' }} placeholder="  Email Address" />
                            </Box>

                            <Box mt={4}>
                                <input type="text" style={{ background: '#FFE2D8', width: '100%', height: '2rem', fontFamily: 'Poppins', fontSize: '20px', border: '1px solid #000000', boxShadow: 'inset 0px -4px 10px rgba(61, 37, 33, 0.2)', borderRadius: '5px' }} placeholder="  Phone Number" />
                            </Box>

                            <Box mt={4}>
                                <input type="text" style={{ background: '#FFE2D8', width: '100%', height: '2rem', fontFamily: 'Poppins', fontSize: '20px', border: '1px solid #000000', boxShadow: 'inset 0px -4px 10px rgba(61, 37, 33, 0.2)', borderRadius: '5px' }} placeholder="  Message" />
                            </Box>

                            <Box mt={4}>
                                <Typography className="g-recaptcha" data-sitekey="6LeAtTomAAAAACPSXbPVCcRf1ubHk-5KLjMLo5N7"></Typography>
                            </Box>

                            <Box mt={2}>
                                <Button sx={{ background: 'linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)', borderRadius: '5px', color: '#3D2521', padding: '10px 30px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                                    Send message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

                <Box sx={{ border: '1px solid #000000', marginTop: '5rem' }}></Box>

                <Grid container justifyContent="space-between">
                    {/* First Box */}
                    <Grid item xs={12} md={4}>
                        <Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: '0.5vw', md: '1.2vw' }}>
                            <PlaceOutlinedIcon sx={{ width: '6%', mt: { xs: '-2vw', sm: '-0.75vw', md: '0vw', lg: '0.3vw' }, mr: '5px', '@media(max-width: 350px)': { marginTop: '-3vw' }, '@media(max-width: 250px)': { marginTop: '-4vw' } }} />
                            <Typography variant="h6" sx={{ lineHeight: '1.5vw' }}>Veraval Road, Near Essar Petrol Pump Talala (Gir), Gir Somnath, Gujarat, India Pincode: 362150</Typography>
                        </Box>
                    </Grid>

                    {/* Second Box */}
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: '0.5vw', md: '1.2vw' }}>
                                <CallOutlinedIcon sx={{ width: '6%', mt: { xs: '-2vw', sm: '-0.75vw', md: '0vw', lg: '0.3vw' }, mr: '5px', '@media(max-width: 350px)': { marginTop: '-3vw' }, '@media(max-width: 250px)': { marginTop: '-4vw' } }} />
                                <Typography variant="h6" sx={{ lineHeight: '1.5vw' }}>+91 9427424157</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center" mt={{ xs: '0.5vw', md: '1.2vw' }}>
                                <MailOutlineOutlinedIcon sx={{ width: '6%', mt: { xs: '-2vw', sm: '-0.75vw', md: '0vw', lg: '0.3vw' }, mr: '5px', '@media(max-width: 350px)': { marginTop: '-3vw' }, '@media(max-width: 250px)': { marginTop: '-4vw' } }} />
                                <Typography variant="h6" sx={{ lineHeight: '1.5vw' }}>shreecottages57@gmail.com</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Third Box */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { xs: '0.5vw', md: '1.2vw' } }}>
                            <Typography sx={{ fontSize: '1.2em', color: '#3D2521', fontFamily: 'Bona Nova', fontWeight: '400' }}>Follow us</Typography>

                            <Box component="span" >

                                <Box component="span" sx={{ ml: '1rem' }}>
                                    <a href="/"><img src={fbContact} alt="Facebook" className="sns" sx={{ border: '2px solid #3D2521' }} /></a>
                                </Box>
                                <Box component="span" sx={{ ml: '1rem' }}>
                                    <img src={instaContact} alt="Instagram" className="sns" />
                                </Box>
                                <Box component="span" sx={{ ml: '1rem' }}>
                                    <img src={ytContact} alt="Youtube" className="sns" />
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default ContactContent;
