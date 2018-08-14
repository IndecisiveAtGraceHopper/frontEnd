import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Poll, UserHome, UserProfile, Signup, Logout, Login, Home} from './components';
 /**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
    	<Router>
    	  <Switch>
          <Route exact path="/pod/adventure/:adventureId/activty/activityId" component={Activity} />
          <Route exact path="/pod/adventure/:adventureId" component={Adventure} />
          <Route exact path="/pod/:podId" component={Pod} />
          <Route exact path="/users/poll" component={Poll} />
          <Route exact path="/users/profile" component={UserProfile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/" component={Home} />
        </Switch>
    	</Router>
    );
  }
}
 export default Routes;