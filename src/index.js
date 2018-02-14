import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './createStore';

function HelloWorld() {
  return <div>Hello world!</div>;
}


ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('root')
);
