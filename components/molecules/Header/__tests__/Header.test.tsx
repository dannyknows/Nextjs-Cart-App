import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../";

describe("Header Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
