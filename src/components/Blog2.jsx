import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const somnath = require('../images/exp/somnath.png');

const useStyles = makeStyles((theme) => ({
  blogImage: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
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
  blogContent: {
    marginBottom: theme.spacing(2),
  },
}));

const BlogDetails = () => {
  const classes = useStyles();

  return (
    <Box sx={{ padding: { xs: "10vw 5vw", md: "5vw 10vw" } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <img
            src={somnath}
            alt="Image not found!"
            className={classes.blogImage}
          />
          <div className={classes.dateContainer}>
            <Typography variant="subtitle1" component="span">
              <b>11</b>th
            </Typography>
            <Typography variant="subtitle2" component="span">
              June
            </Typography>
            <Typography variant="subtitle2" component="span">
              <b>2021</b>
            </Typography>
          </div>
          <div className={classes.blogContent}>
            <Typography variant="h4" gutterBottom>
              Planning a Sasan Gir Destination Wedding?
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <i className="fas fa-user"></i>By Krupa Patel
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Mango resort is the ideal place in Sasan Gir as it offers an
              authentic superior destination wedding experience in the wildlife
              sanctuary. Located across the Hiren River, just outside Talala
              city, the resort stands for your better stay and relaxation.
              Constructed on 4 acres surrounding a Mango orchard and massive
              garden, the resort makes itself an incredible venue for destination
              weddings in the Gir forest.
            </Typography>
            <Typography variant="h5" gutterBottom>
              All-Inclusive Wedding Packages
            </Typography>
            <Typography variant="body1" gutterBottom>
              Organizing a wedding at The Mango resort in Gir has its charm.
              Several options are available in packages. You will have to tell us
              about the guest's quantity for room booking, and buffets moreover
              other amenities are free of charge. You and your guests will be
              among a gorgeous venue during the wedding and other functions. The
              resort-trained team considers your requirements and sets up the
              entire resort accordingly for a remarkable wedding and complete
              satisfaction for you and your guests. We have a well-trained team
              to handle your needs and demand for your desired venue for a
              destination wedding in Sasan Gir forest. We include a Complimentary
              night for an anniversary stay!
            </Typography>
            <ul>
              <li>Decor</li>
              <li>Music</li>
              <li>Catering</li>
              <li>Signature Drinks and Dishes</li>
              <li>Open Poolside Cafe</li>
              <li>Rain Dance Area</li>
              <li>Cakes</li>
              <li>Much More</li>
            </ul>
            <Typography variant="body1" gutterBottom>
              A wedding is not a celebration of just one day, but many functions
              included in the entire marriage. The Mango resort would happily
              serve their assistance from the Garba function to reception to make
              your wedding remarkable at Sasan Gir forest. We offer to choose you
              different beautiful themes according to your various celebrations
              during a destination wedding in Gir. We are confident that you would
              be in your selected modern and rustic style decor.
            </Typography>
            {/* ... continue with other content ... */}
          </div>
        </Grid>
        {/* Add any sidebar content here */}
      </Grid>
    </Box>
  );
};

export default BlogDetails;
