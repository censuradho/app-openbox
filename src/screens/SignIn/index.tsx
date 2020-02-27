import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { useDispatch } from 'react-redux'
import { StatusBar, ActivityIndicator as Loader, Alert } from 'react-native'
import { NavigationContainerProps } from 'react-navigation'

import { setToken } from '../../store/actions/token'

// components
import Input from '../../components/Input'

// styles
import { Container, Form, SubmitButton, TextSubmit, Text, SubmitContainer } from './styles'

// services
import api from '../../services/auth'

const initialCredentials = { email: '', senha: '' }
function SignIn({ navigation }: NavigationContainerProps) {
  const dispatch = useDispatch()
  const [isFetching, setIsFetching] = useState(false)
  const [credentials, setCredentials] = useState(initialCredentials)

  const asideLinks = () => {
    Alert.alert('Em breve :)');
  };

  const getToken = async () => {
    try {
      const { data} = await api.post('/loginmobile/', qs.stringify(credentials))
      if(data !== 0) {
        dispatch(setToken({ apiKey: data.token, email: credentials.email, nome: data.nome }))
        navigation?.navigate('Home')
        console.log(data)
        return
      }
      navigation?.navigate('Home')
      return
    } catch(err) {
      console.log(err)
    }
    Alert.alert('Não foi possível conectar, tente novamente')
    setIsFetching(false)
  }

  const handleSubmit = async () => {
    setIsFetching(true)
    getToken()
  
  };

  useEffect(() => {
    setIsFetching(false)
  }, [])

  return (
    <Container>
      <StatusBar backgroundColor="#343348"/>
      <Form>
        <Input 
          event={email => setCredentials({...credentials, email})} 
          message={true} 
          placeholder="E-mail"
          placeholderTextColor="#000" />
        <Input 
          event={senha => setCredentials({...credentials, senha})} 
          message={true} 
          placeholder="Senha"
          placeholderTextColor="#000" 
          secureTextEntry={true} />
        <Text onPress={asideLinks}>Esqueceu sua senha?</Text>
        <SubmitContainer>
          {
            !isFetching
            ?  <SubmitButton onPress={handleSubmit}>
                <TextSubmit>Sign in</TextSubmit>
              </SubmitButton>
            : <Loader size="large" color="#212121" />
          }
        </SubmitContainer>
        </Form>
    </Container>
  )
}

export default SignIn
