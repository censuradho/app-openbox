import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.secundary};
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.color};
`

export const Title = styled(Text)`
  font-size: 20px;
  text-transform: uppercase;
`

export const Image = styled.Image`
  max-width: 120px;
  max-height: 120px;
  margin-top: 30px;
  margin-bottom: 230px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-radius: 3px;
`

export const ContainerBtn = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 20px;
  
`

export const BtnSignIn = styled(Button)`
  background: #fff;
  align-items: center;
`
export const BtnSignUp = styled(Button)`
  align-items: center;
  margin-top: 10px;
`

export const TextBtnSignIn = styled(Text)`
  color: rgba(0,0,0,0.87);
  font-size: 18px;
  text-transform: uppercase;
`

export const TextBtnSignUp = styled(Text)`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase
`