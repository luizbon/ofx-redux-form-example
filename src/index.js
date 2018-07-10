import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
