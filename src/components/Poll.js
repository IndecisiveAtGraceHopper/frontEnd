import {connect} from 'react-redux'
import React, { Component } from 'react'
import {submitPollThunk} from '../store/poll'
import axios from 'axios'
import {Map} from './index'
import {isLocalhost} from '../registerServiceWorker'
import {getUserAdventuresThunk} from '../store/user'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true

class Poll extends Component {
  constructor() {
     super()
     this.state = {
      priceRange: 2,
      activityLevel: 2,
      artsyLevel: 2,
      hungerLevel: 2,
      drinkLevel: 2,
      location: 'enter a location'
    }
    this.handleChange = this.handleChange.bind(this)
    this.getGeocode = this.getGeocode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.setState({location: this.props.address})
  }

  async componentWillReceiveProps(newProps) {
    await this.setState({location: newProps.location})
  }

  async handleChange (evt) {
    await this.setState({[evt.target.name]: evt.target.value/25})
  }

  async getGeocode (address) {
    const location = await axios.post(`${path}/api/geoLoc/geocode`, {address})
    return location.data
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    const {priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel} = this.state
    const {latitude, longitude} = await this.getGeocode(this.state.location)
    await this.props.submitPollThunk({latitude,longitude, priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel, adventureId: +this.props.adventureId, userId:this.props.userId})
    await this.props.getAdventures(this.props.userId)
  }
  // can only test on https
  // onClick =(evt)=> {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((coords)=> console.log('coords', coords))
  //   } else alert('Geolocation not supported')
  // }

  render() {
    return (
      <div className="container col-11">
      <br/>
      <br/>
        <h2 className='poll-header text-center'>Select your preferences!</h2>
        <form onSubmit={this.handleSubmit}>
          <div id="map-and-poll" className="form-group form-check">
            <div>
              <label htmlFor="location" />
              <input type="text" name="location" onChange={this.handleChange} className="form-control" id="nameInput" aria-describedby="name" value={this.state.location} />
              <small id="location" className="form-text text-muted" />
              {/*<button onClick={this.onClick}>Find Me</button>*/}
              <br/>
              <div id='map-outer'>
                <div id='map-container'>
                  {this.state.location !== 'enter a location' &&<Map interactive='true' coords={this.state.location} />}
                </div>
              </div>
            </div>
            <div className='form-input'>
              <label htmlFor="priceRange"/>
              <h5 className= 'text-center'> <span> 💸 </span> How much <span> 🤑💵 </span> would you like to spend?</h5>
              <br/>
              <input type="range" name="priceRange" onChange={this.handleChange} min="0" max="100" defaultValue="50" className="slider form-control-range" id="formControlRange myRange" />
              <small id="priceRange" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label  htmlFor="activityLevel"/>
              <h5 className="text-center"> How active <span> 🏃🏼‍🚣‍🚴🏿🏋️‍💃🏿 </span>would you like to be? </h5>
              <br/>
              <input type="range" name="activityLevel" onChange={this.handleChange} min="0" max="100" defaultValue="50" className="slider form-control-range" id="formControlRange myRange" />
              <small id="activityLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="artsyLevel" />
              <h5 className= 'text-center'> How artsy would you like to be? <span> 🖼🎭👩🏽‍🎨🎨</span></h5>
              <br/>
              <input type="range" name="artsyLevel" onChange={this.handleChange} min="0" max="100" defaultValue="50" className="slider form-control-range" id="formControlRange myRange" />
              <small id="artsyLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="hungerLevel"/>
              <h5 className= 'text-center'> <span>🍔🍝</span>How hungry <span>🌮🍗</span> will you be? </h5>
              <br/>
              <input type="range" name="hungerLevel" onChange={this.handleChange} min="0" max="100" defaultValue="50" className="slider form-control-range" id="formControlRange myRange" />
              <small id="hungerLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="drinkLevel" />
              <h5 className= 'text-center'> <span>🍾🍻🍹</span> How much would you like drink? <span>🍷🥂🍸</span> </h5>
              <br/>
              <input type="range" name="drinkLevel" onChange={this.handleChange} min="0" max="100" defaultValue="50" className="slider form-control-range" id="formControlRange myRange" />
              <small id="drinkLevel" className="form-text text-muted" />
          </div>
           <span>
              <button type='submit' className="btn btn-primary btn-block">Submit</button>
           </span>
         </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    address: state.user.address,
    location: state.poll.location,
    userId: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPollThunk: poll => dispatch(submitPollThunk(poll)),
    getAdventures: (id)=> dispatch(getUserAdventuresThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
