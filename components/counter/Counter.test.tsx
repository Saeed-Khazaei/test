import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByTitle("count");
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByTitle("count");
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const counterElement = screen.getByTitle("count");
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
    await user.click(incrementButton);
    expect(counterElement).toHaveTextContent("1");
    // screen.debug();
    await user.click(incrementButton);
    expect(counterElement).toHaveTextContent("2");
    // screen.debug();
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("textbox");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue("10");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const counterElement = screen.getByTitle("count");
    expect(counterElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />, {
      // wrapper(props) {
      // left your provider here!
      // },
    });
    const amountInput = screen.getByRole("textbox");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
