import { CssBaseline, ThemeProvider } from "@mui/material"
import Router from "./Router"
import theme from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App