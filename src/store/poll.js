import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true

/**
 * ACTION TYPES
 */
const SET_POLL = 'SET_POLL'
const SET_LOCATION = 'SET_LOCATION'

/**
 * INITIAL STATE
 */

const initialState = {
  poll: {},
  location: ''
}

/**
 * ACTION CREATORS
 */

export const setPoll = poll => ({type: SET_POLL, poll})
export const setLocation = address => ({type: SET_LOCATION, address})

/**
 * THUNK CREATORS
 */

export const submitPollThunk = (poll) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.post(`${path}/api/users/poll`, poll)
        const action = setPoll(data)
        dispatch(action)
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
}

export const getPoll = (adventureId, userId)=> {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${path}/api/adventures/${adventureId}/poll/${userId}`)
      dispatch(setPoll(data))

    } catch (err){
      console.log(err)
    }
  }
}


/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POLL:
      return {...state, poll:{...action.poll}}
    case SET_LOCATION: {
      return {...state, location:action.address}
    }
    default:
      return state
  }
}
