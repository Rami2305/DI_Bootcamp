import { configureStore } from "@reduxjs/toolkit";

import counterReducer, { incrementBy2Nums, incrementByNum } from "../features/counter/counterSlice";
import usersReducer from "../users/usersSlice";
import { useDeferredValue } from "react";


const store = configureStore({
  reducer: {
    counterReducer,
    usersReducer,
  },
  // middleware:(getdefaultmiddleware) => {
  //   console.log(getdefaultmiddleware());
  //   return getdefaultmiddleware()
  // }
});

// const delayIncrement = (dispatch, getState)=> {
//   setTimeout(() => {
//     dispatch(incrementByNum(5))
//   }, 5000)
// }

// console.log('store=>', store);

// store.dispatch(delayIncrement)

export default store;
