import React from "react";

export default function BfsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-head">Breadth First Search</h1>
      <p>Breadth First Search explores equally in all directions.</p>
      <p>
        This is an incredibly useful algorithm, not only for regular traversal,
        but also for procedural map generation, flow field pathfinding, distance
        maps, and other types of map analysis.
      </p>
      <p>
        This may be the algorithm of choice to identify nearby places of
        interest in GPS.
      </p>
      <p>BFS guarantees the shortest path.</p>
    </div>
  );
}
