import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("when render the App, Home component is rendered", () => {
  render(<App />);

  const joinButton = screen.getByText("Join");
  
  expect(joinButton).toBeInTheDocument();
});
