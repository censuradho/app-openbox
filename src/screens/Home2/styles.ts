import styled from 'styled-components/native'

import { body1 } from '../../themes/defaultStyles'
export const Container = styled.View`
  flex: 1;
  align-items: center;
` 
export const Body = styled.View`
  width: 100%;
  padding: 20px;
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
  padding: 20px;
  background: ${props => props.theme.colors.background};
  position: absolute;
  justify-content: flex-end;
  top: 185px;
  border-radius: 20px;
  border-width: 1px;
  border-color: 'rgba(0,0,0,.10)';
`
export const NoteHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #202020;
  border-bottom-width: 1px;
  padding-bottom: 16px;
`
export const NoteBody = styled.View`
  align-items: center;
  padding-top: 16px;
`

export const Text = styled(body1)`
  margin-bottom: 0;
  color: rgba(0,0,0,.80);
  font-size: 14px;
`

export const CotainerHeader = styled.View`
`
export const H3 = styled(Text)`
  font-size: 17px;
  text-transform: uppercase;
  margin: 0;
`
export const Span = styled(Text)`
  font-size: 14px;
`

export const Rendimento = styled(body1)`
  color: rgba(0,0,0,.80);
  font-size: 27px;
`
export const BtnAction = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  width: 160px;
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -35px;
  ${Text} {
    color: #fff;
    text-transform: uppercase;
  }
`

export const ContainerRendimento = styled.View`
  width: 200px;
  margin: 0 auto;
`

export const EmojiList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
` 