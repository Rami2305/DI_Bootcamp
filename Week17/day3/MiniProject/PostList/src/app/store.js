import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/state/postsSlice';
import usersReducer from '../users/state/usersSlice';


export const appReducer = combineReducers({
  postsReducer,
  usersReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
