import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "./HelloWorld";

test("first test case", () => {
  render(<HelloWorld />);
  const textCheck = screen.getByText("Hello World");
  expect(textCheck).toBeInTheDocument();
});
