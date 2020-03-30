import React from 'react'

import { Container, Text } from './styles'
import { Dimensions } from 'react-native'
import BarChart from '../../components/BarChart'

function Rendimentos() {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const values = [100, 200, 150, 198, 132, 423, 132, 321, 120, 101, 104]

  const bar1 = { x: labels.slice(0, 6), y: values.slice(0, 6) }
  const bar2 = { x: labels.slice(6, 10), y: values.slice(6, 10) }

  const data = [bar1, bar2]

  const layout = {
    margin: {
      r: 10,
      l: 10,
      b: 10,
      t: 10
    }
  }
  return (
    <Container>
      <Text>Rendimentos</Text>
      {/* <BarChart
        width={Dimensions.get('window').width}
        height={300}
        data={ data }
        type="bar"
        layout={layout}
      /> */}
    </Container>
  )
}

export default Rendimentos
