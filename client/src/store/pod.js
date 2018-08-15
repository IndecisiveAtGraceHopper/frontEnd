import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_POD = 'ADD_POD'

/**
 * INITIAL STATE
 */

const initialState = {
 pods: []
}

/**
 * ACTION CREATORS
 */

export const addPod = pod => ({type: ADD_POD, pod})

/**
 * THUNK CREATORS
 */

export const createPodThunk = (podName) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.post('/api/pod', podName)
        const action = addPod(data)
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
    case ADD_POD:
      return { ...state, pod: [...state.pod, action.pod] }
    default:
      return state
  }
}
