import { useReducer, useRef, createContext } from 'react'
import TasksList from './component/TasksList'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

export  const TaskContext = createContext();

const initialState = {
  tasks: [],
  active: true,
}
/** action constant types */
const ADD_TASK = 'add_task';
export const REMOVE_TASK = 'remove_task';


const taskReducer = (state, action) => {
  console.log(action)
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks]
    newTasks.push({id: uuidv4(), name: action.payload, active: true})
    return {...state, tasks: newTasks }
  } else if (
    action.type === REMOVE_TASK) {
      const filteredTasks = state.tasks.filter(item => item.id != action.id)
      return {...state, tasks: filteredTasks}
    } 
  return state
}


function App() {

  const [state, dispatch] = useReducer(taskReducer, initialState);
  console.log(state);

  const taskInputRef = useRef(); 

  const addTask = () => {
    const value = taskInputRef.current.value;
    dispatch({type: ADD_TASK, payload: value})
  }

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
     <h2>Tasks Manager</h2>
     <input placeholder='Add Task...' ref={taskInputRef} />
     <button onClick={()=>addTask()}>Add Task</button>
     <TasksList />
    </TaskContext.Provider>
  )
}

export default App
