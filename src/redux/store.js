import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  statusSlice from './status.slice';

const rootReducer = combineReducers({
status:  statusSlice
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
