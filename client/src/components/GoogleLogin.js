import React from 'react'
import Login from './Login'

/**
 * COMPONENT
 */
export const GoogleLogin = () => {
  return (
    <div id='login'>
      <button><a href="http://localhost:3001/auth/google">Login with Google</a></button>
    </div>
  )
}

export default GoogleLogin
