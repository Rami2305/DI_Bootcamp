import TasksList from './TaskList'
import TaskInput from './taskInput'

const Tasks = (props) => {
   return (
   <>
   <h2>Tasks</h2>
   <TaskInput />
   <TasksList/>
   </>)
}

export default Tasks