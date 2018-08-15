import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'


/**
 * INITIAL STATE
 */
const initialState = {
  loggedInUser: {},
  allUsers: []
}

/**
 * ACTION CREATORS
 */
const getAllUsers = (allUsers) => ({type: GET_ALL_USERS, allUsers: allUsers})
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})


/**
 * THUNK CREATORS
 */

 export const getUsersThunk = () => async dispatch => {
   try {
     const res = await axios.get('/api/users')
     dispatch(getAllUsers(res.data))
   }catch(err){
     console.log(err)
   }
 }

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || initialState.loggedInUser))
  } catch (err) {
    console.error(err)
  }
}

export const authSignUp = (userInfo) => async dispatch => {
  let res
  try {
    res = await axios.post('/auth/signup', userInfo)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push('/userhome')
  } catch(dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const authLogin = (userInfo) => async dispatch => {
  let res
  try {
    res = await axios.post('/auth/login', userInfo)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push('/userhome')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logOut = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const createProfile = (profileInfo) => async dispatch => {
  try {
    const res = await axios.put('/auth/profile', profileInfo)
    dispatch(getUser(res.data))
    history.push('/userhome')
  }catch (err) {
    console.error(err)
  }
}

export const getUserPods = userId => async dispatch => {
  try {
    const pods = await axios.get(`/api/user/pods/${userId}`)
  } catch (err) {
    console.error(err)
  }
}

export const getUserAdventures = userId => async dispatch => {
  try {
    const adventures = await axios.get(`/api/user/adventures/${userId}`)
  } catch (err) {
    console.error(err)
  }
}


/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...action.user}
    case REMOVE_USER:
      return {...state, loggedInUser: {}}
    case GET_ALL_USERS:
      return {...state, allUsers: action.allUsers}
    default:
      return state
  }
}
