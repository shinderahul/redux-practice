import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(allReducers);

ReactDOM.render(<h2>Hello World</h2>, document.getElementById('root'));
registerServiceWorker();
