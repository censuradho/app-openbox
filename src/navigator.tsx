import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// screens
import Login from './screens/Login'
import Home from './screens/Home'

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          height: 0,
        }
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Rendimentos'
      }
    }
  })
)