import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'

class Pod extends Component {


  render() {
  	const podId = this.props.match.params.id
    return (
      <div>
        {Pod}
        <div><Search podId={podId}/></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps,null)(Pod)
