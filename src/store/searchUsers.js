import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'

/**
 * ACTION TYPES
//  */
const GET_ALL_USERS = 'GET_ALL_USERS'



/**
 * INITIAL STATE
 */
const initialState = {
  allUsers: [],
  singleUser: {}
}

/**
 * ACTION CREATORS
 */
const getAllUsers = (allUsers) => ({type: GET_ALL_USERS, allUsers: allUsers})



/**
 * THUNK CREATORS
 */

 export const getUsersThunk = () => async dispatch => {
   try {
     const res = await axios.get(`${path}/api/users`)
     dispatch(getAllUsers(res.data))
   }catch(err){
     console.log(err)
   }
 }



export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, allUsers: action.allUsers}
    default:
      return state
  }
}
