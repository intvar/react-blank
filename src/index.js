import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import HelloWorld from './helloWorld';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('root')
);
