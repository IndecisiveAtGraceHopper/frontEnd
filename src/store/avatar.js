import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://obscure-lowlands-38066.herokuapp.com'


const LOAD_AVATARS = 'LOAD_AVATARS'

const initialState = []


export const loadAvatars = avatars => ({type: LOAD_AVATARS, avatars})


export const getAvatars = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${path}/api/avatars`)
      const avatars = response.data;

      const action = loadAvatars(avatars);
      dispatch(action);
    }
    catch (error){
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_AVATARS:
      return [...action.avatars]
    default:
      return state
  }
}

