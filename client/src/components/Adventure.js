import React, { Component } from 'react'

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
      </div>
    );
  }
}

export default Adventure;
