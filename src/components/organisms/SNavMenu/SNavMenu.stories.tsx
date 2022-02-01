import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SvgLogoSygnet, SvgLogo } from "s-brand";
import { SNavMenu } from "./SNavMenu";
import README from "./README.md";
// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/SNavMenu",
  component: SNavMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    readme: {
      sidebar: README,
    },
  },
} as ComponentMeta<typeof SNavMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SNavMenu> = (args) => (
  <SNavMenu {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  logoAssets: {
    logo: <SvgLogo />,
    sygnet: <SvgLogoSygnet />,
  },
};
