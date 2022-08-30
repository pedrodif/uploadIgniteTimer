// Packages
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// Components
import { Router } from './Router'

// Context
import { CyclesContextProvider } from './contexts/CyclesContext'

// Styles
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
