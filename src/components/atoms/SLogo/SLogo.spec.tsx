// import { render } from "@testing-library/react";
import { SvgLogoSygnet } from "s-brand";
import { shallow } from "enzyme";
import { SLogo } from ".";

// describe("Components", () => {
//   describe("atoms", () => {
//     describe("SLogo", () => {
//       it("should render without errors", () => {
//         // const view = render(<SLogo logoSrc={<SvgLogoSygnet />} />);
//         // expect(view).toBeTruthy();
//       });
//     });
//   });
// });

// import { SLogo } from "./SLogo";

const wrap = (props) => shallow(<SLogo {...props} />).dive();

describe("Components", () => {
  describe("atoms", () => {
    describe("SLogo", () => {
      it("renders children when passed in", () => {
        const wrapper = wrap({ logoSrc: <SvgLogoSygnet /> });
        console.log(wrapper.debug());
        expect(wrapper.find(".SLogo__container")).toHaveLength(1);
        expect(wrapper.find(SvgLogoSygnet)).toHaveLength(1);
        expect(wrapper.find(SvgLogoSygnet).dive().find("svg")).toHaveLength(1);
      });
    });
  });
});
