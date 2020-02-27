import {SafeAreaView} from 'react-navigation'
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'react-native';

import {LinearGradient} from 'react-native-linear-gradient'
import Emoji from 'react-native-emoji'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import qs from 'query-string'

// services
import api from '../../services/auth'

// styles
import { 
  Container, 
  Username, 
  Text,
  BtnAction,
  Rendimento, 
  EmojiList, 
  Banner, 
  Note, 
  ContainerRendimento,
  CotainerHeader,
  Body,
  Span,
  NoteHeader,
  NoteBody,
  H3 } from './styles'

// utils
import help from '../../utils/help'
type Token = { apiKey: string, email: string, nome: string }

function Home() {
  const emojiList = ['sos', 'mask', 'hot_pepper', 'sunflower', 'dart', 'snake', 'heartbeat']

  const initialState = {
    isShow: false,
    index: Math.floor(Math.random() * emojiList.length),
  }

  const [state, setState] = useState(initialState)
  const [userInfo, setUserInfo] = useState({nome: '', tokenApi: '', rendimento: 0})
  const token: Token = useSelector((value: any) => value.token)

  const getUserInfo = async () => {
    const { data } = await api.post('/rendimento/', qs.stringify({ apiKey: token.apiKey, email: token.email }))
    setUserInfo({ rendimento: data.msg, nome: token.nome, tokenApi: token.apiKey })
  }

  useEffect(() => { 
    getUserInfo()
  }, [token])

  const toggle = () => {
    setState({ isShow: !state.isShow, index: Math.floor(Math.random() * emojiList.length)})
  }

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <Container>

        <Banner>
          <Username>{userInfo.nome}</Username>
        </Banner>

        <Note>
          <NoteHeader>
            <CotainerHeader>
              <H3>Banco</H3>
              <Span>243</Span>
            </CotainerHeader>
            <CotainerHeader>
              <H3>Agência</H3>
              <Span>0001</Span>
            </CotainerHeader>
            <CotainerHeader>
              <H3>Conta</H3>
              <Span>123456-7</Span>
            </CotainerHeader>
          </NoteHeader>
          <NoteBody>
            <Span>Saldo a receber</Span>
            <Rendimento>{userInfo.rendimento}</Rendimento>
            <Icon name="eye" size={25} color="#262626" style={{position: 'absolute', right: 0, top: 40}}/>
            <BtnAction>
              <Text>Ver extrato</Text><Icon name="arrow-right" size={20} color="#fff"/>
            </BtnAction>
          </NoteBody>
        </Note>
        
        <Body>

        </Body>
      </Container>
    </SafeAreaView>
  )
}

export default Home
