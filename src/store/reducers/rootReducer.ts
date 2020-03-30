import { combineReducers } from 'redux'
import token from './token'


const rootReducer = combineReducers({ token })

export type Action<P> = { payload: P, type: string }
export default rootReducer
