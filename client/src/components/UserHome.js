import React, {Component} from 'react'
import Logout from './Logout'
import {connect} from 'react-redux'
import {getUserAdventures, getUserPods, createPodThunk} from '../store'
import axios from 'axios'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      userId: null
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    const createdPod = await this.props.createNewPod({name:this.state.name})
    await axios.post('/api/pods/userPod', ({podId: createdPod.id, userId: this.props.userId}))
    window.location = `/pods/${createdPod.id}`
  }

  handleChange = (evt) => {
   this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
     console.log('podId', this.state.podId)
    return (
      <div>
      <h4>POD</h4>
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
  console.log(state.user.id)
  return ({
    userId: state.user.id,
  })
}

const mapDispatch = dispatch => {
  return ({
    createNewPod: (name) => dispatch(createPodThunk(name))
  })
}

export default connect(mapState, mapDispatch)(UserHome)
