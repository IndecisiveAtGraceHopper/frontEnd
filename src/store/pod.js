import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true

/**
 * ACTION TYPES
 */
const ADD_POD = 'ADD_POD'
const GET_POD = 'GET_POD'
const USER_PODS = 'USERS_PODS'
const ADD_USER_TO_POD = 'ADD_USER_TO_POD'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

export const addPod = pod => ({type: ADD_POD, pod:pod})
export const getPod = pod => ({type: GET_POD, pod:pod})
export const userPods = pod => ({type: USER_PODS, pod:pod})
export const addUserToPod = user => ({type:ADD_USER_TO_POD, user:user})

/**
 * THUNK CREATORS
 */

export const createPodThunk = (podName) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${path}/api/pods`, podName)
        const newPod = response.data
        return Promise.resolve(newPod)
      } catch (err) {
        console.log(err)
      }
    }
}

export const getUsersInPodThunk = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${path}/api/pods/${id}`)
    const pod = response.data
    const action = getPod(pod)
    return dispatch(action)
  }
}

export const getUserPodsThunk = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${path}/api/users/${id}`);
    const pods = response.data;
    const action = userPods(pods);
    return dispatch(action);
  }
}

export const createUserPodThunk = (userId, podId) => async dispatch => {
  const response = await axios.post(`${path}/api/pods/userPod`, ({podId, userId}))
  const { user } = response.data
  const action = addUserToPod(user)
  return dispatch(action)
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POD:
      return {...action.pod}
    case GET_POD:
      return {...action.pod}
    case USER_PODS:
      return {...action.pod}
    case ADD_USER_TO_POD:
      const newUsers = state.users.slice()
      const userIndex = newUsers.findIndex(u => u.id === action.user.id)
      if (userIndex < 0) {
        newUsers.push(action.user)
      }
      return {...state, users: newUsers }
    default:
      return state
  }
}
