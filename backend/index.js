/*import express from "express";
import dotenv from "dotenv";
import "./Model/conn.js";
import TaskRouter from "./Routes/TaskRouter.js";
import cors from "cors";
*/
const express=require("express");
const dotenv=require("dotenv");
require("./Model/conn.js");
const TaskRouter=require("./Routes/TaskRouter.js");
const cors=require("cors")
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Built-in body parser
//app.use(cors());
app.use(
  cors({
    origin:'https://task-manager-ui-lac.vercel.app/', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
app.options('*', cors()); // Enable preflight requests for all routes

// Routes
app.get("/", (req, res) => {
    res.send("SERVER START");
});

app.use("/tasks", TaskRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start Server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});

// Graceful Shutdown
process.on("SIGINT", () => {
    console.log("Server shutting down...");
    process.exit();
});
