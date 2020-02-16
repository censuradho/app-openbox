import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string
    colors: {
      primary: string,
      secundary: string,
      color: string
    }
  }
}