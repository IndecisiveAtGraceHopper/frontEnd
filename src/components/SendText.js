import React from 'react'
import axios from 'axios'
import {isLocalhost} from '../registerServiceWorker'
const path = isLocalhost ? 'http://localhost:3001' : 'https://pacific-bayou-90411.herokuapp.com'
axios.defaults.withCredentials = true

class SendText extends React.Component {
  constructor(){
    super()
    this.state={
      phone: ''
    }
  }

  handleSubmit = async(evt) => {
    evt.preventDefault()
    await axios.post(`${path}/api/users/${this.props.match.params.id}/text`, ({phone: this.state.phone}))
  }

  handleChange = (evt) => {
   this.setState({
      [evt.target.name]: evt.target.value
    })
  }

render(){
  return (
    <div>
    <br/>
      <h5 className="text-center">Invite your friends to join indecisive! </h5>
      <form onSubmit={this.handleSubmit}>
         <div className="form-group form-check">
            <label htmlFor="name" />
            <input type="text" name="phone"  onChange={this.handleChange}
            className="form-control" placeholder="Enter text number" />
            <small id="name" className="form-text text-muted" />
        </div>
          <span>
             <button className= "btn btn-primary btn-block " type='submit'>Send Text</button>
          </span>
          <br/>
      </form>
    </div>
  )
}

}

export default SendText
