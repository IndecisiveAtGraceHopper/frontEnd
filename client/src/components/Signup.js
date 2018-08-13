import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

/**
 * COMPONENT
 */


class Signup extends React.Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    //sign up user with email and password

  }

  render(){

  return (
    <div className="landingPage" id="authForm">
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">
            <div><h3>Email</h3></div>
          </label>
          <div><input name="email" type="text" /></div>
        </div>
        <div>
          <label htmlFor="password">
            <div><h3>Password</h3></div>
          </label>
          <div><input name="password" type="password" /></div>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>

      </form>

    </div>
  )
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(auth(userData))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
