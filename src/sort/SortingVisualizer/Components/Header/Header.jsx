// ## This component includes an animated title / header with text "SORTING VISUALIZER". ## //

import React, { Component } from "react";
import { showPopUp } from "../Guide/Guide";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div
        data-testid="header"
        className="header"
        id="animateText"
        onClick={showPopUp}
      >
        Sorting Visualizer
      </div>
    );
  }
}
