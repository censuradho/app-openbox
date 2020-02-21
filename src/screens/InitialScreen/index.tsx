import React from 'react'
import { StatusBar  } from 'react-native'
import { NavigationContainerProps } from 'react-navigation'

import { Container, Title, Image, BtnSignIn, TextBtnSignIn, BtnSignUp,TextBtnSignUp, ContainerBtn } from './styles'


function InitialScreen({ navigation }: NavigationContainerProps ) {

  const handleSubmit = () => {
    navigation?.navigate('SignIn')
  }
  
  return (
    <Container>
      <StatusBar backgroundColor="#343348"/>
      <Title>Conta</Title>
      <Image source={require('../../assets/img/logo.png')}/>
      <ContainerBtn>
        <BtnSignIn onPress={handleSubmit}>
          <TextBtnSignIn>Entrar</TextBtnSignIn>
        </BtnSignIn>
        <BtnSignUp>
          <TextBtnSignUp>Abrir uma conta</TextBtnSignUp>
        </BtnSignUp>
      </ContainerBtn>
    </Container>
  )
}

export default InitialScreen
