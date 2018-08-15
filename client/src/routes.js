<<<<<<< HEAD
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Poll, UserHome, UserProfile, Signup, Logout, Login, Home, Adventure, Activity, Pod, Search} from './components';
=======
import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {Poll, UserHome, UserProfile, Signup, Logout, Login, Home, Adventure, Activity, Pod} from './components'
import { me } from './store'
import {connect} from 'react-redux'

>>>>>>> master
 /**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isProfileComplete} = this.props
    return (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/pod/adventure/:adventureId/activty/activityId" component={Activity} />
        <Route exact path="/pod/adventure/:adventureId" component={Adventure} />
        <Route exact path="/pod/:podId" component={Pod} />
        <Route exact path="/users/poll" component={Poll} />
        <Route exact path="/users/profile" component={UserProfile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/search" component={Search} />
=======
        {/*components visible to all*/}
>>>>>>> master
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />   
        <Route exact path="/signup" component={Signup} />        
        {/*components visible to logged in users*/}
        {isLoggedIn && (
          <Switch>
            <Route exact path="/users/profile" component={UserProfile} />        
            <Route exact path="/logout" component={Logout} />            
            {/*components visible to logged in users with complete profiles*/}
            {isProfileComplete && (
              <Switch>
                <Route exact path="/pod/adventure/:adventureId/activty/activityId" component={Activity} />
                <Route exact path="/pod/adventure/:adventureId" component={Adventure} />
                <Route exact path="/pod/:podId" component={Pod} />
                <Route exact path="/users/poll" component={Poll} />
                <Route exact path="/userhome" component={UserHome} />
              </Switch>
            )}
            <Route component={UserProfile} />
          </Switch>
        )}
        <Route component={Login} />
      </Switch>
    );
  }
}
<<<<<<< HEAD
 export default Routes;
=======

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isProfileComplete: !!state.user.phone && !!state.user.firstName && !!state.user.lastName
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => dispatch(me())
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
>>>>>>> master
