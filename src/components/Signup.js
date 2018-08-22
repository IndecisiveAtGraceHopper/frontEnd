import React from 'react'
import {connect} from 'react-redux'
import {authSignUp} from '../store'
import GoogleLogin from './GoogleLogin'

class Signup extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (evt) => {
    this.setState({
       [evt.target.name]: evt.target.value
     })
   }

  handleSubmit = (evt) => {
    evt.preventDefault()
    //sign up user with email and password
    console.log('handle submit thunk')
    this.props.createUser({email: this.state.email, password: this.state.password})
  }

  render() {
    return (
      <div className="authForm container col-11" id="signupPage">
        {/*<GoogleLogin className='authElement' />*/}
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit} className='authElement'>
          <div>
            <label htmlFor="email">
              <div><h3>Email</h3></div>
            </label>
            <div><input className="form-control" name="email" type="text" onChange={this.handleChange} /></div>
          </div>
          <div>
          <br/>
            <label htmlFor="password">
              <div><h3>Password</h3></div>
            </label>
            <div><input className="form-control" name="password" type="password" onChange={this.handleChange} /></div>
          </div>
          <div className='authElement'>
          </div>
        </form>
        <div className='authElement'>
          <button className='btn btn-primary btn-lg btn-block' type="submit" onClick={this.handleSubmit}>Sign Up</button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(authSignUp(userData))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
