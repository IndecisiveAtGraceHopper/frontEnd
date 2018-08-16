import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import {createAdventure} from '../store/adventure'
class CreateAdventure extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      date: ''
    }
  }

  onClick = (evt)=> {
    evt.preventDefault()
    this.props.submit(this.state)

  }

  render() {
    return(
        <form onSubmit= {this.onClick}>
          <label>Name:</label>
          <input value= {this.state.name} />
          <label>Date:</label>
          <input type ='date' value = {this.state.date}/>
          <button type='submit'>Start your adventure!</button>
        </form>
        )
  }
}

const mapDispatch = (dispatch)=> {
  return {
    submit: (adventure)=> dispatch(createAdventure(adventure))
  }
}



export default connect(null, null)(CreateAdventure);
