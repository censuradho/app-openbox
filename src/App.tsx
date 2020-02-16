import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './themes/defaultStyles'

import Navigator from './navigator';

const App = () => {
  return  (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  )
}
export default App