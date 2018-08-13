import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'



class Signup extends React.Component {
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
    //sign up user with email and password
this.props.createUser({email: this.state.email, password: this.state.password})
  }

  render(){
console.log("SIGNUP", this.state)
  return (
    <div className="landingPage" id="authForm">
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
