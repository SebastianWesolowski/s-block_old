import { SvgLogoSygnet, SvgLogo } from "s-brand";
import { shallow } from "enzyme";
import { Box } from "@mui/material";
import { SLogo } from ".";
import { LogoContainer } from "./styled";

const wrap = (props) => shallow(<SLogo {...props} />).dive();

describe("Components", () => {
  describe("atoms", () => {
    describe("SLogo", () => {
      const logoAssets = {
        logo: <SvgLogo />,
        sygnet: <SvgLogoSygnet />,
      };

      it("renders children when passed in", () => {
        const wrapper = wrap({ logoAssets, isShowSygnet: true });
        expect(wrapper.find(Box)).toHaveLength(1);
        expect(wrapper.find(LogoContainer)).toHaveLength(1);
      });
    });
  });
});
