import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './css/index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
