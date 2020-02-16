import React, {useState, useEffect} from 'react';
import {Button } from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'
import Emoji from 'react-native-emoji'

// styles
import { Container, Username, Text, Rendimento, EmojiList } from './styles'

function Home () {
  const emojiList = ['sos', 'mask', 'hot_pepper', 'sunflower', 'dart', 'snake', 'heartbeat']

  const initialState = {
    isShow: false,
    index: Math.floor(Math.random() * emojiList.length),
  }
  const [state, setState] = useState(initialState)

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
      <Text onPress={toggle}>sdsadas</Text>
    </Container>
  )
}

export default Home