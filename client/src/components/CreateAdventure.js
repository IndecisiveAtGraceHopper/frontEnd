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
        <div>
        <form onSubmit= {this.onClick} className="input-group mb-2 mr-sm-2">
          <label>Name:</label>
          <input className="form-control mb-2 mr-sm-2" value= {this.state.name} name='name' onChange={this.handleChange}/>
          <label>Date:</label>
          <input className="form-control mb-2 mr-sm-2" type ='date' value = {this.state.date} name='date' onChange={this.handleChange}/>
          <br/>
        </form>
        <button type='submit' className="btn btn-secondary btn-lg btn-block">Start your adventure!</button>
       </div>
    )
  }
}

const mapDispatch = (dispatch, {history})=> {
  return {
    submit: (adventure)=> dispatch(createAdventure(adventure, history))
  }
}




export default connect(null, mapDispatch)(CreateAdventure);
