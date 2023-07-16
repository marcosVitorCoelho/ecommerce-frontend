"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EDEDED;;
    --background-white: #fff;
    --black: #1A1F16;
    --danger-red: #E5252C;
    
  }
  body{
    background-color: var(--background);
    padding: 16px;
    height: 100vh;
  }

  a{
    text-decoration: none;
    color: inherit !important;

    &:hover{
      cursor: pointer;
      text-decoration: underline;
      opacity: 1.5;
    }
  }

  *{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
`;
