import React, {Component} from 'react'
import Logout from './Logout'

/**
 * COMPONENT
 */
class UserHome extends Component {
  render() {
    return (
      <div id='userhome'>
        <p>User Home</p>
        <Logout />
      </div>
    )    
  }
}

export default UserHome
