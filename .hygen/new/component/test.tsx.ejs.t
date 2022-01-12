---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
import { render, screen } from "@testing-library/react";
import { <%= component_name %> } from ".";

describe("Components", () => {
  describe("<%= category %>", () => {
    describe("<%= component_name %>", () => {
      it("should render without errors", () => {
        const view = render(<<%= component_name %> dummy="dummy value" />);
        const element = screen.findByText("dummy value");
        expect(element).toBeDefined();
        expect(view).toBeTruthy();
      });
    });
  });
});