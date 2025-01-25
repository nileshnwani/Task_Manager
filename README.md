# Task Manager

A simple **Task Manager** app built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) for managing tasks with features like add, update status, and delete tasks.

## Features
- Add new tasks with descriptions.
- Update task status (`Pending` or `Done`).
- Delete tasks.
- Responsive design with animations.

## Tech Stack
- **Frontend**: React.js, Bootstrap, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose

## Setup Instructions
1. **Clone the Repository**:<br>
   ```bash
   git clone https://github.com/your-username/Task_Manager.git
   cd Task_Manager
2. **Backend Setup**<br> 
      Navigate to `backend/`, install dependencies, and configure `.env`: <br>
      ```bash
      cd backend
      npm install
      
     Example .env file:
      MONGO_URI=<your_mongodb_connection_string>
      PORT=5000

     Start the server:
      npm start

4. **Frontend Setup:**<br>
  Navigate to frontend/, install dependencies, and update Api.js with the backend URL:<br>
   ```bash
   cd ../frontend
   npm install

   
   Start the React app:
   npm start

4. **Access the App:** Open http://localhost:3000 in your browser.

## API Endpoints
**GET /tasks:** Fetch all tasks. <br> <br>
**POST /tasks:** Add a task. <br> <br>
**PUT /tasks/:id:** Update task status. <br> <br>
**DELETE /tasks/:id:** Delete a task.

## Project Structure
**Backend:** Controllers, routes, and models for API. <br> <br>
**Frontend:** React components for task list, add form, etc.

![image_alt](https://github.com/nileshnwani/Task_Manager/blob/02915fb98defac25fe2f9cbc4e8ccfe1e7908d6f/Output.png)
