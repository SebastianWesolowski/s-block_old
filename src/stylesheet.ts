import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

// https://medium.com/@abdurakhimov.sardor/how-to-use-and-customize-material-ui-version-5-with-styled-components-295e62562e61
