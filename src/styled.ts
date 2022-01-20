import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth  */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility:hidden;
  }
  
  *::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
  }
  
  html {
    -ms-overflow-style: none;
    overflow-y: scroll;
    scrollbar-width: none;
    overflow-x: hidden;
    color: #000;
  }
  
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility:hidden;
  }
  
  body,
  html {
    width: 100%;
    height: 100%;
    vertical-align: baseline;
    margin: 0;
    background: #FFF;
    /* remove margin for the main div that Gatsby mounts into */
    >div {
      margin-top: 0;
    }
  }
   
  img {
    max-width: 100%;
    display: block;
  }
  
  button:focus{
    outline:none;
  }
  
  a{
    text-decoration: none;
    color:inherit;
  }
`;
