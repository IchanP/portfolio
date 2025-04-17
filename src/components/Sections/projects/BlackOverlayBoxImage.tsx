"use client";
import { Box, CardMedia } from "@mui/material";
import { useIsDarkmode } from "stores/DarkModeState";

const BlackOverlayBoxImage = ({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) => {
  const isDarkMode = useIsDarkmode((state) => state.isDarkMode);
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        alt={imgAlt}
        src={imgSrc}
        sx={{ maxHeight: "150px" }}
      />
      {!isDarkMode && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Gray with 20% opacity
          }}
        />
      )}
    </Box>
  );
};

export default BlackOverlayBoxImage;
