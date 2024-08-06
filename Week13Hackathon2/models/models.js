const db = require('../config/config.js'); 

module.exports = {
    getAllTasks: async () => {
        try {
            const tasks = await db.select('*').from('tasks');
            return tasks;
        } catch (error) {
            console.error("Error fetching tasks:", error);
            throw error;
        }
    },
    createTask: async (task) => {
        try {
            const { name, email, age, feeling, goal, exerciseFrequency, activityType } = task;
            await db('tasks').insert({ name, email, age, feeling, goal, exercise_frequency: exerciseFrequency, activity_type: activityType });
        } catch (error) {
            console.error("Error creating task:", error);
            throw error;
        }
    },
    updateTask: async (id, task) => {
        try {
            const { name, email, age, feeling, goal, exerciseFrequency, activityType } = task;
            await db('tasks').where({ id }).update({ name, email, age, feeling, goal, exercise_frequency: exerciseFrequency, activity_type: activityType });
        } catch (error) {
            console.error("Error updating task:", error);
            throw error;
        }
    },
    deleteTask: async (id) => {
        try {
            await db('tasks').where({ id }).del();
        } catch (error) {
            console.error("Error deleting task:", error);
            throw error;
        }
    }
};