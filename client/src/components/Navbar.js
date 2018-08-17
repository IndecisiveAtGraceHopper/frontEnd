import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logOut} from '../store'

const Navbar = (props) => {
  const {isLoggedIn, handleLogout} = props
  return (
    <nav id='navbar' className='navbar navbar-default'>
        <div className='navbar-header'>
          <Link to='/userhome'><h2 id='title'>indecisive</h2></Link>
        </div>
        {
          isLoggedIn ? (
            <ul id='nav-items' className='nav navbar-nav'>
              <li><Link to='/users/profile'>Your Account</Link></li>
              <li><Link to='/userhome'>Plan an Adventure!</Link></li>
              <li><Link to='/#' onClick={handleLogout}>Log Out</Link></li>
            </ul>
          ) : (
            <ul id='nav-items' className='nav navbar-nav'>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
          )
        }
    </nav>
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
