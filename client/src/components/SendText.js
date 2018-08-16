import React from 'react'
import axios from 'axios'

class SendText extends React.Component {
  constructor(){
    super()
    this.state={
      phone: ''
    }
  }

  handleSubmit = async(evt) => {
    evt.preventDefault()
    await axios.post(`/api/users/${this.props.match.params.id}/text`, ({phone: this.state.phone}))
  }

  handleChange = (evt) => {
   this.setState({
      [evt.target.name]: evt.target.value
    })
  }

render(){
  console.log("SEND TEXT", this.props)
  return (
    <div>
      <h4>Send this site to a friend</h4>
      <form onSubmit={this.handleSubmit}>
         <div className="form-group form-check">
            <label htmlFor="name" />
            <input type="text" name="phone"  onChange={this.handleChange}
            className="form-control" placeholder="Enter text number" />
            <small id="name" className="form-text text-muted" />
        </div>
          <span>
           <button type='submit'>Send Text</button>
          </span>
      </form>
    </div>
  )
}

}

export default SendText
