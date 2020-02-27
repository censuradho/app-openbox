import styled from 'styled-components/native'

import { body1 } from '../../themes/defaultStyles'
export const Container = styled.View`
  flex: 1;
  background: #E5E5E5;
  padding: 0;
` 
 
export const Capa = styled.View`
  height: 200px;
  width: 100%;
  background: ${props => props.theme.colors.secundary};
` 
export const Username = styled(body1)`
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 100;
  margin-top: 40px;
  padding: 20px;
`

export const Text = styled(body1)`
  margin-bottom: 0;
`
export const Rendimento = styled(body1)`
  font-size: 30px;
`

export const EmojiList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
` 