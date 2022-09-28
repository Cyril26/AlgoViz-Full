// import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const textDeco = {
    textDecoration: "none",
  };

  return (
    // <Routes>
    <div className="home-container">
      <div className="logo">AlgoViz</div>
      <div className="button-container">
        <Link to="sorting" className="btn-conn btn1" style={textDeco}>
          Sorting
        </Link>
        <Link to="pathfinder" className="btn-conn btn2" style={textDeco}>
          Pathfinding
        </Link>
      </div>

      <div className="disclaimer">
        <span>Caution! </span>The application shows flashing colors. Viewer
        discretion is advised.
      </div>
    </div>
  );
};
