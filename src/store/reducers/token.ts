const initialState = null

import { Action } from './rootReducer'

type Token = { apiKey: string, email: string}
function token(state = initialState, action: Action<Token>) {
  switch(action.type) {
    case 'SET_TOKEN':
      return action.payload
    default:
      return state
  }
}

export default token
