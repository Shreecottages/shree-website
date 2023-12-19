import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Paper,
  Box,
  Stack,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";

const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
const girJungle = require("../images/exp/gir_jungle.png");
const header1M = require("../images/exp/header1-mobile.png");

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

const Blog1 = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const classes = useStyles();

  return (
    <Stack>
      <Helmet>
        <title>Our Blogs</title>
        <meta
          name="description"
          content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh"
        />
        <meta
          name="keywords"
          content="shree cottages,hotel,resort,tourist places,places to visit,attractions,gir national park,gir wildlife sanctuary,gir jungle safari, devaliya safari park, jamjir waterfall , kankai & banej, somnath temple, tulsishyam, diu, junagadh"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="canonical"
          content="https://shreecottages.com/best-places-to-visit-in-sasan-gir"
        />
        <meta name="image" content={girJungle} />

        <meta
          name="og:title"
          content="Best Tourist Places Attractions to Visit In Sasan Gir with Family"
        />
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta
          name="og:description"
          content="Most Visited Tourist Places In Sasan Gir. 1. Gir Jungle Safari 2. Devaliya Safari Park 3. Jamjir Waterfall 4. Kankai & Banej 5. Somnath Temple 6. TulsiShyam 7. Diu 8. Junagadh"
        />
        <meta name="og:image" content={girJungle} />
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
            p: "5vw 0vw",
            width: { xs: "30vw", sm: "100%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "warning.main",
              alignSelf: "center",
              m: { xs: " 0vw -10vw", sm: "0vw" },
            }}
          >
            Blog Details
          </Typography>
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
              fontFamily: "Bona Nova",
              color: "warning.main",
              textAlign: "left",
              alignSelf: "center",
              lineHeight: "19px",
              letterSpacing: "0.01rem",
              m: { xs: " 0vw -30vw", sm: "0vw" },
            }}
          >
            Stay Informed and Inspired with Our Blog Posts
          </Typography>
        </Box>
        <Box
          sx={{
            // marginRight: { sx: "50px", lg: "200px" },
            backgroundImage: `url(${AboutFLowerRight})`,
            backgroundRepeat: "no-repeat",
            width: { xs: "25vw", md: "200px", lg: "250px" },
            backgroundSize: "contain",
          }}
        />
      </Box>

      {/* ---------------------------------------------------Content---------------------------------------------------------- */}
      {/* Blog Content */}
      <Box sx={{ padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>
        <Box>
          <img
            src={header1M}
            alt="Sasan Gir Lion and Lioness"
            className={classes.image}
          />
        </Box>

        <Box sx={{ marginTop: "3vw" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#3d2521",
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 2vw 0vw", sm: "1.5vw 0vw" },
            }}
          >
            Blog1
          </Typography>

          {/* Adding author name and date side by side */}
          <Grid
            container
            justifyContent="space-between"
            sx={{
              marginTop: { xs: "4vw", sm: "1.5vw" },
              marginBottom: { xs: "0.5vw", sm: "0.5vw" },
            }}
          >
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <PersonIcon sx={{ color: "#484848", fontSize: "1.2rem" }} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                      color: "#818181",
                      marginLeft: "8px",
                    }}
                  >
                    By Rishit Patel
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
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                      color: "#818181",
                      marginLeft: "8px",
                    }}
                  >
                    07-08-2023
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography
            variant="body1"
            className={classes.blogContent}
            sx={{
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 4vw 0vw", sm: "2vw 0vw" },
              lineHeight: "2",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin justo eget fringilla congue. Sed sagittis eget tortor
            nec dapibus. Duis quis magna eu dui pellentesque interdum at in
            erat. Duis vitae ex ultricies, dapibus purus vitae, congue odio.
            Nullam at odio in nibh tempus varius. Cras convallis hendrerit
            bibendum. Nulla ut velit in arcu tincidunt ultrices ac eu nulla.
            Nulla facilisi. Phasellus consectetur enim eu ipsum blandit, non
            luctus metus ultrices.
          </Typography>
        </Box>

        {/* Sub Heading 1 */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#3D2521",
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" },
            }}
          >
            Sub Heading 1
          </Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography
            variant="body1"
            className={classes.blogContent}
            sx={{
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1vw 0vw", sm: "1vw 0vw" },
              lineHeight: "2",
            }}
          >
            Fusce nec malesuada odio. Nam dapibus, urna et malesuada
            condimentum, justo lectus facilisis tortor, nec volutpat augue dolor
            vel mauris. Cras id elementum dui. Proin et magna nec tellus dictum
            consequat. Vivamus tristique nec est vel venenatis.
          </Typography>
        </Box>

        {/* Sub Heading 2 */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#3D2521",
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" },
            }}
          >
            Sub Heading 2
          </Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography
            variant="body1"
            className={classes.blogContent}
            sx={{
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1vw 0vw", sm: "1vw 0vw" },
              lineHeight: "2",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin justo eget fringilla congue. Sed sagittis eget tortor
            nec dapibus. Duis quis magna eu dui pellentesque interdum at in
            erat.
          </Typography>
        </Box>

        {/* Table View */}
        <Box sx={{ mt: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Column 1</TableCell>
                  <TableCell>Column 2</TableCell>
                  <TableCell>Column 3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Value 1</TableCell>
                  <TableCell>Value 2</TableCell>
                  <TableCell>Value 3</TableCell>
                </TableRow>
                {/* Add more rows here if needed */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Sub Heading 3 */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#3D2521",
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1.5vw 0vw", sm: "1vw 0vw" },
            }}
          >
            Sub Heading 3
          </Typography>
          <Divider sx={{ backgroundColor: "#FFBB70" }} />
          <Typography
            variant="body1"
            className={classes.blogContent}
            sx={{
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1vw 0vw", sm: "1vw 0vw" },
              lineHeight: "2",
            }}
          >
            Vestibulum condimentum arcu et sapien dignissim, ac feugiat purus
            condimentum. Sed nec elementum tellus, at convallis elit.
          </Typography>
        </Box>

        {/* More Content */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body1"
            className={classes.blogContent}
            sx={{
              alignSelf: "left",
              textAlign: "left",
              m: { xs: " 1vw 0vw", sm: "1vw 0vw" },
              lineHeight: "2",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin justo eget fringilla congue. Sed sagittis eget tortor
            nec dapibus.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Blog1;
