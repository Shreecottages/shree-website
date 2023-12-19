import React from "react";
import { Box, Typography, Button, useMediaQuery, Divider } from "@mui/material";
// IMPORTING IMAGE
// import AboutUsTop from "../assets/AboutTopImg.png";
// import AboutFLowerRight from "../assets/AboutFlowersRight.png";
// import AboutFlowerLeft from "../assets/AboutFlowerLeft.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Helmet } from "react-helmet";
import Card1 from "../assets/Card.png";
import Card2 from "../assets/Farms.png";
import SatisficationLogo from "../assets/Satisfaction.png";
import ResortOwnerProfilePhoto from "../assets/ResortOwnerProfilePhoto.png";
import WhoWeAreImage from "../assets/WhoWeAre.svg";
import DoubleCommaOpeningVector from "../assets/DoubleCommaOpeningVector.png";
import DoubleCommaClosingVector from "../assets/DoubleCommaClosingVector.png";
import ShreeOpacityLogo from "../assets/ShreeOpacityLogo.png";
import ShreeAbout from "../images/shree-about.png";
// import  AboutUsTopM from "../images/TopImage.png"
// import AboutUsTop from "../assets/AboutTopImg.png"
// IMPORTING COMPONENTS
// import ReviewCards from "./ReviewCard";
import Review from "./Review";

// IMPORTING ICONS
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// import { GooglePlacesAutocomplete } from "react-google-places-autocomplete";/
const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");

const AboutUs = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   loadGoogleReviews();
  // }, []);

  // const loadGoogleReviews = async () => {
  //   const response = await fetch(
  //     `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ0fEovSfK4jsRxrcm9yXgCeY&fields=reviews&key=AIzaSyBDOXY3CZDldHFtlaTJ34Vrm1-3u63x8wA`
  //   );
  //   const data = await response.json();
  //   const fetchedReviews = data.result?.reviews || [];
  //   setReviews(fetchedReviews);
  //   console.log(reviews);
  // };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div>
      <Box
        sx={{
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Helmet>
          <title>Best Resort In Sasan Gir, Gujarat - Shree Cottages</title>
          <meta
            name="description"
            content="Shree Cottages is the best family friendly resort in sasan gir with luxurious rooms with garden view. we also provide best destination wedding in sasan gir"
          />
          <meta
            name="keywords"
            content="shree Cottage, shree Party Plot,best resort, hotel ,destination wedding resort ,wedding place ,banquet halls, family friendly resort, swimming pool, sasan gir ,talala gir ,gir ,gujarat"
          />
          <meta name="robots" content="index, follow" />
          <meta name="canonical" content="https://shreecottages.com/about" />
          <meta name="image" content={ShreeAbout} />

          <meta
            name="og:title"
            content="Best Resort In Sasan Gir, Gujarat - Shree Cottages"
          />
          <meta property="og:site_name" content="Shree Cottgaes" />
          <meta
            name="og:description"
            content="Shree Cottages is the best family friendly resort in sasan gir with luxurious rooms with garden view. we also provide best destination wedding in sasan gir, gujarat"
          />
          <meta name="og:image" content={ShreeAbout} />
        </Helmet>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            background: `rgba(61, 37, 33, 0.5) url(${
              isSmallScreen ? AboutUsTopM : AboutUsTop
            })`,
            boxShadow:
              "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
            textAlign: "center",
            padding: { xs: "0vw", md: "0vw 10vw" },
            backgroundSize: "100% cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: {
              xs: "75vw",
              sm: "40vw",
              md: "30vw",
              lg: "25vw",
              xl: "20vw",
            },
            "@media(max-width:300px)": {
              height: "100vw",
            },
          }}
        >
          <Box
            sx={{
              // marginLeft: { xs: "-30px", lg: "200px" },
              backgroundImage: `url(${AboutFlowerLeft})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "25vw", md: "200px", lg: "250px" },
              backgroundSize: "contain",
              // marginTop: "160px",
              backgroundPosition: "bottom",
              // backgroundPositionX:"left",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              width: { xs: "30vw", sm: "100%" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                // padding: { xs: "4s0px 0 0px 0", md: "100px 0 10px 0" },
                fontFamily: "Bona Nova",
                // fontSize: { xs: "1.5em", md: "2.5em" },
                fontWeight: "400",
                lineHeight: "48px",
                letterSpacing: "0.07em",
                color: "#FFBB70",
                m: { xs: " 0vw -10vw", sm: "0vw" },
              }}
            >
              About Us
            </Typography>
            {/* <Box
              sx={{
                margin: "0px auto",
                height: "30px",
                width: "0px",
                border: "1px solid #FFBB70",
              }}
            ></Box> */}
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                height: "1.55rem",
                width: "1px",
                backgroundColor: "warning.main",
                alignSelf: "center",
                m: "1.1rem",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                magrin: "14px auto",
                fontFamily: "Bona Nova",
                // fontSize: { xs: "16px", md: "18px" },
                fontWeight: "400",
                letterSpacing: "0.07em",
                color: "#FFBB70",
                m: { xs: " 0vw -30vw", sm: "0vw" },
              }}
            >
              We create those special memories✨ for your family💞 <br />
              #weddingmemory
            </Typography>
          </Box>
          <Box
            sx={{
              // marginRight: { sx: "50px", lg: "200px" },
              backgroundImage: `url(${AboutFLowerRight})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: { xs: "30vw", sm: "25vw", md: "200px", lg: "250px" },
            }}
          />

          {/* <Box sx={{ marginRight: { sx: "50px", lg: "200px" } }}>
          <img
            src={AboutFLowerRight}
            style={{ width: "250px", height: "164px" }}
            alt=""
          />
        </Box> */}
        </Box>
        {/* FIRST PART BEGINS */}

        <Box
          sx={{
            minHeight: "600px",
            width: "100vw",
            background: "#FFE2D8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "95%", sm: "80vw" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              margin: { xs: "-20px 0px 0px 0px", sm: "50px auto" },
              // textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: { xs: "50px", sm: "0" },
              paddingBottom: { xs: "30px", sm: "0" },
            }}
          >
            <Box
              sx={{
                margin: {
                  xs: "0px 0px",
                  sm: "auto",
                  lg: "auto",
                },
                width: { xs: "100%", md: "400px", lg: "25rem" },
                height: { xs: "327px", md: "400px", lg: "25rem" },
                display: "flex",
                justifyContent: "center",
                "@media (min-width:200px) and (max-width:300px)": {
                  width: "250px",
                  height: "250px",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: "347px", md: "400px", lg: "25rem" },
                  height: { xs: "347px", md: "400px", lg: "25rem" },
                  backgroundImage: `url(${WhoWeAreImage})`,
                  backgroundSize: "cover",
                }}
              />
            </Box>

            <Typography
              sx={{
                width: { xs: "100%", lg: "56vw" },
                margin: {
                  xs: "50px 0px",
                  sm: "auto 0px",
                  md: "auto 40px",
                  lg: "auto auto auto 40px",
                },
                fontSize: { xs: "14px", lg: "1.04vw" },
                lineHeight: { xs: "21px", sm: "30px" },
                textAlign: { xs: "center", md: "start" },
                letterSpacing: "0.07em",
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              Welcome to Shree Cottages, a premier destination wedding resort in
              Gir National Park. Our resort is dedicated to providing
              exceptional experiences and unforgettable memories. With lush
              gardens, luxurious rooms and bigest banquet halls, we offer best
              destination wedding and event planning with affordable price. At
              Shree Cottages, We are dedicated to ensuring our customers
              satisfaction and take great pride in our unwavering commitment to
              achieving that goal. Our focus is on making your experience easy
              and enjoyable.
              <br />
              <br />
              Since our inception, not a single customer has left unsatisfied.
              With luxurious accommodations, state-of-the-art amenities, and
              impeccable service, we ensure that your stay is truly memorable.
              Join us at Shree Cottages and immerse yourself in the enchantment
              of Sasan Gir National Park, where tranquillity meets elegance, and
              create timeless memories that will last a lifetime.
            </Typography>
          </Box>
        </Box>

        {/* SECOND PART BEGINS */}
        <Box
          sx={{
            width: {
              lg: "100%",
              xl: "100%",
            },
            height: { xs: "", sm: "1100px", lg: "806px" },
            background: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              marginTop: { xs: "50px", sm: "100px" },
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: "400",
              fontStyle: "normal",
              fontFamily: "Bona Nova",
              letterSpacing: "0.07em",
              color: "#3D2521",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Success By The Numbers
          </Typography>

          <Box
            sx={{
              margin: "20px auto",
              height: "30px",
              width: "0px",
              border: "1px solid #3D2521",
            }}
          />

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              margin: { xs: "auto", md: "-100px auto" },
              width: { xs: "100%", md: "86%" },
            }}
          >
            <Box
              sx={{
                marginRight: "20px",
                width: { xs: "100%", md: "52%" },
                marginTop: { xs: "30px", md: "10px" },
                alignItems: "flex-start",
                backgroundImage: `url(${ShreeOpacityLogo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: { xs: "contain", sm: "130px", md: "280px" },
                display: "flex",
                textAlign: "center",
              }}
            >
              <Box sx={{ margin: "auto", padding: { xs: "10px", md: "0" } }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "16px", lg: "16px", xl: "1.04vw" },
                    fontStyle: "normal",
                    fontFamily: "Bona Nova",
                    letterSpacing: "0.07em",
                  }}
                >
                  <br />
                  <span style={{ fontSize: "25px", fontFamily: "Bona Nova" }}>
                    &quot;
                  </span>
                  Sometimes numbers are the easiest way to get to the truth.{" "}
                  <br />
                  Checkout these business highlights to learn more and get to
                  know us better
                  <span style={{ fontSize: "25px", fontFamily: "Bona Nova" }}>
                    &quot;
                  </span>
                </Typography>

                <Typography
                  sx={{
                    marginTop: { xs: "40px", md: "100px" },
                    fontWeight: "400",
                    fontSize: {
                      xs: "24px",
                      lg: "25px",
                      xl: "40px",
                    },
                    fontFamily: "Bona Nova",
                    letterSpacing: "0.07em",
                  }}
                >
                  99.99% Customer Satisfication
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "0px",
                width: { xs: "100%", md: "42%", lg: "20%" },
                display: { xs: "block", sm: "flex" },
                marginTop: { xs: "30px", md: "100px" },
                gap: { xs: "0", sm: "30px" },
                justifyContent: { xs: "center", md: "inherit" },
                // alignContent: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  maxWidth: "327px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: "100%",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    height: "280px",
                    // maxWidth: "380px",
                  }}
                >
                  <img
                    src={Card1}
                    alt="Sangeet Sandhya Night Decoration"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    // maxWidth: "380px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                    height: { xs: "126px", lg: "130px", xl: "156px" },
                    background: "#3D2521",
                    borderRadius: "0px 0px 20px 20px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "32px", lg: "40px", xl: "50px" },
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "160%",
                      color: "#FFBB70",
                    }}
                  >
                    70+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "20px" },
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "250%",
                      color: "#FFBB70",
                    }}
                  >
                    Event per year
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    margin: "50px auto",
                    width: { xs: "121px", lg: "150px", xl: "170px" },
                    height: { xs: "35px", sm: "50px" },
                    color: "#3D2521",
                    background:
                      "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                    fontFamily: "Bona Nova",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    border: "none",
                  }}
                >
                  <a
                    href="tel:+919427424157"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Book Event
                  </a>
                </Button>
              </Box>
              <Box
                sx={{
                  margin: "auto",
                  maxWidth: "327px",
                  marginTop: { xs: "10px", sm: "0px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center the content vertically
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: "100%",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    height: "280px",
                  }}
                >
                  <img
                    src={Card2}
                    alt="Cottages With Garden At Evening"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "0px",
                    width: {
                      xs: "100%",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                    height: { xs: "126px", lg: "130px", xl: "156px" },
                    background: "#3D2521",
                    borderRadius: "0px 0px 20px 20px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "32px", lg: "40px", xl: "50px" },
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "160%",
                      color: "#FFBB70",
                    }}
                  >
                    20k+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "20px" },
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "250%",
                      color: "#FFBB70",
                    }}
                  >
                    Annual Visitors
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    margin: "50px auto",
                    width: { xs: "121px", lg: "150px", xl: "170px" },
                    height: { xs: "35px", sm: "50px" },
                    alignItems: "center",
                    color: "#3D2521",
                    background:
                      "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                    fontFamily: "Bona Nova",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  <a
                    href="https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Book Room
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* THIRD PART  */}
        <Box
          sx={{
            // paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "566px", sm: "700px", md: "662px" },
            background: "#FFE2D8",
          }}
        >
          <Typography
            sx={{
              marginBottom: { xs: "00px", sm: "0px" },
              fontFamily: "Bona Nova",
              fontWeight: "400",
              fontSize: { xs: "24px", md: "40px" },
              textAlign: "center",
              letterSpacing: "0.07em",
              color: "#3D2521",
            }}
          >
            Our Vision
          </Typography>

          <Box
            sx={{
              margin: "10px auto",
              textAlign: "center",
              width: "0px",
              border: "1px solid #3D2521",
              height: "30px",
            }}
          />

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              // margin: "auto",
              width: "95%",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "90%", md: "50%" },
                margin: "0px auto",
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  margin: "20px 0 20px 0",
                  paddingTop: { xs: "60px", sm: "0px" },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "324px", sm: "300px", md: "250px" },
                  background: "#FFF",
                  boxShadow:
                    "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "80%", sm: "60%", md: "68.55%" },
                    margin: "auto 20px",
                    display: { xs: "flex", md: "flex" },
                    alignItems: { xs: "space-between", sm: "center" },
                    // justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "40%", sm: "20%" },
                      marginTop: { xs: "-20px", sm: "-80px" },
                    }}
                  >
                    <img
                      src={DoubleCommaOpeningVector}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </Box>
                  <Typography
                    sx={{
                      // width: { xs: "100%", lg: "80.5%" },
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: { xs: "14px", lg: "15px", xl: "1.04vw" },
                      textAlign: "center",
                      letterSpacing: "0.07em",
                      lineHeight: { xs: "21px", sm: "30px" },
                    }}
                  >
                    Always go above and beyond, providing people with more than
                    they expect and creating an extraordinary experience for
                    everyone.
                  </Typography>
                  {/* <Box
                  sx={{
                    width: { sm: "50%", md: "10%" },
                    backgroundImage: `url(${DoubleCommaClosingVector})`,
                    backgroundRepeat: "no-repeat",
                    marginTop: { xs: "100px", md: "80px" },
                  }}
                ></Box> */}
                  <Box
                    sx={{
                      width: { xs: "40%", sm: "20%" },
                      marginTop: { xs: "110px", sm: "110px", md: "80px" },
                    }}
                  >
                    <img
                      src={DoubleCommaClosingVector}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "column" },
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: { xs: "10px", sm: "80px", md: "30px" },
                    width: { xs: "100%", sm: "30%", md: "15.3%" },
                    margin: "auto",
                  }}
                >
                  <Box
                    sx={{
                      // margin: "auto",
                      borderRadius: "50%",
                      width: { xs: "20%", sm: "100px" },
                    }}
                  >
                    <img
                      src={ResortOwnerProfilePhoto}
                      style={{
                        margin: "auto",
                        width: "100%",
                        height: "100%",
                      }}
                      alt="Owner Img"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: { xs: "20px", sm: "0px" },
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        // width: "auto",
                        width: { xs: "100%" },
                        margin: "10px 0px 0px 20px",
                        fontFamily: "Bona Nova",
                        fontWeight: "700",
                        fontSize: { xs: "16px", sm: "20px" },
                        lineHeight: "24px",
                        letterSpacing: "0.07em",
                        color: "#3D2521",
                      }}
                    >
                      Haresh Patel
                      <Box
                        sx={{
                          margin: "6px 0px",
                          width: { xs: "100px", sm: "122px" },
                          border: "1px solid #FFBB70",
                          borderRadius: "2px",
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Bona Nova",
                        fontWeight: "400",
                        fontSize: { xs: "14px", sm: "16px" },
                        lineHeight: "24px",
                        letterSpacing: "0.07em",
                        color: "#3D2521",
                      }}
                    >
                      Resort Owner
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  margin: { xs: "0px auto", md: "20px 0px 0px 0px" },
                  width: { xs: "146px", sm: "200px" },
                }}
                variant="outlined"
              >
                <a
                  href="tel:+919427424157"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Contact Us <ArrowForwardIcon />
                </a>
              </Button>
            </Box>
            <Box
              sx={{
                margin: { xs: " 120px auto", sm: "auto" },
                width: { xs: "60%", sm: "20%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                src={SatisficationLogo}
                alt="100% customer satisfaction logo"
              />
            </Box>
          </Box>
        </Box>
        {/* -----------------------------------  FOURTH PART -------------------------------------- */}
        <Review />
        {/* <Box
          sx={{
            height: {sm:"480px", md: "864px" },
            paddingTop: "20px",
            // marginBottom:"40px"
          }}
        >
          <Box
            sx={{
              margin: {
                xs: "40px auto",
                lg: "100px",
              },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h"
              sx={{
                fontFamily: "Bona Nova",
                fontWeight: "400",
                fontSize: { xs: "25px", sm: "40px" },
                lineHeight: "0.07rem",
                color: "#3D2521",
              }}
            >
              What Our Customer Says
            </Typography>
            <Box
              sx={{
                margin: "20px auto",
                textAlign: "center",
                width: "0px",
                border: "1px solid #3D2521",
                height: "30px",
              }}
            ></Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: { xs: "40px auto", lg: "100px 0" },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ReviewCards />

               
              </Box>
            </Box>

            <Button
              sx={{
                margin: { xs: "auto", sm: "0px" },
                width: {xs:"18  0px", sm:"220px"},
                height: {xs:"35px", sm:"54px"},
                gap: "10px",
                fontSize: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                fontFamily: "Bona Nova",
                textTransform: "capitalize",
                color: "#000000",
                border: "1px solid rgb(0, 0, 0)",
              }}
              variant="outlined"
            >
              Write a Review <ArrowForwardIcon />
            </Button>
          </Box>
        </Box> */}
      </Box>
    </div>
  );
};

export default AboutUs;
