import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
export default class Layout extends Component {
  render() {
    const containerStyles = {
      marginTop: 30,
    };
    return (
      <>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <main style={containerStyles}> {this.props.children}</main>
        </ThemeProvider>
      </>
    );
  }
}
