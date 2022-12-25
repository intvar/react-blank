import { configureStore } from '@reduxjs/toolkit';
import reducer from './ducks';

const store = configureStore({
  reducer,
});
export default store;
