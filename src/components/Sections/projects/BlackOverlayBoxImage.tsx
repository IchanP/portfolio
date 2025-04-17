import { Box, CardMedia } from "@mui/material";

const BlackOverlayBoxImage = ({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        alt={imgAlt}
        src={imgSrc}
        sx={{ maxHeight: "150px" }}
      />
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
    </Box>
  );
};

export default BlackOverlayBoxImage;
