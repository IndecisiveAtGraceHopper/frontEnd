import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store';

class Logout extends Component {
  handleLogout = (evt) => {
    evt.preventDefault()
    this.props.logout()
    //window.location.reload()
  }
  render() {
    return (
      <div className="landingPage container col-11" id="logout">
        <button type="button" onClick={this.handleLogout}>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
