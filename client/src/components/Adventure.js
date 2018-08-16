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
      userId: '',
      showMap: false,
      locations: []
    }
  }

  async componentDidMount() {
    await this.props.fetch(1)
    const activities = this.props.activities
    const locations = activities.map(activity => {return activity.address})
    this.setState({locations})
  }

  render() {
    return (
      <div>
        <h3>Adventure</h3>
        <div>
          { this.props.activities.length && this.props.activities.map((activity) => 
            <Activity activity={activity} isCoord={true} key={activity.id}/>)
          }
        </div>
        <div id='adventure-map-container'>
          { this.state.locations.length &&
            <Map interactive={false} coords={this.state.locations} />
          }
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
