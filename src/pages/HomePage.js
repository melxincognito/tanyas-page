import React, { Component } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FrontCover from "../assets/housePool_2.jpeg";
import { motion, AnimatePresence } from "framer-motion";

export default class HomePage extends Component {
  render() {
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
      height: "90%",
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
          <Box sx={mainContainerStyles}>
            <Box sx={imageContainerStyles}>
              <img
                style={imageStyle}
                src={FrontCover}
                alt="
        pool house"
              />
              <Box sx={{ position: "absolute" }}>
                <Card sx={cardStyles}>
                  <CardContent>
                    <div>
                      <Typography variant="h4"> TanyA Gonzalez</Typography>
                    </div>
                    <div>
                      <Typography variant="h4" color="secondary.main">
                        Az Realtor
                      </Typography>
                    </div>{" "}
                    <div>
                      <Typography variant="h4"> I am amazing</Typography>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <div> it's me</div>
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  }
}
