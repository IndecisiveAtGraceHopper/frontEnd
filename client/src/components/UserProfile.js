import React, { Component } from 'react'
import {createProfile, me} from '../store'
import {connect} from 'react-redux'

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
    const {firstName, phoneNumber} = this.state

    //create profile (call thunk to put info in db)
    //then redirect to where?
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
    createProfile: (profileInfo) => dispatch(createProfile(profileInfo)),
    getUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
