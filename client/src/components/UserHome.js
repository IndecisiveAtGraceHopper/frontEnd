import React, {Component} from 'react'
import Logout from './Logout'
import {connect} from 'react-redux'
import {getUserAdventures, getUserPods, createPodThunk} from '../store'
import axios from 'axios'
import UserPods from './User'

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
    return (
      <div>
       <div><UserPods id={this.props.userId} /></div>
       <br/>
      <h3 className="text-center font-weight-normal"> Create a new pod! </h3>
        <form onSubmit={this.handleSubmit}>
         <div className="form-group form-check">
            <label htmlFor="name" />
            <input type="text" name="name"  onChange={this.handleChange}
            className="form-control" id="name" aria-describedby="name" placeholder="Enter pod name" />
            <small id="name" className="form-text text-muted" />
        </div>
          <span>
          <br/>
           <button className="btn btn-secondary btn-lg btn-block"type='submit'>Create</button>
          </span>
      </form>
    </div>
    )
  }
}

const mapState = state => {
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
