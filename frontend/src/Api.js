const API_URL = "https://task-manager-api-mu-five.vercel.app"; // Backend API URL

// Function to create a new task
export const CreateTask = async (taskData) => {
  const url = `${API_URL}/tasks`; // API endpoint for creating tasks

  const options = {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Sending JSON data
    },
    body: JSON.stringify(taskData), // Convert task data to JSON string
  };

  try {
    const response = await fetch(url, options);
    // Check if the response status is OK (status 200-299)
    if (!response.ok) {
      throw new Error("Failed to create task"); // Handle error
    }

    const result = await response; // Parse successful response
    const data = "Task Created";
    return data; // Return the response to the caller
  } catch (error) {
    return error; // Return error to the caller
  }
};

// Fetch all tasks
export const FetchTask = async () => {
  const url = `${API_URL}/tasks`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const result = await response.json(); // Parse the JSON response
    return result; // Return the fetched tasks
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; // Return an empty array in case of an error
  }
};

// Delete task
export const DeleteTask = async (itemId) => {
  const url = `${API_URL}/tasks/${itemId}`; // API endpoint to delete the task by its ID

  const options = {
    method: "DELETE", // HTTP method for deleting
    headers: {
      "Content-Type": "application/json", // Sending JSON data
    },
  };

  try {
    const response = await fetch(url, options); // Send DELETE request
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    const result = await response.json(); // Parse the JSON response
    return result; // Return result after successful deletion
  } catch (error) {
    console.error("Error deleting task:", error);
    return { error: "Error deleting task" }; // Return an error object if deletion fails
  }
};

// Update task
export const UpdateTask = async (itemId, updatedData) => {
  const url = `${API_URL}/tasks/${itemId}`; // API endpoint to update the task by its ID
console.log(url);
  const options = {
    method: "PUT", // HTTP method for updating
    headers: {
      "Content-Type": "application/json", // Sending JSON data
    },
    body: JSON.stringify(updatedData), // Convert updated task data to JSON string
  };

  try {
    const response = await fetch(url, options); // Send PUT request
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    const result = await response.json(); // Parse the JSON response
    return result; // Return updated task data
  } catch (error) {
    console.error("Error updating task:", error);
    return { error: "Error updating task" }; // Return an error object if update fails
  }
};
