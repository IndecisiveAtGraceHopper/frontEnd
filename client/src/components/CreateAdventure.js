import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class CreateAdventure extends Component {
  constructor(){
    this.state = {
      name: '',
      date: ''
    }
  }

  onClick = (evt)=> {


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

const map



export default connect(null, null)(CreateAdventure);
