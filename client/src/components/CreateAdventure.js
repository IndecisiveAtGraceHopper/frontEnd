import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import {createAdventure} from '../store/user'
class CreateAdventure extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      date: ''
    }
  }

  handleChange = (evt)=> {
    this.setState({[evt.target.name]: evt.target.value})

  }

  onClick = (evt)=> {
    evt.preventDefault()
    this.props.submit({...this.state, podId: +this.props.match.params.id})

  }

  render() {
    if (this.props.user) {console.log('here', this.props.user)}
    return(
        <form onSubmit= {this.onClick}>
          <label>Name:</label>
          <input value= {this.state.name} name='name' onChange={this.handleChange}/>
          <label>Date:</label>
          <input type ='date' value = {this.state.date} name='date' onChange={this.handleChange}/>
          <button type='submit'>Start your adventure!</button>
        </form>
        )
  }
}

const mapDispatch = (dispatch, {history})=> {
  return {
    submit: (adventure)=> dispatch(createAdventure(adventure, history))
  }
}




export default connect(null, mapDispatch)(CreateAdventure);
