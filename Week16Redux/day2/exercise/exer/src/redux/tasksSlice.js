import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksByDay: {},
}



const tasksSlice = createSlice ({
    name: 'tasks',
    initialState,
    reducers: {
    addTask: (state, action) =>{
        const { day, task } = action.payload;
        if (!state.tasksByDay[day]) {
            state.tasksByDay[day] = []
        }
        state.tasksByDay[day].push(task)
        //checks if there is tasks for the day
        // if not, start with an empty array and after add the new task
    },
    editTask: (state, action) => {
        const { day, taskId, updatedTask } = action.payload;
        if (state.tasksByDay[day]) {
            state.tasksByDay[day] = state.tasksByDay[day].map((task, index)=>
            index === taskId ? updatedTask : task)
        }
        //check por a tasklist on a specific day, if there is, updated it with map
        //updateTask while the others remaing without changes.
    },
    deleteTask: (state, action ) => {
        const { day, taskId } = action.payload;
        if (state.tasksByDay[day]) {
            state.tasksByDay[day] = state.tasksByDay[day].filter((_, index) => index !== taskId);
        }
        //checks for a task on a specific day,, if there is, filter the task annd delete it,
        // and keep all the rest
    }
    }
})

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;