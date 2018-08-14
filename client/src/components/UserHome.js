import React, {Component} from 'react'
import Logout from './Logout'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class UserHome extends Component {
  render() {
    const user = this.props.user
    //what is the best way to filter adventures into upcoming and recent?
    const upcomingAdventures = user.adventures.filter()
    const recentAdventures = user.adventures.filter()
    return (
      <div id='userhome'>
        <h3>Welcome, {user.email}</h3>
        <Logout />
        <h4>Your Pods</h4>
        {
          this.props.user.pods && this.props.user.pods.map(pod => {
            <div className='singlePod' key={pod.id}>
              POD: {pod.title}
            </div>
          })
        }
        <button>Make a New Pod</button>
        <h4>Upcoming Adventures</h4>
        {
          upcomingAdventures && upcomingAdventures.map(adventure => {
            <div className='singleAdventure' key={adventure.id}>
              ADVENTURE: {adventure.title}
            </div>
          })
        }
        <h4>Recent Adventures</h4>
        {
          recentAdventures && recentAdventures.map(adventure => {
            <div className='singleAdventure' key={adventure.id}>
              ADVENTURE: {adventure.title}
            </div>
          })
        }
      </div>
    )    
  }
}

const mapState = state => {
  return ({
    user: state.user.loggedInUser,
    adventures: state.user.adventures,
    pods: state.user.pods
  })
}

const mapDispatch = dispatch => {
  return ({
    fetchPods: dispatch(getUserPods(this.props.user.id)),
    fetchAdventures: dispatch(getUserAdventures(this.props.user.id))
  })
}

export default connect(mapState, mapDispatch)(UserHome)
