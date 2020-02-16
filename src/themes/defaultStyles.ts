import styled from 'styled-components/native'

export const body1 = styled.Text`
  font-size: 18;
  color: ${props => props.theme.colors.color};
  margin-bottom: 20px;
`
export default {
  mode: 'default_theme',
  colors: {
    primary: '#FFCB04',
    secundary: '#343348',
    color: '#fff'
  }
}

