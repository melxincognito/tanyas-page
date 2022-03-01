import React, { Component } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FrontCover from "../assets/housePool_2.jpeg";

export default class HomePage extends Component {
  render() {
    const mainContainerStyles = {
      display: "grid",
      alignContent: "center",
      justifyContent: "center",
    };
    const topImageStyles = {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
      width: "100%",
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
      <>
        <Box sx={mainContainerStyles}>
          <Box sx={topImageStyles}>
            <img
              style={{
                width: "100%",
                height: "90%",
                borderRadius: 5,
              }}
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
      </>
    );
  }
}
