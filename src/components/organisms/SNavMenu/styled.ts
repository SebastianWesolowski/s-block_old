import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { MobileMenu } from "./MobileMenu";

const theme = createTheme();

export const StyledMobileMenu = styled(MobileMenu)({
  position: "absolute",
  top: 0,
  left: 0,
});

export const Container = styled(Box)({
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  width: "100%",
  // padding: theme.spacing(2),
});

export const LogoContainer = styled(Box)({
  // padding: theme.spacing(2),
  // display: "flex",
  // height: "100%",
  maxWidth: `calc(100vw - ${theme.spacing(4)} - 40px)`,
  // justifyContent: "flex-start",
  // svg: {
  // height: "100%",
  // width: "auto",
  // },
});

export const NavContainer = styled(Box)({
  display: "flex",
  // padding: theme.spacing(2),
  alignItems: "center",
  marginLeft: "auto",
  width: "100%",
  justifyContent: "flex-end",
});
