import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './state/slice'

const TaskInput = (props) => {
    const inputRef = useRef();
    const dispatch = useDispatch()

    const addTask = () => {
        const value = inputRef.current?.value.trim();
        if (value === '') return;
        dispatch(add(value));
        inputRef.current.value = '';
        };

    return(
        <>
            <input ref={inputRef} placeholder='Add Task...'/>
            <button onClick={() => addTask()}>Add Task</button>
        </>
    )
}

export default TaskInput