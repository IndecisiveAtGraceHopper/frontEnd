import React from 'react'
import axios from 'axios'
import {me} from '../store'
import {connect} from 'react-redux'
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
componentDidMount(){
  this.props.getUser()
}
  handleSubmit = async(evt) => {
    evt.preventDefault()
    await axios.post(`${path}/api/users/${this.props.user.id}/text`, ({phone: this.state.phone}))
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
      <div className="shadowBox shadow p-3 mb-0">
      <h5 className="text-center"> Can't find your friends? Text them an invite! </h5>
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
    </div>

  )
}

}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendText)
