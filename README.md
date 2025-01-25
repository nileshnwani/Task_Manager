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
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Task_Manager.git
   cd Task_Manager
2. **Backend Setup**
   Navigate to `backend/`, install dependencies, and configure `.env`:

   ```bash
   cd backend
   npm install

   Example .env file:
   '''bash
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000

   Start the server:
   '''bash
   npm start

3. **Frontend Setup:**
  Navigate to frontend/, install dependencies, and update Api.js with the backend URL:
   '''bash
     cd ../frontend
     npm install

  Start the React app:
   '''bash
     npm start

4. **Access the App:** Open http://localhost:3000 in your browser.

## API Endpoints
**GET /tasks:** Fetch all tasks.
**POST /tasks:** Add a task.
**PUT /tasks/:id:** Update task status.
**DELETE /tasks/:id:** Delete a task.

## Project Structure
**Backend:** Controllers, routes, and models for API.
**Frontend:** React components for task list, add form, etc.

![image_alt](https://github.com/nileshnwani/contact-form-app/blob/66ab105b0eeddbbcdf499f46951dedc2d57d9d7e/image.png)
