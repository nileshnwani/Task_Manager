const { CreateTask, AllTasks, UpdateTask, DeleteTask } = require("../Controller/Taskcontroller");
const express = require("express");
const router = express.Router();

// Routes
router.get("/", AllTasks);  // To get all tasks

router.post("/", CreateTask);  // To create a new task

router.put("/:id", UpdateTask);  // To update a task by ID

router.delete("/:id", DeleteTask);  // To delete a task by ID

// Export Router
module.exports = router;
