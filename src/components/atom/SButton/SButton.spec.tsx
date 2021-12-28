import { render } from "@testing-library/react";
import { SButton } from ".";

describe("Components", () => {
  describe("Atom", () => {
    describe("SButton", () => {
      it("should render without errors", () => {
        const view = render(<SButton label="Button" />);
        console.log(view.container.innerHTML);
        expect(view).toBeTruthy();
      });
    });
  });
});
