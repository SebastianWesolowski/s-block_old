import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SvgLogoSygnet } from "s-brand";
import { SLogo } from "./SLogo";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SLogo",
  component: SLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    readme: {
      sidebar: README,
    },
  },
} as ComponentMeta<typeof SLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SLogo> = (args) => <SLogo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  logoSrc: <SvgLogoSygnet />,
};
