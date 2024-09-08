import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(-10)
    }, 5000)
  })
})



export const counterSlice = createSlice({
  name: "counter", // "counter/increment"
  initialState,
  reducers: {
    // counter/increment
    increment: (state, action) => {
      state.count += 1;
    },
    // counter/decrement
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNum: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
    incrementBy2Nums: (state, action) => {
      console.log(action);
      state.count += action.payload.num1 + action.payload.num2;
    },
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(paramr1, paramr2) {
        return { payload: paramr1 + paramr2 };
      },
    },
    // delayIncrement: (state) => {
    //   setTimeout(()=> {
    //     state.count += 5;
    //   }, 2000)
    // }
  },
  extraReducers(builder) {
    builder 
      .addCase(delayIncrementThunk.fulfilled, (state, action)=> {
        state.count += action.payload
      })
      .addCase(delayIncrementThunk.rejected, (state, action) => {
        console.log(action);
        state.count += Number(action.error.message)
      })
  }
});

export const {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
  // delayIncrement
} = counterSlice.actions;
export default counterSlice.reducer;
