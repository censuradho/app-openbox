import styled from 'styled-components/native'

import { body1 } from '../../themes/defaultStyles'
export const Container = styled.View`
  flex: 1;
  align-items: center;
` 
export const Banner = styled.View`
  height: 250px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`
export const Username = styled(body1)`
  font-weight: bold;
`
export const Note = styled.View`
  width: 300px;
  height: 100px;
  padding: 10px;
  background: ${props => props.theme.colors.background};
  position: absolute;
  justify-content: flex-end;
  top: 175px;
  border-radius: 20px;
`

export const Text = styled(body1)`
  margin-bottom: 0;
  color: rgba(0,0,0,.80);
  font-size: 14px;
`
export const Rendimento = styled(body1)`
  font-size: 34px;
  color: rgba(0,0,0,.80);
  font-size: 17px;
`

export const EmojiList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
` 