import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {getUsersInPodThunk} from '../store'

class Pod extends Component {

	componentDidMount () {
	    this.props.getAllUsersInPodThunk(this.props.match.params.id)
	}
  onClick = (evt)=>{
    evt.preventDefault()
    window.location = `/pods/${this.props.match.params.id}/createAdventure`
  }
  render() {
    const podId = this.props.match.params.id
    console.log("PODDDDD", this.props.pod)

	if(this.props.users){
    return (
      <div>
        <h2>{this.props.pod.name}</h2>
        <h5>Current Pod Members</h5>
        <div>
        {
         		this.props.users.map(user => (
	         	 	<div id="user" key={user.id}>
	         	 		<h5>{user.fullName}</h5>
	                </div>
              	)
             )}
          <h2>Search for friends</h2>
          <h5></h5>
        <div><Search podId={podId}/></div>
        <button onClick = {this.onClick}>Create An Adventure</button>
        </div>
      </div>
    );
  }

  return <h1>here why!</h1>
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
