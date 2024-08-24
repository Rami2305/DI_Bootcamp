import { useReducer, useState } from 'react'

export const initialState = {
  count: 0,
  text: 'ramiro'
}
/** @param
 * state - initialState
 * action- { its an object}
 */
export const counterReducer = (state, action) => {
  console.log(action);
  if ( action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1}
  } else if ( action.type === 'DECREMENT'
  ) { return { ...state, count: state.count - 1}}
  else if ( action.type === 'ADD_NUM'
  ) { return { ...state, count: state.count = action.payload + action.numtoadd }}
  return state;
}
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  /**@param function reducer (its going to change my state), 
   * the second param is state and we call it initialState */
  const [statecounter, dispatcounter] = useReducer(counterReducer,initialState); 
  
  
  return (
    <>
      <div>
        <h2>useState</h2>
        <button onClick={() => setCount ((prev) => prev + 1)}> + </button>
        {count}
        <button onClick={() => setCount ((prev) => prev - 1)}> - </button>
        <h2>useReducer</h2>
        <button onClick={() => dispatcounter ({type: 'INCREMENT'})}> + </button>
        {statecounter.count}
        <button onClick={() => dispatcounter ({type: 'DECREMENT'})}> - </button>
        <button onClick={() => dispatcounter ({type: 'ADD_NUM', payload: 56, numtoadd: 156})}> + </button>
        {''}
        Add 2{''}
      </div>
      {statecounter.text}
    </>
  )
}

export default App
