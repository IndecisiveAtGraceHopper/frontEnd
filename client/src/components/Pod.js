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
	if(this.props.users){
    return (
      <div>
        <h2 className="text-center font-weight-normal">{this.props.pod.name}</h2><br/>
        <h5 className="text-center font-weight-bold">Current Pod Members</h5>
        <button class="btn btn-success pull-right center" onClick = {this.onClick}>Create An Adventure</button>

        <div className="row">
        {
         		this.props.users.map(user => (
	         	 	<div className="col-sm-6" id="user" key={user.id}>
	         	 		<h5 className= "text-center font-weight-normal">{user.fullName}</h5>
	                <div class="card-body">
                  <img src={user.image}  className="rounded mx-auto d-block" width='30px' height='30px'/>
                  </div>
                  </div>
              	)
             )}
        </div>
        <div><Search podId={podId}/></div>


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
