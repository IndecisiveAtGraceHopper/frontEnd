import React, { Component } from 'react'
import {createProfile, me} from '../store'
import {connect} from 'react-redux'
import history from '../history'

class UserProfile extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        firstName: '',
        phoneNumber: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount(){
    await this.props.getUser()
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({user: {...this.state.user, [evt.target.name]: evt.target.value}})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    //grab user id from url
    this.props.updateProfile({firstName: this.state.firstName, phone: this.state.phoneNumber, userId: this.props.user.id})
    console.log("UPDATING PROFILE -  handle submit")
    history.push('/userhome')
  }

  render() {
    return (
      <div>
        <h3>Welcome, {this.props.user.email}</h3>
        <form id='userProfile' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='string' onChange={this.handleChange} value={this.state.user.firstName} />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input name='phoneNumber' type='string' onChange={this.handleChange} value={this.state.user.phoneNumber} />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileInfo) => dispatch(createProfile(profileInfo)),
    getUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
