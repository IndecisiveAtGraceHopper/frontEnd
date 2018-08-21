import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = "" // isLocalhost ? 'http://localhost:3001' : 'https://obscure-lowlands-38066.herokuapp.com'

/**
 * ACTION TYPES
 */
const SELECT_ADVENTURE = 'SELECT_ADVENTURE'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

export const selectAdventure = adventure => ({type: SELECT_ADVENTURE, adventure})

/**
 * THUNK CREATORS
 */

export const createAdventure = (adventure, history) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`${path}/api/adventures`, adventure)
      dispatch(selectAdventure(data))
      history.push(`/adventures/${data.id}`)
    } catch (err) {
      console.log(err)
    }
  }
}

export const getAdventure = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`${path}/api/adventures/${id}`)
      dispatch(selectAdventure(data))
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
    case SELECT_ADVENTURE:
      return {...action.adventure}
    default:
      return state
  }
}
