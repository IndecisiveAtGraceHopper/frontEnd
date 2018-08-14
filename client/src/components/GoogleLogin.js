import React from 'react'
import Login from './Login'

/**
 * COMPONENT
 */
export const GoogleLogin = () => {
  return (
    <div id='login'>
      <a href="http://localhost:3001/auth/google"><button className='btn btn-dark'>Login with Google</button></a>
    </div>
  )
}

export default GoogleLogin
