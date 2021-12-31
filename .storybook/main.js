module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-readme/register",
    "storybook-addon-outline",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    // "storybook-addon-material-ui",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
