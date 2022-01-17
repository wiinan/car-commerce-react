import DefaultRoutes from "./routes";
import defaultThemes from "./components/styles/defaultThemes";
import { GlobalStyle } from "./components/styles/global";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyle />
        <DefaultRoutes />
      </ThemeProvider>
    </>
  );
}
