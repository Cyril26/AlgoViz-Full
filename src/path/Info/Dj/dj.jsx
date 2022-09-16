import React from "react";

import Pseudo from "./djPseudo";
import Python from "./djCode";

import pathImg from "./img/shortest-subpath.webp";
import dj1 from "./img/dj-1.webp";
import dj2 from "./img/dj-2.webp";
import dj3 from "./img/dj-3.webp";
import dj4 from "./img/dj-4.webp";
import dj5 from "./img/dj-5.webp";
import dj6 from "./img/dj-6.webp";
import dj7 from "./img/dj-7.webp";
import dj8 from "./img/dj-8.webp";

export default function DjInfo({ runningAlgo }) {
  return (
    <div className="info-container">
      <div className="info-head">
        <h2> Dijkstra's Algorithm</h2>
      </div>
      <p>
        Dijkstra's algorithm allows us to find the shortest path between any two
        vertices of a graph. It differs from the minimum spanning tree because
        the shortest distance between two vertices might not include all the
        vertices of the graph.
      </p>
      <div className="info-head">
        <h2>How Dijkstra's Algorithm works</h2>
      </div>
      <p>
        Dijkstra's Algorithm works on the basis that any subpath B -{`>`} D of
        the shortest path A -{`>`} D between vertices A and D is also the
        shortest path between vertices B and D
      </p>
      <img src={pathImg} alt="" />
      <p>
        Djikstra used this property in the opposite direction i.e we
        overestimate the distance of each vertex from the starting vertex. Then
        we visit each node and its neighbors to find the shortest subpath to
        those neighbors.
      </p>
      <p>
        The algorithm uses a greedy approach in the sense that we find the next
        best solution hoping that the end result is the best solution for the
        whole problem.
      </p>
      <div className="info-head">
        <h2>Example</h2>
      </div>

      <img src={dj1} alt="" />
      <div className="image-cap">Start with a weighted graph</div>
      <img src={dj2} alt="" />
      <div className="image-cap">
        Choose a starting vertex and assign infinity path values to all other
        devices
      </div>
      <img src={dj3} alt="" />
      <div className="image-cap">
        Go to each vertex and update its path length
      </div>
      <img src={dj4} alt="" />
      <div className="image-cap">
        If the path length of the adjacent vertex is lesser than new path
        length, don't update it
      </div>
      <img src={dj5} alt="" />
      <div className="image-cap">
        Avoid updating path lengths of already visited vertices
      </div>
      <img src={dj6} alt="" />
      <div className="image-cap">
        After each iteration, we pick the unvisited vertex with the least path
        length. So we choose 5 before 7
      </div>
      <img src={dj7} alt="" />
      <div className="image-cap">
        Notice how the rightmost vertex has its path length updated twice
      </div>
      <img src={dj8} alt="" />
      <div className="image-cap">
        Repeat until all the vertices have been visited
      </div>
      <div className="info-head">
        <h2>Pseudocode</h2>
      </div>
      <p>
        We need to maintain the path distance of every vertex. We can store that
        in an array of size v, where v is the number of vertices. We also want
        to be able to get the shortest path, not only know the length of the
        shortest path. For this, we map each vertex to the vertex that last
        updated its path length.
        <br />
        <br />
        Once the algorithm is over, we can backtrack from the destination vertex
        to the source vertex to find the path. A minimum priority queue can be
        used to efficiently receive the vertex with least path distance.
      </p>

      <Pseudo />

      <div className="info-head">
        <h2>Implementation</h2>
      </div>

      <p>
        The implementation of Dijkstra's Algorithm in Python is given below. The
        complexity of the code can be improved, but the abstractions are
        convenient to relate the code with the algorithm.
      </p>

      <Python />

      <div className="info-head">
        <h2>Dijkstra's Algorithm Complexity</h2>
      </div>

      <p>Time Complexity: O(E Log V)</p>
      <p>where, E is the number of edges and V is the number of vertices.</p>
      <p>Space Complexity: O(V)</p>

      <div className="info-head">
        <h2>Dijkstra's Algorithm Applications</h2>
      </div>

      <ul className="info-list">
        <li>To find the shortest path</li>
        <li>In social networking applications</li>
        <li>In a telephone network</li>
        <li>To find the locations in the map</li>
      </ul>
    </div>
  );
}
