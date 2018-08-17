import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_POD = 'ADD_POD'

const GET_POD = 'GET_POD'

const USER_PODS = 'USERS_PODS'
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

/**
 * THUNK CREATORS
 */

export const createPodThunk = (podName) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/api/pods', podName)
        const newPod= response.data
        return Promise.resolve(newPod);
      } catch (err) {
        console.log(err)
      }
    }
}

export const getUsersInPodThunk = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/pods/${id}`);
    const users = response.data;
    const action = getPod(users);
    return dispatch(action);
  }
}

export const getUserPodsThunk = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/users/${id}`);
    const pods = response.data;
    const action = userPods(pods);
    return dispatch(action);
  }
}

export const getUserAdventuresThunk = (id) => {
  return async (dispatch) => {
    const user = await axios.get(`/api/users/${id}`)
    console.log('user', user)
  }
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
    default:
      return state
  }
}
