import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './ducks';


export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
