import React from "react";
import PropTypes from "prop-types";
import { Card } from "@mui/material";

const VideoGalleryCard = ({ videoURL }) => {
  console.log(videoURL);
  return (
    <div>
      <Card
        sx={{
          margin: "auto",
          width: { xs: "370px", sm: "85%", md: "730px" },
          maxWidth: { xs: "100%", sm: "100%", md: "100%" },
          height: { xs: "190px", sm: "320px", md: "410px" },
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
          boxShadow: "none",
          borderRadius: "20px",
          backgroundColor: "#000000",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoURL}
          title="YouTube video player"
          style={{border: "none"}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Card>
    </div>
  );
};

VideoGalleryCard.propTypes = {
  videoURL: PropTypes.string.isRequired,
};

export default VideoGalleryCard;
