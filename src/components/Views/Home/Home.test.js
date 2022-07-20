import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

// Mock the react-router useNavigate hook
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Home tests", () => {
  test("should render the input element", () => {
    render(<Home />, { wrapper: BrowserRouter });

    const nameInput = screen.getByPlaceholderText(/Minimum 3 characteres/i);
    expect(nameInput).toBeInTheDocument();
  });

  test("on initial render, the Join button is disabled", () => {
    render(<Home />, { wrapper: BrowserRouter });
    // screen.getByRole("");

    const joinButton = screen.getByRole("button", { name: /join/i });
    expect(joinButton).toBeDisabled();
  });

  test("if correct name is entered, the Join button is enabled", () => {
    render(<Home />, { wrapper: BrowserRouter });

    const nameInput = screen.getByPlaceholderText(/Minimum 3 characteres/i);
    userEvent.type(nameInput, "John");

    const joinButton = screen.getByRole("button", { name: /join/i });
    expect(joinButton).toBeEnabled();
  });

  test("when click Join button, navigate to /game and send the player name introduced", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    // introduce a player name
    const nameInput = screen.getByPlaceholderText(/Minimum 3 characteres/i);
    userEvent.type(nameInput, "John");

    // click the Join button
    const joinButton = screen.getByRole("button", { name: /join/i });
    userEvent.click(joinButton);

    // expect the navigate function to be called
    expect(mockedNavigate).toHaveBeenCalledWith("/game", {
      state: { playerName: "John" },
    });
  });
});
