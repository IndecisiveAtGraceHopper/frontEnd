import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logout from '../store'

const Navbar = (props) => {
  const {isLoggedIn, handleClick} = props
  return (
    <nav id='navbar' className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <h2 id='title'>indecisive</h2>
        </div>
        {
          isLoggedIn ? (
            <ul id='nav-items' className='nav navbar-nav'>
              <li><Link to='/userhome'>Your Account</Link></li>
              <li><Link to='/t'>Plan an Adventure!</Link></li>
              <li><a href='#' onClick={handleClick}>Log Out</a></li>
            </ul>
          ) : (
            <ul id='nav-items' className='nav navbar-nav'>
              <li><Link to='/googlelogin'>Log In</Link></li>
            </ul>
          )
        }
      </div>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.loggedInUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
