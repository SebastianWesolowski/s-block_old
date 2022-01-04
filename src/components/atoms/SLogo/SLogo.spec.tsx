import { render } from "@testing-library/react";
import { SvgLogoSygnet } from "s-brand";
import { SLogo } from ".";

describe("Components", () => {
  describe("atoms", () => {
    describe("SLogo", () => {
      it("should render without errors", () => {
        const view = render(<SLogo logoSrc={<SvgLogoSygnet />} />);
        expect(view).toBeTruthy();
      });
    });
  });
});
