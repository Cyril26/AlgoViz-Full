import React from "react";

export default function DfsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-head">Depth First Search</h1>
      <p>
        Traverses by exploring as far as possible down each path before
        backtracking.
      </p>
      <p>
        As useful as the BFS: DFS can be used to generate a topological
        ordering, to generate mazes, to traverse trees, to build decision trees,
        to discover a solution path with hierarchical choices…
      </p>
      <p>
        This may be the algorithm of choice to identify nearby places of
        interest in GPS.
      </p>
      <p>DFS does not guarantee the shortest path.</p>
    </div>
  );
}
