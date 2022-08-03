// Packages
import { ThemeProvider } from "styled-components";

// Components
import { Button } from "./components/button/Button";

// Styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="success" />
      <Button />


      {/* Aplicando o componente de estilo global */}
      <GlobalStyle />
    </ThemeProvider>
  )
}


