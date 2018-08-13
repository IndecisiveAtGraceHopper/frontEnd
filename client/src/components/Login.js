import React from 'react'
import {connect} from 'react-redux'
import {authLogin} from '../store'
import { Redirect } from 'react-router-dom'




class Login extends React.Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
    this.setRedirect = this.setRedirect.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }
  handleChange = (evt) => {
    this.setState({
       [evt.target.name]: evt.target.value
     })
   }


 setRedirect() {
   this.setState({
     redirect: true
   })
 }
 renderRedirect() {
   if (this.state.redirect) {
     return <Redirect to='/userhome' />
   }
 }

  handleSubmit = (evt) => {
    evt.preventDefault()
    //sign up user with email and password
this.props.logInUser({email: this.state.email, password: this.state.password})
this.setRedirect()
  }

  render(){
console.log("SIGNUP", this.props)
  return (
    <div className="landingPage" id="authForm">
    {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
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
        <div>
          <button type="submit">Log In</button>
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
