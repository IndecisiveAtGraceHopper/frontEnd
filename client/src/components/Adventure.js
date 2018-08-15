import React, { Component } from 'react'
import Activity from './Activity'

const dummy = {
  name: 'lets see',
  upVotes:8,
  downVotes:2
}

class Adventure extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      time: '',
      podId: '',
      pollId: '',
      name: '',
      notes: [],
      userId: ''
    }
  }
  render() {
    return (
      <div>
        Adventure
        <Activity activity={dummy} />
      </div>
    );
  }
}

export default Adventure;
