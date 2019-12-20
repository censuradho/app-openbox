import  React, {useState, useEffect} from 'react'
import {Text, View, TextInput, StyleSheet, TextInputProps} from 'react-native'

interface Props extends TextInputProps {
  event(value: string): void;
  message: boolean,
}

function Input ({event, message,...props}: Props) {
  const [assistMessage, setAssistMessage] = useState('')

  const [initialState, setInitialState] = useState({
    value: '',
    isFocus: false,
  })

  const [initialStyle, setInitialStyle] = useState({
    borderBottomColor: 'rgba(0,0,0,0.3)',
    color: '#00053d',
  })

  const handleChange = (value: string) => {
    setInitialState({...initialState, value: value});
    event(value);
  };

  const handleFocus = () => {
    setInitialState({...initialState, isFocus: true});
  };

  const handleBlur = () => {
    initialState.value.length <= 0
      ? setAssistMessage('Campo obrigatório')
      : setAssistMessage('');

    setInitialState({...initialState, isFocus: false});
  };

  useEffect(() => {
    initialState.isFocus
      ? setInitialStyle({
          ...initialStyle,
          borderBottomColor: '#00053d',
        })
      : setInitialStyle({
          ...initialStyle,
          borderBottomColor: 'rgba(0,0,0,.3)',
        });
  }, [initialState.isFocus]);

  return (
    <View style={style.container}>
      <TextInput 
        style={[style.Input, initialStyle]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={value => handleChange(value)}
        {...props}
      />
      {message && <Text style={style.message}>{assistMessage}</Text>}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  Input: {
    borderBottomWidth: 2,
    marginVertical: 5,
  },
  message: {
    color: '#b71c1c',
    fontSize: 10,
  },
});

export default Input