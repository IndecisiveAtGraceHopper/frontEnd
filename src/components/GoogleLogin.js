import React from 'react'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'

/**
 * COMPONENT
 */
export const GoogleLogin = () => {
  return (
    <div id='login'>
     <a href={`${path}/auth/google`}>
      <button className="btn btn-primary btn-lg btn-block">Login with Google</button>
      </a>
      <br/>
      <br/>
    </div>
  )
}

export default GoogleLogin
