import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// commented because we want to allow a cache clean for new deployments
//import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();

// commented because we want to allow a cache clean for new deployments
//registerServiceWorker(); // commented because we want to allow a cache clean
