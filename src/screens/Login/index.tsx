import React, {useState} from 'react';
import qs from 'query-string'
import { useDispatch } from 'react-redux'
import { ActivityIndicator as Loader } from 'react-native'

import { setToken } from '../../store/actions/token'

// styles
import { LoaderContainer } from './style'

// services
import api from '../../services/auth'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback as TouchW,
  TouchableHighlight as TouchH,
  Image,
  Dimensions,
  Alert,
} from 'react-native';

import {NavigationContainerProps} from 'react-navigation';
// components
import Input from '../../components/Input'

function Login ({ navigation}: NavigationContainerProps) {
  const dispatch = useDispatch()

  const [isFetching, setIsFetching] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '', senha: ''
  })

  // `email=${email}&senha=${senha}
  const asideLinks = () => {
    Alert.alert('em breve! :)');
  };

  const getToken = async () => {
    try {
      // const { data } = await api.post('/loginmobile/', qs.stringify(credentials))
      // if(data !== 0) {
      //   dispatch(setToken({ apiKey: data.token, email: credentials.email, nome: data.nome }))
      //   navigation?.navigate('Home')
      //   return
      // }
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
  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/img/logo-full.png')}
        style={style.logo}
      />
      <Input 
        placeholder="e-mail"
        event={email => setCredentials({...credentials, email })}
        message={true}
        editable={!isFetching}
      />

      <Input 
        placeholder="senha"
        event={senha => setCredentials({...credentials, senha })}
        message={true}
        secureTextEntry={true}
        editable={!isFetching}
      />
     <TouchW onPress={asideLinks}>
        <Text style={[style.asideLinks, {alignSelf: 'flex-end'}]}>
          Esqueceu a senha?
        </Text>
      </TouchW>
      <LoaderContainer>
        { !isFetching 
        ? <TouchH style={style.ButtonSubmit} onPress={handleSubmit}>
          <Text style={style.ButtonText}>login</Text>
        </TouchH>
        : <Loader size="large" color="#212121"/> }
      </LoaderContainer>
      <TouchW onPress={asideLinks}>
        <Text style={[style.asideLinks, {alignSelf: 'flex-start'}]}>
          Não é cadastrado?
        </Text>
      </TouchW>
 
    </View>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginVertical: 50,
  },
  Input: {
    borderBottomColor: '#00053d',
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  ButtonSubmit: {
    backgroundColor: '#00053d',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'stretch',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 3,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3,

  },
  asideLinks: {
    textDecorationLine: 'underline',
  },
});

export default Login