import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import poll from './poll'
import activity from './activity'
import searchUsers from './searchUsers'
import pod from './pod'
import adventure from './adventure'


const reducer = combineReducers({user, poll, activity, searchUsers, pod, adventure})
const middleware =
  applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './poll'
export * from './searchUsers'
export * from './pod'
export * from './adventure'


