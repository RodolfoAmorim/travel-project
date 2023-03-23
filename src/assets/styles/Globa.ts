import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
  }
`;
