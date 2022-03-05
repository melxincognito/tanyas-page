import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Card, CardContent, Typography } from "@mui/material";
import DesertSunset from "../assets/desert-sunset_2.jpeg";

export default function PhoenixNeighborhoods() {
  const mainContainerStyles = {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  };
  const imageContainerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "60%",
  };
  const cardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    padding: 2,
    spacing: 12,
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box id="mainContainer" sx={mainContainerStyles}>
          <Box id="imageContainer" sx={imageContainerStyles}>
            <img style={imageStyle} src={DesertSunset} alt="phoenix sunset" />
            <Box sx={{ position: "absolute" }}>
              <Card sx={cardStyles}>
                <CardContent>
                  <div>
                    <Typography variant="h4"> Phoenix, AZ</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" color="secondary.main">
                      Neighborhood Guide
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
