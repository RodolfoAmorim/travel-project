import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-600"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-400"]};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme["gray-300"]};
    width: 1rem;
  }

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

export const Container = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
`;
