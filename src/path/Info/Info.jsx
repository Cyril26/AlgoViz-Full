import React from "react";

import DjInfo from "./Dj/dj";
import AsInfo from "./As/as";
import BfsInfo from "./Bfs/bfs";
import DfsInfo from "./Dfs/dfs";

import dj2 from "./dj2.JPG";

import "./info.css";

export default function Info({ runningAlgo }) {
  if (runningAlgo === "dj") {
    return <DjInfo />;
  } else if (runningAlgo === "as") {
    return <AsInfo />;
  } else if (runningAlgo === "bfs") {
    return <BfsInfo />;
  } else if (runningAlgo === "dfs") {
    return <DfsInfo />;
  } else {
    return (
      <div className="info-container">
        <h1 className="info-head">Application: The Traffic Scenario</h1>
        <p>
          Graph algorithms have several applications in real life. This
          application makes it easy to visualize real life scenarios such as
          finding a destination on Google Maps and other navigation platforms
          which is the main application of graph algorithms. Other forms of
          navigation use this same concept so this is also applicable in other
          areas.
        </p>
        <p>Lets take the picture below as an example</p>
        <img src={dj2} alt="" />
        <p>
          The grid symbolizes the navigation area. The deep blue boxes represent
          barricades which would be buildings, trees or any structure that
          obstructs movements.
        </p>
        <p>
          The weights represent a congested area such as a traffic.
          <div className="image-cap">
            Caution: this feature should only be used on weighted algorithms.
          </div>
        </p>
        <p>
          After selecting the algorithm, a series of colors emit from the red
          point to scan the grid in search of the blue point.
        </p>
        <p>
          A path is then generated to show the shortest path to the destination.
          The algorithm makes sure to consider any barricade and visualizes the
          shortest path accordingly.
        </p>
      </div>
    );
  }
}
