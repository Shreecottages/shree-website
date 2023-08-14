import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Paper, Box, Stack, Typography, Divider, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/material/styles';


const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");

const b1banner = require('../images/blogs/b1-banner.jpg');
const gir1 = require('../images/blogs/b1-gir1.jpg');
const gir2 = require('../images/blogs/b1-gir2.jpg');
const gir3 = require('../images/blogs/b1-gir3.jpg');
const devaliya1 = require('../images/blogs/b1-devaliya1.jpg');
const devaliya2 = require('../images/blogs/b1-devaliya2.jpg');
const devaliya3 = require('../images/blogs/b1-devaliya3.jpg');
const Jamjir1 = require('../images/blogs/b1-Jamjir1.jpg');
const Jamjir2 = require('../images/blogs/b1-Jamjir2.jpg');
const Jamjir3 = require('../images/blogs/b1-Jamjir3.jpg');
const Kankai1 = require('../images/blogs/b1-Kankai1.jpg');
const Kankai2 = require('../images/blogs/b1-Kankai2.jpg');
const Kankai3 = require('../images/blogs/b1-Kankai3.jpg');
const somanath1 = require('../images/blogs/b1-somanath1.jpg');
const somanath2 = require('../images/blogs/b1-somanath2.jpg');
const somanath3 = require('../images/blogs/b1-somanath3.jpg');
const tulsishyam1 = require('../images/blogs/b1-tulsishyam1.jpg');
const tulsishyam2 = require('../images/blogs/b1-tulsishyam2.jpg');
const tulsishyam3 = require('../images/blogs/b1-tulsishyam3.jpg');
const diu1 = require('../images/blogs/b1-diu1.jpg');
const diu2 = require('../images/blogs/b1-diu2.jpg');
const diu3 = require('../images/blogs/b1-diu3.jpg');
const Junagadh1 = require('../images/blogs/b1-Junagadh1.jpg');
const Junagadh2 = require('../images/blogs/b1-Junagadh2.jpg');
const Junagadh3 = require('../images/blogs/b1-Junagadh3.jpg');



export default function Blog1() {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));


  const useStyles = makeStyles((theme) => ({
    image: {
      width: "100%",
      height: "30vw", // Adjust the height as per your design
      objectFit: "cover",
      marginBottom: theme.spacing(2),
      borderRadius: "20px",
      [theme.breakpoints.down("sm")]: {
        height: "50vw", // Adjust the height for mobile screens
        borderRadius: "10px",
      },
    },
    dateContainer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2),
      width: "100%",
      height: "100%",
      borderRadius: theme.shape.borderRadius,
    },

    boxMarginDesktop: {
      margin: "0 200px", // 200px margin on left and right sides in desktop view
      [theme.breakpoints.down("sm")]: {
        margin: "0 24px", // 24px margin on left and right sides in mobile view
      },
    },
    blogContent: {
      marginBottom: theme.spacing(2),

    },

  }));

  const classes = useStyles();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack>
      <Helmet>
        <title>Discover the Best Places to Visit in Sasan Gir: Wildlife, Nature, and Heritage</title>
        <meta name="description" content="Discover the top places to visit in Sasan Gir, Gujarat, including the thrilling Gir Jungle Safari, tranquil Devaliya Safari Park, mesmerizing Jamjir Waterfall, cultural marvels like Somnath Temple, and more" />
        <meta name="keywords" content="shree cottages,tourist places,places to visit,attractions,gir national park,gir wildlife sanctuary,gir jungle safari, devaliya safari park, jamjir waterfall , kankai & banej, somnath temple, tulsishyam, diu, junagadh" />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content="https://shreecottages.com/places-to-visit-in-sasan-gir-wildlife-nature-heritage" />
        <meta name="image" content={gir3} />

        <meta name="og:title" content="Discover the Best Places to Visit in Sasan Gir: Wildlife, Nature, and Heritage" />
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta name="og:description" content="Discover the top places to visit in Sasan Gir, Gujarat, including the thrilling Gir Jungle Safari, tranquil Devaliya Safari Park, mesmerizing Jamjir Waterfall, cultural marvels like Somnath Temple, and more" />
        <meta name="og:image" content={gir3} />

      </Helmet>
      <Box sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        background: `rgba(61, 37, 33, 0.5) url(${isSmallScreen ? AboutUsTopM : AboutUsTop})`,
        boxShadow: "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
        textAlign: "center",
        padding: { xs: "0vw", md: "0vw 10vw" },
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "75vw", sm: "40vw", md: "30vw", lg: "25vw", xl: "20vw" },
        '@media(max-width:300px)': {
          height: "100vw"
        }
      }}>
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
        ></Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", p: "5vw 0vw", width: { xs: "30vw", sm: "100%" } }}>
          <Typography variant="h2" sx={{ color: "warning.main", alignSelf: "center", m: { xs: " 0vw -10vw", sm: "0vw" } }}>Blog Details</Typography>
          <Divider orientation="vertical" variant="middle" sx={{ height: "1.55rem", width: "1px", backgroundColor: "warning.main", alignSelf: "center", m: '1.1rem' }} />
          <Typography variant="body1" sx={{ fontFamily: "Bona Nova", color: "warning.main", textAlign: "center", alignSelf: "center", lineHeight: "19px", letterSpacing: "0.01rem", m: { xs: " 0vw -30vw", sm: "0vw" } }}>Stay Informed and Inspired with Our Blog Posts</Typography>
        </Box>
        <Box
          sx={{
            // marginRight: { sx: "50px", lg: "200px" },
            backgroundImage: `url(${AboutFLowerRight})`,
            backgroundRepeat: "no-repeat",
            width: { xs: "25vw", md: "200px", lg: "250px" },
            backgroundSize: "contain",
          }}
        ></Box>
      </Box>

      {/* ---------------------------------------------------Content---------------------------------------------------------- */}
      {/* Blog Content */}
      <Box sx={{ padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>


        <Box><img src={b1banner} alt="Sasan Gir Lion and Lioness" className={classes.image} /></Box>


        <Box sx={{ marginTop: "3vw" }}>
          <Typography variant="h2" sx={{ color: "#3d2521", alignSelf: "left", textAlign: "left", m: { xs: " 2vw 0vw", sm: "1.5vw 0vw" } }}>Places to Visit in Sasan Gir: Exploring the Wilderness of Gujarat</Typography>

          {/* Adding author name and date side by side */}
          <Grid container justifyContent="space-between" sx={{ marginTop: { xs: "4vw", sm: "1.5vw" }, marginBottom: { xs: "0.5vw", sm: "0.5vw" } }}>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <PersonIcon sx={{ color: "#484848", fontSize: "1.2rem" }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ fontFamily: "Poppins", color: "#818181", marginLeft: "8px" }}>
                    By Mrs. Eleanor
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <EventIcon sx={{ color: "#484848", fontSize: "1.2rem" }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ fontFamily: "Poppins", color: "#818181", marginLeft: "8px" }}>
                    07-08-2023
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 4vw 0vw", sm: "2vw 0vw" }, lineHeight: "2",fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Welcome to the wild heart of Gujarat! Sasan Gir, also known as the Gir Forest National Park,
            is a mesmerizing destination that showcases the untamed beauty of nature. This vast expanse
            of wilderness is home to the majestic Asiatic lions, making it the only place in the world
            where these incredible creatures can be found outside of Africa. As you embark on your journey
            through Sasan Gir, you'll encounter not only the iconic lions but also a plethora of other
            wildlife species, lush landscapes, and vibrant flora. Let's dive into the enchanting world
            of Sasan Gir and explore its captivating attractions.
          </Typography>
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 4vw 0vw", sm: "2vw 0vw" }, lineHeight: "2",fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            To read brief overview of the all places with booking and google maps directions links, please visit our <a href="/best-places-to-visit-in-sasan-gir" style={{ textDecoration: 'underline' }}>Experience</a> page.
          </Typography>
        </Box>

        {/* Table View */}
        <Box sx={{ mt: 4, marginLeft: 'opx', marginRight: 'auto', maxWidth: { xs: '90vw', sm: '70vw', md: '50vw' } }}> {/* Adjusted styling for left alignment */}
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Places and Distances</Typography> {/* Heading with big and bold style */}
          <TableContainer component={Paper} sx={{ backgroundColor: "#fff6f3", borderRadius: { xs: '10px', md: '20px' } }} >
            <Table sx={{ '& td, & th': { padding: '8px 16px' } }} >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#3D2521" }} >
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 'semibold', color: "#fff", fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Places</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 'semibold', color: "#fff", fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Far From Resort</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Gir Jungle Safari</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>17 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Devaliya Safari Park</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>27 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Jamjir Waterfall</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>34 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Kankai & Banej</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>39 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Somnath Temple</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>27 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>TulsiShyam</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>85 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Diu</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>83 km</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Heritage of Junagadh</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>67 km</Typography>
                  </TableCell>
                </TableRow>
                {/* Add more rows here if needed */}
              </TableBody>

            </Table>
          </TableContainer>
        </Box>


        {/* Sub Heading 1 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Gir Jungle Safari: A Thrilling Wildlife Adventure</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Venture into the heart of the Gir Forest National Park with the Gir Jungle Safari. This exciting
            expedition allows you to witness the wild inhabitants of Sasan Gir up close. As you embark on a
            guided safari, keep your eyes peeled for the majestic Asiatic lions that roam freely in their natural
            habitat. The thrill of spotting these incredible creatures in the wild is an experience you'll cherish
            forever. But the safari offers more than just lions – you might encounter leopards, deer, antelopes,
            and a variety of bird species. The Gir Jungle Safari is not just an adventure; it's a journey into
            the heart of nature's beauty and diversity.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={gir1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={gir2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={gir3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 2 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Devaliya Safari Park: A Glimpse into Wildlife Diversity</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            For a more controlled yet equally enthralling wildlife experience, head to Devaliya Safari Park,
            also known as the Gir Interpretation Zone. Here, you can observe various animal species,
            including lions, in a protected environment. This unique zone provides insights into the region's
            ecosystem and conservation efforts, making it an educational and captivating experience for visitors
            of all ages.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={devaliya1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={devaliya2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={devaliya3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 3 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Jamjir Waterfall: Nature's Breathtaking Masterpiece</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Amidst the wilderness of Sasan Gir lies a hidden gem – the Jamjir Waterfall. This natural
            wonder captivates with its cascading waters and lush surroundings. As you hike through the
            picturesque terrain to reach the waterfall, you'll be rewarded with a mesmerizing view that
            rejuvenates your senses. The serene ambiance and pristine beauty of Jamjir Waterfall make it
            a must-visit destination for nature enthusiasts and explorers.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={Jamjir1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Jamjir2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Jamjir3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 4 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Kankai & Banej: A Tranquil Escape</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Escape the hustle and bustle of city life and find solace at Kankai and Banej, two picturesque
            villages near Sasan Gir. Surrounded by verdant landscapes and tranquil vibes, these villages offer
            a peaceful retreat for those seeking serenity. Engage with the local communities, explore the
            countryside, and immerse yourself in the simplicity and beauty of rural life.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={Kankai1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Kankai2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Kankai3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 5 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Somnath Temple: A Spiritual Sojourn</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            No visit to Sasan Gir is complete without a trip to the iconic Somnath Temple, one of
            the twelve Jyotirlinga shrines dedicated to Lord Shiva. This ancient temple stands as
            a testament to Gujarat's rich cultural and spiritual heritage. The stunning architecture,
            intricate carvings, and spiritual aura create an unforgettable experience for pilgrims and
            tourists alike.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={somanath1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={somanath2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={somanath3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 6 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Tulsi Shyam Springs: Rejuvenation Amidst Nature</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Seeking rejuvenation and relaxation? Look no further than the Tulsi Shyam Springs, known
            for their therapeutic properties. Dip your feet into the cool, refreshing waters or take a
            leisurely stroll around the springs. The tranquil atmosphere and natural beauty of this
            site provide a perfect escape from the demands of modern life.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={tulsishyam1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={tulsishyam2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={tulsishyam3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 7 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Diu: A Coastal Delight</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Extend your Sasan Gir adventure by visiting the nearby island of Diu, known for its stunning
            beaches and historical charm. Explore ancient forts, pristine shores, and vibrant markets
            as you soak in the coastal beauty and cultural richness of this enchanting destination.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={diu1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={diu2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={diu3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* Sub Heading 8 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Heritage of Junagadh: Exploring History</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70", height: 2 }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Immerse yourself in history and heritage by visiting Junagadh, a city brimming with
            architectural marvels and cultural landmarks. Explore the majestic Uparkot Fort, marvel
            at the intricate carvings of Mahabat Maqbara, and experience the spiritual ambiance of
            Durbar Hall Museum. Junagadh's heritage is a tapestry of diverse influences that showcase
            the region's historical significance.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6} xs={4} sm={4} sx={{ height: { md: '45vh' } }}>
              <img src={Junagadh1} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Junagadh2} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
            <Grid item md={3} xs={2} sm={2} sx={{ height: { md: '45vh' } }}>
              <img src={Junagadh3} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </Grid>
          </Grid>
        </Box>

        {/* More Content */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" ,fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
            Sasan Gir, Gujarat's wilderness jewel, offers a plethora of experiences that range from
            thrilling wildlife encounters to serene nature escapes and spiritual sojourns. Whether
            you're exploring the Gir Jungle Safari, marveling at the cultural wonders of Junagadh, or
            rejuvenating at the Tulsi Shyam Springs, this destination promises to leave you with cherished
            memories and a deeper connection to the wonders of the natural world.
          </Typography>
        </Box>

      </Box>

    </Stack>
  );
}