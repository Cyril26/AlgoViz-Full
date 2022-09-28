import React, { Component } from "react";

import weight from "../Node/images/weight.png";
import visitedWeight from "../Node/images/visitedWeight.png";
import pathWeight from "../Node/images/pathWeight.png";

import "./Guide.css";

export class Guide extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      if (getCookie("visited") == null) {
        showPopUp();
        console.log("h");
        setCookie("visited", true);
      } else {
        skipPopUp();
      }
    });
  }
  render() {
    return (
      <div className="PopUpTextBox">
        <header>
          <p>Welcome to Pathfinder Visualizer</p>
        </header>

        <div className="PopUpIntroductionText">
          <h3>Quick Walkthrough to Visualizer</h3>
          <p>Click and drag to create walls </p>
          <div className="player">
            <label className="label" htmlFor="start">
              {" "}
              Start :{" "}
            </label>
            <div
              style={{ backgroundColor: "rgb(233, 30, 30)" }}
              name="start"
            ></div>

            <label className="label" htmlFor="end">
              End :{" "}
            </label>
            <div
              style={{ backgroundColor: "rgb(0, 140, 255)" }}
              name="end"
            ></div>

            <label className="label" htmlFor="wall">
              Wall :{" "}
            </label>
            <div style={{ background: "#34495e" }} name="wall"></div>

            <label className="label" htmlFor="wall">
              Visited Node :{" "}
            </label>
            <div
              style={{ backgroundColor: "rgba(0, 190, 218, 0.75)" }}
              name="wall"
            ></div>

            <label className="label" htmlFor="weight">
              Weight :{" "}
            </label>
            <img src={weight} name="weight" alt="" />

            <label className="label" htmlFor="visitedWeight">
              Visited Weight :{" "}
            </label>
            <img src={visitedWeight} name="visitedWeight" alt="" />

            <label className="label" htmlFor="pathWeight">
              Weight on Path :{" "}
            </label>
            <img src={pathWeight} name="pathWeight" alt="" />
          </div>
          <div></div>
        </div>

        <div className="skipBox">
          <small>
            *You can view this anytime by clicking on{" "}
            <span>[Pathfinder Visualizer]</span>
          </small>
          <button onClick={skipPopUp}>Done !</button>
        </div>
      </div>
    );
  }
}

export const skipPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(
    ".pathfindingVisualizer"
  );
  elem.style.display = "none";
  pathfindingVisualizer.style.filter = "none";
};

export const showPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(
    ".pathfindingVisualizer"
  );
  elem.style.display = "block";
  pathfindingVisualizer.style.filter = " blur(4px)";
};

///////////////////////////////////////////////////////////////////
function setCookie(name, value) {
  var cookie = name + "=" + encodeURIComponent(value) + ";";
  document.cookie = cookie;
}

function getCookie(name) {
  var chunks = document.cookie.split(";");
  for (var i = chunks.length; i--; ) {
    if (chunks[i].trim().split("=")[0].trim() === name) {
      return chunks[i].trim().split("=")[1].trim();
    }
  }
  return null;
}
