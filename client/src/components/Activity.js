import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote} from '../store/activity'

class Activity extends Component {
  handleUpVote = (evt)=> {
    this.props.change({id: this.props.activity.id, upVotes: this.props.activity.upVotes+1})
  }
  handleDownVote = (evt) => {
    this.props.change({id: this.props.activity.id, downVotes: this.props.activity.downVotes+1})
  }
  render() {
    console.log('activity', this.props.activity)
    if(this.props){
        const {activity} = this.props
        return (
          <div>
            <h3>{activity.name}</h3>
            <h4>+</h4>
            <h4>{activity.upVotes}</h4>
            <h4>-</h4>
            <h4>{activity.downVotes}</h4>
            <button onClick ={this.handleUpVote}>👍</button>
            <button onClick = {this.handleDownVote}>👎</button>
          </div>
        );
      }
  }
}

function mapDispatch(dispatch){
  return {
    change: (activity)=>dispatch(updateVote(activity))
  }
}

export default connect(null, mapDispatch)(Activity);
