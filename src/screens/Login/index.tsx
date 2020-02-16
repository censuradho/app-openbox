import React, {useState} from 'react';
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
  const [credentials, setCredentials] = useState({
    email: '', senha: ''
  })

  const asideLinks = () => {
    Alert.alert('em breve! :)');
  };

  const handleSubmit = () => {
    navigation?.navigate('Home')

    console.log(credentials);
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
      />

      <Input 
        placeholder="senha"
        event={senha => setCredentials({...credentials, senha })}
        message={true}
      />
     <TouchW onPress={asideLinks}>
        <Text style={[style.asideLinks, {alignSelf: 'flex-end'}]}>
          Esqueceu a senha?
        </Text>
      </TouchW>

      <TouchH style={style.ButtonSubmit} onPress={handleSubmit}>
        <Text style={style.ButtonText}>login</Text>
      </TouchH>
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
    padding: 20,
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
  },
  asideLinks: {
    textDecorationLine: 'underline',
  },
});

export default Login