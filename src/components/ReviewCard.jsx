import React from "react";
import { Box, Typography } from "@mui/material";

import ResortOwnerProfilePhoto from "../assets/ResortOwnerProfilePhoto.png";

const ReviewCard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // margin: { xs: "auto", lg: "0px" },
          width: { xs: "320px", lg: "300px", xl: "600px" },
          height: { xs: "350px", lg: "200px", xl: "380px" },
          background: "#FFFFFF",
          padding: "40px",
          boxShadow:
            "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          "@media (min-width:200px) and (max-width:300px)": {
            width: "250px",
            height: "auto",
          },
        }}
      >
        <Box>Rating</Box>
        <Typography
          sx={{
            marginTop: { xs: "20px", lg: "20px", xl: "40px" },
            // margin: { xs: "20px 30px 20px 30px" },
            fontFamily: "Bona Nova",
            fontStyle: "normal",
            fontSize: { xs: "16px", lg: "14px", xl: "20px" },
            letterSpacing: "0.07em",
            lineHeight: "24px",
            textAlign: "start",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          natus minus vero adipisci animi? Aut? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Sunt, nesciunt?
        </Typography>

        <Box
          sx={{
            marginTop: { xs: "50px", lg: "20px", xl: "50px" },
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box>
            <img
              style={{ width: "50px" }}
              src={ResortOwnerProfilePhoto}
              alt=""
            />
          </Box>

          <Typography
            sx={{
              margin: "auto 0px auto 30px",
              fontFamily: "Bona Nova",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "0.07em",
            }}
          >
            Haresh Patel
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ReviewCard;
