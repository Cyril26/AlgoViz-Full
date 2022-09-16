import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import SortingVisualizer from "./sort/SortingVisualizer/SortingVisualizer";
import PathfindingVisualizer from "./path/PathfindingVisualizer/PathfindingVisualizer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sorting" element={<SortingVisualizer />} />
      <Route path="pathfinder" element={<PathfindingVisualizer />} />
    </Routes>
  );
}
