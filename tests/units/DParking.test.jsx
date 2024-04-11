import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Dparking } from "../../src/components/DParkings.jsx";
import { ParkingsProvider } from "../../src/contexts/ParkingsContext.jsx";
import { useContext } from "react";
import { useParkings } from "../../src/hooks/useParkings.js";

describe("Verify DParking", () => {
  const getDparking = () => {
    const { container, debug } = render(
      <ParkingsProvider>
        <Dparking></Dparking>
      </ParkingsProvider>
    );

    return {
      container: container,
      debug: debug,
    };
  };
  test("check if Dparking is rendered", () => {
    const { container } = getDparking();

    expect(container).toBeInTheDocument();
  });
  test("check the content of Dparking", () => {
    const { container, debug } = getDparking();

    const header = screen.getByRole("heading");
    const main = screen.getByRole("main");

    expect(header).toHaveTextContent("Delete a parking");
    expect(main).toHaveAttribute("id", "Smain");
  });
});
