---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { <%= component_name %> } from "./<%= component_name %>";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "<%= category %>/<%= component_name %>",
  component: <%= component_name %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    readme: {
      sidebar: README,
    },
  },
} as ComponentMeta<typeof <%= component_name %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= component_name %>> = (args) => (
  <<%= component_name %> {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dummy: "dummy",
};
