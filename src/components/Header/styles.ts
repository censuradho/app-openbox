import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.secundary};
`
export const Titlte = styled.Text`

`
export const Text = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.color};
  margin-left: 25px;
`

export const Button = styled.TouchableOpacity`
padding: 5px;`

