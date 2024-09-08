import { configureStore, combineReducers } from '@reduxjs/toolkit'

import tasksReducer from '../features/tasks/state/slice.js'

const combineReducerApp = combineReducers({ tasksReducer });

const store = configureStore({
    reducer: combineReducerApp,
})

export default store
