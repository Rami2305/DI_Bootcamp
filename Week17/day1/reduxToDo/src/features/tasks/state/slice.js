import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
};

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        // add task
        add: (state, action) => {
            state.tasks.push({
                id:nanoid(), 
                task:action.payload, 
                active: true, datetime: 
                Date.now()})
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        clear: (state) => {
            state.tasks = []
        },
        // set active to true or false
        active: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.active = !task.active;
            }

        }
    }
})

export const { add, remove, clear, active } = tasksSlice.actions;
export default tasksSlice.reducer