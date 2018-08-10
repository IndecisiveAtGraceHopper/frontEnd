import React from 'react'

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div id='login'>
      <a href="/auth/google"><button className='btn btn-dark'>Login with Spotify</button></a>
    </div>
  )
}

export default UserHome