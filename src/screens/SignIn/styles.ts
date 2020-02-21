import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.secundary};
  padding: 20px;
  align-items: center;
  justify-content: center;
`
export const Form = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`

export const SubmitContainer = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.secundary};
  align-items: center;
`

export const TextSubmit = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 18px;
`

export const Text = styled.Text`
  font-size: 15px;
  color: rgba(0,0,0,0.87);
`

