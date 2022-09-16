import React from "react";
import ButtonsBar from "./ButtonsBar";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonsBar></ButtonsBar>, div);
});

// it("Header renders correctly", () => {
//   const { get } = render(<BarContainer />);
//   expect(getByTestId("header")).toHaveTextContent("Sorting Visualizer");
// });
