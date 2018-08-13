import React, { Component } from 'react'
import {createProfile, me} from '../store'
import {connect} from 'react-redux'

class UserProfile extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      phoneNumber: ''
    }
  }
  componentDidMount(){
    this.props.getUser()
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {firstName, phoneNumber} = this.state

    //create profile (call thunk to put info in db)
    //then redirect to where?
  }

  render() {
    console.log("USERPROFILE", this.props)
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" />
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="Enter Your First Name"
            />

            <label htmlFor="phoneNumber" />
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.phoneNumber}
              placeholder="Enter Your Phone Number"
            />


            <button
            disabled={
              !this.state.firstName ||
              !this.state.phoneNumber

            }
              className="btn btn-secondary col md-4 center-blocks"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
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
