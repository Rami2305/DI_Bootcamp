const taskModel = require('../models/models.js');

module.exports = {
    getAllTasks: (req, res) => {
        const task = taskModel.readTaskJson();
        res.json(task);
    },
    saveTask: (req, res) => {
        const task = taskModel.readTaskJson();
        task.push(req.body);
        taskModel.writeTaskJson(task);
        res.sendStatus(201);
    },
    updateTask: (req, res) => {
        const task = taskModel.readTaskJson();
        const taskIndex = task.findIndex((task) => task.id === parseInt(req.params.id));
        task[taskIndex] = req.body;
        taskModel.writeTaskJson(task);
        res.sendStatus(200);
    },
    deleteTask: (req, res) => {
        const task = taskModel.readTaskJson();
        const taskIndex = task.findIndex((task) => task.id === parseInt(req.params.id));
        task.splice(taskIndex, 1);
        taskModel.writeTaskJson(task);
        res.sendStatus(200);
    }
};