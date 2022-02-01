import { shallow } from "enzyme";
import { SNavMenu } from ".";

const wrap = (props) => shallow(<SNavMenu {...props} />).dive();

describe("Components", () => {
  describe("organisms", () => {
    describe("SNavMenu", () => {
      it("should render without errors", () => {
        const wrapper = wrap({ dummy: "dummy value" });
        expect(wrapper.findByText("dummy value")).toHaveLength(1);
      });
    });
  });
});