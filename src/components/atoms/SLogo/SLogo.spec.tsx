import { SvgLogoSygnet } from "s-brand";
import { shallow } from "enzyme";
import { SLogo } from ".";

const wrap = (props) => shallow(<SLogo {...props} />).dive();

describe("Components", () => {
  describe("atoms", () => {
    describe("SLogo", () => {
      it("renders children when passed in", () => {
        const wrapper = wrap({ logoSrc: <SvgLogoSygnet /> });
        expect(wrapper.find(".SLogo__container")).toHaveLength(1);
        expect(wrapper.find(SvgLogoSygnet)).toHaveLength(1);
        expect(wrapper.find(SvgLogoSygnet).dive().find("svg")).toHaveLength(1);
      });
    });
  });
});
