import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {getUserPodsThunk} from '../store'

class Pod extends Component {
  constructor() {
    super()
    this.state = {
      pods: null,
      users:null
    }
  }

	componentDidMount () {
	    this.props.getAllUsersPod(this.props.id)
	}

  render() {
      if(this.props.pods){
        return (
          <div>
            <h2>Current Pods</h2>
             <div>
              {
                this.props.pods.map(pod => (
                  <div id="pod" key={pod.id}>
                    <h5>{pod.name}</h5>
                      </div>
                )
              )}
              </div>
          </div>
        );
      }
      return <h1>here!</h1>
      }
    }

const mapStateToProps = state => {
  return {
    pods: state.pod.pods,
    users: state.pod.users
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getAllUsersPod: (id) => dispatch(getUserPodsThunk(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Pod)
