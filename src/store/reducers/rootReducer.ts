import { combineReducers } from 'redux'
import token from './token'

export type Action<P> = { payload: P, type: string }
const rootReducer = combineReducers({ token })

export default rootReducer
