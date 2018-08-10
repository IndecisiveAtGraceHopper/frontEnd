import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import Poll from './components/Poll';
 /**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
    	<Router>
    	  <Switch>
          <Route exact path="/users/poll" component={Poll} />
          <Route path="/" component={App} />
        </Switch>
    	</Router>
    );
  }
}
 export default Routes;
