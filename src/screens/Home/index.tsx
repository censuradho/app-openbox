import React, {useState, useEffect} from 'react';
import {LinearGradient} from 'react-native-linear-gradient'
import Emoji from 'react-native-emoji'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

// services
import api from '../../services/auth'

// styles
import { Container, Username, Text, Rendimento, EmojiList } from './styles'

type Token = { apiKey: string, email: string }
function Home () {
  const emojiList = ['sos', 'mask', 'hot_pepper', 'sunflower', 'dart', 'snake', 'heartbeat']

  const initialState = {
    isShow: false,
    index: Math.floor(Math.random() * emojiList.length),
  }
  const [state, setState] = useState(initialState)
  const token: Token = useSelector((value: any) => value.token)

  const getRendimento = async () => {
    const { data } = await api.post('/rendimento/', token)
    console.log(data)
  }
  useEffect(() => { 
    getRendimento()
  }, [token])

  const toggle = () => {
    setState({ isShow: !state.isShow, index: Math.floor(Math.random() * emojiList.length)})
  }

  return (
    <Container> 
      <Username>Gustavo Leite Oliveira</Username>
      <Text>Rendimento</Text>
      { state.isShow 
        ? <Rendimento>R$ 5.000,00</Rendimento>
        : <EmojiList>
          <Emoji name={emojiList[state.index]} style={{fontSize: 30}}/>
            <Emoji name={emojiList[state.index]} style={{fontSize: 30}}/>
            <Emoji name={emojiList[state.index]} style={{fontSize: 30}}/>
            <Emoji name={emojiList[state.index]} style={{fontSize: 30}}/>
          </EmojiList> }
        { state.isShow
          ? <Icon name="eye-off" size={30} color="#fff" onPress={toggle} style={{ padding: 10}}/>
          : <Icon name="eye" size={30} color="#fff" onPress={toggle} style={{ padding: 10}}/>}
    </Container>
  )
}

export default Home