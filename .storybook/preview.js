// import { muiTheme } from "storybook-addon-material-ui";
import { addReadme } from "storybook-readme";
import { addDecorator } from "@storybook/react";

// addDecorator(muiTheme());
addDecorator(addReadme);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
