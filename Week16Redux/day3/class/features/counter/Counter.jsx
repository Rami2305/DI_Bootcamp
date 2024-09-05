import { useSelector, useDispatch } from "react-redux"
import React, { useRef } from 'react';

import { increment, decrement, reset, incrementByNumber, incrementTwoNumbers } from './counterSlice'

const Counter = (props) => {
    const count = useSelector(state => state.counterReducer.count)

    const dispatch = useDispatch()

    const numRef = useRef();
    const numRef1 = useRef();
    const numRef2 = useRef();

    const addTwoNum = () => {
        const num1 = Number(numRef1.current.value)
        const num2 = Number(numRef2.current.value);
        dispatch(incrementTwoNumbers([num1, num2]))
    }
    const addNum = () => {
        const num = numRef.current.value;
        dispatch(incrementByNumber(Number(num)));
    
    }
    return (
        <div>
            <div>
                <button onClick={()=> dispatch(increment())}> + </button>
                Count: {count}
                <button onClick={()=> dispatch(decrement())}> - </button>
                <button onClick={()=> dispatch(reset())}> Reset </button>
            </div>,
            <div>
                <h2>Increment by Number</h2>
                <input ref={numRef}/>
                <button onClick={addNum}>Add Number</button>
            </div>
            <div>
                <h2>Increment Two Numbers</h2>
                <input ref={numRef2}/>
                <input ref={numRef1}/>
                <button onClick={() => addTwoNum()}>Add Number</button>
            </div>
        </div>
    )
}

export default Counter