---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
import { shallow } from "enzyme";
import { <%= component_name %> } from ".";

const wrap = (props) => shallow(<<%= component_name %> {...props} />).dive();

describe("Components", () => {
  describe("<%= category %>", () => {
    describe("<%= component_name %>", () => {
      it("should render without errors", () => {
        const wrapper = wrap({ dummy: "dummy value" });
        expect(wrapper.findByText("dummy value")).toHaveLength(1);
      });
    });
  });
});