import React, { Component } from 'react'

class Activity extends Component {

  render() {
    if(this.props){
        const {activity} = this.props
        return (
          <div>
            <h3>{activity.name}</h3>
            <h4>+</h4>
            <h4>{activity.upVotes}</h4>
            <h4>-</h4>
            <h4>{activity.downVotes}</h4>
            <button>👍</button>
            <button>👎</button>
          </div>
        );
      }
  }
}

export default Activity;
