import { useState } from "react"; 
import { Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; // Import back arrow icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Import forward arrow icon
import { urlForImage } from "../sanity/lib/image";

const Carousel = ({players}) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // State to track the index of the currently displayed player

  console.log("players check: ", players)

  const buttonStyles = {
    color:"#ffffff",
  };

  const handleNextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) =>
      prevIndex === players.length - 1 ? 0 : prevIndex + 1
    ); // Move to the next player or wrap around to the first player
  };

  const handlePreviousPlayer = () => {
    setCurrentPlayerIndex((prevIndex) =>
      prevIndex === 0 ? players.length - 1 : prevIndex - 1
    ); // Move to the previous player or wrap around to the last player
  };

  // Scroll through players one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayerIndex((prevIndex) =>
        prevIndex === players.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Automatically change player every 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [players.length]); // Trigger effect when players array length changes

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Center the content horizontally */}
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="p" component="h2">
            {players[currentPlayerIndex].playerName}{" "}
            {/* Display the name of the current player */}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Center the buttons and image vertically */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <Button onClick={handlePreviousPlayer} sx={buttonStyles}>
              <ArrowBackIosIcon />
            </Button>{" "}
            {/* Call handlePreviousPlayer when the back button is clicked */}
          </motion.div>
          <motion.img
            key={players[currentPlayerIndex].playerImage} // Add key to force re-render when image changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            alt={`image of ${players[currentPlayerIndex].playerName}`}
            src={urlForImage(players[currentPlayerIndex].playerImage)}
            style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain", margin:"20px" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <Button onClick={handleNextPlayer} sx={buttonStyles}>
              <ArrowForwardIosIcon />
            </Button>{" "}
            {/* Call handleNextPlayer when the forward button is clicked */}
          </motion.div>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {/* Center the description text */}
          <Typography variant="p" component="h3">
            {players[currentPlayerIndex].playerDescription}{" "}
            {/* Display the description of the current player */}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Carousel;
