import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import App from './components/App.js'
import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
