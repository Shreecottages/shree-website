import React from "react";
import { Box, Stack } from "@mui/material";
// import Review 2 from './Review 2';
import { Helmet } from "react-helmet";
import Review from "./Review";
import "../styles/Event.css";
import Jumbotron from "./Jumbotron";
import Content from "./Content";
import ShreeEvent from "../images/shree-event.jpg";

const Event = () => {
  return (
    <Stack>
      <Helmet>
        <title>Weddings and Events Planning - Shree Cottages</title>
        <meta
          name="description"
          content="We Have Best Weddings and Events Planner team To Organize Your Event With Best Management At Our Exquisite Venue"
        />
        <meta
          name="keywords"
          content="shree Cottage, events, birthday party, corporate event, event planning, weddings, meetings, shree Party Plot, resort, hotel ,destination wedding resort ,wedding place ,banquet halls ,sasan gir ,talala gir ,gir ,gujarat"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="canonical"
          content="https://shreecottages.com/wedding-event-planning"
        />
        <meta name="image" content={ShreeEvent} />

        <meta
          name="og:title"
          content="Weddings and Events Planning - Shree Cottages"
        />
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta
          name="og:description"
          content="We Have Best Weddings and Events Planner team To Organize Your Event With Best Management At Our Exquisite Venue"
        />
        <meta name="og:image" content={ShreeEvent} />
      </Helmet>
      <Box sx={{ overflowX: "hidden" }}>
        <Jumbotron />
        <Content />
        <Review />
      </Box>
    </Stack>
  );
};
export default Event;
