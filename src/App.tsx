import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store/store'

import theme from './themes/defaultStyles'

import Navigator from './navigator';

const App = () => {
  
  return  (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </Provider>
  )
}
export default App