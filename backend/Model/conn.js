const  mongoose = require("mongoose")
//import mongoose from 'mongoose';
const dotenv=require("dotenv");
dotenv.config();
const dbpath = process.env.DB_URL

mongoose.
connect(dbpath)
.then(()=>
{
    console.log("Database Connceted");
})
.catch((err)=>
{
    console.log(err);
})