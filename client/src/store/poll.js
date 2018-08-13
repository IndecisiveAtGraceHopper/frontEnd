import axios from 'axios'

/**
 * ACTION TYPES
 */
const SUBMIT_POLL = 'SUBMIT_POLL'

/**
 * INITIAL STATE
 */

const initialState = {
 poll: []
}

/**
 * ACTION CREATORS
 */

export const submitPoll = poll => ({type: SUBMIT_POLL, poll})

/**
 * THUNK CREATORS
 */

export const submitPollThunk = (poll) => {
    return async (dispatch) => {
      try {
        console.log("HERE FOR THUNK")
        const {data} = await axios.post('/users/poll', poll)
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
      return { ...state, poll: [...state.poll, action.poll] }
    default:
      return state
  }
}
