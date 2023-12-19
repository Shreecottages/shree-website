import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hard404Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#FFE2D8",
      }}
    >
      <Helmet>
        <title>404 Page Not Found - Shree Cottages</title>
      </Helmet>

      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h1"
            style={{ color: "#3D2521", marginBottom: "20px" }}
          >
            404
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h2"
            style={{
              color: "#3D2521",
              fontSize: "1.3rem",
              textAlign: "center",
              padding: "0 32px",
              marginBottom: "32px", // Increase margin between the message and button
            }}
          >
            The page you’re looking for doesn’t exist.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Add a link to the home page */}
          <Link to="/">
            <Button variant="contained">Back Home</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hard404Page;
