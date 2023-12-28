import { render, screen, waitFor } from "@testing-library/react";
import Cards from "./Cards";
import { describe, it, expect } from "vitest";

describe("test if cards are being renderized", () => {
  it("should show 12 cards", async () => {
    render(<Cards />);
    const isLoadingP = screen.getByText("Loading...");
    await waitFor(() => {
      expect(isLoadingP).not.toBeInTheDocument();
    });
    const cardsQty = screen.queryAllByAltText("cards").length;
    expect(cardsQty).toBe(12);
  });
});
