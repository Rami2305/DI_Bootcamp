import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'
import { useCallback } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] =useState([])
  const add = () => {
    setCount((count) => count + 1)
  }
  // const addTask = ()=> {
  //   setTodos((tasks)=> [...tasks, 'newTasks'])
  // }

  const expensiveCalculation = () => {
    let num = 0;
    for (let i= 0; i < 10000000; i++) {
      num++
    }
    return num
  }

  const calc = useMemo(()=> {
    const calc = expensiveCalculation();
    console.log('useMemo', calc);
    return calc
  }, []);

  const addTask = useCallback(()=> {
    setTodos((tasks) => [...tasks, 'new task'])
  }, [todos])

  return (
    <>
      <div className='card'>
        <h3>count is {count}</h3>
        <button onClick={()=> add()}>add</button>
        <ToDo todos={todos} addTask={addTask}/>
      </div>
    </>
  )
}

export default App
