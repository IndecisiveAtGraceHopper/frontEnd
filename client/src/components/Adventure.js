import React, { Component } from 'react'
import Activity from './Activity'
import {fetchActivities} from '../store/activity'
import {connect} from 'react-redux'

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
  componentDidMount() {
    console.log('hey')
    this.props.fetch(1)
  }
  render() {
    console.log('activities', this.props.activities)
    return (
      <div>
        Adventure

        {this.props.activities.length &&<Activity activity={this.props.activities[0]} isCoord={true}/>}
      </div>
    );
  }
}

const mapState= (state)=> {
  return {
    activities: state.activity
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetch: (id) => dispatch(fetchActivities(id))
  }
}

export default connect(mapState, mapDispatch)(Adventure);
