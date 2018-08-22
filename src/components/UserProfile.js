import React, { Component } from 'react'
import {createProfile, me, getAvatars} from '../store'
import {connect} from 'react-redux'
import axios from 'axios'

class UserProfile extends Component {
  constructor(props){
    super(props)
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
    this.handleClick  = this.handleClick.bind(this)
  }

  async componentDidMount(){
    this.props.getAvatars()
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
  handleClick(evt) {
    this.setState({user: {...this.state.user, image: evt}})
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

if (this.props.avatars[0]){

    return (
      <div className="container col-11">
      <br/>
       <div className="col-16 card bg-light mb-3 align-items-center">
        <h5 className="card-header ">Setting up your profile</h5>
          <div className="card-body">
             <p className="card-text">
              <br/>
              Set up your profile so your friends can find you! <br/>
              We will use your address to find activities near you<br/>
              Invite your friends and start planning together! <br/>
               </p>
         </div>
      </div>
      <div id='user-profile'>
        <h4 className="font-weight-normal text-center">Welcome {this.state.user.firstName}!</h4>
        <br></br>
        <form id='userProfile' onSubmit={this.handleSubmit}  className="form-group">
          <div className="form-group">
            <img src={this.state.currentImage} alt='userprofile' className="rounded mx-auto d-block" width='100px' height='100px' />
          </div>
          <div>
            <label htmlFor='email'>Email</label><br/>
            <input className="form-control mx-sm-3" name='email' type='string' onChange={this.handleChange} value={this.state.user.email} />
            {!this.state.user.email ? <p>Email cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='firstName'>First Name</label><br/>
            <input className="form-control mx-sm-3" name='firstName' type='string' onChange={this.handleChange} value={this.state.user.firstName} />
            {!this.state.user.firstName ? <p>You must enter your first name </p> : null}
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label><br/>
            <input className="form-control mx-sm-3" name='lastName' type='string' onChange={this.handleChange} value={this.state.user.lastName} />
            {!this.state.user.lastName ? <p>You must enter your last name</p> : null}
          </div>
          <div>
            <label htmlFor='phone'>Phone Number</label><br/>
            <input className="form-control mx-sm-3" name='phone' type='string' onChange={this.handleChange} value={this.state.user.phone} />
            {!this.state.user.phone ? <p>Phone number cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='address'>Address</label><br/>
            <input className="form-control mx-sm-3" name='address' type='string' onChange={this.handleChange} value={this.state.user.address} />
            {!this.state.user.address ? <p>Address cannot be null</p> : null}
          </div>
          <div>
            <label htmlFor='image'>Choose an Avatar</label>
          </div>

          {
            this.props.avatars.map(avatar => {
              let boundHandleClick=this.handleClick.bind(this, avatar.image)
            return <div key={avatar.id} value={avatar.image} onClick={boundHandleClick}>
            <img src={avatar.image} /></div>}


  )
}

          <div>
            <button type='submit button' className="btn btn-dark btn-lg btn-block">Submit</button>
          </div>
        </form>

      </div>
      </div>
    )
  }else{
    return<h2>loading</h2>
  }
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    avatars: state.avatar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileInfo, userId) => dispatch(createProfile(profileInfo, userId)),
    getUser: () => dispatch(me()),
    getAvatars: () => dispatch(getAvatars())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
