import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote, removeActivities} from '../store/activity'

class Activity extends Component {
  handleUpVote = (evt)=> {
    this.props.change({id: this.props.activity.id, upVotes: this.props.activity.upVotes+1})
  }
  handleDownVote = (evt) => {
    this.props.change({id: this.props.activity.id, downVotes: this.props.activity.downVotes+1})
  }
  handleSelect =(evt)=> {
    this.props.change({id: this.props.activity.id, selected: true})
    this.props.remove(this.props.activity.id)

  }
  render() {
    if(this.props){
        const {activity} = this.props
        console.log('activity', activity)
        return (
          <div>
            <h3>{activity.name}</h3>
            <h4>+</h4>
            <h4>{activity.upVotes}</h4>
            <h4>-</h4>
            <h4>{activity.downVotes}</h4>
            {!activity.selected && (
              <div>
                <button onClick ={this.handleUpVote}><span role='img' aria-label='thumbs-up'>👍</span></button>
                <button onClick = {this.handleDownVote}><span role='img' aria-label='thumbs-up'>👎</span></button>
                {this.props.isCoord && <button onClick = {this.handleSelect}>Select</button>}
              </div>)
            }
          </div>
        );
      }
  }
}

function mapDispatch(dispatch){
  return {
    change: (activity)=>dispatch(updateVote(activity)),
    remove:(activityId)=> dispatch(removeActivities(activityId))
  }
}


export default connect(null, mapDispatch)(Activity);
