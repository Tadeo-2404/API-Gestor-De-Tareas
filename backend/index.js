//libraries
import express, { json } from "express";

//variables
const app = express(); //instancing express
app.use(json()); //using json 
const port = process.env.PORT || 3000; //indicating port

//entry point
app.get('/', (req, res) => {
    res.json({msg: 'hello wolrd'});
})

//listening app
app.listen(port, () => {
    console.log(`App being listened on port: ${port}`);
})
