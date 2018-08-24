import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote, removeActivities} from '../store/activity'

class Activity extends Component {

  handleUpVote = (evt)=> {
    evt.preventDefault()
    this.props.change({id: this.props.activity.id, upVotes: this.props.activity.upVotes+1})
  }

  handleDownVote = (evt) => {
    evt.preventDefault()
    this.props.change({id: this.props.activity.id, downVotes: this.props.activity.downVotes+1})
  }

  handleSelect =(evt)=> {
    evt.preventDefault()
    this.props.change({id: this.props.activity.id, selected: true})
    this.props.remove(this.props.activity.id)
    window.location.reload()
  }

  render() {
    if(this.props){
      const {activity} = this.props
      return (
        <div className= "container col-11">
          <h4 className="shadowBox text-center shadow-lg p-3 mb-0 rounded">{activity.name}</h4>
          {!activity.selected && (
            <div>
              <h3>
              <div className="row align-items-center justify-content-center ">
                <button onClick ={this.handleUpVote}><span role='img' aria-label='thumbs-up'> {activity.upVotes} 👍</span></button>
                {this.props.isCoord && <button onClick = {this.handleSelect}>Select</button>}
                <button onClick = {this.handleDownVote}><span role='img' aria-label='thumbs-up'>👎{activity.downVotes}</span></button>
              </div>
              </h3>
            </div>
          )}
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
