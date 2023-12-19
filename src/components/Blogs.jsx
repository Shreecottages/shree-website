import {
  Grid,
  Paper,
  Box,
  Stack,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AboutFLowerRight = require("../assets/AboutFlowersRight.png");
const AboutUsTop = require("../assets/AboutTopImg.png");
const AboutUsTopM = require("../images/TopImage.png");
const AboutFlowerLeft = require("../assets/AboutFlowerLeft.png");
// const header1 = require("../images/exp/header1.webp");
// const header1M = require("../images/exp/header1-mobile.png");
const gir_jungle = require("../images/exp/gir_jungle.png");
const gir3 = require("../images/blogs/b1-gir3.jpg");
// const k_b = require("../images/exp/k&b.png");
const somnath = require("../images/exp/somnath.png");
const tulsiShyam = require("../images/exp/tulsiShyam.png");

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    width: "100%",
    height: "200px", // Adjust the height as per your design
    objectFit: "cover",
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  readMoreBtn: {
    marginTop: theme.spacing(2),
  },
}));

const BlogPost = ({ title, excerpt, author, image, date, url }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        className={classes.paper}
        sx={{
          boxShadow:
            "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img src={image} alt={title} className={classes.image} />
        <Typography variant="h5" sx={{ color: "#3D2521" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontFamily: "Poppins", m: { xs: " 4vw 0vw", sm: "1vw 0vw" } }}
        >
          By {author} | {date}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Poppins", m: { xs: " 4vw 0vw", sm: "1vw 0vw" } }}
        >
          {excerpt}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={url} // Use the provided link for the "Read More" button
          className={classes.readMoreBtn}
        >
          Read More
        </Button>
      </Paper>
    </Grid>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Blogs() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // const classes = useStyles();

  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Places to Visit in Sasan Gir",
      excerpt:
        "Welcome to the wild heart of Gujarat! Sasan Gir, also known as the Gir Forest National Park, is a mesmerizing destination that showcases the untamed beauty of nature. This vast expanse of wilderness is home to the majestic Asiatic lions...",
      author: "Mrs. Eleanor",
      image: gir3, // Replace with actual image URL
      date: "August 7, 2023", // Replace with actual date
      url: "/places-to-visit-in-sasan-gir-wildlife-nature-heritage",
    },
    {
      id: 2,
      title: "Blog Post 2",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen...",
      author: "Jane Smith",
      image: somnath, // Replace with actual image URL
      date: "August 5, 2023", // Replace with actual date
      url: "",
    },
    {
      id: 3,
      title: "Blog Post 3",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen...",
      author: "Jane Smith",
      image: tulsiShyam, // Replace with actual image URL
      date: "August 5, 2023", // Replace with actual date
      url: "",
    },

    // Add more blog posts
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff", // Set your desired background color here
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Helmet>
          <title>Our Blogs - Shree Cottages</title>
          <meta
            name="description"
            content="Learn more about our resort, clients experiences, tourist places in Sasan Gir, and many other informative topics"
          />
          <meta
            name="keywords"
            content="shree cottages,hotel,resort,tourist places,places to visit,attractions,gir national park,gir wildlife sanctuary,gir jungle safari, devaliya safari park, jamjir waterfall , kankai & banej, somnath temple, tulsishyam, diu, junagadh"
          />
          <meta name="robots" content="index, follow" />
          <meta name="canonical" content="https://shreecottages.com/blogs" />
          <meta name="image" content={gir_jungle} />

          <meta name="og:title" content="Our Blogs - Shree Cottages" />
          <meta property="og:site_name" content="Shree Cottgaes" />
          <meta
            name="og:description"
            content="Learn more about our resort, clients experiences, tourist places in Sasan Gir, and many other informative topics"
          />
          <meta name="og:image" content={gir_jungle} />
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
            // backgroundSize: "cover",
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
          ></Box>
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
              Blogs
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
                textAlign: "center",
                alignSelf: "center",
                lineHeight: "19px",
                letterSpacing: "0.01rem",
                m: { xs: " 0vw -30vw", sm: "0vw" },
              }}
            >
              Stay Informed and Inspired with Our Blog Posts📜
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
          ></Box>
        </Box>

        {/* ---------------------------------------------------Content---------------------------------------------------------- */}

        <Box sx={{ padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>
          {/* ... existing code ... */}

          {/* --------Content for blog posts------------------ */}

          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                image={post.image}
                date={post.date}
                url={post.url}
              />
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
