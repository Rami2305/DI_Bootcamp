const express = require('express');

const tasksController = require('../controllers/controllers.js');

const router = express.Router();

router.get("/", tasksController.getAllTasks);

//read one task
// router.get("/:id", tasksController.getTask);

//create
router.post("/", tasksController.saveTask);

// update
router.put("/:id", tasksController.updateTask);

//delete
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
