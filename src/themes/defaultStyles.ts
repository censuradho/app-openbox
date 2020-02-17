import styled from 'styled-components/native'

export const body1 = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.color};
  margin-bottom: 20px;
`
export default {
  mode: 'default_theme',
  colors: {
    primary: '#FFCB04',
    secundary: '#343348',
    background: '#fff',
    color: '#fff',
    body1: 'rgba(0,0,0,.80)',
    body2: 'rgba(0,0,0,.60)',
  }
}

