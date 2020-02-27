import React, { useContext } from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import { ThemeContext } from 'styled-components'
import { createBottomTabNavigator } from 'react-navigation-tabs';


// components
import Header from './components/Header'

// screens
import Login from './screens/Login'
import Home from './screens/Home'
import Home2 from './screens/Home2'
import InitialScreen from './screens/InitialScreen'
import SignIn from './screens/SignIn'
import Rendimentos from './screens/Rendimentos'

const Main = createStackNavigator({
  Home2: {
    screen: Home2,
    navigationOptions: {
      header: null
    },
  },
})

const  TabStack = createBottomTabNavigator({
  Home2: {
      screen: Main,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }: any) => (<Icon name="home" size={30} color={tintColor}/>),
    },
  },
  Rendimentos: {
    screen: Rendimentos,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: ({ tintColor }: any) => (<Icon name="trending-up" size={30} color={tintColor}/>),
  },
  }
}, 
{ 
  tabBarOptions: {
  activeTintColor: '#ccc',
  inactiveTintColor: '#262626',
}
})

const App = createSwitchNavigator({
  InitialScreen: {
    screen: InitialScreen,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    },
  },
  App: {
    screen: TabStack,
    navigationOptions: {
      header: null,
    }
  }
})

export default createAppContainer(App)

// createStackNavigator({
  // InitialScreen: {
  //   screen: InitialScreen,
  //   navigationOptions: {
  //     header: null,
  //   }
  // },
  // SignIn: {
  //   screen: SignIn,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       header: (navigation) => <Header title="Login" navigation={navigation}/>,
  //     }
  //   }
  // },
  // Home: {
  //   screen: Home,
  //   navigationOptions: {
  //     headerBackground: <Image source={require('./assets/img/open-box-logo-horizontal-black_100.png')} style={{ position: "absolute", top: 18, left: 60}}/>,

  //   }
  // }
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       headerStyle: {
//         elevation: 0,
//         height: 0,
//       }
//     }
//   },
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
// })