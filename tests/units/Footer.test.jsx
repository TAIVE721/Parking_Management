import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Footer } from "../../src/components/Footer.jsx";

describe("Verify Footer", () => {
  const getFooter = () => {
    const { container } = render(<Footer></Footer>);

    return { container: container };
  };

  test("check if the Footer is rendered", () => {
    const { container } = getFooter();

    expect(container).toBeInTheDocument();
  });
  test("check the content of the footer", () => {
    const { container } = getFooter();

    const text = screen.getByText("© 2024 Washington Parking");

    const footer = container.querySelector("footer");
    const p = container.querySelector("p");

    expect(text).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(footer).toContainElement(p);
    expect(p).toHaveTextContent("© 2024 Washington Parking");
  });
});
