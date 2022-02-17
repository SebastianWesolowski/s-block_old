import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SLink } from "./SLink";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/SLink",
  component: SLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: true },
      defaultValue: "Home",
      description: "Label inside",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Home" },
      },
      control: {
        type: "text",
      },
    },
    path: {
      name: "path",
      type: { name: "string", required: true },
      defaultValue: "/",
      description:
        "The destination to which it will be moved. It used router from `NextJs`",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/" },
      },
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    readme: {
      sidebar: README,
    },
  },
} as ComponentMeta<typeof SLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SLink> = (args) => <SLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const PrimaryTarget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryTarget.args = {
  target: "_blank",
};
