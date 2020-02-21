import React, {useState, useEffect} from 'react';
import {LinearGradient} from 'react-native-linear-gradient'
import Emoji from 'react-native-emoji'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import qs from 'query-string'

// services
import api from '../../services/auth'

// styles
import { Container, Username, Text, Rendimento, EmojiList } from './styles'

// utils
import help from '../../utils/help'

type Token = { apiKey: string, email: string, nome: string }

function Home () {

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
    <Container> 
  
    </Container>
  )
}

export default Home