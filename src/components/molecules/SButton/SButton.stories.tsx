import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    readme: {
      sidebar: README,
    },
  },
  // args: {
  //   path: "/",
  //   label: "Home",
  //   icon: <SvgLogoSygnet />,
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Home</Button>
);

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};
export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  endIcon: <SendIcon />,
  variant: "outlined",
};
