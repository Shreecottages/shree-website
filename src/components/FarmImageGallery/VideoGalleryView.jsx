import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import VideoGalleryCard from "./VideoGalleryCard";

const VideoGalleryView = () => {
  return (
    <div>
      <Box
        sx={{
          width: "80%",
          margin: "80px auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={{ xs: 4, sm: 4, md: 6 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          // columnSpacing={{ xs: 1, sm: 4, md: 6 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={4} sm={8} md={6}>
              <VideoGalleryCard />
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
