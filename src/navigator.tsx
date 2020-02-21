import React, { useContext } from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ThemeContext } from 'styled-components'


// components
import Header from './components/Header'

// screens
// import Login from './screens/Login'
import Home from './screens/Home'
// import Home2 from './screens/Home2'
import InitialScreen from './screens/InitialScreen'
import SignIn from './screens/SignIn'

export default createAppContainer(

  createStackNavigator({
    InitialScreen: {
      screen: InitialScreen,
      navigationOptions: {
        header: null,
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: ({ navigation }) => {
        return {
          header: (navigation) => <Header title="Login" navigation={navigation}/>,
        }
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerBackground: <Image source={require('./assets/img/open-box-logo-horizontal-black_100.png')} style={{ position: "absolute", top: 18, left: 60}}/>,
      }
    }
    // Login: {
    //   screen: Login,
    //   navigationOptions: {
    //     headerStyle: {
    //       elevation: 0,
    //       height: 0,
    //     }
    //   }
    // },
    // Home2: {
    //   screen: Home2,
    //   navigationOptions: {
    //     header: null,
    //     headerStyle: {
    //       elevation: 0,
    //       height: 0,
    //     }
    //   }
    // },
  })
)