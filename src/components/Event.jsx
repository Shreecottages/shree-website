import React from "react";
import { Box, Stack } from "@mui/material";
// import Review 2 from './Review 2';
import Review from "./Review";
import '../styles/Event.css';
import Jumbotron from "./Jumbotron";
import Content from "./Content";

const Event = () => {

    return (
        <Stack>
            <Box sx={{ paddingTop: { xs: "25vh", sm: "20vh", md: "15vh", lg: "0" } }}>
                <Jumbotron />
                <Content />
                <Review />
            </Box>
        </Stack>
    );
}
export default Event;