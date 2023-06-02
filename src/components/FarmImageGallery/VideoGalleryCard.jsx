import React from "react";
import { Card } from "@mui/material";

const VideoGalleryCard = () => {
  return (
    <div>
      <Card
        sx={{
          margin: "auto",
          width: { xs: "300px", sm: "85%", md: "730px" },
          maxWidth: { xs: "100%", sm: "100%", md: "100%" },
          height: { xs: "170px", sm: "320px", md: "410px" },
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
          boxShadow: "none",
          borderRadius: "20px",
          backgroundColor: "#000000",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-d-se-tNcmc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Card>
    </div>
  );
};

export default VideoGalleryCard;
