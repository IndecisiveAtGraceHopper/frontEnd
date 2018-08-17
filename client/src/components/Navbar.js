import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logOut} from '../store'

const Navbar = (props) => {
  const {isLoggedIn, handleLogout} = props
  return (
    <div id='navbar' className='navbar navbar-default'>
      <div id='navbar-header'>
        <Link to='/userhome'><h2 id='title'>indecisive</h2></Link>
      </div>
      {
        isLoggedIn ? (
          <div className='nav-items'>
            <ul id='logged-out-navbar' className='nav navbar-nav'>
              <li><Link to='/users/profile'>Your Account</Link></li>
              <li><Link to='/user/adventures'>Your Adventures</Link></li>
              <li><Link to='/userhome'>Pods</Link></li>
            </ul>
            <button id='logout-button'><Link to='/#' onClick={handleLogout}>Log Out</Link></button>
          </div>
        ) : (
          <div className='nav-items'>
            <ul id='logged-in-navbar' className='nav navbar-nav'>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleLogout: () => dispatch(logOut())
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
