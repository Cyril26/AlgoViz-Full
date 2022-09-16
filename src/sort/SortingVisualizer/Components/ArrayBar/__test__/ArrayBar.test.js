import React from "react";
import BarContainer from "../ArrayBar";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BarContainer></BarContainer>, div);
});

// it("Header renders correctly", () => {
//   const { get } = render(<BarContainer />);
//   expect(getByTestId("header")).toHaveTextContent("Sorting Visualizer");
// });
