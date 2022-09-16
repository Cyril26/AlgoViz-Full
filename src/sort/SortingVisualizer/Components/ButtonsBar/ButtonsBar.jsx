// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React, { Component } from "react";
import "./ButtonsBar.css";

export default class ButtonsBar extends Component {
  render() {
    return (
      <div className="buttons-bar">
        <button onClick={() => this.props.generateNewArray()} id="reset">
          Generate New Array
        </button>
        <button
          id="bubbleSortButton"
          onClick={() => this.props.bubbleSort()}
          className="buttonStyle1"
        >
          Bubble Sort
        </button>
        <button
          id="selectionSortButton"
          onClick={() => this.props.selectionSort()}
          className="buttonStyle1"
        >
          Selection Sort
        </button>
        <button
          id="insertionSortButton"
          onClick={() => this.props.insertionSort()}
          className="buttonStyle1"
        >
          Insertion Sort
        </button>

        <div className="line"></div>

        <div className="player">
          <label> Unsorted </label>
          <div
            className="label"
            style={{ backgroundColor: "rgba(61, 90, 241, 0.5)" }}
          ></div>

          <label>Active </label>
          <div
            className="label"
            style={{ backgroundColor: "rgba(255, 48, 79, 1)" }}
          ></div>

          <label>Swap</label>
          <div
            className="label"
            style={{ backgroundColor: "rgba(235, 123, 19, 0.5)" }}
          ></div>

          <label>Sorted</label>
          <div
            className="label"
            style={{ backgroundColor: "rgba(131, 232, 90, 0.5)" }}
          ></div>
        </div>
      </div>
    );
  }
}
