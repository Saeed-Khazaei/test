import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("test", () => {
  test("Test hello", () => {
    render(<Greet />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  test("Test hello saeed", () => {
    const name = "saeed";
    render(<Greet name={name} />);
    expect(screen.getByText(/hello saeed/i)).toBeInTheDocument();
  });
});
