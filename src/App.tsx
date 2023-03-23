import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styles/Globa";
import { defaultTheme } from "./assets/styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}
