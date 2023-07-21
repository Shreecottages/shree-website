import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import style from "../../styles/Contact.module.css";
import fbContact from "../../assets/fb-Contact.png";
import ytContact from "../../assets/yt-Contact.png";
import instaContact from "../../assets/insta-Contact.png";
import ReCAPTCHA from "react-google-recaptcha";

import "../../styles/Contact.css";
// import

const SITE_KEY = "6LdCSv4mAAAAAHlUEWD2co9LRkj44PuV0fdS7Cf5";

const ContactContent = () => {
  const [recaptchaValue, setrecaptchaValue] = useState("");
  const captchaRef = useRef();
  const onChange = (value) => {
    setrecaptchaValue(value);
  };
  const callValidation = () => {
    if (recaptchaValue == "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Box
      sx={{ background: "#FFE2D8", height: "auto" }}
      // mt={3}
      style={{ paddingBottom: "4rem" }}
    >
      <Box sx={{ padding: { xs: "0vw 6vw", md: "0vw 14vw" } }}>
        <Box
          sx={{ width: "100%", display: "", justifyContent: "space-between" }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                // margin: "auto",
                display: { sm: "block", md: "block" },
              }}
            >
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: "40px" }}
              >
                <Box
                  // className="map-responsive"
                  sx={{
                    borderRadius: "20px",
                    width: { xs: "88vw", md: "45vw" },
                    height: { xs: "230px", md: "62vh" },
                  }}
                >
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.609828612716!2d70.52531429999999!3d21.0482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2ca27bd28f1d1%3A0xe609e025f726b7c6!2sShree%20cottage!5e0!3m2!1sen!2sin!4v1653757676857!5m2!1sen!2sin"
                    //   width="700"
                    //   height="500"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                      borderRadius: "20px",
                    }}
                    // style={{
                    //   width: { sm:"90vw", md:"45vw"},
                    //   height: "62vh",
                    //   border: 0,
                    //   borderRadius: "20px",
                    //   "(max-width:600px)": { width: "324px", height: "200px" },
                    // }}
                    allowFullScreen
                  ></iframe>
                </Box>
              </Box>
            </Box>

            {/* <Grid
            item
            sm={12}
            md={8}
            lg={7}
            sx={{
              margin: "auto",
              display: { sm: "none", md: "none", xs: "block" },
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={4}
              mb={4}
              height={0.5}
            >
              <Typography
                className="map-responsive"
                sx={{
                  borderRadius: "20px",
                  borderRadius: "10px",
                  boxShadow:
                    "0px 2px 5px 0px rgba(0, 0, 0, 0.10), 0px 5px 10px 0px rgba(0, 0, 0, 0.09)",
                }}
              >
                <iframe
                //   className="map"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.609828612716!2d70.52531429999999!3d21.0482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2ca27bd28f1d1%3A0xe609e025f726b7c6!2sShree%20cottage!5e0!3m2!1sen!2sin!4v1653757676857!5m2!1sen!2sin"
                  style={{
                    width:"914px",
                    height: "620px",
                    border: 0,
                    borderRadius: "20px",
                    borderRadius: "10px",
                  }}
                  allowFullScreen
                ></iframe>
              </Typography>
            </Box>
          </Grid> */}

            <Box
              sx={{
                width: { xs: "100%", md: "25vw" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                ml={{ xs: 0, lg: "2rem", md: "-2rem" }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start" },
                  margin: { xs: "0", md: "4vw" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    // width:"100%",
                    marginTop: { xs: "4vh", md: "0" },
                    fontSize: { xs: "6vw", md: "2vw" },
                    color: "#3D2521",
                    fontFamily: "Bona Nova",
                    fontWeight: "400",
                  }}
                >
                  Get In Touch
                </Typography>

                <Box
                  mt={3}
                  sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                >
                  <input
                  className="text-box"
                    type="text"
                    // style={{
                    //   background: "#FFE2D8",
                    //   width: "100%",
                    //   height: "100%",
                    //   fontFamily: "Poppins",
                    //   border: "1px solid #9E837D",
                    //   borderRadius: "10px",
                    //   padding: "14px 20px",
                    //   fontSize: "20px",
                    //   placeholderColor: "#9E837D",
                    //   outline: "none",
                    //   "&:focus": {
                    //     border: "2px solid #3D2521",
                    //   },
                    // }}
                    // className="inp"
                    placeholder="Your Name"
                  />
                </Box>

                <Box
                  mt={3}
                  sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                >
                  <input
                    type="text"
                    // style={{
                    //   background: "#FFE2D8",
                    //   width: "100%",
                    //   height: "100%",
                    //   fontFamily: "Poppins",
                    //   border: "1px solid #9E837D",
                    //   borderRadius: "10px",
                    //   padding: "16px 0px 16px 20px",
                    //   fontSize: "20px",
                    // }}
                    // className="inp"
                    placeholder="Your Email"
                  />
                </Box>

                <Box
                  mt={3}
                  sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                >
                  <input
                    type="text"
                    // style={{
                    //   background: "#FFE2D8",
                    //   width: "100%",
                    //   height: "100%",
                    //   fontFamily: "Poppins",
                    //   border: "1px solid #9E837D",
                    //   borderRadius: "10px",
                    //   padding: "16px 0px 16px 20px",
                    //   gap: "8px",
                    //   fontSize: "20px",
                    // }}
                    // className="inp"
                    placeholder="Your Mobile No."
                  />
                </Box>

                <Box
                  mt={3}
                  sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                >
                  <input
                    type="text"
                    // style={{
                    //   background: "#FFE2D8",
                    //   width: "100%",
                    //   height: "100%",
                    //   fontFamily: "Poppins",
                    //   border: "1px solid #9E837D",
                    //   borderRadius: "10px",
                    //   padding: "16px 0px 16px 20px",
                    //   gap: "8px",
                    //   fontSize: "20px",
                    // }}
                    // className="inp"
                    placeholder="Message"
                  />
                </Box>

                <Box mt={3} alignSelf={{ md: "flex-start" }}>
                  {/* <Typography className="g-recaptcha" data-sitekey="6LdCSv4mAAAAAHlUEWD2co9LRkj44PuV0fdS7Cf5"></Typography> */}
                  <ReCAPTCHA
                    sitekey={SITE_KEY}
                    onChange={onChange}
                    ref={captchaRef}
                  />
                </Box>

                <Box
                  mt={2}
                  alignSelf={{
                    md: "flex-start",
                    sm: "center",
                    // xs: "flex-start",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                      borderRadius: "5px",
                      color: "#3D2521",
                      padding: "10px 30px",
                      // textAlign: "center",
                      // display: "flex",
                    }}
                    disabled={callValidation()}
                  >
                    Send message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>

        <Box
          sx={{
            border: "1px solid #3D2521",
            marginTop: { xs: "4rem", md: "1rem" },
          }}
        ></Box>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            display: { sm: "none", md: "flex", xs: "none" },
          }}
        >
          {/* First Box */}
          <Box
            item
            xs={12}
            // md={4}
            sx={{
              width:"28vw",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "start",
              alignSelf: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bona Nova",
                color: "#3D2521",
                fontSize: "1.6vw",
                fontStyle: "normal",
                letterSpacing: "0.07em",
              }}
            >
              Come over for coffee
            </Typography>
            <a href="https://goo.gl/maps/JNyosQLb9TYTp1kg9" target="_blank">
            <Box
              display="flex"
              flexDirection="row"
              mt={{ xs: "0.5vw", md: "1.2vw" }}
            >
              <PlaceOutlinedIcon
                sx={{
                  marginRight: "10px",
                  color: "#3D2521",
                  fontSize: "1.6vw",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  lineHeight: "1.5vw",
                  fontFamily: "Poppins",
                  fontSize: "1.2vw",
                  fontStyle: "normal",
                  color: "#3D2521",
                }}
              >
                Veraval Road, Near Essar Petrol Pump Talala(Gir), Gir Somnath,
                Gujarat, India 362150
              </Typography>
            </Box>
            </a>
          </Box>
          

          <Box
            item
            xs={12}
            // md={4}
            sx={{
              width:"22vw",
              // display: "flex",
              marginTop: "2rem",
              // justifyContent: "start",
              // alignSelf: "start",
              // flexDirection: "column",  
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bona Nova",
                  color: "#3D2521",
                  fontSize: "1.6vw",
                  letterSpacing: "0.07em",
                }}
              >
                Contact us
              </Typography>
              <a href="tel:+919427424157">
              <Box
                display="flex"
                flexDirection="row"
                mt={{ xs: "0.5vw", md: "1.2vw" }}
              >
                <CallOutlinedIcon
                  sx={{
                    marginRight: "10px",
                    color: "#3D2521",
                    fontSize: "1.6vw",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3D2521",
                    letterSpacing: "0.07em",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                    fontSize: "1.2vw",
                    color: "#3D2521",
                  }}
                >
                  +91 9427424157
                </Typography>
              </Box>
              </a>

              <a href="mailto:info@shreecottages.com" target="_blacnk">
              <Box
                display="flex"
                flexDirection="row"
                mt={{ xs: "0.5vw", md: "1.2vw" }}
              >
                <MailOutlineOutlinedIcon
                  sx={{
                    marginRight: "10px",
                    color: "#3D2521",
                    fontSize: "1.6vw",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3D2521",
                    letterSpacing: "0.07em",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                    fontSize: "1.2vw",
                    color: "#3D2521",
                  }}
                >
                  info@shreecottages.com
                </Typography>
              </Box>
              </a>
            </Box>
          </Box>

          {/* Third Box */}
          <Grid
            item
            xs={12}
            md={1.6}
            sx={{
              // display: "flex",
              marginTop: "2rem",
              // justifyContent: "end",
              // alignSelf: "start",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                className="mediaIcon1"
                sx={{
                  fontFamily: "Bona Nova",
                  color: "#3D2521",
                  fontSize: "1.6vw",
                  fontStyle: "normal",
                  letterSpacing: "0.07em",
                }}
              >
                Follow us
              </Typography>
              <Box className="mediaIcon1" mt={1} sx={{ display: "flex" }}>
                <Box>
                  <a href="https://www.facebook.com/ShreeCottages">
                    <img
                      src={require("../../assets/fb-Contact.svg").default}
                      alt="Facebook"
                      className="sns"
                      sx={{ border: "2px solid #3D2521" }}
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.instagram.com/shreecottages">
                    <img
                      src={require("../../assets/insta-Contact.svg").default}
                      alt="Instagram"
                      className="sns"
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.youtube.com/@shreecottages">
                    {" "}
                    <img
                      src={require("../../assets/yt-Contact.svg").default}
                      alt="Youtube"
                      className="sns"
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ justifyContent: "space-around", display: { md: "none" } }}
        >
          {/* First Box */}
          <Grid item xs={12} md={5} sx={{ display: "flex", marginTop: "2rem" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bona Nova",
                  color: "#3D2521",
                  fontSize: "26px",
                  fontStyle: "normal",
                  letterSpacing: "0.07em",
                }}
              >
                Contact us
              </Typography>
              <Box display="flex" flexDirection="row" mt="3vw">
                <CallOutlinedIcon mr={2} />
                <Typography
                  mt="1vw"
                  ml="2vw"
                  variant="h6"
                  sx={{
                    color: "#3D2521",
                    letterSpacing: "0.07em",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                  }}
                >
                  +91 9427424157
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" mt="3vw">
                <MailOutlineOutlinedIcon />
                <Typography
                  ml="2vw"
                  variant="h6"
                  sx={{
                    color: "#3D2521",
                    letterSpacing: "0.07em",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                  }}
                >
                  info@shreecottages.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Second Box */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              marginTop: "2rem",
              justifyContent: "start",
              alignSelf: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bona Nova",
                color: "#3D2521",
                fontSize: "26px",
                fontStyle: "normal",
                letterSpacing: "0.07em",
              }}
            >
              Come over for coffee
            </Typography>
            <Box display="flex" flexDirection="row" mt="3vw">
              <PlaceOutlinedIcon />
              <Typography
                variant="h6"
                ml="2vw"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
              >
                Veraval Road, Near Essar Petrol Pump Talala(Gir), Gir Somnath,
                Gujarat, India 362150
              </Typography>
            </Box>
          </Grid>

          {/* Third Box */}
          <Grid item xs={12} md={5} sx={{ display: "flex", marginTop: "2rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"                
                sx={{
                  fontFamily: "Bona Nova",
                  color: "#3D2521",
                  fontSize: "26px",
                  fontStyle: "normal",
                  letterSpacing: "0.07em",
                }}
              >
                Follow us
              </Typography>
              <Box
                component="span"
                style={{
                  marginleft: "-15px",
                }}
                className="mediaIcon1"
              >
                <Box component="span" sx={{ ml: "0rem" }}>
                  <a href="https://www.facebook.com/ShreeCottages">
                    <img
                      src={require("../../assets/fb-Contact.svg").default}
                      alt="Facebook"
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "45px",
                      }}
                      className="sns"
                    />
                  </a>
                </Box>
                <Box component="span" sx={{ ml: "0.5rem" }}>
                  <a href="https://www.instagram.com/shreecottages">
                    <img
                      src={require("../../assets/insta-Contact.svg").default}
                      alt="Instagram"
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "45px",
                      }}
                      className="sns"
                    />
                  </a>
                </Box>
                <Box component="span" sx={{ ml: "0.5rem" }}>
                  <a href="https://www.youtube.com/@shreecottages">
                    <img
                      src={require("../../assets/yt-Contact.svg").default}
                      alt="Youtube"
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "45px",
                      }}
                      className="sns"
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactContent;
