import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
