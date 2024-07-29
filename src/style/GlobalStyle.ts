import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    background-color: #ffffff ;
 }

 body, button, input {
    font-family: "Poppins", sans-serif;
 }
`