import React, { Component } from 'react'
import Activity from './Activity'
import {fetchActivities} from '../store/activity'
import {connect} from 'react-redux'
import {Map} from './index'

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
    const activities = this.props.activities
    const locations = activities.map(activity => {return activity.address})
    return (
      <div>
        <h3>Adventure</h3>
        <div>{
          this.props.activities.length && this.props.activities.map( (activity) => 
            <Activity activity={activity} isCoord={true} key={activity.id}/>
          )
        }</div>
        <div id='map-container'>
          <Map interactive={false} coords={locations} />
        </div>
      </div>
    )
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
