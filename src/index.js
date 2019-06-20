import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
//
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
// serviceWorker.register();
