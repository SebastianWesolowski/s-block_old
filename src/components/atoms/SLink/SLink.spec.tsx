import { shallow } from "enzyme";
import { SLink } from "./SLink";

const wrap = ({ label = "" }) =>
  shallow(<SLink path="/" label={label} />).dive();

describe("Components", () => {
  describe("atoms", () => {
    describe("SLink", () => {
      it("renders children when passed in", () => {
        const wrapper = wrap({ label: "Home" });
        expect(wrapper.contains("Home")).toBe(true);
      });
    });
  });
});
