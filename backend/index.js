//libraries
import express, { json } from "express";
import dotenv from 'dotenv';
import cors from 'cors';

//files
import db from "./config/db.js"; //import db
import tareaRoutes from './routes/tareaRoutes.js'; //import tarea routes

//variables
const app = express(); //instancing express
dotenv.config(); //using enviroment variables
app.use(cors());
app.use(json()); //using json 
const port = process.env.PORT || 3000; //indicating port

//db connection
try {
    await db.authenticate();
    await db.sync();
    console.log('Connection to db has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use('/api/tareas', tareaRoutes); //using tarea routes

//listening app
app.listen(port, () => {
    console.log(`App being listened on port: ${port}`);
})
