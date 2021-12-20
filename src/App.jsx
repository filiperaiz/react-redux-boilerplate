import React from 'react'

import theme from 'assets/styles/theme'
import { routes as Routes } from 'routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
