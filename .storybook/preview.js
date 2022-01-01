// import { muiTheme } from "storybook-addon-material-ui";
import { addReadme } from "storybook-readme";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/stylesheet";
import { CssBaseline } from "@mui/material";

// addDecorator(muiTheme());
addDecorator(addReadme);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <CssBaseline />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
