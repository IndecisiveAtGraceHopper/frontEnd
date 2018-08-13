import {connect} from 'react-redux'
import React, { Component } from 'react';
import {submitPollThunk} from '../store/poll'

class Poll extends Component {
  constructor(){
     super()
     this.state = { poll: [] }
  }


  handleChange = (evt) => {
   const value = evt.target.name === 'location' ? JSON.parse(evt.target.value) : evt.target.value;
   this.setState({
      [evt.target.name]: value
    })
  }

  handleSubmit = (evt) => {
    console.log("WHAT IS GOING ON HS")
    evt.preventDefault()
    const {location, priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel} = this.state

    this.props.submitPollThunk({location, priceRange, activityLevel, artsyLevel, hungerLevel, drinkLevel})
  }

  render() {
    return (
      <div className="container">
        <h1>This is the Poll</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-check">
            <div>
              <label htmlFor="name" />
              <input type="text" name="location"  onChange={this.handleChange}
              className="form-control" id="nameInput" aria-describedby="name" placeholder="Enter location" />
              <small id="location" className="form-text text-muted" />
            </div>
            <div>
              <label htmlFor="priceRange">cost</label>
              <input  onChange={this.state.handleChange} type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="activityLevel">interactivity</label>
              <input  onChange={this.state.handleChange} type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="artsyLevel">artsy</label>
              <input  onChange={this.state.handleChange} type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="hungerLevel">food</label>
              <input  onChange={this.state.handleChange} type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="drinkLevel">drinks</label>
              <input  onChange={this.state.handleChange} type="range" className="form-control-range" id="formControlRange"/>
          </div>
           <span>
              <button type='submit'>Submit</button>
           </span>
         </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPollThunk: poll => dispatch(submitPollThunk(poll))
  }
}

export default connect(null, mapDispatchToProps)(Poll)

