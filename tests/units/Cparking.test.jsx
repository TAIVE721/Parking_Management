import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { CreateParking } from "../../src/components/Cparking.jsx";
import { ParkingsProvider } from "../../src/contexts/ParkingsContext.jsx";
import { useContext } from "react";
import { useParkings } from "../../src/hooks/useParkings.js";

describe("Verify Cparking", () => {
  const getCparking = () => {
    const { container, debug } = render(
      <ParkingsProvider>
        <CreateParking></CreateParking>
      </ParkingsProvider>
    );

    return { container: container, debug: debug };
  };

  test("check if the Cparking is rendered", () => {
    const { container } = getCparking();

    expect(container).toBeInTheDocument();
  });
  test("check the content of the Cparking", () => {
    const { container, debug } = getCparking();

    const lnames = ["Width", "Large"];

    const header = screen.getByRole("heading");
    const main = screen.getByRole("main");

    const form = main.querySelector("form");

    const labels = form.querySelectorAll("label");
    const button = form.querySelector("button");

    labels.forEach((label, index) => {
      expect(label).toBeInTheDocument();
      if (lnames[index]) {
        expect(label).toHaveTextContent(lnames[index]);
      }
    });

    expect(labels).toHaveLength(3);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add Parking");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Create a new Parking");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "cmain");
  });

  test("check the events of Cparking", async () => {
    const { container } = getCparking();

    const user = userEvent.setup();

    const main = screen.getByRole("main");

    const labels = main.querySelectorAll("label");
    const labelsArray = Array.from(labels);

    const width = labelsArray[0].querySelector("input");
    const large = labelsArray[1].querySelector("input");
    const category = labelsArray[2].querySelector("select");

    expect(width).not.toBe();
    expect(large).not.toBe();
    expect(category).not.toBe();

    await user.type(large, "6");
    await user.type(width, "8");
    await user.selectOptions(category, "compact");

    expect(large).toHaveValue(6);
    expect(width).toHaveValue(7);
    expect(category).toHaveValue("compact");
  });
});
