import React, { Component } from 'react'
import Search from './Search'

class Pod extends Component {


  render() {
  	const podId = this.props.match.params.id
    return (
      <div>
        Pod
        <div><Search podId= {podId}/></div>
      </div>
    );
  }
}

export default Pod;
