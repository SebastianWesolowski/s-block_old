import { Box } from "@mui/material";
import { ESLinkTestId } from "components/atoms/SLink/types";
import { shallow } from "enzyme";
import Link from "next/link";
import { SvgLogoSygnet } from "s-brand";
import { SIconLink } from ".";

const wrap = (props) => shallow(<SIconLink {...props} />).dive();
const label = "Home";
const path = "/";
describe("Components", () => {
  describe("molecules", () => {
    describe("SIconLink", () => {
      const wrapper = wrap({
        path,
        label,
        icon: <SvgLogoSygnet />,
      });

      it("should render label without errors", () => {
        expect(
          wrapper
            .find({ "data-testid": ESLinkTestId.label })
            .find(Box)
            .contains(label)
        ).toBe(true);
      });

      it("should render without errors", () => {
        expect(wrapper.find(Link)).toHaveLength(1);
        expect(wrapper.find(Box)).toHaveLength(2);
      });
    });
  });
});
