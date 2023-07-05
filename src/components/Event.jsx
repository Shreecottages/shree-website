import React from "react";
import { Box, Stack } from "@mui/material";
// import Review 2 from './Review 2';
import Review from "./Review";
import '../styles/Event.css';
import Jumbotron from "./Jumbotron";
import Content from "./Content";
import { Helmet } from "react-helmet";

const Event = () => {

    return (
        <Stack>
            <Helmet>
                <title>Events & Meetings - Shree Cottages</title>
                <meta
                    name="description"
                    content="Different events held at Shree Cottages"
                />
                <meta 
                    name="keywords"
                    content="events,shree cottages, hotel, resorts, weddings, meetings"
                />
            </Helmet>
            <Box sx={{overflowX:"hidden"}}>
                <Jumbotron />
                <Content />
                <Review />
            </Box>
        </Stack>
    );
}
export default Event;