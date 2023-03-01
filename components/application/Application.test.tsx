import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application ", () => {
  test("renders correctly ", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });

    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });

    expect(sectionHeading).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "A Input" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("A Input", {});
    expect(nameEl2).toBeInTheDocument();

    const nameEl3 = screen.getByLabelText("a checkbox", {});
    expect(nameEl3).toBeInTheDocument();

    const placeholder = screen.getByPlaceholderText("Fullname", {});
    expect(placeholder).toBeInTheDocument();

    const p = screen.getByText(/Lorem ipsum/i);
    expect(p).toBeInTheDocument();

    const displayValue = screen.getByDisplayValue(/saeed/i);
    expect(displayValue).toBeInTheDocument();

    const image = screen.getByAltText(/image-container/i);
    expect(image).toBeInTheDocument();

    const close = screen.getByTitle(/close/i);
    expect(close).toBeInTheDocument();

    const customElement = screen.getByTestId(/custom-element/i);
    expect(customElement).toBeInTheDocument();
  });
});
