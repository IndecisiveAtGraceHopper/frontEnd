import React, { Component } from 'react'
import {createProfile, me} from '../store'
import {connect} from 'react-redux'

class UserProfile extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        image: ''
      },
      currentImage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount(){
    if (this.props.user.firstName) {
      await this.setState({user: {...this.state.user, firstName: this.props.user.firstName}})
    }
    if (this.props.user.lastName) {
      await this.setState({user: {...this.state.user, lastName: this.props.user.lastName}})
    }
    if (this.props.user.phone) {
      await this.setState({user: {...this.state.user, phone: this.props.user.phone}})
    }
    if (this.props.user.email) {
      await this.setState({user: {...this.state.user, email: this.props.user.email}})
    }
    if (this.props.user.address) {
      await this.setState({user: {...this.state.user, address: this.props.user.address}})
    }
    if (this.props.user.image) {
      await this.setState({user: {...this.state.user, image: this.props.user.image}})
    }
    await this.setState({currentImage: this.state.user.image})
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({user: {...this.state.user, [evt.target.name]: evt.target.value}})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    if (this.state.user.image.length > 3) {
      this.setState({currentImage: this.state.user.image})
    }
    if (this.state.user.firstName && this.state.user.lastName && this.state.user.phone && this.state.user.email && this.state.user.address && this.state.user.image) {
      this.props.updateProfile({firstName: this.state.user.firstName, lastName: this.state.user.lastName, phone: this.state.user.phone, email: this.state.user.email, address: this.state.user.address, image: this.state.user.image}, this.props.user.id)
    }
  }

  render() {
    return (
      <div id='user-profile'>
        <h3>Welcome, {this.state.user.email}</h3>
        <form id='userProfile' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='string' onChange={this.handleChange} value={this.state.user.firstName} defaultValue={this.state.user.firstName} />
            {!this.state.user.firstName ? <p>First name cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input name='lastName' type='string' onChange={this.handleChange} value={this.state.user.lastName} defaultValue={this.state.user.lastName} />
            {!this.state.user.lastName ? <p>Last name cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='phone'>Phone Number</label>
            <input name='phone' type='string' onChange={this.handleChange} value={this.state.user.phone} defaultValue={this.state.user.phone} />
            {!this.state.user.phone ? <p>Phone number cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input name='address' type='string' onChange={this.handleChange} value={this.state.user.address} defaultValue={this.state.user.address} />
            {!this.state.user.address ? <p>Address cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='image'>Profile Photo URL</label>
            <input name='image' type='string' onChange={this.handleChange} value={this.state.user.image} defaultValue={this.state.user.image} />
            {!this.state.user.image ? <p>Photo URL cannot be null</p> : null}
          </div>
          <div>
            <img src={this.state.currentImage} width='200px' height='200px' />
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
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileInfo, userId) => dispatch(createProfile(profileInfo, userId)),
    getUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
