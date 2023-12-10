import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "@formspree/react";
import fbContactImage from "../../assets/fb-Contact.svg";
import instaContactImage from "../../assets/insta-Contact.svg";
import ytContactImage from "../../assets/yt-Contact.svg";
import "../../styles/Contact.css";

const SITE_KEY = "6LdCSv4mAAAAAHlUEWD2co9LRkj44PuV0fdS7Cf5";

const ContactContent = () => {
  // Define your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeqbdjog";

  // Using useForm and accessing handleSubmit directly
  const formInfo = useForm(FORMSPREE_ENDPOINT);
  const handleSubmit = formInfo[1];

  const [recaptchaValue, setrecaptchaValue] = useState("");
  const captchaRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChange = (value) => {
    setrecaptchaValue(value);
  };
  // const callValidation = () => {
  //   if (recaptchaValue === "") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // You can access form data here in formData object
    console.log(formData, "formdata----------------------");

    // Submitting form data using the handleSubmit function
    await handleSubmit({
      ...formData,
      "g-recaptcha-response": recaptchaValue, // Add the Recaptcha response to the form data
    });
  };

  return (
    <Box
      sx={{ background: "#FFE2D8", height: "auto" }}
      style={{ paddingBottom: "4rem" }}
    >
      <Box sx={{ padding: { xs: "0vw 6vw", md: "0vw 14vw" } }}>
        <Box
          sx={{ width: "100%", display: "", justifyContent: "space-between" }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Box
              sx={{
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
                  sx={{
                    borderRadius: "20px",
                    width: { xs: "88vw", md: "45vw" },
                    height: { xs: "230px", md: "62vh" },
                  }}
                >
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.609828612716!2d70.52531429999999!3d21.0482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2ca27bd28f1d1%3A0xe609e025f726b7c6!2sShree%20cottage!5e0!3m2!1sen!2sin!4v1653757676857!5m2!1sen!2sin"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                      borderRadius: "20px",
                    }}
                    allowFullScreen
                  />
                </Box>
              </Box>
            </Box>

            {/* ----------------------------------------------------- contact form ---------------------------------------------------- */}
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
                    marginTop: { xs: "4vh", md: "0" },
                    fontSize: { xs: "6vw", md: "2vw" },
                    color: "#3D2521",
                    fontFamily: "Bona Nova",
                    fontWeight: "400",
                  }}
                >
                  Get In Touch
                </Typography>

                <form onSubmit={handleFormSubmit}>
                  <Box
                    mt={3}
                    sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                  >
                    <input
                      className="text-box"
                      id="name"
                      type="text"
                      name="name" // Corresponding to the user's name
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {/* <input
                      className="text-box"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    /> */}
                  </Box>

                  <Box
                    mt={3}
                    sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                  >
                    <input
                      id="email"
                      type="text"
                      name="email" // Corresponding to the user's email
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {/* <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    /> */}
                  </Box>

                  <Box
                    mt={3}
                    sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                  >
                    <input
                      id="mobile"
                      type="text"
                      name="mobile" // Corresponding to the user's mobile number
                      placeholder="Your Mobile No."
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    {/* <input
                      id="mobile"
                      type="text"
                      name="mobile"
                      placeholder="Your Mobile No."
                    /> */}
                  </Box>

                  <Box
                    mt={3}
                    sx={{ width: { xs: "100%", md: "25vw" }, height: "6vh" }}
                  >
                    <input
                      id="message"
                      type="text"
                      name="message" // Corresponding to the message
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {/* <input
                      id="message"
                      type="text"
                      name="message"
                      placeholder="Message"
                    /> */}
                  </Box>

                  <Box mt={3} alignSelf={{ md: "flex-start" }}>
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
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                        borderRadius: "5px",
                        color: "#3D2521",
                        padding: "10px 30px",
                      }}
                      disabled={!recaptchaValue} // Disable button if recaptchaValue is empty
                    >
                      Send message
                    </Button>
                    {/* <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                        borderRadius: "5px",
                        color: "#3D2521",
                        padding: "10px 30px",
                      }}
                      disabled={callValidation()}
                    >
                      Send message
                    </Button> */}
                  </Box>
                </form>
              </Box>
            </Box>
            {/* -------------------------------------------------------- contact form ---------------------------------------------------- */}
          </Grid>
        </Box>

        <Box
          sx={{
            border: "1px solid #3D2521",
            marginTop: { xs: "4rem", md: "1rem" },
          }}
        />

        <Grid
          container
          sx={{
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
              width: "28vw",
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
            <a
              href="https://goo.gl/maps/JNyosQLb9TYTp1kg9"
              target="_blank"
              rel="noreferrer"
            >
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
              width: "22vw",
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
                      src={fbContactImage.default}
                      alt="Facebook"
                      className="sns"
                      style={{ border: "2px solid #3D2521" }}
                    />
                    {/* <img
                      src={require("../../assets/fb-Contact.svg").default}
                      alt="Facebook"
                      className="sns"
                      sx={{ border: "2px solid #3D2521" }}
                    /> */}
                  </a>
                </Box>
                <Box>
                  <a href="https://www.instagram.com/shreecottages">
                    <img
                      src={instaContactImage.default}
                      // src={require("../../assets/insta-Contact.svg").default}
                      alt="Instagram"
                      className="sns"
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.youtube.com/@shreecottages">
                    {" "}
                    <img
                      src={ytContactImage.default}
                      // src={require("../../assets/yt-Contact.svg").default}
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

              <a
                href="tel:+919427424157"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* Use 'tel' protocol to indicate a phone number link */}
                <Box display="flex" flexDirection="row" mt="3vw">
                  <CallOutlinedIcon style={{ color: "black" }} mr={2} />
                  {/* Set the color of the icon explicitly to black */}
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
              </a>

              <a
                href="mailto:info@shreecottages.com"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blacnk"
              >
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
              </a>
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
            <a
              href="https://goo.gl/maps/JNyosQLb9TYTp1kg9"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
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
                      src={fbContactImage.default}
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
                      src={instaContactImage.default}
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
                      src={ytContactImage.default}
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
