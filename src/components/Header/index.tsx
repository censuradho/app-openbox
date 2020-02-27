import React from 'react'
import { NavigationContainerProps   } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'

import { Container, Text, Button } from './styles'
type Props = {
  title: string,
  navigation: NavigationContainerProps,
}

function Header({navigation, ...props}: Props) {
  return (
    <Container>
      <Button onPress={() => navigation.navigation?.goBack(null)}>
        <Icon size={20} name="arrowleft" color="#fff" />
      </Button>
      <Text>{props.title}</Text>
    </Container>
  )
}

export default Header
