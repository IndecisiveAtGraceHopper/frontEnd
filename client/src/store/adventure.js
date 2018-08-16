import axios from 'axios'

/**
 * ACTION TYPES
 */
const SELECT_ADVENTURE = 'SELECT_ADVENTURE'



/**
 * INITIAL STATE
 */

const initialState = []

/**
 * ACTION CREATORS
 */

export const selectAdventure = adventure => ({type: SELECT_ADVENTURE, adventure})



/**
 * THUNK CREATORS
 */

export const CreateAdventure = (adventure) => {
    return async (dispatch) => {
      try {
        console.log('i am in the thunk')
        const {data} = await axios.get(`/api/adventures/${adventureId}/activities`)
        const action = loadActivities(data)
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
