import React, {Component} from 'react'
import Logout from './Logout'
import {connect} from 'react-redux'
import {getUserAdventures, getUserPods, createPodThunk} from '../store'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    this.props.createNewPod({name:this.state.name}).then(createdPod =>
      window.location = `/pods/${createdPod.id}`)
  }

  handleChange = (evt) => {
   this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    console.log('PROPS IS THIS IT', this.props)
    console.log('STATE', this.state)
    const user = this.props.user
    //what is the best way to filter adventures into upcoming and recent?
    // const upcomingAdventures = user.adventures && user.adventures.filter()
    // const recentAdventures = user.adventures && user.adventures.filter()
    return (
      <div> POD
        <form onSubmit={this.handleSubmit}>
         <div className="form-group form-check">
            <label htmlFor="name" />
            <input type="text" name="name"  onChange={this.handleChange}
            className="form-control" id="name" aria-describedby="name" placeholder="Enter pod name" />
            <small id="name" className="form-text text-muted" />
        </div>
          <span>
           <button type='submit'>Create New Pod</button>
          </span>
      </form>
    </div>
    )
  }
}

const mapState = state => {
  console.log('STATEMAP', state)
  return ({
    user: state.user,

    // adventures: state.user.adventures,
    // pods: state.user.pods
  })
}

const mapDispatch = dispatch => {
  return ({
    // fetchPods: (userId) => dispatch(getUserPods(userId)),
    // fetchAdventures: (userId) => dispatch(getUserAdventures(userId)),
    createNewPod: (name) => dispatch(createPodThunk(name))
  })
}

export default connect(mapState, mapDispatch)(UserHome)
