import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {getUserPodsThunk} from '../store'
import {Link} from 'react-router-dom'

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
                      <Link to={`/pods/${pod.id}`}>{pod.name}</Link>

                    {
                      pod.adventures.map(adventure => (
                        <div key={`adventure-${adventure.id}`}> --{adventure.name} </div>
                        )
                      )
                    }

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
    users: state.pod.users,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getAllUsersPod: (id) => dispatch(getUserPodsThunk(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Pod)
