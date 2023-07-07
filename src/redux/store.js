import { combineReducers, configureStore } from '@reduxjs/toolkit';
import statusSlice from './status.slice';
import projectsSlice from './projects.slice';

const rootReducer = combineReducers({
  status: statusSlice,
  projects: projectsSlice,
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
