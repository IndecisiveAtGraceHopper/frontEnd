import axios from 'axios'

/**
 * ACTION TYPES
 */
const SUBMIT_POLL = 'SUBMIT_POLL'
const SET_LOCATION = 'SET_LOCATION'

/**
 * INITIAL STATE
 */

const initialState = {
  poll:[],
  location: ''
}

/**
 * ACTION CREATORS
 */

export const submitPoll = poll => ({type: SUBMIT_POLL, poll})
export const setLocation = address => ({type: SET_LOCATION, address})

/**
 * THUNK CREATORS
 */

export const submitPollThunk = (poll) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.post('/api/users/poll', poll)
        const action = submitPoll(data)
        dispatch(action)
      } catch (err) {
        console.log(err)
      }
    }
}


/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_POLL:
      return {...state, poll:[...state.poll, action.poll]}
    case SET_LOCATION: {
      return {...state, location:action.address}
    }
    default:
      return state
  }
}
