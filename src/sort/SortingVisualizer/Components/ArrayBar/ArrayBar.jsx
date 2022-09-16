// ## This component includes all the 3D bars/containers and array values. ## //

import React, { useEffect, useState } from "react";
import "./ArrayBar.css";

export default function BarContainer({ index, length, changeArray }) {
  const [len, setLen] = useState(length);

  useEffect(() => {
    setLen(length);
  }, [length]);

  const inputStyle = {
    position: "relative",
    top: Math.floor(length / 2),
    width: "40px",
    left: "10px",
    border: "none",
    background: "none",
  };

  const left_right_front_back = {
    height: `${length}vh`,
    transform: `translateY(${70 - length}vh)`,
    transition: "0.3s",
  };

  const handleChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setLen(0);
      changeArray(index, 0);
    } else {
      val = parseInt(val);
      if (val > 70) {
        setLen(70);
        changeArray(index, 70);
      } else {
        setLen(val);
        changeArray(index, val);
      }
    }
  };

  return (
    <div className="bar-container">
      {/* Create n bars, where n - size of the array */}
      <div className="bar">
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side right">
          <div
            className="color-bar right-color-bar"
            style={left_right_front_back}
          ></div>
        </div>
        <div className="side left">
          <div
            className="color-bar left-color-bar"
            style={left_right_front_back}
          ></div>
        </div>
        <div className="side front">
          <div
            className="color-bar front-color-bar"
            style={left_right_front_back}
          >
            <input
              type="number"
              length={length}
              value={len}
              style={inputStyle}
              className="input"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="side back">
          <div
            className="color-bar back-color-bar"
            style={left_right_front_back}
          ></div>
        </div>
      </div>
    </div>
  );
}
