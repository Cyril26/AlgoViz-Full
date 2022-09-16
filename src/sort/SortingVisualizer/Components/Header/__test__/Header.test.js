import React from "react";
import Header from "../Header";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

it("Header renders correctly", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("header")).toHaveTextContent("Sorting Visualizer");
});
