import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logOut} from '../store'

const Navbar = (props) => {
  const {isLoggedIn, handleLogout} = props
  return (
    <div id='navbar' className='navbar navbar-default' style={{"fontSize":"15px"}}>
      <div id='navbar-header'>
        <Link to='/'><h2 id='title' style={{"fontFamily":"Sarawabi Mincho", "fontSize":"36px"}}>indecisive</h2></Link>
      </div>
      {
        isLoggedIn ? (
          <div className='nav-items'>
            <ul id='logged-out-navbar' className='nav navbar-nav'>
              <li className="nav-link"><Link to='/profile'>Profile</Link></li>
              <li className="nav-link"><Link to='/adventures'>Adventures</Link></li>
              <li className="nav-link"><Link to='/pods'>Pods</Link></li>
              <li className="nav-link"><button id='logout-button' className="btn btn-primary btn-sm" onClick={handleLogout} style={{"fontSize":"12px"}}>Log Out</button></li>
            </ul>
          </div>
        ) : (
          <div className='nav-items'>
            <ul id='logged-in-navbar' className='nav navbar-nav'>
              <li className="nav-link"><Link to='/login'>Log In</Link></li>
              <li className="nav-link"><Link to='/signup'>Sign Up</Link></li>
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
