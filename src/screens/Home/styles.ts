import styled from 'styled-components/native'

import { body1 } from '../../themes/defaultStyles'
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: 0;
` 

export const Username = styled(body1)`
  font-weight: bold;
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