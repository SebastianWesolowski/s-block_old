import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SvgLogoSygnet, SvgLogo } from "s-brand";
import { SLogo } from "./SLogo";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SLogo",
  component: SLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    isShowSygnet: { control: "boolean" },
    height: { control: "number", defaultValue: 80 },
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
  logoAssets: {
    logo: <SvgLogo />,
  },
};

export const PrimarySygnet = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimarySygnet.args = {
  logoAssets: {
    logo: <SvgLogo />,
    sygnet: <SvgLogoSygnet />,
  },
};

export const SmallPrimarySygnet = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallPrimarySygnet.args = {
  height: 40,
  isShowSygnet: true,
  logoAssets: {
    logo: <SvgLogo />,
    sygnet: <SvgLogoSygnet />,
  },
};
