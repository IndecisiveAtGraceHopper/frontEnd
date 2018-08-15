import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import poll from './poll'
import activity from './activity'
import searchUsers from './searchUsers'
import pod from './pod'


const reducer = combineReducers({user, poll, activity, searchUsers})
const reducer = combineReducers({user, poll, searchUsers, pod, activity})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './poll'
export * from './searchUsers'
export * from './pod'


