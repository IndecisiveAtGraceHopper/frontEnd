import React from 'react'

/**
 * COMPONENT
 */
export const GoogleLogin = () => {
  return (
    <div id='login'>
     <a href="https://obscure-lowlands-38066.herokuapp.com/auth/google">
      <button className="btn btn-primary btn-lg btn-block">Login with Google</button>
      </a>
      <br/>
      <br/>
    </div>
  )
}

export default GoogleLogin
