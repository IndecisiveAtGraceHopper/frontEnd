import React from 'react'
import {connect} from 'react-redux'
import {authLogin} from '../store'
import GoogleLogin from './GoogleLogin'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
       [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    //log in user with email and password
    this.props.logInUser({email: this.state.email, password: this.state.password})
  }

  render() {
    return (
      <div className="authForm" id="loginPage">
        <GoogleLogin className='authElement' />
        <form onSubmit={this.handleSubmit} className='authElement'>
          <div>
            <label htmlFor="email">
              <div><h3>Email</h3></div>
            </label>
            <div><input name="email" type="text" onChange={this.handleChange} /></div>
          </div>
          <div>
            <label htmlFor="password">
              <div><h3>Password</h3></div>
            </label>
            <div><input name="password" type="password" onChange={this.handleChange} /></div>
          </div>
          <div className='authElement'>
            <button type="submit">Log In</button>
          </div>
          <div className='authElement'>
            <button><Link to='/signup'>Sign Up</Link></button>
          </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (userData) => dispatch(authLogin(userData))
  }
}

export default connect(null, mapDispatchToProps)(Login)
