import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Header } from "../../src/components/Header.jsx";
import { ParkingsProvider } from "../../src/contexts/ParkingsContext.jsx";
import { useContext } from "react";
import {
  FiltersContext,
  FiltersProvider,
} from "../../src/contexts/Filters.jsx";
import { Footer } from "../../src/components/Footer.jsx";
import { useFilters } from "../../src/hooks/useFilters.js";
import { useParkings } from "../../src/hooks/useParkings.js";

describe("Verify Header", () => {
  const getHeader = () => {
    const { container } = render(
      <FiltersProvider>
        <ParkingsProvider>
          <Header userparking={false}></Header>
        </ParkingsProvider>
      </FiltersProvider>
    );

    return { container: container };
  };

  test("check if the Header is rendered", () => {
    const { container } = getHeader();

    expect(container).toBeInTheDocument();
  });

  test("check the content of the Header", () => {
    const { container } = getHeader();

    const lnames = ["Width", "Large"];

    const header = container.querySelector("header");

    const h1 = header.querySelector("h1");
    const p = header.querySelector("p");
    const form = header.querySelector("form");

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
    expect(button).toHaveTextContent("Select parking");
    expect(header).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("Parking Washington");
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent("Total parkings: 0");
    expect(form).toBeInTheDocument();
  });

  test("check the events of Header", async () => {
    const { container } = getHeader();

    const user = userEvent.setup();

    const button = container.querySelector("button");
    const labels = container.querySelectorAll("label");
    const labelsArray = Array.from(labels);

    const width = labelsArray[0];
    const large = labelsArray[1];
    const category = labelsArray[2];

    expect(category.querySelector("select")).toHaveValue("all");
    expect(width.querySelector("input")).not.toHaveValue();
    expect(large.querySelector("input")).not.toHaveValue();

    await user.selectOptions(category.querySelector("select"), "compact");
    await user.type(width.querySelector("input"), "2");
    await user.type(large.querySelector("input"), "7");

    expect(category.querySelector("select")).toHaveValue("compact");
    expect(width.querySelector("input")).toHaveValue(2);
    expect(large.querySelector("input")).toHaveValue(6);
    expect(button).toBeDisabled();
  });
});
