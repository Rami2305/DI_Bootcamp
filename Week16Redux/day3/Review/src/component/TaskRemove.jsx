import { useContext } from "react";
import { REMOVE_TASK, TaskContext } from "../App";


const TaskRemove = ({ id }) => {
    const { dispatch }= useContext(TaskContext);

    const removeTask = () => {
        dispatch({type: REMOVE_TASK, id})
    }
    return (
        <>
            <button onClick={()=>removeTask()}> - </button>
        </>
    )
}

export default TaskRemove