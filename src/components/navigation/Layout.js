import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

export default class Layout extends Component {
  render() {
    const containerStyles = {
      marginTop: 30,
    };
    return (
      <>
        <NavigationBar />
        <main style={containerStyles}> {this.props.children}</main>
      </>
    );
  }
}
