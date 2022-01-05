import { render, screen } from "@testing-library/react";
import { SLink } from ".";

describe("Components", () => {
  describe("atoms", () => {
    describe("SLink", () => {
      it("should render without errors", () => {
        const view = render(<SLink path="/" label="Home" />);
        const element = screen.findByText("Home");
        expect(element).toBeDefined();
        expect(view).toBeTruthy();
      });
    });
  });
});
