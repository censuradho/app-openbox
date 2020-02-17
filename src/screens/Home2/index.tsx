import React from 'react'
import {SafeAreaView} from 'react-navigation'
import { Banner, Container, Username, Note } from './styles'

function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Banner>
          <Username>Gustavo Leite Oliveira</Username>
        </Banner>
        <Note>
        </Note>
      </Container>
    </SafeAreaView>
  )
}

export default Home
