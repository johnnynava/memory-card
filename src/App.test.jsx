import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app game test", () => {
  it("should render the play screen if isPlaying is set to False", () => {
    render(<App />);
    const button = screen.getByRole("button").className;
    // const button = screen.getByText("Play!").className;
    expect(button).toBe("playButton");
    // expect div to have classname "contentPlayScreen"
  });
});
