const taskModel = require('../models/models.js');

module.exports = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await taskModel.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).send("Error fetching tasks");
        }
    },
    saveTask: async (req, res) => {
        try {
            await taskModel.createTask(req.body);
            res.sendStatus(201);
        } catch (error) {
            res.status(500).send("Error creating task");
        }
    },
    updateTask: async (req, res) => {
        try {
            await taskModel.updateTask(req.params.id, req.body);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send("Error updating task");
        }
    },
    deleteTask: async (req, res) => {
        try {
            await taskModel.deleteTask(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send("Error deleting task");
        }
    }
};