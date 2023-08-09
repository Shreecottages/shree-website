import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Paper, Box, Stack, Typography, Divider, Button, useMediaQuery } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import { Link } from "react-router-dom";


const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
const gir_jungle = require('../images/exp/gir_jungle.png');
const jamjir = require('../images/exp/jamjir.png');
const k_b = require('../images/exp/k&b.png');
const somnath = require('../images/exp/somnath.png');
const tulsiShyam = require('../images/exp/tulsiShyam.png');
const header1 = require('../images/exp/header1.webp');
const header1M = require('../images/blogs/blog1-1.jpg');




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

  return (
    <Stack>
      <Helmet>
        <title>Our Blogs</title>
        <meta name="description" content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh" />
        <meta name="keywords" content="shree cottages,hotel,resort,tourist places,places to visit,attractions,gir national park,gir wildlife sanctuary,gir jungle safari, devaliya safari park, jamjir waterfall , kankai & banej, somnath temple, tulsishyam, diu, junagadh" />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content="https://shreecottages.com/best-places-to-visit-in-sasan-gir" />
        <meta name="image" content={gir_jungle} />

        <meta name="og:title" content="Best Tourist Places Attractions to Visit In Sasan Gir with Family" />
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta name="og:description" content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh" />
        <meta name="og:image" content={gir_jungle} />

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
          <Typography variant="body1" sx={{ fontFamily: "Bona Nova", color: "warning.main", textAlign: "left", alignSelf: "center", lineHeight: "19px", letterSpacing: "0.01rem", m: { xs: " 0vw -30vw", sm: "0vw" } }}>Stay Informed and Inspired with Our Blog Posts</Typography>
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


        <Box><img src={header1M} alt="Sasan Gir Lion and Lioness" className={classes.image} /></Box>


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
                    07-08-2022
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 4vw 0vw", sm: "2vw 0vw" }, lineHeight: "2" }}>
          Welcome to the wild heart of Gujarat! Sasan Gir, also known as the Gir Forest National Park, 
          is a mesmerizing destination that showcases the untamed beauty of nature. This vast expanse 
          of wilderness is home to the majestic Asiatic lions, making it the only place in the world 
          where these incredible creatures can be found outside of Africa. As you embark on your journey 
          through Sasan Gir, you'll encounter not only the iconic lions but also a plethora of other 
          wildlife species, lush landscapes, and vibrant flora. Let's dive into the enchanting world 
          of Sasan Gir and explore its captivating attractions.
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
                    <Typography variant="body1" sx={{ fontWeight: 'semibold',color: "#fff", fontFamily: "Poppins", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Places</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 'semibold',color: "#fff", fontFamily: "Poppins",fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>Far From Resort</Typography>
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
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Venture into the heart of the Gir Forest National Park with the Gir Jungle Safari. This exciting 
          expedition allows you to witness the wild inhabitants of Sasan Gir up close. As you embark on a 
          guided safari, keep your eyes peeled for the majestic Asiatic lions that roam freely in their natural 
          habitat. The thrill of spotting these incredible creatures in the wild is an experience you'll cherish 
          forever. But the safari offers more than just lions – you might encounter leopards, deer, antelopes, 
          and a variety of bird species. The Gir Jungle Safari is not just an adventure; it's a journey into 
          the heart of nature's beauty and diversity.
          </Typography>
        </Box>









        {/* Sub Heading 2 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Devaliya Safari Park: A Glimpse into Wildlife Diversity</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          For a more controlled yet equally enthralling wildlife experience, head to Devaliya Safari Park, 
          also known as the Gir Interpretation Zone. Here, you can observe various animal species, 
          including lions, in a protected environment. This unique zone provides insights into the region's 
          ecosystem and conservation efforts, making it an educational and captivating experience for visitors 
          of all ages.
          </Typography>
        </Box>

        

        {/* Sub Heading 3 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Jamjir Waterfall: Nature's Breathtaking Masterpiece</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Amidst the wilderness of Sasan Gir lies a hidden gem – the Jamjir Waterfall. This natural 
          wonder captivates with its cascading waters and lush surroundings. As you hike through the 
          picturesque terrain to reach the waterfall, you'll be rewarded with a mesmerizing view that 
          rejuvenates your senses. The serene ambiance and pristine beauty of Jamjir Waterfall make it 
          a must-visit destination for nature enthusiasts and explorers.
          </Typography>
        </Box>

        {/* Sub Heading 4 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Kankai & Banej: A Tranquil Escape</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Escape the hustle and bustle of city life and find solace at Kankai and Banej, two picturesque 
          villages near Sasan Gir. Surrounded by verdant landscapes and tranquil vibes, these villages offer
           a peaceful retreat for those seeking serenity. Engage with the local communities, explore the 
           countryside, and immerse yourself in the simplicity and beauty of rural life.
          </Typography>
        </Box>

        {/* Sub Heading 5 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Somnath Temple: A Spiritual Sojourn</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          No visit to Sasan Gir is complete without a trip to the iconic Somnath Temple, one of 
          the twelve Jyotirlinga shrines dedicated to Lord Shiva. This ancient temple stands as 
          a testament to Gujarat's rich cultural and spiritual heritage. The stunning architecture, 
          intricate carvings, and spiritual aura create an unforgettable experience for pilgrims and 
          tourists alike.
          </Typography>
        </Box>

        {/* Sub Heading 6 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Tulsi Shyam Springs: Rejuvenation Amidst Nature</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Seeking rejuvenation and relaxation? Look no further than the Tulsi Shyam Springs, known 
          for their therapeutic properties. Dip your feet into the cool, refreshing waters or take a 
          leisurely stroll around the springs. The tranquil atmosphere and natural beauty of this 
          site provide a perfect escape from the demands of modern life.
          </Typography>
        </Box>

        {/* Sub Heading 7 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Diu: A Coastal Delight</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Extend your Sasan Gir adventure by visiting the nearby island of Diu, known for its stunning 
          beaches and historical charm. Explore ancient forts, pristine shores, and vibrant markets 
          as you soak in the coastal beauty and cultural richness of this enchanting destination.
          </Typography>
        </Box>

        {/* Sub Heading 8 */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ color: "#3D2521", alignSelf: "left", textAlign: "left", m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" } }}>Heritage of Junagadh: Exploring History</Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
          Immerse yourself in history and heritage by visiting Junagadh, a city brimming with 
          architectural marvels and cultural landmarks. Explore the majestic Uparkot Fort, marvel 
          at the intricate carvings of Mahabat Maqbara, and experience the spiritual ambiance of 
          Durbar Hall Museum. Junagadh's heritage is a tapestry of diverse influences that showcase 
          the region's historical significance.
          </Typography>
        </Box>

        {/* More Content */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" className={classes.blogContent} sx={{ alignSelf: "left", textAlign: "left", m: { xs: " 1vw 0vw", sm: "1vw 0vw" }, lineHeight: "2" }}>
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