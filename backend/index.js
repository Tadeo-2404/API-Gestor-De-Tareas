//libraries
import express, { json } from "express";
import dotenv from 'dotenv';

//files
import db from "./config/db.js";

//variables
const app = express(); //instancing express
dotenv.config(); //using enviroment variables
app.use(json()); //using json 
const port = process.env.PORT || 3000; //indicating port

//db connection
try {
    await db.authenticate();
    console.log('Connection to db has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

//entry point
app.get('/', (req, res) => {
    res.json({msg: 'hello wolrd'});
})

//listening app
app.listen(port, () => {
    console.log(`App being listened on port: ${port}`);
})
