import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import React from "react";
// import { render } from "@testing-library/react";
// import { Sample } from "./Sample";

// it("Sample component should render", () => {
//   const { getByTestId } = render(<Sample />);
//   expect(getByTestId("sampleParentDiv")).toBeInTheDocument;
//   expect(getByTestId("sampleHeading")).toBeInTheDocument();
//   expect(getByTestId("sampleParagraph")).toBeInTheDocument();
// });

// test("Testing Heading", () => {
//   const { getByTestId, getByDisplayValue } = render(<Sample />);
// });
// test("Sample Paragraph testing", () => {
//   const { getByTestId } = render(<Sample />);
// });

// test("sample component should render", () => {
//   render(<Sample />);
//   const parentE1 = screen.getByTestId("sampleParentDiv");
//   expect(parentE1).toBeInTheDocument();
// });
