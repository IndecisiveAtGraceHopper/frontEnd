import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {getUsersInPodThunk} from '../store'
import {Link} from 'react-router-dom'

class Pod extends Component {

  constructor() {
    super()
    this.state = {
      adventures: []
    }
  }

	async componentDidMount () {
      await this.props.getAllUsersInPodThunk(this.props.match.params.id)
      let adventures = []
      this.props.users.forEach(async (user) => {
        adventures = adventures.concat(user.adventures.filter(adventure => {
          return (adventure.podId === this.props.pod.id)
        }))
      })
      await this.setState({adventures})
  }

  onClick = (evt) => {
    evt.preventDefault()
    window.location = `/pods/${this.props.match.params.id}/createAdventure`
  }

  render() {
    const allAdventures = this.state.adventures
    let futureAdventures = allAdventures.filter(adventure => {
        const date = new Date(adventure.date)
        return Date.parse(date) >= Date.now()
    })
    let pastAdventures = allAdventures.filter(adventure => {
        const date = new Date(adventure.date)
        return Date.parse(date) < Date.now()
    })
    const podId = this.props.match.params.id
	  if(this.props.users) {
      return (
        <div className="container col-11" id='single-pod-page'>
          <br/>
          <h2 id='pod-title' className="font-weight-normal shadow-lg p-3 mb-0 bg-clear rounded text-center shadowBox">{this.props.pod.name}</h2>
          <br/>
          <div id='pod-members' className="font-weight-normal shadow p-3 mb-0 rounded text-center shadowBox">
            <h2 className='text-center font-weight-normal'>members</h2>
            <br/>
            <div id='pod-member-cards' className='container testimonial-group'>
            {
              this.props.users.map(user => (
                <div className="col-sm-1" id="user" key={user.id}>
                  <h5 className= "text-center font-weight-normal">{user.firstName}<br />{user.lastName}</h5>
                  <div className="card-body">
                    <img src={user.image} alt='profile' className="rounded mx-auto d-block" width='35px' height='35px'/>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="text-center">
              <br/>
              <Search podId={podId}/>
            </div>
          </div>
          <br/>
          <div className="font-weight-normal shadow p-3 mb-0 rounded text-center shadowBox">
            <br/>
            <h2 className='text-center font-weight-normal'>adventures</h2>
            <div id='adventure-cards'>
              <div className="col-20" id='past-adventures'>
                <br/>
                <h3 className="text-left font-weight-normal">past</h3>
                <div id='upcoming-cards'>
                  {
                    pastAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-center">{adventure.name}</h5></Link></div>)
                  }
                </div>
              </div>
              <div id='upcoming-adventures'>
                <br/>
                <h3 className='text-center font-weight-normal'>upcoming</h3>
                <div id='upcoming-cards'>
                  {
                    futureAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-center">{adventure.name}</h5></Link></div>)
                  }
                </div>
              </div>
            </div>
            <button className="btn btn-block btn-lg btn-primary" onClick={this.onClick}>Create An Adventure</button>
            <br/>
          </div>
        </div>
      )
    }
    return <h1>loading</h1>
  }
}

const mapStateToProps = state => {
  return {
    pod: state.pod,
    users: state.pod.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUsersInPodThunk: (id) => dispatch(getUsersInPodThunk(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pod)
