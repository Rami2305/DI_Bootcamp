import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import  store  from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />

    </Provider>  
  </StrictMode>,
)
