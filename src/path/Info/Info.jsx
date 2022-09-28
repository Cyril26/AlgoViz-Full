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
        <h1 className="info-head">What is a pathfinding algorithm?</h1>
        <p>
          At its core, a pathfinding algorithm seeks to find the shortest path
          between two points. This application visualizes various pathfinding
          algorithms in action, and more!
        </p>
        <p>
          All of the algorithms on this application are adapted for a 2D grid,
          where 90 degree turns have a "cost" of 1 and movements from a node to
          another have a "cost" of 1.
        </p>
        <h1 className="info-head">Picking an algorithm</h1>
        <p>Choose an algorithm from the right side of the Navbar</p>
        <p>
          Note that some algorithms are unweighted, while others are weighted.
          Unweighted algorithms do not take turns or weight nodes into account,
          whereas weighted ones do. Additionally, not all algorithms guarantee
          the shortest path.
        </p>
        <h1 className="info-head">Adding walls and weights</h1>
        <p>
          Click on the grid to add a wall. Toggle weight in navbar to true and
          drag in grid to draw weight
        </p>
        <p>
          Walls are impenetrable, meaning that a path cannot cross through them.
          Weights, however, are not impassable. They are simply more "costly" to
          move through.
        </p>

        <h1 className="info-head">Application</h1>
        <p>
          Graph algorithms have several applications in real life. This
          application makes it easy to visualize real life scenarios such as
          finding a destination on Google Maps, satellite navigation etc which
          is the main application of graph algorithms. Other forms of navigation
          use this same concept so this is also applicable in other areas. It
          can also be used for route planning; in a network with lots of
          computers, what is the best way to route the packets to get to the
          destination the quickest.
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
