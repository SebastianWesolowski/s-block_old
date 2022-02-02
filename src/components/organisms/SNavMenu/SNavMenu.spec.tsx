import { shallow } from "enzyme";
import { SvgLogo, SvgLogoSygnet } from "s-brand";
import { SNavMenu } from ".";

const wrap = (props) => shallow(<SNavMenu {...props} />).dive();

describe("Components", () => {
  describe("organisms", () => {
    describe("SNavMenu", () => {
      it("should render without errors", () => {
        const wrapper = wrap({
          logoAssets: {
            logo: <SvgLogo />,
            sygnet: <SvgLogoSygnet />,
          },
        });
        expect(wrapper.find({ "aria-label": "mobile menu" }).debug());
      });
    });
  });
});
