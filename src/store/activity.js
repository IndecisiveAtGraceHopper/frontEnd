import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true

/**
 * ACTION TYPES
 */
const LOAD_ACTIVITIES = 'LOAD_ACTIVITIES'
const CHANGE_VOTE ='CHANGE_VOTE'
const REMOVE_ACTIVITIES ='REMOVE_ACTIVITIES'


/**
 * INITIAL STATE
 */

const initialState = []

/**
 * ACTION CREATORS
 */

export const loadActivities = activities => ({type: LOAD_ACTIVITIES, activities})
export const changeVote = activity => ({type: CHANGE_VOTE, activity})
export const removeActivities = activityId => ({type: REMOVE_ACTIVITIES, activityId})


/**
 * THUNK CREATORS
 */

export const fetchActivities = (adventureId) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get(`${path}/api/adventures/${adventureId}/activities`)
        const action = loadActivities(data)
        dispatch(action)
      } catch (err) {
        console.log(err)
      }
    }
}

export const updateVote = (activity)=> {
  return async (dispatch) => {
    try{
      console.log('updateThunk', activity)
      const {data} = await axios.put(`${path}/api/activities/${activity.id}`, activity)
      const action = changeVote(data)
      dispatch(action)

    } catch(err) {
      console.log('error in update thunk', err)
    }
  }
}



/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTIVITIES:
      return [...action.activities]
    case CHANGE_VOTE:
      return state.map((activity)=> activity.id === action.activity.id ? action.activity: activity)
    case REMOVE_ACTIVITIES:
      return state.filter((activity)=> activity.id === action.activityId)
    default:
      return state
  }
}
