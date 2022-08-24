import React from 'react'

import { themeDefault } from 'roots-design-system'
import { routes as Routes } from 'routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
