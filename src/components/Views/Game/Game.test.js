import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Game from "./Game";

describe("Game tests", () => {
  test("on first render, show the Start button", () => {
    render(<Game />, { wrapper: BrowserRouter });

    const startButton = screen.getByRole("button", { name: /start/i });
    expect(startButton).toBeInTheDocument();
  });

  test("when press Start button, Left Step and Right Step buttons should be visibles", () => {
    render(<Game />, { wrapper: BrowserRouter });

    const startButton = screen.getByRole("button", { name: /start/i });
    userEvent.click(startButton);

    const leftStepButton = screen.getByRole("button", { name: /left step/i });
    const rightStepButton = screen.getByRole("button", { name: /right step/i });
    expect(leftStepButton && rightStepButton).toBeInTheDocument();
  });
});
