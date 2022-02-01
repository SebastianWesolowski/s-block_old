// import styled from 'styled-components';
// import { Box } from '@material-ui/core';
// import theme from '../../../scss/themes';

// export const Container = styled(Box)`
//   width: 100%;
//   height: calc(100vh - 80px);
//   overflow: scroll;
//   background: ${theme.palette.background.paper};
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   z-index: 2;
// `;

// export const MenuContainer = styled(Box)`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// export const LogoContainer = styled(Box)`
//   width: 100%;
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   justify-content: space-between;
// `;
import { Box } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";

// const theme = createTheme();

export const Container = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "inherit",
});
