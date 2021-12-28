import { SButton } from ".";
import { render } from "@testing-library/react";

describe("Components", () => {
  describe("Atom", () => {
    describe("SButton", () => {
      it("should render without errors", () => {
        const view = render(<SButton label={"Button"} />);
        console.log(view.container.innerHTML);
        expect(view).toBeDefined();
      });
    });
  });
});
