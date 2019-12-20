import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// screens
import Login from './screens/Login'

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login
    }
  })
)