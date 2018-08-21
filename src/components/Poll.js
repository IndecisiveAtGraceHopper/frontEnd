import {connect} from 'react-redux'
import React, { Component } from 'react'
import {submitPollThunk} from '../store/poll'
import axios from 'axios'
import {Map} from './index'
import {updateAdventure} from '../store/user'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://obscure-lowlands-38066.herokuapp.com'

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
    await this.setState({[evt.target.name]: evt.target.value})
  }

  async getGeocode (address) {
    const location = await axios.post(`${path}/api/geoLoc/geocode`, address)
    return location.data
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    const {priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel} = this.state
    const {latitude, longitude} = await this.getGeocode(this.state.location)
    this.props.submitPollThunk({latitude,longitude, priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel, adventureId: +this.props.adventureId, userId:this.props.userId})
    this.props.updateThisAdventure(this.props.adventureId)
  }
  // can only test on https
  // onClick =(evt)=> {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((coords)=> console.log('coords', coords))
  //   } else alert('Geolocation not supported')
  // }

  render() {
    return (
      <div className="container" id='poll-page'>
        <h2 className='poll-header'>Enter Your Preferences:</h2>
        <form onSubmit={this.handleSubmit}>
          <div id="map-and-poll" className="form-group form-check">
            <div>
              <label htmlFor="location" />
              <input type="text" name="location" onChange={this.handleChange} className="form-control" id="nameInput" aria-describedby="name" value={this.state.location} />
              <small id="location" className="form-text text-muted" />
              {/*<button onClick={this.onClick}>Find Me</button>*/}
              <div id='map-outer'>
                <div id='map-container'>
                  {this.state.location !=== 'enter a location' &&<Map interactive='true' coords={this.state.location} />}
                </div>
              </div>
            </div>

            <div className='form-input'>
              <label htmlFor="priceRange"/>
              <h5 className= 'text-center'> How much money 💸 would you like to spend?</h5>
              <p className="text-right" >🤑💵</p>
              <input type="range" name="priceRange" onChange={this.handleChange} min="0" max="4" defaultValue="2" className="form-control-range" id="formControlRange" />
              <small id="priceRange" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label  htmlFor="activityLevel"/>
              <h5 className="text-center"> How active 🚣‍🚴🏿 would you like to be? </h5>
              <h5 className="text-left">🏃🏼‍</h5>
              <h5 className="text-right">🏃🏼🏋️‍💃🏿</h5>
              <input type="range" name="activityLevel" onChange={this.handleChange} min="0" max="4" defaultValue="2" className="form-control-range" id="formControlRange" />
              <small id="activityLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="artsyLevel" />
              <h5 className= 'text-center'> How artsy would you like to be? 🎨</h5>
              <p className="text-right">🖼🎭👩🏽‍🎨</p>
              <p className="text-left">👩🏽‍🎨</p>
              <input type="range" name="artsyLevel" onChange={this.handleChange} min="0" max="4" defaultValue="2" className="form-control-range" id="formControlRange" />
              <small id="artsyLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="hungerLevel"/>
              <h5 className= 'text-center'> How hungry 🍝will you be? </h5>
              <p className="text-right">🌮🍗🍱🍔</p>
              <p className="text-left">🍪</p>
              <input type="range" name="hungerLevel" onChange={this.handleChange} min="0" max="4" defaultValue="2" className="form-control-range" id="formControlRange" />
              <small id="hungerLevel" className="form-text text-muted" />
            </div>
            <div className='form-input'>
              <label htmlFor="drinkLevel" />
              <h5 className= 'text-center'> 🍾 How much would you like drink? </h5>
              <p className="text-right">🍻🍹🍸🍷🥂🍸🥂🥤</p>
              <p className="text-left">🍹</p>
              <input type="range" name="drinkLevel" onChange={this.handleChange} min="0" max="4" defaultValue="2" className="form-control-range" id="formControlRange" />
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
    updateThisAdventure: id => dispatch(updateAdventure(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
