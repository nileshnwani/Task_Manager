import { useState, useEffect } from "react";
import { CreateTask, FetchTask, DeleteTask, UpdateTask } from "./Api";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskManager() {
  const [formdata, setformdata] = useState({
    name: "",
    isDone: false,
  });
  const [tasks, settasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [selectedTask, setSelectedTask] = useState(null); // For storing selected task data

  // Handle input change for task name and isDone status
  const handleAddTask = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch tasks when the component is mounted
 useEffect(() => {
  const fetchTasks = async () => {
    try {
      const result = await FetchTask(); // Call the FetchTask function
      
      // Ensure result is an array
      if (Array.isArray(result)) {
        settasks(result);
      } else {
        settasks([]); // Set to empty array if result is invalid
        console.error("Invalid task data:", result);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      settasks([]); // Set empty array on error
    }
  };

  fetchTasks(); // Execute the fetchTasks function
}, []);

  // Handle task submission (create new task)
// Handle task submission (create new task)
const handleAddSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await CreateTask(formdata); // Call API to create task
    alert(data); // Show success message
    
    if (data === "Task Created") {
      // Fetch the updated list of tasks
      const updatedTasks = await FetchTask(); // Re-fetch all tasks
      if (Array.isArray(updatedTasks)) {
        settasks(updatedTasks); // Update state with new task list
      } else {
        console.error("Failed to fetch updated tasks.");
      }
      setformdata(""); // Clear input field after task creation

    }
  } catch (error) {
    console.error("Error creating task:", error);
  }
};


  // Handle delete task action
  const handleDelete = async (itemId) => {
    const delresult = await DeleteTask(itemId); // Call delete function
    alert(delresult);
    if (delresult === "deleted successfully") {
      settasks(tasks.filter((task) => task._id !== itemId)); // Remove deleted task from the state
    }
  };

  // Handle edit task (open modal and set selected task)
  const handleEdit = (item) => {
    setSelectedTask(item); // Set selected task data to state
    setIsModalOpen(true); // Open the modal
  };

  // Handle update task action
  const handleUpdate = async () => {
    const updatedData = { ...selectedTask }; // Get the updated data
    const result = await UpdateTask(selectedTask._id, updatedData);
    if (result) {
      // If update is successful, close the modal and update the task in the state
      setIsModalOpen(false);
      settasks(tasks.map((task) =>
        task._id === selectedTask._id ? result : task
      ));
    }
  };

  return (
    <div className="container mt-5">
      <form className="p-4 border rounded bg-light shadow">
        <h3 className="text-center mb-4">Task Manager</h3>

        {/* Input for Task */}
        <div className="mb-3">
          <label htmlFor="taskInput" className="form-label">
            Enter Task
          </label>
          <input
            name="name"
            type="text"
            id="taskInput"
            className="form-control"
            value={formdata.name || ""}
                        placeholder="Add your task here"
            onChange={handleAddTask}
          />
        </div>

        {/* Add Button */}
        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleAddSubmit}>
            Add Task
          </button>
        </div>

        <hr className="my-4" />

        {/* Existing Task Section */}
        {tasks.map((item) => (
          <div
            key={item._id}
            className="task-item p-3 bg-white border rounded shadow-sm d-flex align-items-center justify-content-between"
          >
            <div className="flex-grow-1 me-3 d-flex align-items-center">
              <label
                htmlFor="existingTask"
                className="form-label visually-hidden"
              >
                Existing Task
              </label>

              <input
                type="text"
                id={item._id}
                className="form-control me-2"
                value={item.name}
                disabled
              />

              {/* Toggle Button for True/False */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${item._id}`}
                  checked={item.isDone} // Assuming item.isDone is boolean
                  disabled
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox-${item._id}`}
                >
                  {item.isDone ? "Done" : "Pending"}
                </label>
              </div>
            </div>

            {/* Edit Button */}
            <button
              type="button"
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(item)} // Trigger edit modal with task data
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(item._id)} // Pass item._id to the delete handler
            >
              Delete
            </button>
          </div>
        ))}
      </form>

      {/* Edit Task Modal */}
      {isModalOpen && selectedTask && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)} // Close modal
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="taskName" className="form-label">
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    className="form-control"
                    value={selectedTask.name}
                    onChange={(e) => setSelectedTask({ ...selectedTask, name: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Task Status</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isDone"
                      id="isDoneTrue"
                      checked={selectedTask.isDone === true}
                      onChange={() => setSelectedTask({ ...selectedTask, isDone: true })}
                    />
                    <label className="form-check-label" htmlFor="isDoneTrue">
                      Done
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isDone"
                      id="isDoneFalse"
                      checked={selectedTask.isDone === false}
                      onChange={() => setSelectedTask({ ...selectedTask, isDone: false })}
                    />
                    <label className="form-check-label" htmlFor="isDoneFalse">
                      Pending
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)} // Close modal
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate} // Update task
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
