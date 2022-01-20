import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";

const theme = createTheme();

export const Container = styled(Box)({
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  width: "100%",
});

export const LogoContainer = styled(Box)({
  padding: theme.spacing(2),
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  svg: {
    height: "100%",
    width: "auto",
  },
});
