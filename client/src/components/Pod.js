import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {getUsersInPodThunk} from '../store'

class Pod extends Component {

	componentDidMount () {
	    this.props.getAllUsersInPodThunk(this.props.match.params.id)
	}

  render() {
  	const podId = this.props.match.params.id

	if(this.props.users){
    return (
      <div>
        <h2>Current Pod Members</h2>
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
        <button onClick = {this.props.history.push('/pods/:id/createAdventure'}>Create An Adventure</button>
        </div>
      </div>
    );
  }

  return <h1>here!</h1>
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
