import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
import { thunk } from 'redux-thunk'; // Importa thunk

const store = configureStore({
  reducer: {
    data: dataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>; // Asegúrate de exportar RootState
export type AppDispatch = typeof store.dispatch;

export default store;