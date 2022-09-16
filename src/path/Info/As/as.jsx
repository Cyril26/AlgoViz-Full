import React from "react";

export default function AsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-head">A* (A-star Algorithm)</h1>
      <p>
        A* is a modification of Dijkstra's Algorithm that is optimized for a
        single destination.
      </p>
      <p>
        Dijkstra's Algorithm can find paths to all locations; A* finds paths to
        one location. It prioritizes paths that seem to be leading closer to a
        goal.
      </p>
      <p>
        In a game, we could set costs to be attracted or discouraged in going
        near some objects : how useful it is for an AI.
      </p>
      <p>
        It is more or less the golden ticket or industry standard algorithm for
        all applications finding directions between two locations.
      </p>
    </div>
  );
}
