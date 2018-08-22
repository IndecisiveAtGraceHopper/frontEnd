import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPodThunk} from '../store'
import axios from 'axios'
import UserPods from './User'
import {isLocalhost} from '../registerServiceWorker'
import Text from './SendText'
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
       <div className="col-16 card bg-light mb-3 align-items-center">
        <h5 className="card-header">Creating a pod with your friends</h5>
          <div className="card-body">
             <p className="card-text text-center">
              Create a pod by entering new pod name! <br/>
              Search for your friends & add them to your pod! <br/>
              Now that you have a pod, create an adventure! <br/>
            </p>
         </div>
         <div><Text/ ></div>
       </div>
      <div id='user-pods'>
      <UserPods id={this.props.userId} />
      </div>
        <br/>
        <form className="form-inline container col-10" onSubmit={this.handleSubmit}>
           <div className="form-group mb-2">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="name"></label>
            <input type="text" name="name" onChange={this.handleChange}
            className="form-control" id="name" aria-describedby="name" placeholder="ex: The besties" />
           </div>
           </div>
          <button className="btn btn-secondary btn-lg mb-2" type='submit'>Create a New Pod</button>

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

export default connect(mapState, mapDispatch)(Pods)
