/* eslint-disable react/no-array-index-key */
import React from "react";
import { Box, Grid } from "@mui/material";

import VideoGalleryCard from "./VideoGalleryCard";

const VideoGalleryView = () => {
  const videos = [
    "https://www.youtube.com/embed/ExAjt31hEwg",
    "https://www.youtube.com/embed/elDjJ8Qapz8",
    "https://www.youtube.com/embed/gKGoeHBr048",
    "https://www.youtube.com/embed/H_kSChnqVSk",
    "https://www.youtube.com/embed/xhv9gT1LCO0",
    "https://www.youtube.com/embed/efHOO_ZJz_o",
    "https://www.youtube.com/embed/0hz4ZJ1mkYw",
    "https://www.youtube.com/embed/E62sSojxSPc",
  ];
  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "80px auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 6 }}
          columns={{ xs: 12, sm: 8, md: 12 }}
          rowSpacing={{ xs: 2, sm: 2, md: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          // columnSpacing={{ xs: 1, sm: 4, md: 6 }}
        >
          {videos.map((item, index) => (
            <Grid item xs={12} sm={8} md={6} key={index}>
              <VideoGalleryCard videoURL={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* {videos.map((item, index) => (
        <Box key={index}>

     {item.id.videoId && <VideoGalleryCard video={item} />} 
        </Box>
      ))} */}
    </div>
  );
};

export default VideoGalleryView;
