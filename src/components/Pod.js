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
          <div id='pod-header'>
            <h2 id='pod-title' className="font-weight-normal shadow p-3 mb-0 bg-clear rounded text-center">{this.props.pod.name}</h2>
          </div>
          <div id='pod-members'>
            <h2 className='text-center font-weight-normal col-20'>Members</h2>
            <div id='pod-member-cards'>
            {
              this.props.users.map(user => (
                <div className="col-sm-1" id="user" key={user.id}>
                  <h5 className= "text-center font-weight-normal">{user.firstName}<br />{user.lastName}</h5>
                  <div className="card-body">
                    <img src={user.image} alt='profile' className="rounded mx-auto d-block" width='40px' height='40px'/>
                  </div>
                </div>
              ))
            }
            </div>
            <div className="text-center">
              <Search podId={podId}/>
            </div>
          </div>          
          <div id='pod-adventures'>
            <h2 className='text-center font-weight-normal'>Adventures</h2>
            <div id='adventure-cards'>
              <div className="col-20" id='past-adventures'>
                <h4 className="text-left font-weight-normal">Past</h4>
                <div id='upcoming-cards'>
                {
                  pastAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-center">{adventure.name}</h5></Link></div>)
                }
                </div>
              </div>
              <div className= "col-20" id='upcoming-adventures'>
                <h4 className='text-left font-weight-normal'>Upcoming</h4>
                <div id='upcoming-cards'>
                  {
                    futureAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-center">{adventure.name}</h5></Link></div>)
                  }
                </div>
              </div>
            </div>
            <button className="btn btn-block btn-lg btn-success" onClick={this.onClick}>Create An Adventure</button>
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
