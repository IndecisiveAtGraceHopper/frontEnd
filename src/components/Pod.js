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
        <div className="container col-11">
          <div id='pod-header'>
            <ul id='pod-header-contents'>
              <li><h2 className="font-weight-normal">{this.props.pod.name}</h2></li>
              <li><button className="btn btn-block btn-lg btn-success" onClick={this.onClick}>Create An Adventure</button></li>
            </ul>
          </div>
          <div >
            <div>
              <h2 className="text-center">Members</h2>
              <br/>
              {
                this.props.users.map(user => (
                  <div className="col-sm-6" id="user" key={user.id}>
                    <h5 className= "text-center font-weight-normal">{user.fullName}</h5>
                    <div className="card-body">
                      <img src={user.image} alt='profile' className="rounded mx-auto d-block" width='30px' height='30px'/>
                    </div>
                  </div>
                ))
              }
              <div className="text-center">
                <Search podId={podId}/>
              </div>
            </div>
            <div>
            <br/>
              <h2 className="text-center">Adventures</h2>

              <h4 className="text-left">Upcoming</h4>
              {
                futureAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-left">{adventure.name}</h5></Link></div>)
              }
              <h4 className="text-right">Past</h4>
              {
                pastAdventures.map(adventure => <div key={adventure.id}><Link to={`/adventures/${adventure.id}`}><h5 className="text-right">{adventure.name}</h5></Link></div>)
              }
            </div>
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
