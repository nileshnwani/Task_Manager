const Task = require("../Model/taskschema.js");

// Create Task
// Create Task
exports.CreateTask = async (req, res) => {
  const data = req.body; // Get the task data from the request body
  console.log("Incoming Task Data:", data);

  try {
    // Create a new task model instance with the incoming data
    const model = new Task(data);

    // Save the task to the database
    const newTask = await model.save();

    console.log("Task Created:", newTask);

    // Respond with a success message and the newly created task in JSON format
    res.status(201).send("Task Created Successfully");
  } catch (err) {
    console.error("Error creating task:", err);

    // Respond with a 500 error and a meaningful error message
    res.status(500).send("An error occurred while creating the task");
  }
};


// Fetch All Tasks  # no need to create new model for the fetch
exports.AllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    console.log("All Tasks are:", allTasks);
    res.status(200).send(allTasks);
    } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("An error occurred while fetching tasks");
  }
};

// update
exports.UpdateTask = async (req, res) => {
  try {
    const id = req.params.id;  // Use req.params.id
    console.log(id);  // To log the task ID for debugging
    const data = { $set: req.body };  // Data to update
    
    
    const modelUpdate = await Task.findByIdAndUpdate(id, data, { new: true }); // Use the correct ID and 'new: true'
    console.log("Updated Task:", modelUpdate);
    
    if (!modelUpdate) {
      return res.status(404).send("Task not found");
    }
    
    res.status(200).json(modelUpdate); // Return the updated task
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).send("An error occurred while updating task");
  }
};


// Fetch All Tasks  # no need to create new model for the fetch
exports.DeleteTask = async (req, res) => {
  try {
    const id=req.params.id;
    const DelTask = await Task.findByIdAndDelete(id);
    console.log("Daleted Tasks:", DelTask);
    res.status(200).json("deleted successfully"); // Return the list of tasks
  } catch (err) {
    console.error("Error dalete tasks:", err);
    res.status(500).send("An error occurred while delete task");
  }
};