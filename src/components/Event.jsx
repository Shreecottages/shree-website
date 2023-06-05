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
            <Box>
                <Jumbotron />
                <Content />
                <Review />
            </Box>
        </Stack>
    );
}
export default Event;