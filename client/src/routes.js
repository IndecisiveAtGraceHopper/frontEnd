
import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {App, Poll, GoogleLogin, UserHome, UserProfile, Signup, Logout, Login} from './components';
 /**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
    	<Router>
    	  <Switch>
          <Route exact path="/users/poll" component={Poll} />
          <Route exact path="/users/profile" component={UserProfile} />
          <Route exact path="/googlelogin" component={GoogleLogin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/" component={App} />
        </Switch>
    	</Router>
    );
  }
}
 export default Routes;