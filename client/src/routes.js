import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {App, Poll, Login, UserHome} from './components';
 /**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
    	<Router>
    	  <Switch>
          <Route exact path="/users/poll" component={Poll} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/" component={App} />
        </Switch>
    	</Router>
    );
  }
}
 export default Routes;
