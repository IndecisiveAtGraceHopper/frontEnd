import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPodThunk} from '../store'
import axios from 'axios'
import UserPods from './User'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true



/**
 * COMPONENT
 */
class Pods extends Component {
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
    await axios.post(`${path}/api/pods/userPod`, ({podId: createdPod.id, userId: this.props.userId}))
    window.location = `/pods/${createdPod.id}`
  }

  handleChange = (evt) => {
   this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className="container col-11">
      <br/>
        <div className="instructions col-16 card bg-light mb-3 align-items-center">
          <h5 className="card-header">Creating a pod with your friends</h5>
          <div className="card-body">
            <p className="card-text text-center">
              Once you've created a pod by entering a name, <br/>
              search for and add your friends to your group. <br/>
            </p>
          </div>
        </div>
        <br/>
        <div id='user-pods' className="font-weight-normal shadow-lg p-3 mb-0 bg-clear rounded shadowBox">
          <UserPods id={this.props.userId} />
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="form-group mb-2">
              <div id='new-pod-form' className="form-group mx-sm-3 mb-2">
                <label htmlFor="name"></label>
                <input type="text" name="name" onChange={this.handleChange} className="form-control" id="name" aria-describedby="name" placeholder="Choose a name for your group of friends, ex: The besties" />
                <button className="btn btn-primary btn-lg btn-block mb-2" type='submit'>Create a New Pod</button>
              </div>
            </div>
          </form>
        </div>
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

export default connect(mapState, mapDispatch)(Pods)
