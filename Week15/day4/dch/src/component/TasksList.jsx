import { useContext } from 'react';
import { TaskContext } from '../App'

import TaskRemove from './TaskRemove'

const TasksList = (props) => {

    const { state } = useContext(TaskContext) 


    return(
        (
            <>
              {state.tasks.map((item) => {
                return (
                  <div key={item.id}>
                    {item.name}
                    <TaskRemove id={item.id}/>
                  </div>
                );
              })}
            </>
        )
    )    
}

export default TasksList