import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState, //this is mandatory to write
    reducers: {
        //conter/increment
        increment: (state) => {
            state.count += 1;
         },
         //counter/decrement
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByNumber: (state, action) => {
            state.count += action.payload;
        },
        incrementTwoNumbers:  (state, action) => {
            const result = action.payload[0] + action.payload[1]
            // console.log(result)
            state.count = state.count + result
        } 
        } //this is the action that we are going to call
})

export const { increment, decrement, reset, incrementByNumber, incrementTwoNumbers} = counterSlice.actions;
export default counterSlice.reducer;


//redux desktool complement