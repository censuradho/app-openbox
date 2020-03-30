import React from 'react'
import { ActivityIndicator as Loader } from 'react-native'

import { Container } from './styles'

const Loading = () => {
  return (
    <Container>
      <Loader size={40} color="#fff" />
    </Container>
  )
}

export default Loading
